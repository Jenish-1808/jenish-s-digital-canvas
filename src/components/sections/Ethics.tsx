import { Card } from "@/components/ui/card";

export const Ethics = () => {
  return (
    <section id="ethics" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Global Awareness & Ethics</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Case Study 1: Data Privacy in Web Applications</h3>
            
            <div className="space-y-4 text-foreground/90">
              <div>
                <h4 className="font-semibold text-primary mb-2">Scenario</h4>
                <p>
                  While developing My NutriGuru, a nutrition tracking application, I faced decisions regarding 
                  user data collection, storage, and usage. The application required access to personal health 
                  information, raising important questions about data privacy and ethical responsibility.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Ethical Analysis</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Privacy First:</strong> Implemented minimal data collection principles, storing only 
                    essential information required for functionality
                  </li>
                  <li>
                    <strong>Secure Authentication:</strong> Used Google OAuth 2.0 to avoid storing passwords directly, 
                    reducing security vulnerabilities
                  </li>
                  <li>
                    <strong>Data Ownership:</strong> Designed the system to give users full control over their data 
                    with options to export or delete information
                  </li>
                  <li>
                    <strong>Transparency:</strong> Would implement clear privacy policies explaining data usage if 
                    deployed publicly
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Personal Reflection</h4>
                <p>
                  This experience taught me that as developers, we are custodians of user trust. Every technical 
                  decision has ethical implications. I learned to prioritize user privacy over feature convenience 
                  and to always question: "Just because we can collect this data, should we?" This mindset will 
                  guide my future development work.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Case Study 2: Accessibility in Technology</h3>
            
            <div className="space-y-4 text-foreground/90">
              <div>
                <h4 className="font-semibold text-primary mb-2">Scenario</h4>
                <p>
                  During hackathons and project development, I observed that many applications are built without 
                  considering users with disabilities. This realization highlighted the importance of inclusive 
                  design and the ethical obligation to make technology accessible to everyone.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Ethical Analysis</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Universal Design:</strong> Technology should be usable by all people, regardless of 
                    their abilities or disabilities
                  </li>
                  <li>
                    <strong>Social Responsibility:</strong> Developers have a duty to prevent digital exclusion 
                    and bridge accessibility gaps
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> Many countries have laws requiring digital accessibility, 
                    making it both an ethical and legal obligation
                  </li>
                  <li>
                    <strong>Better UX for All:</strong> Accessibility features often improve user experience for 
                    everyone, not just those with disabilities
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Personal Reflection</h4>
                <p>
                  This awareness has fundamentally changed how I approach design and development. I've committed 
                  to learning WCAG guidelines and incorporating accessibility from the start of projects rather 
                  than as an afterthought. I believe that building inclusive technology is not just good ethics—
                  it's good engineering that expands our potential user base and creates more robust solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Core Ethical Principles</h3>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Prioritize user privacy and data security in every project</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Design inclusive solutions accessible to diverse user groups</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Consider the environmental impact of technology choices</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Be transparent about limitations and potential risks</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Continuously educate myself on emerging ethical challenges in tech</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};
