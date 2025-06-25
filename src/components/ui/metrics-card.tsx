import React from "react";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  isHighlighted?: boolean;
  className?: string;
}

export function MetricsCard({
  title,
  value,
  change,
  isPositive,
  isHighlighted,
  className,
}: MetricsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary p-4",
        isHighlighted && "bg-gray-100",
        className,
      )}
    >
      <div className="text-component-small text-mailchimp-text-secondary">
        {title}
      </div>
      <div className="text-2xl font-normal text-mailchimp-text-primary">
        {value}
      </div>
      {change && (
        <div className="flex items-center gap-1">
          <div
            className={cn(
              "h-0 w-0",
              isPositive
                ? "border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-b-green-500"
                : "border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-red-500",
            )}
          />
          <span
            className={cn(
              "text-component-x-small",
              isPositive ? "text-green-600" : "text-red-600",
            )}
          >
            {change}
          </span>
        </div>
      )}
    </div>
  );
}
