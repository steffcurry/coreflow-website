import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Phone,
  MessageCircle,
  UserCheck,
  Settings,
  Globe,
  Sparkles,
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'customer-support',
      icon: MessageSquare,
      title: 'AI Customer Support Systems',
      description:
        'AI systems that handle repetitive customer inquiries and route complex cases appropriately.',
      features: [
        'Automated responses to common questions',
        'Intelligent case routing based on complexity',
        'Integration with existing support platforms',
        'Escalation protocols for human intervention',
        'Knowledge base integration',
      ],
    },
    {
      id: 'voice-callers',
      icon: Phone,
      title: 'AI Voice Callers',
      description:
        'Automated voice systems for inbound and outbound calls, qualification, and confirmations.',
      features: [
        'Outbound call campaigns for lead qualification',
        'Inbound call handling and routing',
        'Appointment confirmations and reminders',
        'Information gathering and data capture',
        'Natural conversation flows',
      ],
    },
    {
      id: 'chat-agents',
      icon: MessageCircle,
      title: 'AI Chat Agents',
      description:
        'Intelligent chat agents for websites and internal use, guiding users through predefined workflows.',
      features: [
        'Website visitor engagement and qualification',
        'Internal employee support systems',
        'Guided workflow completion',
        'Information retrieval and delivery',
        'Multi-channel deployment',
      ],
    },
    {
      id: 'lead-qualification',
      icon: UserCheck,
      title: 'Lead Qualification & Appointment Automation',
      description:
        'End-to-end automation of lead screening, qualification, and meeting scheduling.',
      features: [
        'Automated lead screening criteria',
        'Multi-touch qualification sequences',
        'Calendar integration and scheduling',
        'Confirmation and reminder workflows',
        'CRM integration and data sync',
      ],
    },
    {
      id: 'operations',
      icon: Settings,
      title: 'Internal Operations Automation',
      description:
        'Automation of internal processes, task flows, data handling, and reporting.',
      features: [
        'Data entry and processing automation',
        'Cross-system workflow coordination',
        'Automated reporting and alerts',
        'Document processing and classification',
        'Task assignment and tracking',
      ],
    },
    {
      id: 'web-apps',
      icon: Globe,
      title: 'Custom Websites & Web Applications',
      description:
        'Purpose-built websites and internal tools designed to support automation workflows.',
      features: [
        'Custom dashboards and interfaces',
        'Workflow management tools',
        'Client portals and self-service systems',
        'Data visualization and reporting',
        'Integration with automation systems',
      ],
    },
    {
      id: 'custom',
      icon: Sparkles,
      title: 'Custom Automation Systems',
      description:
        'Bespoke automation solutions tailored to specific business processes across departments.',
      features: [
        'Process analysis and mapping',
        'Custom workflow design',
        'Department-specific automation',
        'Legacy system integration',
        'Scalable architecture design',
      ],
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
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Custom AI automation systems designed for your specific business workflows.
          </p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                id={solution.id}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-400"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your specific requirements and design a custom automation system for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
