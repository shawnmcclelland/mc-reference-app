import React from "react";
import { cn } from "@/lib/utils";

const chartData = [
  { date: "Jan 1", value: 25 },
  { date: "Jan 5", value: 35 },
  { date: "Jan 8", value: 15 },
  { date: "Jan 13", value: 30 },
  { date: "Jan 16", value: 10 },
  { date: "Jan 19", value: 45 },
  { date: "Feb 1", value: 50 },
  { date: "Feb 5", value: 35 },
  { date: "Feb 8", value: 20 },
  { date: "Feb 13", value: 30 },
  { date: "Mar 1", value: 25 },
];

interface CampaignChartProps {
  className?: string;
}

export function CampaignChart({ className }: CampaignChartProps) {
  const maxValue = Math.max(...chartData.map((d) => d.value));
  const width = 800;
  const height = 200;
  const padding = 40;

  // Create SVG path
  const points = chartData.map((point, index) => {
    const x =
      (index / (chartData.length - 1)) * (width - 2 * padding) + padding;
    const y =
      height - padding - (point.value / maxValue) * (height - 2 * padding);
    return `${x},${y}`;
  });

  const pathData = `M ${points.join(" L ")}`;

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-4">
        <h3 className="text-base font-normal text-mailchimp-text-primary mb-1">
          Email open rate over time
        </h3>
      </div>
      <div className="relative">
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="80"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 40"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Y-axis labels */}
          {[0, 1, 2, 3, 4].map((i) => {
            const y = height - padding - (i * (height - 2 * padding)) / 4;
            const value = (i * maxValue) / 4;
            return (
              <g key={i}>
                <text
                  x={padding - 10}
                  y={y + 5}
                  textAnchor="end"
                  className="text-xs fill-mailchimp-text-quaternary"
                >
                  {Math.round(value)}%
                </text>
              </g>
            );
          })}

          {/* X-axis labels */}
          {chartData.map((point, index) => {
            if (index % 2 === 0) {
              const x =
                (index / (chartData.length - 1)) * (width - 2 * padding) +
                padding;
              return (
                <text
                  key={index}
                  x={x}
                  y={height - 10}
                  textAnchor="middle"
                  className="text-xs fill-mailchimp-text-quaternary"
                >
                  {point.date}
                </text>
              );
            }
            return null;
          })}

          {/* Chart line */}
          <path
            d={pathData}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {chartData.map((point, index) => {
            const x =
              (index / (chartData.length - 1)) * (width - 2 * padding) +
              padding;
            const y =
              height -
              padding -
              (point.value / maxValue) * (height - 2 * padding);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#3b82f6"
                stroke="#fff"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
