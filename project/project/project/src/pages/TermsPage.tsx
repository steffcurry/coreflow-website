import AnimatedSection from '../components/AnimatedSection';

function TermsPage() {
  return (
    <div className="w-full">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: 2026</p>
        </AnimatedSection>

        <div className="space-y-12">
          <AnimatedSection variant="floatUp" className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing or using the Coreflow Automation website, services, or submitting any form, you agree to be bound by these Terms of Service.
              If you do not agree, you should not use this website or our services.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={50} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Services</h2>
            <p className="text-gray-300">
              Coreflow Automation provides AI automation consulting, system design, deployment, demonstrations, and related services.
              All services are provided on a best-effort basis unless otherwise agreed in writing.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={100} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">3. No Guarantees</h2>
            <p className="text-gray-300">
              While we design systems intended to improve operational efficiency, we do not guarantee specific financial outcomes,
              performance improvements, or business results.
            </p>
            <p className="text-gray-300 mt-4">
              Any examples, demonstrations, or projections shown are illustrative only.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={150} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">4. User Responsibilities</h2>
            <div className="text-gray-300 space-y-3">
              <p>You agree that:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Information you submit is accurate and lawful</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>You have the authority to submit business-related data</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>You will not use our services for unlawful or abusive purposes</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={200} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Communication & Contact</h2>
            <p className="text-gray-300">
              By submitting your contact information through any form on this website, you acknowledge that Coreflow Automation may contact you regarding:
            </p>
            <ul className="space-y-2 ml-6 mt-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Your inquiry or request</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Relevant services or offerings</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Operational insights, updates, or time-sensitive opportunities related to automation</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              You may opt out of non-essential communications at any time.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={250} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Intellectual Property</h2>
            <p className="text-gray-300">
              All content, systems, designs, text, and materials on this website are the property of Coreflow Automation unless otherwise stated.
              Unauthorized reproduction or redistribution is prohibited.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={300} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Limitation of Liability</h2>
            <p className="text-gray-300">
              To the maximum extent permitted by law, Coreflow Automation shall not be liable for indirect, incidental,
              or consequential damages arising from the use or inability to use our services.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={350} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Modifications</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time.
              Continued use of the website constitutes acceptance of the updated Terms.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={400} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed and interpreted according to applicable laws, without regard to conflict-of-law principles.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
