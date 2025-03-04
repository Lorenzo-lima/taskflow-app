import { HTMLProps } from "react";

export function TypographySmall({ children, ...props }: HTMLProps<HTMLHeadingElement>) {
    return (
      <small className="text-sm font-medium leading-none" {...props}>{children}</small>
    )
  }
  