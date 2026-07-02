"use client"
import React, { useState } from "react";
import { AlertCircle, CheckCircle, Clock, ChevronDown, ChevronUp } from "lucide-react";

const PageSpeedAudit = () => {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(false); 
  const [expandedSection, setExpandedSection] = useState(null);
  const currDate = new Date();
  const formattedDate =  `${String(currDate.getDate()).padStart(2, "0")} ${currDate.toLocaleString("default", { month: "long" })} ${currDate.getFullYear()}`;
  const currTime = new Date().toLocaleTimeString();

  const fetchPageSpeedData = async (targetUrl) => {
    try {
      let formattedUrl = targetUrl;
      if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
        formattedUrl = `https://${formattedUrl}`;
      }
      if (!formattedUrl.includes("www.")) {
        formattedUrl = formattedUrl.replace("https://", "https://www.");
      }

      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

      const BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
      const categories = ["performance", "accessibility", "best-practices", "seo"];
      
      const requests = categories.map(category => 
        fetch(`${BASE_URL}?url=${encodeURIComponent(formattedUrl)}&key=${API_KEY}&strategy=mobile&category=${category}`)
          .then(res => res.json())
      );

      const responses = await Promise.all(requests);

      const scores = {
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0
      };

      // Process opportunities and diagnostics from the performance response
      const performanceResponse = responses[0].lighthouseResult;
      const audits = {
        opportunities: [],
        diagnostics: []
      };

      if (performanceResponse) {
        // Process opportunities
        const opportunities = performanceResponse.audits;
        const opportunityRefs = performanceResponse.categories?.performance?.auditRefs?.filter(
          ref => ref.group === "load-opportunities"
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
          ref => ref.group === "diagnostics"
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
        const lighthouse = response.lighthouseResult;
        
        if (lighthouse && lighthouse.categories) {
          const score = lighthouse.categories[category]?.score || 0;
          scores[category === "best-practices" ? "bestPractices" : category] = Math.round(score * 100);
        }
      });

      const loadingExperience = responses[0].loadingExperience || {};
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
      console.error("PageSpeed API Error:", error);
      let message = "Failed to analyze website.";
      
      if (!import.meta.env.VITE_GOOGLE_API_KEY) {
        message = "API key is missing. Please check your environment variables.";
      } else if (error.status === 400) {
        message = "Invalid request parameters. Please check the URL and try again.";
      } else if (error.status === 403) {
        message = "API key error. Please check your PageSpeed Insights API key permissions.";
      } else if (error.message?.includes("timeout")) {
        message = "Analysis timed out. The website might be too slow to respond.";
      }

      throw new Error(message);
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResults(null);
    setExpandedSection(null);

    try {
      const data = await fetchPageSpeedData(url);
      setResults(data);
      setIsAnalysisComplete(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "emerald";
    if (score >= 50) return "yellow";
    return "red";
  };

  const getImpactColor = (impact) => {
    switch (impact?.toLowerCase()) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-emerald-600";
      default: return "text-gray-600";
    }
  };

  const renderAuditItem = (item, index) => (
    <div key={index} className="border-b border-gray-200 py-4 last:border-b-0">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {item.score >= 0.9 ? (
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          {item.timing && (
            <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Potential savings: {item.timing}ms</span>
            </div>
          )}
        </div>
        <div className={`flex-shrink-0 ${getImpactColor(item.impact)}`}>
          <span className="text-sm font-medium">{item.impact}</span>
        </div>
      </div>
    </div>
  );

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
        {isAnalysisComplete && ( 
            <p className="text-2xl mb-10 font-times text-blue-950 sm:text-3xl">
              Report from {formattedDate}, {currTime}
            </p>
          )}
          
          <h1 className="text-3xl font-times text-gray-900 sm:text-4xl">
            PageSpeed Insights Analyzer
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Analyze your website&apos;s performance, accessibility, SEO, and best practices
          </p>
        </div>

        <form onSubmit={handleAnalyze} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., example.com)"
              className="flex-1 min-w-0 px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={loading || !url}
              className={`px-6 py-3 rounded-lg text-white font-medium ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } transition-colors duration-200`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                "Analyze"
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">{error}</div>
              </div>
            </div>
          </div>
        )}

        {results && (
          <div className="space-y-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Results for {results.url}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(results.scores).map(([key, score]) => (
                    <div key={key} className={`bg-${getScoreColor(score)}-50 rounded-lg p-4`}>
                      <h4 className="text-sm font-medium text-gray-500 uppercase">
                        {key === "bestPractices" ? "Best Practices" : key}
                      </h4>
                      <div className="mt-2 flex items-baseline">
                        <p className={`text-3xl font-semibold text-${getScoreColor(score)}-700`}>
                          {score}
                        </p>
                        <p className={`ml-1 text-${getScoreColor(score)}-600`}>/ 100</p>
                      </div>
                      <p className={`mt-1 text-sm text-${getScoreColor(score)}-600`}>
                        {score >= 90 ? "Good" : score >= 50 ? "Needs Improvement" : "Poor"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {results.fieldData && (Object.values(results.fieldData).some(value => value !== undefined)) && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Field Data
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {results.fieldData.firstContentfulPaint && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-500">
                          First Contentful Paint
                        </h4>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                          {(results.fieldData.firstContentfulPaint / 1000).toFixed(1)}s
                        </p>
                      </div>
                    )}
                    {results.fieldData.firstInputDelay && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-500">
                          First Input Delay
                        </h4>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                          {results.fieldData.firstInputDelay}ms
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {results.audits && (
              <div className="space-y-4">
                {["opportunities", "diagnostics"].map((sectionKey) => (
                  results.audits[sectionKey]?.length > 0 && (
                    <div key={sectionKey} className="bg-white shadow rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(sectionKey)}
                        className="w-full px-4 py-5 sm:p-6 flex justify-between items-center"
                      >
                        <h3 className="text-lg font-medium text-gray-900">
                          {sectionKey === "opportunities" ? "Opportunities" : "Diagnostics"}
                        </h3>
                        {expandedSection === sectionKey ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {expandedSection === sectionKey && (
                        <div className="px-4 pb-5 sm:px-6">
                          {results.audits[sectionKey].map((item, index) => renderAuditItem(item, index))}
                        </div>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSpeedAudit;