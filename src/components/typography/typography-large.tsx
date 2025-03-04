import { HTMLProps } from "react";

export function TypographyLarge({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <div className="text-lg font-semibold" {...props}>
      {children}
    </div>
  );
}
