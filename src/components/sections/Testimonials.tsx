import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Teammate, Smart India Hackathon 2024",
    text: "Working with Jenish during SIH 2024 was an incredible experience. He quickly understood complex requirements and translated them into working code. His calm demeanor under pressure and willingness to collaborate made our team stronger.",
    initial: "PS"
  },
  {
    name: "Arjun Patel",
    role: "Former Kabaddi Team Member",
    text: "As our team captain, Jenish taught us what true leadership looks like. He never asked us to do something he wouldn't do himself. His strategic thinking on the field and ability to keep the team motivated during tough matches were remarkable.",
    initial: "AP"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Testimonials</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-secondary/50 border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {testimonial.initial}
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/90 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-center text-foreground/80 italic">
            "These testimonials reflect the relationships I've built and the impact I strive to make in every 
            endeavor—whether in the classroom, on the field, or in collaborative projects. I'm grateful for the 
            mentorship and support that has shaped my journey."
          </p>
        </div>
      </Card>
    </section>
  );
};
