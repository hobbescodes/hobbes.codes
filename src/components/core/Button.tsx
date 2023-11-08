import { cva, cx } from "lib/util";

import type { VariantProps } from "cva";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const button = cva({
  base: "flex font-medium items-center rounded-md transition-colors duration-300",
  variants: {
    variant: {
      primary: "gap-2 bg-brand-primary-500 hover:bg-brand-primary-500/80 text-foreground-accent",
      outline:
        "gap-2 border border-brand-primary-500 bg-background-primary hover:bg-accent-subtle text-brand-primary-500",
      unset: null,
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

/**
 * Core Button component.
 */
const Button = ({ children, isLoading, size, variant, isDisabled, className, ...rest }: Props) => {
  const classes = cx(
    button({ variant, size }),
    isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
    isLoading && "animate-pulse duration-1000",
  );

  return (
    <button
      className={cx(classes, className)}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
