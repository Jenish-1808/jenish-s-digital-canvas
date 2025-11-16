import { Sidebar } from "@/components/Sidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { CoverPage } from "@/components/sections/CoverPage";
import { Introduction } from "@/components/sections/Introduction";
import { Resume } from "@/components/sections/Resume";
import { Projects } from "@/components/sections/Projects";
import { AdvancedSkills } from "@/components/sections/AdvancedSkills";
import { Leadership } from "@/components/sections/Leadership";
import { Ethics } from "@/components/sections/Ethics";
import { Aspirations } from "@/components/sections/Aspirations";
import { Conclusion } from "@/components/sections/Conclusion";
import { Testimonials } from "@/components/sections/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[400px] lg:fixed lg:left-0 lg:top-0 lg:h-screen">
          <Sidebar />
        </div>
        
        <main className="flex-1 lg:ml-[400px] bg-content-bg">
          <div className="max-w-5xl mx-auto p-6 lg:p-12 space-y-8">
            <CoverPage />
            <TableOfContents />
            <Introduction />
            <Resume />
            <Projects />
            <AdvancedSkills />
            <Leadership />
            <Ethics />
            <Aspirations />
            <Conclusion />
            <Testimonials />
            
            <footer className="text-center py-8 text-muted-foreground border-t border-border mt-12">
              <p>© 2025 Jenish Moghariya • Built with passion and purpose</p>
              <p className="text-sm mt-2">Building, Learning, Improving — One Line of Code at a Time.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
