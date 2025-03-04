import { HTMLProps } from "react";

interface TypographyH1Props extends HTMLProps<HTMLHeadingElement> {
  animationClass?: string;
  gradientClass?: string;
}

export function TypographyH1({
  children,
  animationClass,
  gradientClass,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${animationClass} ${gradientClass}`}
      {...props}
    >
      {children}
    </h1>
  );
}
