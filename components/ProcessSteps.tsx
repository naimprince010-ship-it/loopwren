export function ProcessSteps() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
    { num: "02", title: "Design", desc: "Creating intuitive interfaces and architecture" },
    { num: "03", title: "Build", desc: "Developing with modern, scalable technology" },
    { num: "04", title: "Launch", desc: "Thorough testing and smooth deployment" },
    { num: "05", title: "Support", desc: "Ongoing maintenance and improvements" },
  ];

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row gap-8 justify-between relative">
        {/* Connecting Line (hidden on mobile) */}
        <div className="hidden md:block absolute top-[28px] left-8 right-8 h-[2px] bg-muted -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="flex-1 relative flex flex-col md:items-center text-left md:text-center">
            <div className="w-14 h-14 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-heading font-bold text-xl mb-6 shadow-sm">
              {step.num}
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
