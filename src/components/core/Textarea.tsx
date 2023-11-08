import { ark } from "@ark-ui/react";

import { cva, cx } from "lib/util";

import type { VariantProps } from "cva";
import type { ComponentProps } from "react";

const textarea = cva({
  base: "rounded-md border border-accent-subtle bg-background-primary caret-brand-primary-500 placeholder:text-foreground-muted transition-colors duration-300 focus:outline-brand-primary-500",
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

export interface Props extends ComponentProps<typeof ark.textarea>, VariantProps<typeof textarea> {
  label?: string;
  isRequired?: boolean;
}

const Textarea = ({ label, isRequired, disabled, className, size, rows = 5, ...rest }: Props) => {
  const classes = cx(textarea({ size }), disabled && "opacity-40 cursor-not-allowed");

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-center gap-1">
        {label && <label className="text-accent-emphasized">{label}</label>}
        {isRequired && (
          <em className="whitespace-nowrap text-xs text-brand-primary-500" role="alert">
            *Required
          </em>
        )}
      </div>
      <ark.textarea
        className={cx(classes, className)}
        disabled={disabled}
        aria-disabled={disabled}
        rows={rows}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
