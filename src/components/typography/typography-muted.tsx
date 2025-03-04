import { HTMLProps } from "react";

export function TypographyMuted({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <p className="text-sm text-muted-foreground" {...props}>
      {children}
    </p>
  );
}
