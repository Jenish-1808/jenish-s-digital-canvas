import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Resume = () => {
  return (
    <section id="resume" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Resume / CV</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
            <div className="border-l-2 border-primary pl-6 py-2">
              <h4 className="text-xl font-bold">Bachelor of Technology in Computer Engineering</h4>
              <p className="text-muted-foreground">Pandit Deendayal Energy University</p>
              <p className="text-sm text-muted-foreground">July 2023 – May 2027</p>
              <p className="mt-2"><strong>CGPA:</strong> 9.04 / 10</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "Python", "JavaScript"].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Web Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "ReactJS", "NodeJS", "ExpressJS"].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Databases & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "MySQL", "SQLite", "Git", "GitHub", "VS Code"].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Time Management", "Adaptability"].map(skill => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Achievements & Awards</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Selected for Smart India Hackathon (SIH) 2024</li>
              <li>Solved 200+ Data Structures & Algorithms problems</li>
              <li>Active participant in university hackathons</li>
              <li>School Kabaddi Team Captain - demonstrated leadership & teamwork</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Co-curricular Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Kabaddi Team Captain - Led team to regional competitions</li>
              <li>Hackathon Participant - Collaborated on innovative tech solutions</li>
              <li>Coding Club Member - Regular participant in coding competitions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {["Competitive Programming", "Web Development", "Sports (Kabaddi)", "Reading Tech Blogs", "Open Source Contribution"].map(hobby => (
                <Badge key={hobby} className="bg-accent text-accent-foreground">{hobby}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
