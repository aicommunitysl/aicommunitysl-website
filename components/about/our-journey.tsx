import { getMilestones } from "@/lib/data";

export function OurJourney() {
  const delayClasses = ["delay-0", "delay-1", "delay-2", "delay-3", "delay-4"];
  const milestones = getMilestones();

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Journey
        </h2>

        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const delayClass = delayClasses[index % delayClasses.length];
            return (
              <div
                key={index}
                className={`flex gap-6 animate-fade-in ${delayClass}`}
              >
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  {index !== milestones.length - 1 && (
                    <div className="w-1 h-20 bg-linear-to-b from-primary to-primary/0 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <p className="text-sm font-semibold text-primary mb-1">
                    {milestone.year}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
