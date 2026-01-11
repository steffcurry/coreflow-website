import { Link } from 'react-router-dom';
import { Search, Wrench, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Audit & Workflow Mapping',
      subtitle: 'Understanding, Not Selling',
      description:
        'We analyze your current workflows to identify bottlenecks, repetitive tasks, and automation opportunities.',
      icon: Search,
      features: [
        'Process documentation and analysis',
        'Identification of manual bottlenecks',
        'Assessment of existing tools and systems',
        'Definition of automation scope',
        'Clear documentation of findings',
      ],
    },
    {
      number: '2',
      title: 'Custom AI System Build',
      subtitle: 'Custom, Not Templated',
      description:
        'Systems are designed specifically for your workflows, integrating with your existing tools and processes.',
      icon: Wrench,
      features: [
        'Custom system architecture design',
        'Integration with existing platforms',
        'AI model configuration and training',
        'User interface and workflow design',
        'Testing and refinement',
      ],
    },
    {
      number: '3',
      title: 'Deployment & Optimization',
      subtitle: 'Stability, Not Dependence',
      description:
        'Systems are deployed to production and continuously monitored for performance, accuracy, and reliability.',
      icon: Rocket,
      features: [
        'Production deployment and configuration',
        'Performance monitoring and logging',
        'Ongoing accuracy assessment',
        'System refinement based on real usage',
        'Regular maintenance and updates',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A predictable process focused on understanding your workflows and delivering stable automation systems.
          </p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                          <Icon size={36} className="text-white" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-slate-900 border-2 border-cyan-400 rounded-lg flex items-center justify-center">
                          <span className="text-cyan-400 font-bold text-xl">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {step.title}
                      </h2>
                      <p className="text-cyan-400 font-semibold mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-400"
                          >
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-cyan-500/50 to-blue-500/50"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Reduce Fear, Increase Predictability
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our process is designed to provide clarity at every stage, from initial audit through ongoing optimization.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Start With an Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
