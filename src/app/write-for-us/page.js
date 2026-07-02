import React from 'react';
import { 
  PenTool, 
  Users, 
  Link, 
  Trophy, 
  Eye, 
  Share2, 
  CheckCircle, 
  Mail, 
  FileText, 
  Target,
  Lightbulb,
  TrendingUp,
  Search,
  Smartphone,
  Globe,
  MessageSquare,
  Bot,
  Briefcase,
  Award,
  BarChart
} from 'lucide-react';

export default function WriteForUs() {
  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visibility',
      description: 'Your work will be seen by our community of marketers, startups, and business owners.'
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: 'Do-Follow Links',
      description: 'You can include up to two relevant backlinks to your site, blog, or social profile.'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Credibility',
      description: 'Be featured by a top digital marketing agency in Delhi with strong search visibility.'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Social Promotion',
      description: 'We promote your article across our social channels to reach a broader audience.'
    }
  ];

  const topics = [
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Digital Marketing Strategies' },
    { icon: <Search className="w-5 h-5" />, text: 'SEO (on-page, off-page, or local SEO)' },
    { icon: <Smartphone className="w-5 h-5" />, text: 'Social Media Trends' },
    { icon: <Target className="w-5 h-5" />, text: 'Google or Meta Ad Campaigns' },
    { icon: <Globe className="w-5 h-5" />, text: 'Website Optimization' },
    { icon: <MessageSquare className="w-5 h-5" />, text: 'Email Marketing Tactics' },
    { icon: <Bot className="w-5 h-5" />, text: 'AI Tools in Marketing' },
    { icon: <Briefcase className="w-5 h-5" />, text: 'Freelancing in the Digital Space' },
    { icon: <Award className="w-5 h-5" />, text: 'Branding Tips for Small Businesses' },
    { icon: <BarChart className="w-5 h-5" />, text: 'Marketing Case Studies or Success Stories' }
  ];

  const guidelines = [
    'Original writing (not copied, not AI-spun)',
    'At least 1,000 words',
    'Use headings and subheadings, short paragraphs, and lists',
    'Include real examples, tips, or data if possible',
    'Avoid sales pitches—focus on value, not self-promotion',
    'You may include 1-2 links to your own site if relevant'
  ];

  const rules = [
    'No AI-written or spun content — we run manual and software checks',
    'No plagiarized material',
    'No links to shady websites or affiliate-heavy content',
    'We might edit your article lightly for grammar and clarity'
  ];

  const keywords = [
    'digital marketing blog write for us',
    'guest post for marketing',
    'write for us SEO',
    'submit guest post India',
    'digital marketing agency South Delhi'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-950">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <PenTool className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Guest Contributions Welcome</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Write for <span className="text-blue-300">US</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              -Become a Contributor at <span className="text-blue-300">Hitman Digital</span>
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Got something meaningful to say about digital marketing? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:writeforus@hitmandigital.in"
                className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Submit Your Pitch
              </a>
           
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20">
                <FileText className="w-5 h-5" />
                Read Guidelines
              </button>
             
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Community Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At <strong>Hitman Digital</strong>, we&apos;re not just a digital marketing agency, we&apos;re a growing community of thinkers and storytellers. If you&apos;ve had real-world experience in SEO, social media, paid ads, branding, or anything else in the marketing space, this is your chance to be featured.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Topics You Can Write About
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We accept practical, well-thought-out articles on these topics and more:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {topic.icon}
                </div>
                <span className="text-gray-800 font-medium">{topic.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-6 inline-block">
              <Lightbulb className="w-5 h-5 inline mr-2 text-blue-500" />
              Have another topic in mind? Send it our way.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Makes a Good Article?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re not looking for fluff or recycled content. Here&apos;s what we expect:
              </p>
              <div className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{guideline}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-100 rounded-2xl border border-blue-200">
                <p className="text-blue-800 font-medium">
                  💡 Write as if you&apos;re explaining it to a smart friend who&apos;s new to the topic. That&apos;s the tone we like.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Submit</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Send Your Pitch</p>
                    <p className="text-gray-600">Email your topic idea to <strong>writeforus@hitmandigital.in</strong></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Submit Draft</p>
                    <p className="text-gray-600">If approved, send your draft in Google Docs or Word format</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Get Published</p>
                    <p className="text-gray-600">Once approved, we&apos;ll schedule your article for publishing</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Author Bio:</strong> Include a 60-word max bio (optional)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            A Few Important Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <span className="text-red-800 font-medium">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keywords Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Keywords You Help Us Rank For
            </h2>
            <p className="text-xl text-blue-200">
              By writing for us, your content will be part of pages optimized for:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {keywords.map((keyword, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 font-medium">
                &quot;{keyword}&quot;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white  py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto">
            If you&apos;ve got genuine experience or a story to share in the digital world, Hitman Digital is the right platform for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:writeforus@hitmandigital.in?subject=Guest Post Pitch"
              className="inline-flex items-center gap-3 bg-blue-400 hover:bg-blue-300 text-gray-800 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <Mail className="w-6 h-6" />
              writeforus@hitmandigital.in
            </a>
         
          </div>
          <p className="text-blue-950 mt-8 text-lg">
            We look forward to reading what you&apos;ve got.
          </p>
        </div>
      </div>
    </div>
  );
}