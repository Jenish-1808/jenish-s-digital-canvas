import { Card } from "@/components/ui/card";

export const Conclusion = () => {
  return (
    <section id="swot" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Conclusion & SWOT Analysis</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Self-Reflection</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                As I reflect on my journey through computer engineering, I see a pattern of continuous growth 
                driven by curiosity and determination. From my first lines of code to developing full-stack 
                applications, each project has taught me invaluable lessons—not just about technology, but about 
                myself as a learner, team member, and future engineer.
              </p>
              <p>
                My academic performance (CGPA 9.04) reflects my commitment to excellence, but more importantly, 
                my projects and extracurricular activities demonstrate my passion for applying knowledge to solve 
                real problems. Leading the kabaddi team taught me that technical skills alone aren't enough; 
                success requires communication, empathy, and the ability to inspire others.
              </p>
              <p>
                Looking ahead, I recognize that I'm at the beginning of a lifelong journey. The field of computer 
                science is vast and ever-evolving, and I'm excited to embrace the challenges and opportunities that 
                lie ahead. I'm ready to contribute, learn, and grow in an environment that values innovation and 
                continuous improvement.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">SWOT Analysis</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <h4 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">Strengths</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Strong academic foundation with 9.04 CGPA</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Hands-on experience with MERN stack and full-stack development</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Proven problem-solving ability (200+ DSA problems)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Leadership experience from sports and team projects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Quick learner with passion for new technologies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Strong work ethic and commitment to quality</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span>Ability to balance academics, projects, and extracurriculars</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
                <h4 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-400">Weaknesses</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Limited industry experience in professional settings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Need deeper expertise in cloud technologies (AWS/Azure)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Sometimes overthink problems, affecting speed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Limited exposure to enterprise-scale applications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Need to improve DevOps and CI/CD knowledge</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Can be overly perfectionist, delaying completion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 dark:text-orange-400">→</span>
                    <span>Public speaking skills need development</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">Opportunities</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>Growing demand for full-stack developers in India</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>Internship opportunities with tech startups and companies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>Open-source contribution to build portfolio and network</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>Online learning platforms for skill enhancement</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>Hackathons and coding competitions for visibility</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>AI/ML integration into web applications (emerging trend)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">↗</span>
                    <span>Remote work opportunities expanding globally</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <h4 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">Threats</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>Highly competitive job market for new graduates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>Rapid technology changes requiring constant upskilling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>Economic uncertainties affecting hiring in tech sector</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>AI automation potentially impacting entry-level roles</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>Overwhelming number of frameworks to master</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>Burnout from balancing learning and project work</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400">⚠</span>
                    <span>Need to differentiate from thousands of CS graduates</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
            <h4 className="text-xl font-semibold mb-3 text-foreground">Moving Forward</h4>
            <p className="text-foreground/90">
              Understanding my SWOT profile helps me create a strategic roadmap for success. I will leverage my 
              strengths in academics and problem-solving while actively addressing weaknesses through targeted 
              learning. By seizing opportunities in hackathons, open source, and internships, and staying aware 
              of industry threats, I'm prepared to navigate my career path with clarity and purpose.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
