import AnimatedSection from '../components/AnimatedSection';

function PrivacyPage() {
  return (
    <div className="w-full">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: 2026</p>
        </AnimatedSection>

        <div className="space-y-12">
          <AnimatedSection variant="floatUp" className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <div className="text-gray-300 space-y-3">
              <p>We may collect the following information:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Name</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Business name</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Website URL</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Information submitted through forms or direct communication</span>
                </li>
              </ul>
              <p className="mt-4">We only collect information relevant to business communication and service evaluation.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={50} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Information</h2>
            <div className="text-gray-300 space-y-3">
              <p>Collected information may be used to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Respond to inquiries or demo requests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Evaluate operational needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Improve our services and systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Communicate relevant updates, insights, or offerings related to AI automation</span>
                </li>
              </ul>
              <p className="mt-4">Communications may include informational, operational, or time-sensitive messages.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={100} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Business Communications</h2>
            <p className="text-gray-300">
              By submitting your email address, you acknowledge that Coreflow Automation may send communications that are relevant to:
            </p>
            <ul className="space-y-2 ml-6 mt-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Our services</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Industry developments</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Automation opportunities</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#DAA520] mt-1">—</span>
                <span>Time-sensitive or priority-related information</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              These communications are considered part of a professional business relationship.
              You may opt out of non-essential communications at any time.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={150} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing</h2>
            <p className="text-gray-300">
              We do not sell or rent personal data.
            </p>
            <p className="text-gray-300 mt-4">
              Information may be shared only with trusted service providers when necessary to operate our website,
              communications, or services, under confidentiality obligations.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={200} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
            <p className="text-gray-300">
              We take reasonable measures to protect submitted information against unauthorized access, misuse, or disclosure.
              However, no system can be guaranteed 100% secure.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={250} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Data Retention</h2>
            <div className="text-gray-300 space-y-3">
              <p>We retain information only as long as necessary for:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Legitimate business purposes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Legal or compliance obligations</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={300} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Your Rights</h2>
            <div className="text-gray-300 space-y-3">
              <p>You may request:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Access to your data</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Correction of inaccurate information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#DAA520] mt-1">—</span>
                  <span>Removal from non-essential communications</span>
                </li>
              </ul>
              <p className="mt-4">Requests can be made via our contact form.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={350} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Policy Updates</h2>
            <p className="text-gray-300">
              This Privacy Policy may be updated periodically.
              Continued use of the website constitutes acceptance of the updated policy.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="floatUp" delay={400} className="glass-effect border border-[#DAA520]/20 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Contact</h2>
            <p className="text-gray-300">
              For privacy-related questions or requests, contact us through the website contact form.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;
