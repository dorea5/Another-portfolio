import { PropsWithChildren } from "react";


interface SectionProps extends PropsWithChildren {
  className?: string;
}

export const Section = (props: SectionProps) => {
  return (
    <section className={`max-w-3xl px-4 m-auto ${props.className || ""}`}>
      {props.children}
    </section>
  );
};