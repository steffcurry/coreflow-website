import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function Pricing() {
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
              Pricing Model
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing based on value delivered, not hourly rates or arbitrary packages.
          </p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              How We Price Projects
            </h2>
            <p className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">
              Every automation system is custom-designed for your specific workflows. Pricing is based on system complexity, integration requirements, and expected operational impact.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Project-Based',
                  description:
                    'Fixed pricing for defined automation systems with clear deliverables and timelines.',
                },
                {
                  title: 'Value-Aligned',
                  description:
                    'Pricing reflects the operational value and complexity of the system, not arbitrary hourly rates.',
                },
                {
                  title: 'Transparent',
                  description:
                    'Detailed breakdown of costs, timeline, and deliverables provided upfront after initial audit.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Complete workflow analysis and audit',
                  'Custom system architecture design',
                  'AI model configuration and training',
                  'Integration with existing tools and platforms',
                  'User interface and workflow design',
                  'Testing and quality assurance',
                  'Production deployment and configuration',
                  'Documentation and knowledge transfer',
                  'Initial optimization period',
                  'Technical support during deployment',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Pricing Factors
              </h2>
              <p className="text-gray-300 mb-6">
                The cost of an automation system depends on several factors:
              </p>
              <div className="space-y-4">
                {[
                  {
                    factor: 'System Complexity',
                    description:
                      'Number of workflows, decision points, and automation logic required.',
                  },
                  {
                    factor: 'Integration Requirements',
                    description:
                      'Number and complexity of existing tools and systems to integrate with.',
                  },
                  {
                    factor: 'Data Volume',
                    description:
                      'Amount of data processing, storage, and handling required.',
                  },
                  {
                    factor: 'Custom Components',
                    description:
                      'Need for custom interfaces, dashboards, or specialized features.',
                  },
                  {
                    factor: 'Timeline Requirements',
                    description:
                      'Expedited delivery may require additional resources and coordination.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.factor}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ongoing Support & Optimization
              </h2>
              <p className="text-gray-300 mb-6">
                Automation systems are treated as infrastructure, not one-off projects. Optional ongoing support includes:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Performance monitoring and optimization',
                  'System updates and improvements',
                  'Additional workflow automation',
                  'Integration with new tools',
                  'Priority technical support',
                  'Regular system health checks',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get a Custom Quote
            </h2>
            <p className="text-gray-300 mb-8">
              Request an automation audit to receive a detailed proposal with pricing tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Request an Automation Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
