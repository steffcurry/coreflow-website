import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              AI Automation Is Becoming
            </span>
            <br />
            <span className="text-white">Operational Infrastructure.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Control It Early — Or Spend Years Catching Up.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            We design and deploy AI automation systems that replace fragile manual workflows with scalable operational infrastructure — across sales, support, and internal operations.
          </p>
          <p className="text-lg text-cyan-400 mb-12 font-medium">
            Your competitors are not "experimenting" anymore. They are systematizing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book a Demo <ArrowRight size={20} />
            </Link>
            <Link
              to="/examples"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
            >
              See Example Systems
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This Is Not About AI Hype
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Most businesses will not lose because they ignored AI. They will lose because they implemented it without structure.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              AI added on top of broken workflows does not create leverage — it creates hidden operational risk.
            </p>
            <p className="text-cyan-400 text-xl font-semibold">
              We don't sell tools. We design systems.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            The Real Bottleneck Isn't Your Team
          </h2>
          <p className="text-gray-300 text-lg mb-8 text-center max-w-3xl mx-auto">
            When performance breaks under growth, it's rarely a people problem. It's usually one of these:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Leads handled inconsistently',
              'Response times dependent on availability',
              'Manual handoffs between systems',
              'Knowledge trapped in individuals',
              'Processes that do not survive scale',
            ].map((issue, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-300">{issue}</p>
              </div>
            ))}
          </div>
          <p className="text-cyan-400 text-xl font-semibold text-center mt-12">
            Growth exposes weak systems.
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            What We Build
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Custom AI automation systems designed around real operational constraints — not templates.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'AI Customer Support Systems',
                desc: 'Structured AI handling repetitive inquiries with escalation logic for edge cases.',
                link: '/solutions#customer-support',
              },
              {
                title: 'AI Voice Callers',
                desc: 'Automated inbound and outbound calls for qualification, confirmations, and routing.',
                link: '/solutions#voice-callers',
              },
              {
                title: 'AI Chat Agents',
                desc: 'Controlled conversational agents that guide users through predefined workflows.',
                link: '/solutions#chat-agents',
              },
              {
                title: 'Lead Qualification & Appointment Automation',
                desc: 'End-to-end systems that filter, score, and schedule without human intervention.',
                link: '/solutions#lead-qualification',
              },
              {
                title: 'Internal Operations Automation',
                desc: 'Task flows, data handling, reporting, and cross-system synchronization.',
                link: '/solutions#operations',
              },
              {
                title: 'Custom Websites & Web Applications',
                desc: 'Purpose-built interfaces designed to support automation logic.',
                link: '/solutions#web-apps',
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Mistake Most Companies Will Make
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              They will adopt AI tactically instead of structurally.
            </p>
            <p className="text-gray-300 mb-4">That means:</p>
            <ul className="space-y-2 mb-6">
              {[
                'One chatbot here',
                'One automation there',
                'No unified logic',
                'No ownership',
                'No scalability',
              ].map((item, index) => (
                <li key={index} className="text-gray-400 flex items-start gap-2">
                  <span className="text-red-400 mt-1">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-red-400 text-xl font-semibold mb-6">
              Fragmented automation becomes technical debt.
            </p>
            <p className="text-cyan-400 text-xl font-semibold">
              We design systems that compound — not patch.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Audit & Workflow Mapping',
                desc: 'We analyze your workflows, identify bottlenecks, and define automation boundaries. Output: A clear system map and prioritized automation opportunities.',
              },
              {
                number: '2',
                title: 'Custom System Design',
                desc: 'We design AI systems around how your business actually operates. No templates. No generic stacks.',
              },
              {
                number: '3',
                title: 'Deployment & Optimization',
                desc: 'Systems are deployed, monitored, and improved based on real usage. Automation is treated as infrastructure — not a one-off project.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Request an Automation Audit <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why This Works
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            We don't ask you to trust claims. We show functioning systems.
          </p>
          <p className="text-gray-400 mb-8">Instead of "success stories", we provide:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Live example automations',
              'Clear system architecture',
              'Transparent process design',
              'Demonstrable logic, not promises with hype',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
              >
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
          <Link
            to="/examples"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
          >
            View Example Automations <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Who This Is For
          </h2>
          <p className="text-gray-300 text-lg mb-8 text-center">
            You'll benefit most if:
          </p>
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 space-y-4">
            {[
              'Your operations are growing faster than your systems',
              'Manual processes are slowing decisions',
              'Hiring feels like a temporary fix',
              'You want AI deployed with intent, not experimentation',
              'You value clarity over hype',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">—</span>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Automation Is a Strategic Decision
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              In the next 12–18 months, AI-driven operations will stop being a competitive edge. They will become baseline.
            </p>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              The question is whether you design your systems early — or inherit complexity later.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
            >
              Book a Demo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What exactly do you mean by "AI automation systems"?',
                a: 'We design structured systems where AI operates inside defined workflows. This includes decision logic, integrations, escalation rules, and monitoring — not standalone tools or chatbots.',
              },
              {
                q: 'Will this replace my team?',
                a: 'No. These systems replace manual steps, not people. The goal is to remove repetitive operational work so human effort is applied where judgment is required.',
              },
              {
                q: 'How is this different from using off-the-shelf automation tools?',
                a: 'Tools automate tasks. Systems automate outcomes. We design architecture that connects tools, data, and logic into a single operational flow.',
              },
              {
                q: 'How quickly can we see results?',
                a: 'Initial systems are typically deployed within weeks. Operational impact begins as soon as a system replaces a manual bottleneck.',
              },
              {
                q: 'Do we need to change our existing tools or software?',
                a: 'No. We design around your current stack whenever possible and only replace components when they limit scalability.',
              },
              {
                q: 'Is this a one-time project or an ongoing system?',
                a: 'Automation is treated as infrastructure. Systems can evolve, expand, and optimize as your operations change.',
              },
              {
                q: 'What kind of businesses is this NOT for?',
                a: 'Businesses looking for AI experiments, generic chatbots, or quick hype-driven solutions will not benefit. We work best with teams that value structure and long-term operational clarity.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
