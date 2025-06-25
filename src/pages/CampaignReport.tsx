import React from "react";
import { MetricsCard } from "@/components/ui/metrics-card";
import { CampaignChart } from "@/components/ui/campaign-chart";

const ViewDetailsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.5C4.5 3.5 1.73 5.61 1 8C1.73 10.39 4.5 12.5 8 12.5C11.5 12.5 14.27 10.39 15 8C14.27 5.61 11.5 3.5 8 3.5ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11ZM8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8 6.5Z"
      fill="currentColor"
    />
  </svg>
);

const OptionsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5.5C8.828 5.5 9.5 4.828 9.5 4C9.5 3.172 8.828 2.5 8 2.5C7.172 2.5 6.5 3.172 6.5 4C6.5 4.828 7.172 5.5 8 5.5ZM8 6.5C7.172 6.5 6.5 7.172 6.5 8C6.5 8.828 7.172 9.5 8 9.5C8.828 9.5 9.5 8.828 9.5 8C9.5 7.172 8.828 6.5 8 6.5ZM8 10.5C7.172 10.5 6.5 11.172 6.5 12C6.5 12.828 7.172 13.5 8 13.5C8.828 13.5 9.5 12.828 9.5 12C9.5 11.172 8.828 10.5 8 10.5Z"
      fill="currentColor"
    />
  </svg>
);

const EventTrackerData = [
  {
    icon: "🛒",
    label: "Purchased from email",
    count: "121",
    subtext: "198 total purchased",
    color: "text-red-500",
  },
  {
    icon: "💰",
    label: "Revenue from email",
    count: "$3,630",
    subtext: "$3,948 total revenue",
    color: "text-blue-500",
  },
  {
    icon: "📄",
    label: "Page views from email",
    count: "241",
    subtext: "308 total page views",
    color: "text-red-500",
  },
  {
    icon: "🎫",
    label: "Remaining tickets",
    count: "132",
    subtext: "300 total tickets",
    color: "text-gray-500",
  },
];

const linkPerformanceData = [
  {
    url: "www.facebook.com",
    totalClicks: 332,
    clickPercentage: "46.5%",
    uniqueClicks: 326,
  },
  {
    url: "https://eventbrite.com/2023-clay-auction",
    totalClicks: 266,
    clickPercentage: "40.1%",
    uniqueClicks: 241,
  },
  {
    url: "https://instagram.com/",
    totalClicks: 65,
    clickPercentage: "9.1%",
    uniqueClicks: 48,
  },
  {
    url: "https://claystudio.com",
    totalClicks: 30,
    clickPercentage: "4.3%",
    uniqueClicks: 17,
  },
];

const domainPerformanceData = [
  {
    domain: "gmail.com",
    delivered: "18,503",
    opened: "3,760",
    clicked: "433",
    bounced: "67",
    unsubscribed: "462",
  },
  {
    domain: "yahoo.com",
    delivered: "3,522",
    opened: "675",
    clicked: "179",
    bounced: "23",
    unsubscribed: "60",
  },
  {
    domain: "outlook.com",
    delivered: "1,729",
    opened: "326",
    clicked: "11",
    bounced: "11",
    unsubscribed: "20",
  },
  {
    domain: "claycollective.com",
    delivered: "3",
    opened: "3",
    clicked: "3",
    bounced: "0",
    unsubscribed: "0",
  },
];

const targetedPerformanceData = [
  {
    segment: "New subscribers",
    delivered: "7,203",
    opened: "1,554",
    clicked: "265",
    bounced: "82",
    unsubscribed: "12",
  },
  {
    segment: "Previous buyers",
    delivered: "11,119",
    opened: "2,473",
    clicked: "429",
    bounced: "7",
    unsubscribed: "37",
  },
  {
    segment: "High spenders",
    delivered: "4,492",
    opened: "933",
    clicked: "192",
    bounced: "7",
    unsubscribed: "10",
  },
  {
    segment: "Students",
    delivered: "2,843",
    opened: "434",
    clicked: "105",
    bounced: "19",
    unsubscribed: "2",
  },
];

const DemographicsChart = ({ title, data }: { title: string; data: any[] }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <h4 className="text-sm font-medium text-mailchimp-text-primary">
        {title}
      </h4>
      <div className="relative">
        <svg width="120" height="120" className="transform -rotate-90">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (percentage / 100) * 360;
            const largeArcFlag = angle > 180 ? 1 : 0;
            const x1 = 60 + 50 * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 60 + 50 * Math.sin((currentAngle * Math.PI) / 180);
            const x2 =
              60 + 50 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
            const y2 =
              60 + 50 * Math.sin(((currentAngle + angle) * Math.PI) / 180);

            currentAngle += angle;

            const pathData = [
              `M 60 60`,
              `L ${x1} ${y1}`,
              `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `Z`,
            ].join(" ");

            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-white" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-mailchimp-text-secondary">
              {item.label}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CampaignReport() {
  const genderData = [
    { label: "Female", value: 58.9, color: "#3b82f6" },
    { label: "Male", value: 14.8, color: "#ef4444" },
    { label: "Another identity", value: 6.3, color: "#10b981" },
    { label: "Unknown", value: 20.0, color: "#6b7280" },
  ];

  const ageData = [
    { label: "18-24", value: 26.9, color: "#3b82f6" },
    { label: "25-34", value: 34.2, color: "#ef4444" },
    { label: "35+", value: 38.9, color: "#10b981" },
  ];

  const locationData = [
    { label: "United States", value: 92.9, color: "#3b82f6" },
    { label: "Australia", value: 1.0, color: "#ef4444" },
    { label: "Singapore", value: 1.8, color: "#10b981" },
    { label: "Other", value: 3.8, color: "#6b7280" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Campaign Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-xl font-normal text-mailchimp-text-primary">
                    Fired & Formed - Annual Silent Auction
                  </h1>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-3 py-1 text-component-small text-mailchimp-text-primary">
                      <ViewDetailsIcon />
                      View clickmap
                    </button>
                    <button className="flex items-center gap-1 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-3 py-1 text-component-small text-mailchimp-text-primary">
                      <ViewDetailsIcon />
                      View details
                    </button>
                  </div>
                </div>
                <div className="text-component-small text-mailchimp-text-secondary space-y-1">
                  <div>Recipients: 22,576</div>
                  <div>Audience: Clay Collective</div>
                  <div>
                    Subject: Fired & Formed: Clay Collective Silent Auction
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Sent: Jun 21, 2023 • 3:33 pm</span>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-green-600">Sent</span>
                  </div>
                </div>
              </div>
              <div className="rounded-mailchimp bg-gradient-to-br from-purple-400 to-blue-400 p-6 text-white">
                <div className="text-center">
                  <div className="text-2xl font-light mb-2">🎨</div>
                  <div className="text-lg font-medium">Welcome</div>
                  <div className="text-lg font-medium">to Clay</div>
                  <div className="text-sm opacity-90 mt-2">|</div>
                </div>
              </div>
            </div>

            {/* Overview Metrics */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-normal text-mailchimp-text-primary">
                  Overview metrics
                </h2>
                <OptionsIcon />
              </div>
              <div className="grid grid-cols-5 gap-4">
                <MetricsCard
                  title="Open rate"
                  value="18.2%"
                  change="8.7%"
                  isPositive
                  isHighlighted
                />
                <MetricsCard
                  title="Click rate"
                  value="3.1%"
                  change="8.6%"
                  isPositive
                />
                <MetricsCard
                  title="Bounce rate"
                  value="4.2%"
                  change="6.1%"
                  isPositive={false}
                />
                <MetricsCard
                  title="Unsubscribe rate"
                  value="2.4%"
                  change="8.4%"
                  isPositive={false}
                />
                <MetricsCard title="Unsubscribes" value="62" change="6.2%" />
              </div>
            </div>

            {/* Chart */}
            <div className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary p-6">
              <CampaignChart />
            </div>

            {/* Link Performance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-normal text-mailchimp-text-primary">
                  Link performance
                </h2>
                <button className="text-component-small text-blue-600 hover:underline">
                  View clickmap
                </button>
              </div>
              <div className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Fragment name
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Total clicks
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Click percentage
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Unique clicks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {linkPerformanceData.map((row, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.url}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.totalClicks}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.clickPercentage}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.uniqueClicks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Event Tracker */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-normal text-mailchimp-text-primary">
                    Event tracker
                  </h2>
                  <div className="flex gap-2">
                    <button className="text-component-small text-mailchimp-text-secondary border-b border-transparent">
                      🌐 View event
                    </button>
                    <button className="text-component-small text-blue-600 border-b border-blue-600">
                      ⬇️ Download automation
                    </button>
                  </div>
                </div>
                <div className="text-component-small text-mailchimp-text-secondary mb-4">
                  Track the important events in your email
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {EventTrackerData.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className={`text-component-small ${item.color}`}>
                          {item.label}
                        </span>
                      </div>
                      <div className="text-xl font-medium text-mailchimp-text-primary mb-1">
                        {item.count}
                      </div>
                      <div className="text-component-x-small text-mailchimp-text-secondary">
                        {item.subtext}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automation Callout */}
              <div className="rounded-mailchimp bg-slate-800 p-6 text-white">
                <h3 className="text-lg font-medium mb-2">
                  Make your email go further
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  People who clicked your creations will be more likely to go to
                  the auction. Automatically follow up on browsers to email for
                  better attendance.
                </p>
                <button className="rounded-mailchimp bg-mailchimp-cavendish px-4 py-2 text-sm text-mailchimp-text-primary font-medium">
                  Start automation
                </button>
              </div>
            </div>

            {/* Demographics */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-normal text-mailchimp-text-primary">
                  Predicted demographics
                </h2>
                <div className="flex gap-4 text-component-small">
                  <button className="text-blue-600 border-b border-blue-600">
                    Opens
                  </button>
                  <button className="text-mailchimp-text-secondary">
                    Clicks
                  </button>
                  <button className="text-mailchimp-text-secondary">
                    Recipients
                  </button>
                  <OptionsIcon />
                </div>
              </div>
              <div className="text-component-small text-mailchimp-text-secondary mb-6">
                Based on our inference and behavior data website predicts age
                and gender of contacts to identify key characteristics of your
                audience.
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-cols-3 gap-8">
                  <DemographicsChart title="Gender" data={genderData} />
                  <DemographicsChart title="Age Range" data={ageData} />
                  <DemographicsChart
                    title="Top locations"
                    data={locationData}
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-base font-normal text-mailchimp-text-primary">
                    18-24
                  </div>
                  <div className="text-component-small text-mailchimp-text-secondary">
                    26.9%
                  </div>
                  <div className="space-y-2">
                    <div className="text-component-small text-mailchimp-text-secondary">
                      Add to custom import
                    </div>
                    <div className="text-component-small text-mailchimp-text-secondary">
                      Create segment
                    </div>
                    <div className="text-component-small text-mailchimp-text-secondary">
                      Create tag
                    </div>
                    <div className="text-component-small text-mailchimp-text-secondary">
                      Target in campaign
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Domain Performance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-normal text-mailchimp-text-primary">
                  Domain performance
                </h2>
                <div className="flex gap-4 text-component-small">
                  <span className="text-mailchimp-text-secondary">Clients</span>
                  <button className="text-blue-600 border-b border-blue-600">
                    Providers
                  </button>
                  <OptionsIcon />
                </div>
              </div>
              <div className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Segment name
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Delivered
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Unique opens
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Clicked
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Bounced
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Unsubscribed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {domainPerformanceData.map((row, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.domain}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.delivered}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.opened}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.clicked}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.bounced}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.unsubscribed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Targeted Performance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-normal text-mailchimp-text-primary">
                  Targeted performance
                </h2>
                <div className="flex gap-4 text-component-small">
                  <button className="text-blue-600 border-b border-blue-600">
                    Segments
                  </button>
                  <button className="text-mailchimp-text-secondary">
                    Tags
                  </button>
                  <button className="text-mailchimp-text-secondary">
                    Groups
                  </button>
                  <OptionsIcon />
                </div>
              </div>
              <div className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Segment name
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Delivered
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Unique opens
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Clicked
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Bounced
                      </th>
                      <th className="px-4 py-2 text-left text-component-small text-mailchimp-text-secondary">
                        Unsubscribed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {targetedPerformanceData.map((row, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.segment}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.delivered}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.opened}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.clicked}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.bounced}
                        </td>
                        <td className="px-4 py-3 text-component-small text-mailchimp-text-primary">
                          {row.unsubscribed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
