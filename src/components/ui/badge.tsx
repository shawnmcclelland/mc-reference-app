import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-family-component text-xs font-normal leading-4",
  {
    variants: {
      variant: {
        // Success badges - matches Figma "Subscribed" badges
        success: [
          "bg-[var(--color-container-background-positive)]",
          "text-[var(--color-text-primary)]",
          "border-0",
        ].join(" "),

        // Warning badges - matches Figma "Unsubscribed" badges
        warning: [
          "bg-[var(--color-container-background-attention)]",
          "text-[var(--color-text-primary)]",
          "border-0",
        ].join(" "),

        // Info badges - matches Figma tag badges
        info: [
          "bg-[var(--color-container-background-info)]",
          "text-[var(--color-text-primary)]",
          "border-0",
        ].join(" "),

        // Pending/Neutral badges - matches Figma "Non-subscribed" badges
        pending: [
          "bg-[var(--color-container-background-neutral)]",
          "text-[var(--color-text-primary)]",
          "border-0",
        ].join(" "),

        // Default variant
        default: [
          "bg-[var(--color-container-background-primary)]",
          "text-[var(--color-text-primary)]",
          "border border-[var(--color-container-border-secondary)]",
        ].join(" "),

        // Secondary variant
        secondary: [
          "bg-[var(--color-action-passive-subtle-active,#E2E9ED)]",
          "text-[var(--color-text-secondary)]",
          "border-0",
        ].join(" "),

        // Outline variant
        outline: [
          "bg-transparent",
          "text-[var(--color-text-primary)]",
          "border border-[var(--color-container-border-secondary)]",
        ].join(" "),
      },
      size: {
        sm: "px-1.5 py-0.5 text-xs",
        default: "px-1.5 py-0.5 text-xs",
        lg: "px-2 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        style={{
          padding:
            "var(--space-component-stack-padding-x-small) var(--space-component-inline-padding-small)",
          borderRadius: "var(--radius-action)",
          font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
        }}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
