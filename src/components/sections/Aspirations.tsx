import { Card } from "@/components/ui/card";

export const Aspirations = () => {
  return (
    <section id="aspirations" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Future Aspirations</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Career Goals</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                My immediate career goal is to join a dynamic software development team where I can contribute 
                to building impactful products while learning from experienced engineers. I aspire to become a 
                full-stack engineer who bridges the gap between elegant frontend experiences and robust backend 
                architectures. Within the next 3-5 years, I aim to take on technical leadership roles, mentoring 
                junior developers and driving architectural decisions.
              </p>
              <p>
                Long-term, I envision myself as a Principal Engineer or Engineering Manager, leading teams in 
                developing scalable systems that solve real-world problems. I'm particularly interested in the 
                intersection of technology and social impact—creating solutions that make essential services more 
                accessible and efficient.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">5-Year Vision</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Master full-stack development with expertise in cloud technologies</li>
                  <li>Contribute to open-source projects with significant user impact</li>
                  <li>Lead a development team in a product-focused company</li>
                  <li>Speak at technical conferences about software architecture</li>
                  <li>Mentor aspiring developers through teaching and content creation</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Further Studies & Specialization</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                While gaining industry experience is my priority, I'm also considering pursuing a Master's degree 
                in Computer Science, potentially specializing in Distributed Systems or Machine Learning. I believe 
                that combining practical industry experience with advanced academic research will provide a unique 
                perspective on solving complex technical challenges.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Areas of Academic Interest</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Distributed Systems and Microservices Architecture</li>
                  <li>Machine Learning and Artificial Intelligence applications</li>
                  <li>Cloud Computing and Scalable Infrastructure</li>
                  <li>Cybersecurity and Secure Software Development</li>
                  <li>Human-Computer Interaction and UX Research</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Plan for Continuous Improvement</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                I believe that in the rapidly evolving field of technology, continuous learning is not optional—
                it's essential. My approach to lifelong learning is systematic and multi-faceted.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Technical Skills</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Daily coding practice (LeetCode, HackerRank)</li>
                    <li>• Weekly deep dives into new technologies</li>
                    <li>• Monthly side projects to apply learnings</li>
                    <li>• Quarterly review of industry trends</li>
                    <li>• Annual skill assessment and goal setting</li>
                  </ul>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Soft Skills</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Communication workshops and courses</li>
                    <li>• Leadership books and podcasts</li>
                    <li>• Public speaking through meetups</li>
                    <li>• Writing technical blogs regularly</li>
                    <li>• Seeking feedback from mentors</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4 mt-4">
                <p className="italic">
                  <strong>My Learning Philosophy:</strong> "I commit to spending at least 10 hours per week on 
                  deliberate learning—whether through courses, reading technical papers, contributing to open source, 
                  or building projects. I will measure progress not just by certificates earned, but by problems 
                  solved and value created."
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Immediate Next Steps (Next 6 Months)</h4>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Complete advanced React and TypeScript courses</li>
                  <li>Build and deploy 2 full-stack projects with CI/CD</li>
                  <li>Contribute to 3 open-source projects</li>
                  <li>Obtain AWS or Azure cloud certification</li>
                  <li>Start a technical blog documenting my learning journey</li>
                  <li>Participate in at least 2 hackathons</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
