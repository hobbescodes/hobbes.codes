import { ark } from "@ark-ui/react";

import { cva, cx } from "lib/util";

import type { VariantProps } from "cva";
import type { ComponentProps } from "react";

const input = cva({
  base: "w-full rounded-md border border-accent-subtle bg-background-primary caret-brand-primary-500 placeholder:text-foreground-muted transition-colors duration-300 focus:outline-brand-primary-500",
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

const Input = ({ label, required, disabled, className, size, ...rest }: Props) => {
  const classes = cx(input({ size }), disabled && "opacity-40 cursor-not-allowed");

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-center gap-1">
        {label && <label className="text-accent-emphasized">{label}</label>}
        {required && (
          <em className="whitespace-nowrap text-xs text-brand-primary-500" role="alert">
            *Required
          </em>
        )}
      </div>

      <ark.input
        className={cx(classes, className)}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Input;
