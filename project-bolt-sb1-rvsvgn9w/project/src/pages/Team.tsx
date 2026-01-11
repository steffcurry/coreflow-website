import { Github, ExternalLink } from 'lucide-react';

export default function Team() {
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
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real people behind the agency.
          </p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-white text-4xl font-bold">J</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">John</h2>
            <p className="text-cyan-400 font-semibold mb-8">
              AI Automation Engineer
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/john-automated-systems/ai-automation-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
              >
                <ExternalLink size={20} />
                Portfolio
              </a>
              <a
                href="https://github.com/john-automated-systems/john-automated-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise',
                items: [
                  'AI system architecture',
                  'Workflow automation',
                  'Integration engineering',
                  'Process optimization',
                ],
              },
              {
                title: 'Focus',
                items: [
                  'Structured systems',
                  'Operational clarity',
                  'Real-world deployment',
                  'Long-term stability',
                ],
              },
              {
                title: 'Approach',
                items: [
                  'Evidence-based design',
                  'Transparent processes',
                  'Predictable outcomes',
                  'No-hype execution',
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
