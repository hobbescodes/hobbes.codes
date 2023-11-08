import { ark } from "@ark-ui/react";

import { cva, cx } from "lib/util";

import type { VariantProps } from "cva";
import type { ComponentProps } from "react";

const input = cva({
  base: "rounded-md border border-foreground-muted bg-background-primary caret-brand-primary-500 placeholder:text-foreground-muted transition-colors duration-300 focus:outline-primary-500",
  variants: {
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface Props
  extends Omit<ComponentProps<typeof ark.input>, "size">,
    VariantProps<typeof input> {
  label?: string;
}

const Input = ({ label, disabled, className, size, ...rest }: Props) => {
  const classes = cx(input({ size }), disabled && "opacity-40 cursor-not-allowed");

  <div className="flex flex-col gap-1">
    {label && <label className="text-sm">{label}</label>}
    <ark.input
      className={cx(classes, className)}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    />
  </div>;
};

export default Input;
