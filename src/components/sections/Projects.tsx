import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "My NutriGuru",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Google OAuth"],
    overview: "A comprehensive MERN stack application designed to help users track their nutrition and maintain a healthy lifestyle through personalized food logging and analysis.",
    objectives: [
      "Create an intuitive platform for tracking daily nutritional intake",
      "Implement secure user authentication using Google OAuth 2.0",
      "Provide structured data storage for long-term nutrition tracking",
      "Design a responsive interface accessible across all devices"
    ],
    methodology: "Built using the MERN stack with a focus on user experience and data security. Implemented RESTful API architecture for seamless frontend-backend communication. Utilized MongoDB for flexible schema design to accommodate diverse food items and user preferences.",
    outcome: "Successfully deployed a fully functional nutrition tracking application with secure authentication, intuitive food logging forms, and persistent data storage. The application has been tested across multiple devices and browsers.",
    innovations: [
      "Integration of Google OAuth 2.0 for seamless authentication",
      "Dynamic form validation for accurate food entry",
      "Structured MongoDB schema for efficient data retrieval"
    ],
    challenges: "Managing state across multiple components required implementing Redux for global state management. Ensuring data consistency between frontend and backend necessitated careful API design and error handling."
  },
  {
    title: "Expense Tracker",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    overview: "A personal finance management application built with Flask that enables users to track their income and expenses, providing insights into spending patterns.",
    objectives: [
      "Develop a secure login system for personal finance data",
      "Create an intuitive dashboard for managing transactions",
      "Implement persistent storage using SQLite database",
      "Provide visual representations of financial data"
    ],
    methodology: "Utilized Flask framework for rapid development and session management. Designed a normalized database schema in SQLite to ensure data integrity. Implemented server-side validation and secure password hashing.",
    outcome: "Delivered a functional expense tracking application with user authentication, comprehensive dashboard, and reliable data persistence. Users can categorize expenses and view spending trends over time.",
    innovations: [
      "Flask session-based authentication system",
      "Real-time calculation of balance and categorization",
      "Responsive design adaptable to mobile devices"
    ],
    challenges: "Implementing secure session management required understanding Flask's security features. Designing an efficient database schema that balances normalization with query performance was crucial."
  },
  {
    title: "Typing Speed Test",
    tech: ["HTML", "CSS", "JavaScript"],
    overview: "An interactive web application designed to measure and improve typing speed and accuracy through real-time feedback and visual indicators.",
    objectives: [
      "Create an engaging typing practice platform",
      "Provide real-time character-by-character feedback",
      "Design a retro-inspired user interface",
      "Implement visual keypress indicators"
    ],
    methodology: "Built using vanilla JavaScript for DOM manipulation and event handling. Designed a retro-style CSS theme for visual appeal. Implemented algorithms to calculate words per minute (WPM) and accuracy percentage.",
    outcome: "Launched an interactive typing test application with immediate feedback, accuracy metrics, and engaging visual design. The application successfully helps users improve their typing skills.",
    innovations: [
      "Character-level validation with color-coded feedback",
      "Retro-style UI design for enhanced user experience",
      "Real-time WPM and accuracy calculations"
    ],
    challenges: "Ensuring accurate timing mechanisms required careful handling of JavaScript's setTimeout and setInterval functions. Creating smooth visual transitions for keypress indicators needed CSS animation optimization."
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <Card className="p-8 bg-card">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Interdisciplinary Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              
              <div className="space-y-4 text-foreground/90">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Overview</h4>
                  <p>{project.overview}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Objectives</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Methodology</h4>
                  <p>{project.methodology}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Innovations</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {project.innovations.map((innovation, i) => (
                      <li key={i}>{innovation}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenges & Solutions</h4>
                  <p>{project.challenges}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
