import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
