import { HTMLProps } from "react";

export function TypographyH2({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h2>
  );
}
