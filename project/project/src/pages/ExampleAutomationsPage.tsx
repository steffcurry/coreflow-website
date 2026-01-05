import { useState } from 'react';
import { X, Play } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

interface DemoSystem {
  id: string;
  title: string;
  problem: string;
  systemBuilt: string;
  result: string;
  details: string[];
  videoUrl?: string;
  featured?: boolean;
}

function ExampleAutomationsPage() {
  const [selectedDemo, setSelectedDemo] = useState<DemoSystem | null>(null);

  const demoSystems: DemoSystem[] = [
    {
      id: 'appointment-voice-caller',
      title: 'Appointment Management AI Voice Caller System',
      problem:
        'Businesses spend significant time handling phone calls for appointment booking, updates, and cancellations, leading to missed calls, errors, and operational inefficiency.',
      systemBuilt:
        'An AI-powered voice calling system that manages the entire appointment lifecycle, integrates with calendars, and escalates calls when needed.',
      result:
        'Automated 24/7 phone handling, elimination of double bookings, and improved customer experience with structured data capture and system integration.',
      details: [
        'Automated inbound and outbound appointment calls',
        'Real-time calendar integration',
        'Natural conversation handling in Greek',
        'Automatic escalation for complex scenarios',
        'Call recording and transcription',
        'CRM integration and data capture',
      ],
      videoUrl: 'https://youtu.be/ecs54Z86XDU',
      featured: true,
    },
    {
      id: 'appointment-chat-agent',
      title: 'Appointment Management & Customer Support AI Chat-Agent System',
      problem:
        'Law firms spend significant time handling messages for appointment booking, updates, and cancellations, leading to errors and operational inefficiency.',
      systemBuilt:
        'An AI-powered chat-agent system that manages appointments, answers inquiries via a Knowledge Base, and automatically updates the firm\'s CRM with extracted case details.',
      result:
        'Reduced manual messaging, 24/7 appointment management, prevented double bookings, and improved customer experience with direct service and structured CRM data capture.',
      details: [
        'Natural language appointment booking and management',
        'Knowledge base integration for instant answers',
        'Automatic case detail extraction',
        'CRM synchronization',
        'Multi-channel support (website, messaging platforms)',
        'Conversation context retention',
      ],
      videoUrl: 'https://youtu.be/_sY0JgB3S54',
      featured: true,
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification Voice System',
      problem: 'Sales team spending hours qualifying inbound leads manually',
      systemBuilt: 'AI voice caller that handles initial lead qualification calls',
      result: 'Automated qualification of leads with structured data capture and CRM integration',
      details: [
        'Automated outbound calls to new leads within minutes',
        'Natural conversation flow for qualification questions',
        'Real-time CRM data entry',
        'Automatic scheduling for qualified leads',
        'Human handoff for complex scenarios',
      ],
    },
    {
      id: 'support-routing',
      title: 'Customer Support Routing System',
      problem: 'Support requests being sent to wrong departments causing delays',
      systemBuilt: 'AI chat system that classifies and routes support inquiries',
      result: 'Accurate classification and routing of support requests with automated resolution for common issues',
      details: [
        'Natural language understanding of support requests',
        'Automatic classification by department and priority',
        'Instant resolution of common issues via knowledge base',
        'Smart routing to appropriate team members',
        'Performance tracking and analytics',
      ],
    },
    {
      id: 'appointment-confirmation',
      title: 'Appointment Confirmation System',
      problem: 'High no-show rates due to missed confirmations and reminders',
      systemBuilt: 'Automated voice and SMS confirmation system',
      result: 'Reduced no-show rates through automated confirmation and reminder workflows',
      details: [
        'Automated confirmation calls 48 hours before appointment',
        'SMS reminder 24 hours before appointment',
        'Rescheduling option through voice or text',
        'Calendar integration and updates',
        'Analytics on confirmation and attendance rates',
      ],
    },
    {
      id: 'data-entry',
      title: 'Document Processing System',
      problem: 'Manual data entry from documents causing bottlenecks and errors',
      systemBuilt: 'AI document processor with automated data extraction',
      result: 'Automated extraction and entry of data from documents into business systems',
      details: [
        'Automated document classification',
        'Data extraction from various document formats',
        'Validation against business rules',
        'Direct entry into target systems',
        'Exception handling and human review queue',
      ],
    },
  ];

  const featuredDemos = demoSystems.filter((demo) => demo.featured);
  const standardDemos = demoSystems.filter((demo) => !demo.featured);

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Demonstration Systems</h1>
          <div className="bg-[#161B22] border border-[#232A35] p-6 rounded">
            <p className="text-[#9AA4B2] mb-3">
              The following are example systems created to demonstrate how AI automation can be applied to real
              business workflows.
            </p>
            <p className="text-[#E6E8EB] font-medium">
              We don't ask you to believe us. We show you working systems.
            </p>
          </div>
        </AnimatedSection>

        {featuredDemos.length > 0 && (
          <div className="mb-16">
            <AnimatedSection className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[#4F7DF3]/10 border border-[#4F7DF3]/30 rounded mb-4">
                <span className="text-[#4F7DF3] font-medium">Featured Demo Systems</span>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {featuredDemos.map((demo, index) => (
                <AnimatedSection key={demo.id} variant="fadeUp" delay={index * 50}>
                  <FloatingCard>
                    <div className="bg-[#161B22] border-2 border-[#4F7DF3]/30 p-6 rounded card-glow h-full">
                      <div className="inline-block px-3 py-1 bg-[#4F7DF3]/10 text-[#4F7DF3] text-xs font-medium rounded mb-4">
                        Featured Demo System
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#E6E8EB]">{demo.title}</h3>

                      {demo.videoUrl && (
                        <a
                          href={demo.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-[#4F7DF3] hover:text-[#3D6AE0] mb-6 transition-all duration-300 group"
                        >
                          <Play size={20} className="group-hover:scale-110 transition-transform" />
                          <span className="font-medium">Watch Demo Video</span>
                        </a>
                      )}

                      <div className="space-y-4 mb-6">
                        <div>
                          <span className="text-sm text-[#9AA4B2] font-medium">Problem:</span>
                          <p className="text-[#E6E8EB] mt-1 text-sm">{demo.problem}</p>
                        </div>
                        <div>
                          <span className="text-sm text-[#9AA4B2] font-medium">System Built:</span>
                          <p className="text-[#E6E8EB] mt-1 text-sm">{demo.systemBuilt}</p>
                        </div>
                        <div>
                          <span className="text-sm text-[#9AA4B2] font-medium">Result:</span>
                          <p className="text-[#E6E8EB] mt-1 text-sm">{demo.result}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedDemo(demo)}
                        className="w-full px-4 py-2 bg-[#4F7DF3] text-white font-medium rounded hover:bg-[#3D6AE0] transition-colors"
                      >
                        View Full Details
                      </button>
                    </div>
                  </FloatingCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {standardDemos.length > 0 && (
          <div>
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#E6E8EB]">Additional Example Systems</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standardDemos.map((demo, index) => (
                <AnimatedSection key={demo.id} variant="fadeUp" delay={index * 50}>
                  <FloatingCard>
                    <div className="bg-[#161B22] border border-[#232A35] p-6 rounded card-glow h-full">
                      <div className="inline-block px-3 py-1 bg-[#4F7DF3]/10 text-[#4F7DF3] text-xs font-medium rounded mb-4">
                        Demo System
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#E6E8EB]">{demo.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="text-sm text-[#9AA4B2] font-medium">Problem:</span>
                          <p className="text-[#E6E8EB] mt-1">{demo.problem}</p>
                        </div>
                        <div>
                          <span className="text-sm text-[#9AA4B2] font-medium">System Built:</span>
                          <p className="text-[#E6E8EB] mt-1">{demo.systemBuilt}</p>
                        </div>
                        <div>
                          <span className="text-sm text-[#9AA4B2] font-medium">Result:</span>
                          <p className="text-[#E6E8EB] mt-1">{demo.result}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedDemo(demo)}
                        className="w-full px-4 py-2 bg-[#4F7DF3] text-white font-medium rounded hover:bg-[#3D6AE0] transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </FloatingCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        <AnimatedSection className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Discuss Your Automation Needs
          </a>
        </AnimatedSection>
      </section>

      {selectedDemo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#161B22] max-w-2xl w-full rounded p-8 max-h-[90vh] overflow-y-auto border border-[#232A35]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-block px-3 py-1 bg-[#4F7DF3]/10 text-[#4F7DF3] text-xs font-medium rounded mb-2">
                  {selectedDemo.featured ? 'Featured Demo System' : 'Demo System'}
                </div>
                <h2 className="text-2xl font-bold text-[#E6E8EB]">{selectedDemo.title}</h2>
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="text-[#9AA4B2] hover:text-[#E6E8EB] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {selectedDemo.videoUrl && (
              <a
                href={selectedDemo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#4F7DF3] hover:text-[#3D6AE0] mb-6 transition-all duration-300 group"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Watch Demo Video</span>
              </a>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-[#9AA4B2] font-medium mb-2">Problem</h3>
                <p className="text-[#E6E8EB]">{selectedDemo.problem}</p>
              </div>

              <div>
                <h3 className="text-sm text-[#9AA4B2] font-medium mb-2">System Built</h3>
                <p className="text-[#E6E8EB]">{selectedDemo.systemBuilt}</p>
              </div>

              <div>
                <h3 className="text-sm text-[#9AA4B2] font-medium mb-2">Result</h3>
                <p className="text-[#E6E8EB]">{selectedDemo.result}</p>
              </div>

              <div>
                <h3 className="text-sm text-[#9AA4B2] font-medium mb-3">System Features</h3>
                <ul className="space-y-2">
                  {selectedDemo.details.map((detail) => (
                    <li key={detail} className="flex items-start space-x-3">
                      <span className="text-[#4F7DF3] mt-1">—</span>
                      <span className="text-[#E6E8EB]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExampleAutomationsPage;
