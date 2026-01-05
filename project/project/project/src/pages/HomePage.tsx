import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';
import { useParallax } from '../hooks/useParallax';

function HomePage() {
  const { ref: parallaxRef, offset } = useParallax(0.3);

  const solutions = [
    {
      title: 'AI Customer Support Systems',
      description: 'Structured AI handling repetitive inquiries with escalation logic for edge cases.',
      anchor: 'solutions#customer-support',
    },
    {
      title: 'AI Voice Callers',
      description: 'Automated inbound and outbound calls for qualification, confirmations, and routing.',
      anchor: 'solutions#voice-callers',
    },
    {
      title: 'AI Chat Agents',
      description: 'Controlled conversational agents that guide users through predefined workflows.',
      anchor: 'solutions#chat-agents',
    },
    {
      title: 'Lead Qualification & Appointment Automation',
      description: 'End-to-end systems that filter, score, and schedule without human intervention.',
      anchor: 'solutions#lead-qualification',
    },
    {
      title: 'Internal Operations Automation',
      description: 'Task flows, data handling, reporting, and cross-system synchronization.',
      anchor: 'solutions#operations',
    },
    {
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built interfaces designed to support automation logic.',
      anchor: 'solutions#web-apps',
    },
    {
      title: 'Custom Automation Systems',
      description: 'Bespoke systems for non-standard operational problems.',
      anchor: 'solutions#custom',
    },
  ];

  const faqs = [
    {
      question: 'What exactly do you mean by "AI automation systems"?',
      answer:
        'We design structured systems where AI operates inside defined workflows. This includes decision logic, integrations, escalation rules, and monitoring — not standalone tools or chatbots.',
    },
    {
      question: 'Will this replace my team?',
      answer:
        'No. These systems replace manual steps, not people. The goal is to remove repetitive operational work so human effort is applied where judgment is required.',
    },
    {
      question: 'How is this different from using off-the-shelf automation tools?',
      answer:
        'Tools automate tasks. Systems automate outcomes. We design architecture that connects tools, data, and logic into a single operational flow.',
    },
    {
      question: 'How quickly can we see results?',
      answer:
        'Initial systems are typically deployed within weeks. Operational impact begins as soon as a system replaces a manual bottleneck.',
    },
    {
      question: 'Do we need to change our existing tools or software?',
      answer:
        'No. We design around your current stack whenever possible and only replace components when they limit scalability.',
    },
    {
      question: 'Is this a one-time project or an ongoing system?',
      answer:
        'Automation is treated as infrastructure. Systems can evolve, expand, and optimize as your operations change.',
    },
    {
      question: 'What kind of businesses is this NOT for?',
      answer:
        'Businesses looking for AI experiments, generic chatbots, or quick hype-driven solutions will not benefit. We work best with teams that value structure and long-term operational clarity.',
    },
  ];

  const scrollToExamples = () => {
    window.location.hash = 'examples';
  };

  return (
    <div className="w-full overflow-hidden">
      <section
        ref={parallaxRef}
        style={{ transform: `translateY(${offset}px)` }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <AnimatedSection variant="floatUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gold-gradient-text">
              AI Automation Is Becoming Operational Infrastructure.
            </h1>
          </AnimatedSection>

          <AnimatedSection variant="scaleIn" delay={100}>
            <p className="text-2xl text-white max-w-3xl mx-auto font-medium">
              Control It Early — Or Spend Years Catching Up.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fadeBlur" delay={200}>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We design and deploy AI automation systems that replace fragile manual workflows with scalable operational
              infrastructure — across sales, support, and internal operations.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={300}>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Your competitors are not "experimenting" anymore. They are systematizing.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="scaleIn" delay={400} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="btn-primary">
              Book a Demo
            </a>
            <button onClick={scrollToExamples} className="btn-secondary">
              See Example Systems
            </button>
          </AnimatedSection>
        </div>
      </section>

      <section className="glass-effect py-20 border-y border-[#DAA520]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeBlur" className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 gold-gradient-text">This Is Not About AI Hype</h2>
            <p className="text-lg text-gray-300 mb-4">
              Most businesses will not lose because they ignored AI. They will lose because they implemented it without
              structure.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              AI added on top of broken workflows does not create leverage — it creates hidden operational risk.
            </p>
            <p className="text-xl text-white font-medium">
              We don't sell tools. We design systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Real Bottleneck Isn't Your Team</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            When performance breaks under growth, it's rarely a people problem.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto mb-8">
          <AnimatedSection className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <p className="text-gray-300 mb-4">It's usually one of these:</p>
            <div className="space-y-3">
              {[
                'Leads handled inconsistently',
                'Response times dependent on availability',
                'Manual handoffs between systems',
                'Knowledge trapped in individuals',
                'Processes that do not survive scale',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-white font-medium mt-8">Growth exposes weak systems.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="glass-effect py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Custom AI automation systems designed around real operational constraints — not templates.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.title} variant="scaleIn" delay={index * 50}>
                <FloatingCard>
                  <a
                    href={`#${solution.anchor}`}
                    className="card-glow p-6 rounded block h-full hover:shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
                  </a>
                </FloatingCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Mistake Most Companies Will Make</h2>
          <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
            They will adopt AI tactically instead of structurally.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto mb-8">
          <AnimatedSection className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <p className="text-gray-300 mb-4">That means:</p>
            <div className="space-y-3 mb-8">
              {['One chatbot here', 'One automation there', 'No unified logic', 'No ownership', 'No scalability'].map(
                (item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#DAA520] mt-1">—</span>
                    <span className="text-white">{item}</span>
                  </div>
                )
              )}
            </div>
            <p className="text-xl text-white font-medium">Fragmented automation becomes technical debt.</p>
            <p className="text-lg text-gray-300 mt-4">We design systems that compound — not patch.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="glass-effect py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '1',
                title: 'Audit & Workflow Mapping',
                description:
                  'We analyze your workflows, identify bottlenecks, and define automation boundaries. Output: A clear system map and prioritized automation opportunities.',
              },
              {
                number: '2',
                title: 'Custom System Design',
                description:
                  'We design AI systems around how your business actually operates. No templates. No generic stacks.',
              },
              {
                number: '3',
                title: 'Deployment & Optimization',
                description:
                  'Systems are deployed, monitored, and improved based on real usage. Automation is treated as infrastructure — not a one-off project.',
              },
            ].map((step, index) => (
              <AnimatedSection key={step.number} variant="fadeUp" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4F7DF3] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#4F7DF3]/30">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Request an Automation Audit</span>
              <ArrowRight size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why This Works</h2>
          <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
            We don't ask you to trust claims. We show functioning systems.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Instead of "success stories", we provide:</p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto mb-8">
          <AnimatedSection className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <div className="space-y-3">
              {[
                'Live example automations',
                'Clear system architecture',
                'Transparent process design',
                'Demonstrable logic, not promises with hype',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center">
          <a href="#examples" className="btn-secondary inline-flex items-center space-x-2">
            <span>View Example Automations</span>
            <ArrowRight size={20} />
          </a>
        </AnimatedSection>
      </section>

      <section className="glass-effect py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who This Is For</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">You'll benefit most if:</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="bg-black/60 border border-[#DAA520]/20 p-8 rounded">
              <div className="space-y-3">
                {[
                  'Your operations are growing faster than your systems',
                  'Manual processes are slowing decisions',
                  'Hiring feels like a temporary fix',
                  'You want AI deployed with intent, not experimentation',
                  'You value clarity over hype',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#DAA520] mt-1">—</span>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">AI Automation Is a Strategic Decision</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            In the next 12–18 months, AI-driven operations will stop being a competitive edge.
          </p>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">They will become baseline.</p>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
            The question is whether you design your systems early — or inherit complexity later.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Book a Demo
          </a>
        </AnimatedSection>
      </section>

      <section className="glass-effect py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">FAQs</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} variant="fadeUp" delay={index * 50}>
                <div className="bg-black/60 border border-[#DAA520]/20 p-6 rounded">
                  <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
