import { HTMLProps } from "react";

export function TypographyH3({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  );
}
