import { clsx } from "clsx";

import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "primary" | "outline" | "unstyled";

export interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
}

/**
 * Core Button component.
 */
const Button = ({
  children,
  isLoading,
  size = "md",
  variant = "unstyled",
  isDisabled,
  className,
  ...rest
}: Props) => {
  const baseClasses = "flex font-medium items-center rounded-md transition-colors duration-300";

  const sizeClasses: Record<Size, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-5 py-3 text-lg",
    xl: "px-5 py-3 text-lg",
  };
  const variantClasses: Record<Variant, string> = {
    primary: "gap-2 bg-brand-primary-500 hover:bg-brand-primary-500/80 text-foreground-primary",
    outline:
      "gap-2 border border-brand-primary-500 bg-inherit dark:hover:bg-brand-primary-950 hover:bg-brand-primary-50 text-brand-primary-500",
    unstyled: "",
  };

  const classes = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
    isLoading && "animate-pulse",
  );

  return (
    <button
      className={clsx(classes, className)}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
