import { Card } from "@/components/ui/card";

export const Introduction = () => {
  return (
    <section id="introduction" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Introduction & Learning Philosophy</h2>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            My journey in computer engineering began with a simple curiosity about how technology shapes our world. 
            As a student at Pandit Deendayal Energy University, I've transformed that curiosity into a passion for 
            building meaningful solutions through code. With a CGPA of 9.04, I've not only excelled academically but 
            have actively applied theoretical knowledge to practical projects ranging from web applications to data 
            structures implementation. My participation in Smart India Hackathon 2024 and solving over 200 DSA problems 
            reflects my commitment to continuous learning and problem-solving.
          </p>
          <p>
            I believe that engineering is not just about writing code—it's about understanding problems deeply, 
            collaborating effectively, and creating solutions that make a difference. My philosophy centers around 
            three core values: continuous improvement, practical application, and collaborative innovation. Whether 
            leading my school kabaddi team or working on full-stack applications like My NutriGuru, I approach every 
            challenge with the mindset that failure is a stepping stone to mastery. I'm driven by the belief that 
            the best engineers are lifelong learners who embrace complexity, seek feedback, and remain humble in 
            their pursuit of excellence.
          </p>
        </div>
      </Card>
    </section>
  );
};
