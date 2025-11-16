import { Card } from "@/components/ui/card";

export const Leadership = () => {
  return (
    <section id="leadership" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Collaborative & Leadership Experience</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Kabaddi Team Captain</h3>
            <p className="text-sm text-muted-foreground mb-4">School Sports Leadership Role</p>
            <div className="space-y-3 text-foreground/90">
              <p>
                As captain of my school's kabaddi team, I developed essential leadership skills that translate 
                directly to technical team environments. Leading a sports team taught me the importance of clear 
                communication, strategic thinking, and motivating diverse team members toward a common goal.
              </p>
              <div>
                <h4 className="font-semibold text-primary mb-2">Key Leadership Lessons:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Coordinating team strategies under pressure</li>
                  <li>Mediating conflicts and maintaining team morale</li>
                  <li>Making quick decisions during competitive situations</li>
                  <li>Understanding individual strengths and delegating accordingly</li>
                  <li>Leading by example through dedication and discipline</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Smart India Hackathon 2024</h3>
            <p className="text-sm text-muted-foreground mb-4">National-Level Technology Competition</p>
            <div className="space-y-3 text-foreground/90">
              <p>
                Selected among thousands of participants for Smart India Hackathon 2024, where I collaborated 
                with a diverse team to develop innovative solutions for real-world problems. This experience 
                enhanced my ability to work in cross-functional teams and deliver under tight deadlines.
              </p>
              <div>
                <h4 className="font-semibold text-primary mb-2">Collaborative Skills Developed:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Rapid prototyping and iterative development</li>
                  <li>Code review and pair programming</li>
                  <li>Effective communication of technical concepts</li>
                  <li>Time management and milestone tracking</li>
                  <li>Integrating feedback from mentors and judges</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl font-semibold mb-3 text-foreground">University Project Teams</h3>
            <p className="text-sm text-muted-foreground mb-4">Academic Collaboration</p>
            <div className="space-y-3 text-foreground/90">
              <p>
                Throughout my academic journey, I've participated in numerous group projects that required 
                coordinating with team members, dividing tasks efficiently, and ensuring quality deliverables. 
                These experiences have honed my collaborative programming skills and project management abilities.
              </p>
              <div>
                <h4 className="font-semibold text-primary mb-2">Team Collaboration Highlights:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Using Git for version control and collaborative coding</li>
                  <li>Conducting code reviews and providing constructive feedback</li>
                  <li>Facilitating team meetings and maintaining project documentation</li>
                  <li>Resolving merge conflicts and ensuring code quality</li>
                  <li>Mentoring team members on technical concepts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Leadership Philosophy</h3>
            <p className="text-foreground/90 italic">
              "True leadership in technology isn't about being the smartest person in the room—it's about 
              empowering others to excel, fostering open communication, and creating an environment where 
              innovation thrives through collaboration."
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
