import { Card } from "@/components/ui/card";

const sections = [
  { id: "cover", title: "Cover Page" },
  { id: "introduction", title: "Introduction & Learning Philosophy" },
  { id: "resume", title: "Resume/CV" },
  { id: "projects", title: "Interdisciplinary Projects" },
  { id: "skills", title: "Advanced Skills" },
  { id: "leadership", title: "Collaborative & Leadership Experience" },
  { id: "ethics", title: "Global Awareness & Ethics" },
  { id: "aspirations", title: "Future Aspirations" },
  { id: "swot", title: "Conclusion & SWOT Analysis" },
  { id: "testimonials", title: "Testimonials" },
];

export const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="p-6 bg-card">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Table of Contents</h2>
      <nav>
        <ol className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-left w-full hover:text-primary transition-colors p-2 rounded hover:bg-secondary/50"
              >
                <span className="font-semibold">{index + 1}.</span> {section.title}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </Card>
  );
};
