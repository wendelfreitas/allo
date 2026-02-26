"use client";

import { AnimatedSection } from "../../shared/AnimatedSection/AnimatedSection";

const metrics = [
  { value: "500+", label: "Restaurants" },
  { value: "50K+", label: "Happy customers" },
  { value: "25 min", label: "Avg. delivery" },
  { value: "4.8", label: "App rating" },
];

export function MetricsSection() {
  return (
    <section className="section-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <AnimatedSection
              key={metric.label}
              delay={i * 0.1}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#FF6B55] sm:text-4xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-[#6b6b6b]">{metric.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
