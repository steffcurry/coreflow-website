import { Check, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

function PricingPage() {
  const engagementStructure = [
    {
      title: 'Audit & Scope Definition',
      description: 'Clarifies requirements and defines system boundaries',
      icon: '1',
    },
    {
      title: 'One-Time Deployment',
      description: 'Custom system build and production deployment',
      icon: '2',
    },
    {
      title: 'Monthly Retainer',
      description: 'Monitoring, maintenance, and ongoing optimization',
      icon: '3',
    },
  ];

  const avoidances = [
    'No revenue sharing',
    'No usage-based surprises',
    'No hidden fees',
    'No forced long-term lock-ins',
  ];

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Pricing Model</h1>
          <p className="text-xl text-gray-300">Predictable, transparent pricing based on your specific workflows.</p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-16">
          <AnimatedSection className="glass-effect p-8 rounded-lg hover:shadow-lg hover:shadow-[#DAA520]/10 transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-white">Pricing Philosophy</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every system is scoped based on real workflows. Pricing reflects complexity, integration depth, and
              operational requirements — not generic packages.
            </p>
          </AnimatedSection>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-white text-center">Engagement Structure</h2>
            <div className="space-y-6">
              {engagementStructure.map((phase, index) => (
                <AnimatedSection
                  key={phase.title}
                  variant="scaleIn"
                  delay={index * 50}
                  className="glass-effect border border-[#DAA520]/20 p-6 rounded-lg card-glow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4F7DF3] rounded-full flex items-center justify-center flex-shrink-0 animate-glow shadow-lg shadow-[#DAA520]/20">
                      <span className="text-xl font-bold text-white">{phase.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{phase.title}</h3>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection className="glass-effect p-8 rounded-lg hover:shadow-lg hover:shadow-[#DAA520]/10 transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white">What This Model Avoids</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {avoidances.map((item, index) => (
                <div key={item} className="flex items-center space-x-3 animate-fadeInScale" style={{ animationDelay: `${index * 100}ms` }}>
                  <Check className="text-[#2BD4A4] flex-shrink-0" size={20} />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center glass-effect p-8 rounded-lg hover:shadow-lg hover:shadow-[#DAA520]/10 transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get a Custom Quote?</h3>
            <p className="text-gray-300 mb-6">Based on your workflows, not assumptions.</p>
            <a href="#contact" className="btn-primary inline-block">
              Request a Custom Quote
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
