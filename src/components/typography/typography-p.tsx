import { HTMLProps } from "react";

export function TypographyP({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
}
