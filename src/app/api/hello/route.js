import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

export const fetchPageSpeedData = async (url) => {
  try {
    let formattedUrl = url;
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      if(formattedUrl==`https://${formattedUrl}`){
        formattedUrl=`${formattedUrl}`;
      }
      else{ 
      formattedUrl = `https://${formattedUrl}`;
      }
    }
    if (!formattedUrl.includes('www.')) {
      formattedUrl = formattedUrl.replace('https://', 'https://www.');
    }

    const categories = ['performance', 'accessibility', 'best-practices', 'seo'];
    
    const requests = categories.map(category => 
      axios.get(BASE_URL, {
        params: {
          url: formattedUrl,
          key: API_KEY,
          strategy: 'mobile',
          category: category 
        }
      })
    );

    const responses = await Promise.all(requests);

    const scores = {
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0
    };

    // Process opportunities and diagnostics from the performance response
    const performanceResponse = responses[0].data.lighthouseResult;
    const audits = {
      opportunities: [],
      diagnostics: []
    };

    if (performanceResponse) {
      // Process opportunities
      const opportunities = performanceResponse.audits;
      const opportunityRefs = performanceResponse.categories?.performance?.auditRefs?.filter(
        ref => ref.group === 'load-opportunities'
      ) || [];

      opportunityRefs.forEach(ref => {
        const audit = opportunities[ref.id];
        if (audit && audit.score !== null && audit.score < 1) {
          audits.opportunities.push({
            title: audit.title,
            description: audit.description,
            score: audit.score,
            impact: audit.displayValue,
            timing: audit.numericValue
          });
        }
      });

      // Process diagnostics
      const diagnosticRefs = performanceResponse.categories?.performance?.auditRefs?.filter(
        ref => ref.group === 'diagnostics'
      ) || [];

      diagnosticRefs.forEach(ref => {
        const audit = opportunities[ref.id];
        if (audit && audit.score !== null) {
          audits.diagnostics.push({
            title: audit.title,
            description: audit.description,
            score: audit.score,
            impact: audit.displayValue
          });
        }
      });
    }

    // Process scores
    responses.forEach((response, index) => {
      const category = categories[index];
      const lighthouse = response.data.lighthouseResult;
      
      if (lighthouse && lighthouse.categories) {
        const score = lighthouse.categories[category]?.score || 0;
        scores[category === 'best-practices' ? 'bestPractices' : category] = Math.round(score * 100);
      }
    });

    const loadingExperience = responses[0].data.loadingExperience || {};
    const fieldData = {
      firstContentfulPaint: loadingExperience.metrics?.FIRST_CONTENTFUL_PAINT_MS?.percentile,
      firstInputDelay: loadingExperience.metrics?.FIRST_INPUT_DELAY_MS?.percentile,
    };

    return {
      scores,
      fieldData,
      url: formattedUrl,
      audits
    };

  } catch (error) {
    console.error('PageSpeed API Error Details:', {
      message: error.message,
      response: {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      },
      request: {
        url: url,
        hasApiKey: !!API_KEY
      }
    });

    let message = 'Failed to analyze website.';
  }}