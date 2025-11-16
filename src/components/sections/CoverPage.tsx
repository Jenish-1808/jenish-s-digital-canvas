import profilePhoto from "@/assets/profile-photo.jpeg";

export const CoverPage = () => {
  return (
    <section id="cover" className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mb-8">
        <img 
          src={profilePhoto} 
          alt="Jenish Moghariya" 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4 text-foreground">Jenish Moghariya</h1>
      <h2 className="text-2xl text-muted-foreground mb-2">B.Tech Computer Engineering</h2>
      <p className="text-xl text-muted-foreground mb-8">Pandit Deendayal Energy University</p>
      <div className="text-muted-foreground mb-12">Submitted: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
      <blockquote className="text-2xl italic text-primary font-medium max-w-2xl">
        "Building, Learning, Improving — One Line of Code at a Time."
      </blockquote>
    </section>
  );
};
