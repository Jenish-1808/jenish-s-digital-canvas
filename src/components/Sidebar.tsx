import { Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const Sidebar = () => {
  return (
    <aside className="bg-sidebar-bg text-foreground p-8 lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-lg mb-6">
          <img 
            src={profilePhoto} 
            alt="Jenish Moghariya" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
          <div className="space-y-3 text-white/90">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">+91 7779095609</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm break-all">jenishmoghariya@gmail.com</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4 text-white">Technical Skills</h3>
          <div className="space-y-3 text-sm text-white/90">
            <div>
              <strong className="text-white">Languages:</strong> C, C++, Python, JavaScript
            </div>
            <div>
              <strong className="text-white">Web:</strong> HTML, CSS, ReactJS, NodeJS, ExpressJS
            </div>
            <div>
              <strong className="text-white">Databases:</strong> MongoDB, MySQL, SQLite
            </div>
            <div>
              <strong className="text-white">Tools:</strong> Git, GitHub, VS Code
            </div>
            <div>
              <strong className="text-white">Coursework:</strong> Data Structures & Algorithms, Operating Systems, DBMS
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};
