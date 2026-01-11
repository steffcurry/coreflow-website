import { Link } from 'react-router-dom';
import { ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';

export default function Examples() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  const featuredDemos = [
    {
      title: 'Appointment Management AI Voice Caller System',
      videoUrl: 'https://youtu.be/EKn7EsF5Wic',
      problem:
        'Businesses spend significant time handling phone calls for appointment booking, updates, and cancellations, leading to missed calls, errors, and operational inefficiency.',
      system:
        'An AI-powered voice calling system that manages the entire appointment lifecycle, integrates with calendars, and escalates calls when needed.',
      result:
        'Automated 24/7 phone handling, elimination of double bookings, and improved customer experience with structured data capture and system integration.',
      features: [
        'Automated outbound calls to new leads within minutes',
        'Natural conversation flow for qualification questions',
        'Real-time calendar synchronization',
        'Automatic data entry and CRM updates',
        'Human handoff for complex scenarios',
        'Multi-language support capabilities',
      ],
    },
    {
      title: 'Appointment Management & Customer Support AI Chat-Agent System',
      videoUrl: 'https://youtu.be/_sY0JgB3S54',
      problem:
        'Law firms spend significant time handling messages for appointment booking, updates, and cancellations, leading to errors and operational inefficiency.',
      system:
        "An AI-powered chat-agent system that manages appointments, answers inquiries via a Knowledge Base, and automatically updates the firm's CRM with extracted case details.",
      result:
        'Reduced manual messaging, 24/7 appointment management, prevented double bookings, and improved customer experience with direct service and structured CRM data capture.',
      features: [
        'Natural language appointment booking and management',
        'Knowledge base integration for instant answers',
        'Automatic case detail extraction',
        'CRM synchronization',
        'Multi-channel support (website, messaging platforms)',
        'Conversation context retention',
      ],
    },
  ];

  const additionalDemos = [
    {
      title: 'Lead Qualification Voice System',
      problem: 'Sales team spending hours qualifying inbound leads manually',
      system: 'AI voice caller that handles initial lead qualification calls',
      result:
        'Automated qualification of leads with structured data capture and CRM integration',
    },
    {
      title: 'Customer Support Routing System',
      problem: 'Support requests being sent to wrong departments causing delays',
      system: 'AI chat system that classifies and routes support inquiries',
      result:
        'Accurate classification and routing of support requests with automated resolution for common issues',
    },
    {
      title: 'Appointment Confirmation System',
      problem: 'High no-show rates due to missed confirmations and reminders',
      system: 'Automated voice and SMS confirmation system',
      result:
        'Reduced no-show rates through automated confirmation and reminder workflows',
    },
    {
      title: 'Document Processing System',
      problem: 'Manual data entry from documents causing bottlenecks and errors',
      system: 'AI document processor with automated data extraction',
      result:
        'Automated extraction and entry of data from documents into business systems',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Demonstration Systems
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            The following are example systems created to demonstrate how AI automation can be applied to real business workflows.
          </p>
          <div className="inline-block bg-blue-950/30 border border-blue-500/30 rounded-lg px-6 py-3">
            <p className="text-sm text-gray-400">
              We don't ask you to believe us. We show you working systems.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Demo Systems
          </h2>
          <div className="space-y-8">
            {featuredDemos.map((demo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                    Featured Demo System
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {demo.title}
                </h3>
                <a
                  href={demo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 mb-8"
                >
                  <Play size={20} /> Watch Demo Video
                </a>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">
                      Problem
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {demo.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">
                      System Built
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {demo.system}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">
                      Result
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {demo.result}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">
                      System Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {demo.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-cyan-400 mt-1">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Additional Example Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalDemos.map((demo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() =>
                  setSelectedDemo(selectedDemo === index ? null : index)
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-800 text-gray-400 rounded-full text-xs font-semibold border border-gray-700">
                    Demo System
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {demo.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-2">
                      Problem
                    </h4>
                    <p className="text-gray-400 text-sm">{demo.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-2">
                      System Built
                    </h4>
                    <p className="text-gray-400 text-sm">{demo.system}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-2">
                      Result
                    </h4>
                    <p className="text-gray-400 text-sm">{demo.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Automation System?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your automation needs and create a custom system for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Discuss Your Automation Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
