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
            {/* Email Details Header */}
            <div className="flex items-center gap-10 rounded-mailchimp bg-[#F8FAFB] p-8">
              <div className="flex flex-col gap-2 flex-1">
                <h1 className="text-[34px] font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.68px]">
                  Fired & Formed - Annual Silent Auction
                </h1>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 pt-2">
                    <span className="text-component-x-small text-[#727E85]">
                      Recipients
                    </span>
                    <span className="text-component-x-small text-mailchimp-text-primary">
                      23,019
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pt-2 border-t border-mailchimp-border-primary">
                    <span className="text-component-x-small text-[#727E85]">
                      Audience
                    </span>
                    <span className="text-component-x-small text-mailchimp-text-primary">
                      Clay Collective
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pt-2 border-t border-mailchimp-border-primary">
                    <span className="text-component-x-small text-[#727E85]">
                      Subject
                    </span>
                    <span className="text-component-x-small text-mailchimp-text-primary">
                      Fired & Formed: Clay Collective Silent Auction
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pt-2 border-t border-mailchimp-border-primary">
                    <span className="text-component-x-small text-[#727E85]">
                      Status
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center justify-center px-1.5 py-0.5 rounded-mailchimp bg-[#D2F8D5]">
                        <span className="text-component-x-small text-mailchimp-text-primary">
                          Sent
                        </span>
                      </div>
                      <span className="text-component-x-small text-mailchimp-text-primary">
                        Tue Jan 21, 2025 • 3:53 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Template Card */}
              <div className="flex flex-col gap-1 w-[234px] h-[234px] aspect-square relative">
                <div className="flex flex-col items-center h-full rounded-t-lg bg-[#E2E9ED] relative overflow-hidden">
                  <div className="flex flex-col items-center h-full bg-[#6B8395] text-[#F3E8E2] p-4 w-full">
                    {/* Clay Logo Placeholder */}
                    <div className="w-14 h-4 bg-[#F3E8E2] rounded mb-3 mt-6" />

                    {/* Welcome Text */}
                    <div className="text-center text-[28px] font-normal leading-tight mb-1">
                      Welcome to Clay
                    </div>

                    {/* Divider */}
                    <div className="w-1 h-7 bg-[#F3E8E2] mb-3" />

                    {/* Image Placeholder */}
                    <div className="w-[100px] h-[140px] bg-[#F3E8E2] rounded-t-[80px] mb-3" />

                    {/* Text Content */}
                    <div className="text-[6px] text-center leading-tight opacity-90 mb-2 px-2">
                      Dear Mike, We're so glad you've joined us.
                      <br />
                      <br />
                      CLAY is a leader in the field of ceramic arts...
                    </div>

                    {/* Button */}
                    <div className="px-4 py-1.5 bg-[#F3E8E2] rounded-lg">
                      <span className="text-[6px] text-[#6B8395] font-semibold">
                        Explore member benefits
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto w-full bg-[#F3E8E2] text-[#6B8395] text-center p-2">
                      <div className="w-full h-px bg-[#6B8395] mb-2" />
                      <div className="text-[8px] leading-tight">
                        Clay Collective
                        <br />
                        8550 White Fir St, Reno, NV 89523
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[rgba(76,85,91,0.18)]" />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center px-2 relative -mt-2">
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-3 py-1 text-component-x-small text-mailchimp-text-primary">
                      View clickmap
                    </button>
                    <button className="flex items-center gap-1 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-3 py-1 text-component-x-small text-mailchimp-text-primary">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Section */}
            <div className="flex flex-col gap-3">
              {/* Overview Metrics */}
              <div className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary p-6">
                <div className="flex items-center justify-between mb-4 px-4">
                  <h2 className="text-xl font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                    Overview metrics
                  </h2>
                  <button className="flex items-center justify-center w-6 h-6 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary p-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.01588 5.32131H8.01121C7.30397 5.32131 6.62569 5.60226 6.1256 6.10236C5.6255 6.60246 5.34455 7.28074 5.34455 7.98798C5.34455 8.69522 5.6255 9.3735 6.1256 9.8736C6.62569 10.3737 7.30397 10.6546 8.01121 10.6546C8.71846 10.6553 9.39698 10.3749 9.89751 9.87525C10.398 9.37559 10.6796 8.69756 10.6802 7.99031C10.6808 7.28307 10.4005 6.60455 9.90082 6.10401C9.40116 5.60348 8.72312 5.32193 8.01588 5.32131ZM8.01188 9.32131C7.74817 9.32099 7.49047 9.24248 7.27138 9.0957C7.05229 8.94892 6.88164 8.74046 6.78103 8.4967C6.68041 8.25293 6.65434 7.98481 6.70611 7.72622C6.75788 7.46764 6.88517 7.23022 7.07188 7.04398C7.19522 6.92002 7.34193 6.82178 7.50352 6.75495C7.66511 6.68812 7.83835 6.65403 8.01321 6.65465C8.36684 6.65465 8.70597 6.79512 8.95602 7.04517C9.20607 7.29522 9.34655 7.63436 9.34655 7.98798C9.34655 8.3416 9.20607 8.68074 8.95602 8.93079C8.70597 9.18084 8.36684 9.32131 8.01321 9.32131H8.01188Z"
                        fill="#21262A"
                      />
                      <path
                        d="M13.6292 8.93331L13.2899 8.73665C13.3623 8.24731 13.3623 7.74998 13.2899 7.26065L13.6305 7.06531C13.9366 6.8882 14.16 6.59701 14.2519 6.25552C14.3437 5.91403 14.2965 5.55006 14.1205 5.24331L13.4539 4.08798C13.277 3.78204 12.9862 3.55859 12.645 3.46652C12.3038 3.37444 11.94 3.42123 11.6332 3.59665L11.2919 3.79331C10.9024 3.4885 10.4728 3.23882 10.0152 3.05131V2.65798C10.0152 2.30436 9.87474 1.96522 9.62469 1.71517C9.37464 1.46512 9.0355 1.32465 8.68188 1.32465H7.34855C6.99492 1.32465 6.65579 1.46512 6.40574 1.71517C6.15569 1.96522 6.01521 2.30436 6.01521 2.65798V3.05798C5.55879 3.24257 5.13007 3.48935 4.74121 3.79131L4.39521 3.59131C4.09087 3.41471 3.72905 3.36557 3.38863 3.45461C3.04821 3.54365 2.75678 3.76365 2.57788 4.06665L1.91121 5.21998C1.73398 5.52595 1.68554 5.8898 1.77656 6.23149C1.86757 6.57317 2.09059 6.86471 2.39655 7.04198L2.73588 7.23865C2.69978 7.48323 2.68129 7.73008 2.68055 7.97731C2.68059 8.22536 2.69819 8.47309 2.73321 8.71865L2.39388 8.91398C2.0874 9.09001 1.86335 9.38052 1.77097 9.72167C1.67858 10.0628 1.72543 10.4267 1.90121 10.7333L2.56788 11.8886C2.65515 12.0405 2.77148 12.1736 2.91021 12.2805C3.04895 12.3873 3.20737 12.4658 3.37644 12.5114C3.54551 12.5571 3.72191 12.5689 3.89557 12.5464C4.06923 12.5238 4.23674 12.4673 4.38855 12.38L4.72988 12.1833C5.11928 12.4884 5.54888 12.7383 6.00655 12.926V13.3166C6.00655 13.6703 6.14702 14.0094 6.39707 14.2595C6.64712 14.5095 6.98626 14.65 7.33988 14.65H8.67321C9.02684 14.65 9.36597 14.5095 9.61602 14.2595C9.86607 14.0094 10.0065 13.6703 10.0065 13.3166V12.9333C10.4649 12.7476 10.8952 12.4993 11.2852 12.1953L11.6259 12.3953C11.9319 12.5725 12.2957 12.621 12.6374 12.53C12.9791 12.439 13.2706 12.2159 13.4479 11.91L14.1145 10.7566C14.2025 10.6051 14.2597 10.4377 14.283 10.264C14.3062 10.0903 14.2949 9.91372 14.2498 9.74437C14.2048 9.57503 14.1268 9.41623 14.0203 9.27706C13.9138 9.1379 13.7809 9.02109 13.6292 8.93331ZM11.9005 7.06665C12.0507 7.67508 12.0507 8.31088 11.9005 8.91931C11.8669 9.05913 11.8793 9.20609 11.936 9.33826C11.9928 9.47042 12.0907 9.58071 12.2152 9.65265L12.9632 10.0873L12.2965 11.24L11.5479 10.8066C11.4236 10.7347 11.2795 10.7049 11.137 10.7214C10.9944 10.738 10.861 10.8002 10.7565 10.8986C10.3024 11.3271 9.75455 11.6437 9.15655 11.8233C9.01889 11.8641 8.89808 11.9482 8.81208 12.0632C8.72607 12.1781 8.67948 12.3177 8.67921 12.4613V13.324H7.34588V12.462C7.34618 12.3183 7.30007 12.1784 7.21442 12.0631C7.12876 11.9478 7.00815 11.8632 6.87055 11.822C6.27177 11.6415 5.72373 11.3229 5.27055 10.892C5.16606 10.7935 5.03272 10.7312 4.89015 10.7141C4.74758 10.6971 4.6033 10.7262 4.47855 10.7973L3.72855 11.2293L3.06188 10.074L3.81188 9.64264C3.93678 9.571 4.03512 9.46084 4.0922 9.32866C4.14929 9.19647 4.16204 9.04935 4.12855 8.90931C4.05522 8.60654 4.01785 8.29617 4.01721 7.98465C4.01923 7.67283 4.05748 7.3623 4.13121 7.05931C4.16488 6.91949 4.15243 6.77253 4.09572 6.64037C4.03901 6.5082 3.94108 6.39792 3.81655 6.32598L3.06788 5.89265L3.73455 4.73865L4.48388 5.17331C4.49655 5.18065 4.51121 5.17998 4.52388 5.18665C4.56369 5.2048 4.60523 5.21887 4.64788 5.22865C4.6912 5.24233 4.73593 5.25105 4.78121 5.25465C4.79455 5.25465 4.80721 5.26265 4.82055 5.26265C4.85109 5.25903 4.88138 5.25346 4.91121 5.24598C4.94955 5.24222 4.98747 5.23508 5.02455 5.22465C5.06247 5.20868 5.09884 5.18927 5.13321 5.16665C5.17012 5.14777 5.20517 5.12545 5.23788 5.09998C5.24788 5.09131 5.26055 5.08865 5.26988 5.07931C5.72376 4.65017 6.27167 4.33306 6.86988 4.15331C6.88111 4.1482 6.89202 4.14241 6.90255 4.13598C6.94556 4.11834 6.98647 4.09598 7.02455 4.06931C7.06009 4.05059 7.0936 4.02825 7.12455 4.00265C7.15484 3.97276 7.18209 3.93993 7.20588 3.90465C7.23123 3.87209 7.25355 3.83727 7.27255 3.80065C7.28816 3.76336 7.30043 3.72477 7.30921 3.68531C7.3228 3.6419 7.33196 3.59723 7.33655 3.55198C7.33655 3.53998 7.34388 3.52931 7.34388 3.51665V2.65398H8.67721V3.51665C8.67692 3.6603 8.72303 3.8002 8.80868 3.91552C8.89433 4.03085 9.01494 4.11542 9.15255 4.15665C9.75086 4.3382 10.2987 4.65661 10.7525 5.08665C10.8567 5.18529 10.9899 5.24772 11.1323 5.26465C11.2747 5.28158 11.4188 5.25212 11.5432 5.18065L12.2939 4.74931L12.9605 5.90465L12.2105 6.33598C12.0874 6.40846 11.9908 6.5186 11.935 6.65015C11.8791 6.78171 11.8671 6.92771 11.9005 7.06665Z"
                        fill="#21262A"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-3 px-4 mb-4">
                  <div className="flex-1 flex flex-col gap-2 p-4 rounded-mailchimp bg-mailchimp-active-bg border border-mailchimp-border-primary">
                    <div className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                      Open rate
                    </div>
                    <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                      18.2%
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 4.37114e-07L10 8L0 8L5 4.37114e-07Z"
                          fill="#00892E"
                        />
                      </svg>
                      <span className="text-component-x-small font-medium text-[#00892E] tracking-[-0.12px]">
                        1%
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 p-4 border-r border-mailchimp-border-primary bg-mailchimp-background-primary">
                    <div className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                      Click rate
                    </div>
                    <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                      3.1%
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 4.37114e-07L10 8L0 8L5 4.37114e-07Z"
                          fill="#00892E"
                        />
                      </svg>
                      <span className="text-component-x-small font-medium text-[#00892E] tracking-[-0.12px]">
                        2%
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 p-4 rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary">
                    <div className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                      Bounce rate
                    </div>
                    <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                      4.2%
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 4.37114e-07L10 8L0 8L5 4.37114e-07Z"
                          fill="#DB334D"
                        />
                      </svg>
                      <span className="text-component-x-small font-medium text-[#DB334D] tracking-[-0.12px]">
                        1%
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 p-4 rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary">
                    <div className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                      Unsubscribe rate
                    </div>
                    <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                      2.4%
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 4.37114e-07L10 8L0 8L5 4.37114e-07Z"
                          fill="#DB334D"
                        />
                      </svg>
                      <span className="text-component-x-small font-medium text-[#DB334D] tracking-[-0.12px]">
                        1%
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 p-4 rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary">
                    <div className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                      Unsubscribes
                    </div>
                    <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                      62
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 4.37114e-07L10 8L0 8L5 4.37114e-07Z"
                          fill="#DB334D"
                        />
                      </svg>
                      <span className="text-component-x-small font-medium text-[#DB334D] tracking-[-0.12px]">
                        2%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="px-4">
                  <CampaignChart />
                </div>
              </div>

              {/* Link Performance */}
              <div className="rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                    Link performance
                  </h2>
                  <button className="flex items-center gap-1 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-2.5 py-1 text-component-x-small text-mailchimp-text-primary">
                    View clickmap
                  </button>
                </div>

                <div className="flex">
                  <div className="flex flex-col w-80">
                    <div className="flex items-center h-8 px-3 bg-[#F0F4F6]">
                      <span className="text-component-x-small text-[#727E85]">
                        Segment name
                      </span>
                    </div>
                    <div className="flex items-center h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small font-medium text-mailchimp-text-primary">
                        www.facebook.com
                      </span>
                    </div>
                    <div className="flex items-center h-13 px-3 border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                      <span className="text-component-small font-medium text-mailchimp-text-primary">
                        https://eventbrite.com/2025-clay-auction
                      </span>
                    </div>
                    <div className="flex items-center h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small font-medium text-mailchimp-text-primary">
                        https://instagram.com/
                      </span>
                    </div>
                    <div className="flex items-center h-13 px-3 bg-mailchimp-background-primary">
                      <span className="text-component-small font-medium text-mailchimp-text-primary">
                        https://claystudio.com
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-end h-8 px-3 bg-[#F0F4F6]">
                      <span className="text-component-x-small text-[#727E85]">
                        Total clicks
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        332
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                      <span className="text-component-small text-mailchimp-text-primary">
                        286
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        65
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        30
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-end h-8 px-3 bg-[#F0F4F6]">
                      <span className="text-component-x-small text-[#727E85]">
                        Click percentage
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        46.5%
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                      <span className="text-component-small text-mailchimp-text-primary">
                        40.1%
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        9.1%
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        4.3%
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-end h-8 px-3 bg-[#F0F4F6]">
                      <span className="text-component-x-small text-[#727E85]">
                        Unique clicks
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        326
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                      <span className="text-component-small text-mailchimp-text-primary">
                        241
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        48
                      </span>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 bg-mailchimp-background-primary">
                      <span className="text-component-small text-mailchimp-text-primary">
                        17
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="h-8 bg-[#F0F4F6]"></div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary"></div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                      <div className="flex items-center gap-px">
                        <button className="flex items-center gap-1 rounded-l-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-2.5 py-1 text-component-x-small text-mailchimp-text-primary">
                          View insights
                        </button>
                        <button className="flex items-center rounded-r-mailchimp border border-mailchimp-border-secondary bg-mailchimp-active-bg p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00935 10.6787C7.92165 10.6787 7.83482 10.6614 7.75382 10.6277C7.67283 10.5941 7.59927 10.5448 7.53735 10.4827L3.54269 6.47671C3.48075 6.41472 3.43162 6.34115 3.39811 6.26018C3.36461 6.17921 3.34738 6.09243 3.34741 6.00481C3.34744 5.91718 3.36473 5.83042 3.3983 5.74947C3.43186 5.66852 3.48103 5.59498 3.54302 5.53304C3.605 5.4711 3.67858 5.42198 3.75955 5.38847C3.84052 5.35497 3.92729 5.33774 4.01492 5.33777C4.10255 5.3378 4.18931 5.35509 4.27026 5.38865C4.3512 5.42221 4.42474 5.47139 4.48669 5.53338L8.01068 9.06671L11.544 5.54338C11.6692 5.41846 11.8389 5.34839 12.0157 5.34857C12.1926 5.34876 12.3621 5.41919 12.487 5.54438C12.6119 5.66956 12.682 5.83924 12.6818 6.01608C12.6816 6.19293 12.6112 6.36246 12.486 6.48738L8.48002 10.484C8.35508 10.6087 8.18582 10.6787 8.00935 10.6787Z"
                              fill="#21262A"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 border-b border-mailchimp-border-primary bg-mailchimp-background-primary">
                      <div className="flex items-center gap-px">
                        <button className="flex items-center gap-1 rounded-l-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-2.5 py-1 text-component-x-small text-mailchimp-text-primary">
                          View actions
                        </button>
                        <button className="flex items-center rounded-r-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00935 10.6787C7.92165 10.6787 7.83482 10.6614 7.75382 10.6277C7.67283 10.5941 7.59927 10.5448 7.53735 10.4827L3.54269 6.47671C3.48075 6.41472 3.43162 6.34115 3.39811 6.26018C3.36461 6.17921 3.34738 6.09243 3.34741 6.00481C3.34744 5.91718 3.36473 5.83042 3.3983 5.74947C3.43186 5.66852 3.48103 5.59498 3.54302 5.53304C3.605 5.4711 3.67858 5.42198 3.75955 5.38847C3.84052 5.35497 3.92729 5.33774 4.01492 5.33777C4.10255 5.3378 4.18931 5.35509 4.27026 5.38865C4.3512 5.42221 4.42474 5.47139 4.48669 5.53338L8.01068 9.06671L11.544 5.54338C11.6692 5.41846 11.8389 5.34839 12.0157 5.34857C12.1926 5.34876 12.3621 5.41919 12.487 5.54438C12.6119 5.66956 12.682 5.83924 12.6818 6.01608C12.6816 6.19293 12.6112 6.36246 12.486 6.48738L8.48002 10.484C8.35508 10.6087 8.18582 10.6787 8.00935 10.6787Z"
                              fill="#21262A"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-end h-13 px-3 bg-mailchimp-background-primary">
                      <div className="flex items-center gap-px">
                        <button className="flex items-center gap-1 rounded-l-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-2.5 py-1 text-component-x-small text-mailchimp-text-primary">
                          View actions
                        </button>
                        <button className="flex items-center rounded-r-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00935 10.6787C7.92165 10.6787 7.83482 10.6614 7.75382 10.6277C7.67283 10.5941 7.59927 10.5448 7.53735 10.4827L3.54269 6.47671C3.48075 6.41472 3.43162 6.34115 3.39811 6.26018C3.36461 6.17921 3.34738 6.09243 3.34741 6.00481C3.34744 5.91718 3.36473 5.83042 3.3983 5.74947C3.43186 5.66852 3.48103 5.59498 3.54302 5.53304C3.605 5.4711 3.67858 5.42198 3.75955 5.38847C3.84052 5.35497 3.92729 5.33774 4.01492 5.33777C4.10255 5.3378 4.18931 5.35509 4.27026 5.38865C4.3512 5.42221 4.42474 5.47139 4.48669 5.53338L8.01068 9.06671L11.544 5.54338C11.6692 5.41846 11.8389 5.34839 12.0157 5.34857C12.1926 5.34876 12.3621 5.41919 12.487 5.54438C12.6119 5.66956 12.682 5.83924 12.6818 6.01608C12.6816 6.19293 12.6112 6.36246 12.486 6.48738L8.48002 10.484C8.35508 10.6087 8.18582 10.6787 8.00935 10.6787Z"
                              fill="#21262A"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Tracker */}
              <div className="flex gap-6">
                <div className="flex-1 rounded-mailchimp border border-mailchimp-border-primary bg-mailchimp-background-primary p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                      Event tracker
                    </h2>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center justify-center w-6 h-6 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary p-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.01588 5.32131H8.01121C7.30397 5.32131 6.62569 5.60226 6.1256 6.10236C5.6255 6.60246 5.34455 7.28074 5.34455 7.98798C5.34455 8.69522 5.6255 9.3735 6.1256 9.8736C6.62569 10.3737 7.30397 10.6546 8.01121 10.6546C8.71846 10.6553 9.39698 10.3749 9.89751 9.87525C10.398 9.37559 10.6796 8.69756 10.6802 7.99031C10.6808 7.28307 10.4005 6.60455 9.90082 6.10401C9.40116 5.60348 8.72312 5.32193 8.01588 5.32131ZM8.01188 9.32131C7.74817 9.32099 7.49047 9.24248 7.27138 9.0957C7.05229 8.94892 6.88164 8.74046 6.78103 8.4967C6.68041 8.25293 6.65434 7.98481 6.70611 7.72622C6.75788 7.46764 6.88517 7.23022 7.07188 7.04398C7.19522 6.92002 7.34193 6.82178 7.50352 6.75495C7.66511 6.68812 7.83835 6.65403 8.01321 6.65465C8.36684 6.65465 8.70597 6.79512 8.95602 7.04517C9.20607 7.29522 9.34655 7.63436 9.34655 7.98798C9.34655 8.3416 9.20607 8.68074 8.95602 8.93079C8.70597 9.18084 8.36684 9.32131 8.01321 9.32131H8.01188Z"
                            fill="#21262A"
                          />
                          <path
                            d="M13.6292 8.93331L13.2899 8.73665C13.3623 8.24731 13.3623 7.74998 13.2899 7.26065L13.6305 7.06531C13.9366 6.8882 14.16 6.59701 14.2519 6.25552C14.3437 5.91403 14.2965 5.55006 14.1205 5.24331L13.4539 4.08798C13.277 3.78204 12.9862 3.55859 12.645 3.46652C12.3038 3.37444 11.94 3.42123 11.6332 3.59665L11.2919 3.79331C10.9024 3.4885 10.4728 3.23882 10.0152 3.05131V2.65798C10.0152 2.30436 9.87474 1.96522 9.62469 1.71517C9.37464 1.46512 9.0355 1.32465 8.68188 1.32465H7.34855C6.99492 1.32465 6.65579 1.46512 6.40574 1.71517C6.15569 1.96522 6.01521 2.30436 6.01521 2.65798V3.05798C5.55879 3.24257 5.13007 3.48935 4.74121 3.79131L4.39521 3.59131C4.09087 3.41471 3.72905 3.36557 3.38863 3.45461C3.04821 3.54365 2.75678 3.76365 2.57788 4.06665L1.91121 5.21998C1.73398 5.52595 1.68554 5.8898 1.77656 6.23149C1.86757 6.57317 2.09059 6.86471 2.39655 7.04198L2.73588 7.23865C2.69978 7.48323 2.68129 7.73008 2.68055 7.97731C2.68059 8.22536 2.69819 8.47309 2.73321 8.71865L2.39388 8.91398C2.0874 9.09001 1.86335 9.38052 1.77097 9.72167C1.67858 10.0628 1.72543 10.4267 1.90121 10.7333L2.56788 11.8886C2.65515 12.0405 2.77148 12.1736 2.91021 12.2805C3.04895 12.3873 3.20737 12.4658 3.37644 12.5114C3.54551 12.5571 3.72191 12.5689 3.89557 12.5464C4.06923 12.5238 4.23674 12.4673 4.38855 12.38L4.72988 12.1833C5.11928 12.4884 5.54888 12.7383 6.00655 12.926V13.3166C6.00655 13.6703 6.14702 14.0094 6.39707 14.2595C6.64712 14.5095 6.98626 14.65 7.33988 14.65H8.67321C9.02684 14.65 9.36597 14.5095 9.61602 14.2595C9.86607 14.0094 10.0065 13.6703 10.0065 13.3166V12.9333C10.4649 12.7476 10.8952 12.4993 11.2852 12.1953L11.6259 12.3953C11.9319 12.5725 12.2957 12.621 12.6374 12.53C12.9791 12.439 13.2706 12.2159 13.4479 11.91L14.1145 10.7566C14.2025 10.6051 14.2597 10.4377 14.283 10.264C14.3062 10.0903 14.2949 9.91372 14.2498 9.74437C14.2048 9.57503 14.1268 9.41623 14.0203 9.27706C13.9138 9.1379 13.7809 9.02109 13.6292 8.93331ZM11.9005 7.06665C12.0507 7.67508 12.0507 8.31088 11.9005 8.91931C11.8669 9.05913 11.8793 9.20609 11.936 9.33826C11.9928 9.47042 12.0907 9.58071 12.2152 9.65265L12.9632 10.0873L12.2965 11.24L11.5479 10.8066C11.4236 10.7347 11.2795 10.7049 11.137 10.7214C10.9944 10.738 10.861 10.8002 10.7565 10.8986C10.3024 11.3271 9.75455 11.6437 9.15655 11.8233C9.01889 11.8641 8.89808 11.9482 8.81208 12.0632C8.72607 12.1781 8.67948 12.3177 8.67921 12.4613V13.324H7.34588V12.462C7.34618 12.3183 7.30007 12.1784 7.21442 12.0631C7.12876 11.9478 7.00815 11.8632 6.87055 11.822C6.27177 11.6415 5.72373 11.3229 5.27055 10.892C5.16606 10.7935 5.03272 10.7312 4.89015 10.7141C4.74758 10.6971 4.6033 10.7262 4.47855 10.7973L3.72855 11.2293L3.06188 10.074L3.81188 9.64264C3.93678 9.571 4.03512 9.46084 4.0922 9.32866C4.14929 9.19647 4.16204 9.04935 4.12855 8.90931C4.05522 8.60654 4.01785 8.29617 4.01721 7.98465C4.01923 7.67283 4.05748 7.3623 4.13121 7.05931C4.16488 6.91949 4.15243 6.77253 4.09572 6.64037C4.03901 6.5082 3.94108 6.39792 3.81655 6.32598L3.06788 5.89265L3.73455 4.73865L4.48388 5.17331C4.49655 5.18065 4.51121 5.17998 4.52388 5.18665C4.56369 5.2048 4.60523 5.21887 4.64788 5.22865C4.6912 5.24233 4.73593 5.25105 4.78121 5.25465C4.79455 5.25465 4.80721 5.26265 4.82055 5.26265C4.85109 5.25903 4.88138 5.25346 4.91121 5.24598C4.94955 5.24222 4.98747 5.23508 5.02455 5.22465C5.06247 5.20868 5.09884 5.18927 5.13321 5.16665C5.17012 5.14777 5.20517 5.12545 5.23788 5.09998C5.24788 5.09131 5.26055 5.08865 5.26988 5.07931C5.72376 4.65017 6.27167 4.33306 6.86988 4.15331C6.88111 4.1482 6.89202 4.14241 6.90255 4.13598C6.94556 4.11834 6.98647 4.09598 7.02455 4.06931C7.06009 4.05059 7.0936 4.02825 7.12455 4.00265C7.15484 3.97276 7.18209 3.93993 7.20588 3.90465C7.23123 3.87209 7.25355 3.83727 7.27255 3.80065C7.28816 3.76336 7.30043 3.72477 7.30921 3.68531C7.3228 3.6419 7.33196 3.59723 7.33655 3.55198C7.33655 3.53998 7.34388 3.52931 7.34388 3.51665V2.65398H8.67721V3.51665C8.67692 3.6603 8.72303 3.8002 8.80868 3.91552C8.89433 4.03085 9.01494 4.11542 9.15255 4.15665C9.75086 4.3382 10.2987 4.65661 10.7525 5.08665C10.8567 5.18529 10.9899 5.24772 11.1323 5.26465C11.2747 5.28158 11.4188 5.25212 11.5432 5.18065L12.2939 4.74931L12.9605 5.90465L12.2105 6.33598C12.0874 6.40846 11.9908 6.5186 11.935 6.65015C11.8791 6.78171 11.8671 6.92771 11.9005 7.06665Z"
                            fill="#21262A"
                          />
                        </svg>
                      </button>
                      <button className="flex items-center gap-1 rounded-mailchimp border border-mailchimp-border-secondary bg-mailchimp-background-primary px-2.5 py-1 text-component-x-small text-mailchimp-text-primary">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3333 7.35333C13.1565 7.35333 12.9869 7.42357 12.8619 7.5486C12.7369 7.67362 12.6666 7.84319 12.6666 8.02L12.6606 11.83C12.6596 12.0574 12.5684 12.2751 12.407 12.4353C12.2457 12.5955 12.0274 12.6852 11.8 12.6847L4.1833 12.6727C4.0708 12.6725 3.95943 12.6502 3.85557 12.6069C3.7517 12.5637 3.65736 12.5005 3.57793 12.4208C3.49851 12.3411 3.43555 12.2466 3.39266 12.1426C3.34977 12.0386 3.32779 11.9272 3.32796 11.8147L3.3393 4.19533C3.3393 4.08287 3.36146 3.9715 3.40452 3.8676C3.44758 3.7637 3.51069 3.66931 3.59025 3.58981C3.66981 3.51032 3.76425 3.44728 3.86818 3.4043C3.97211 3.36132 4.0835 3.33925 4.19596 3.33933L8.0053 3.34533C8.18211 3.34533 8.35168 3.2751 8.4767 3.15007C8.60173 3.02505 8.67196 2.85548 8.67196 2.67867C8.67196 2.50186 8.60173 2.33229 8.4767 2.20726C8.35168 2.08224 8.18211 2.012 8.0053 2.012L4.19996 2.006H4.19596C3.61555 2.00582 3.05881 2.23613 2.64815 2.6463C2.23748 3.05646 2.00649 3.61292 2.00596 4.19333L1.99463 11.812C1.9941 12.3928 2.22407 12.95 2.63406 13.3614C3.04404 13.7727 3.60052 14.0046 4.1813 14.006L11.8006 14.018C12.381 14.0175 12.9374 13.787 13.3481 13.377C13.7589 12.967 13.9904 12.411 13.992 11.8307L14 8.02133C14.0001 7.93367 13.983 7.84684 13.9496 7.7658C13.9162 7.68476 13.8671 7.61111 13.8052 7.54907C13.7433 7.48702 13.6697 7.4378 13.5887 7.40421C13.5078 7.37062 13.421 7.35333 13.3333 7.35333Z"
                            fill="#21262A"
                          />
                          <path
                            d="M13.342 2.02L10.6753 2.016C10.4985 2.016 10.3289 2.08624 10.2039 2.21126C10.0789 2.33629 10.0086 2.50586 10.0086 2.68267C10.0086 2.85948 10.0789 3.02905 10.2039 3.15407C10.3289 3.2791 10.4985 3.34933 10.6753 3.34933H11.7326L8.86663 6.20867C8.80288 6.27008 8.75199 6.34357 8.71694 6.42485C8.68189 6.50614 8.66338 6.59359 8.66249 6.6821C8.6616 6.77062 8.67834 6.85843 8.71175 6.9404C8.74515 7.02238 8.79455 7.09688 8.85705 7.15956C8.91955 7.22224 8.99392 7.27185 9.0758 7.30548C9.15767 7.33912 9.24543 7.35611 9.33395 7.35547C9.42247 7.35483 9.50997 7.33657 9.59136 7.30175C9.67274 7.26693 9.74637 7.21625 9.80796 7.15267L12.6746 4.29467V5.352C12.6746 5.52881 12.7449 5.69838 12.8699 5.82341C12.9949 5.94843 13.1645 6.01867 13.3413 6.01867C13.5181 6.01867 13.6877 5.94843 13.8127 5.82341C13.9377 5.69838 14.008 5.52881 14.008 5.352L14.012 2.68533C14.0118 2.59762 13.9943 2.5108 13.9605 2.42985C13.9267 2.3489 13.8773 2.27542 13.8151 2.21361C13.7528 2.1518 13.679 2.10288 13.5978 2.06966C13.5166 2.03644 13.4297 2.01956 13.342 2.02Z"
                            fill="#21262A"
                          />
                        </svg>
                        View event
                      </button>
                    </div>
                  </div>

                  <div className="text-component-x-small text-mailchimp-text-secondary mb-6 max-w-[600px] pr-15">
                    Track the progress of your event linked in your email.
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 p-4 bg-mailchimp-background-primary">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#F0F4F6] flex items-center justify-center p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                              fill="#F05537"
                            />
                            <path
                              d="M7.42445 5.52414C8.47976 5.28963 9.53507 5.71957 10.1213 6.54037L5.45714 7.59568C5.61348 6.59248 6.36913 5.75866 7.42445 5.52414ZM10.1474 9.39361C9.78261 9.92778 9.22238 10.3056 8.58398 10.4489C7.52867 10.6834 6.46033 10.2535 5.87405 9.41967L10.5513 8.36436L11.3069 8.19499L12.7661 7.86928C12.7531 7.55659 12.714 7.24391 12.6489 6.94425C12.0626 4.42975 9.49598 2.85329 6.92936 3.43958C4.36274 4.02586 2.76023 6.52734 3.35955 9.05487C3.95886 11.5824 6.51245 13.1458 9.07907 12.5595C10.5904 12.2208 11.7629 11.2046 12.3623 9.91475L10.1474 9.39361Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                          Purchased from email
                        </span>
                      </div>
                      <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                        121
                      </div>
                      <div className="text-component-x-small text-mailchimp-text-primary">
                        168 total purchased
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-mailchimp-background-primary">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#F0F4F6] flex items-center justify-center p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                              fill="#F05537"
                            />
                            <path
                              d="M7.42445 5.52414C8.47976 5.28963 9.53507 5.71957 10.1213 6.54037L5.45714 7.59568C5.61348 6.59248 6.36913 5.75866 7.42445 5.52414ZM10.1474 9.39361C9.78261 9.92778 9.22238 10.3056 8.58398 10.4489C7.52867 10.6834 6.46033 10.2535 5.87405 9.41967L10.5513 8.36436L11.3069 8.19499L12.7661 7.86928C12.7531 7.55659 12.714 7.24391 12.6489 6.94425C12.0626 4.42975 9.49598 2.85329 6.92936 3.43958C4.36274 4.02586 2.76023 6.52734 3.35955 9.05487C3.95886 11.5824 6.51245 13.1458 9.07907 12.5595C10.5904 12.2208 11.7629 11.2046 12.3623 9.91475L10.1474 9.39361Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                          Revenue from email
                        </span>
                      </div>
                      <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                        $3,630
                      </div>
                      <div className="text-component-x-small text-mailchimp-text-primary">
                        $5,040 total revenue
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-mailchimp-background-primary">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#F0F4F6] flex items-center justify-center p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                              fill="#F05537"
                            />
                            <path
                              d="M7.42445 5.52414C8.47976 5.28963 9.53507 5.71957 10.1213 6.54037L5.45714 7.59568C5.61348 6.59248 6.36913 5.75866 7.42445 5.52414ZM10.1474 9.39361C9.78261 9.92778 9.22238 10.3056 8.58398 10.4489C7.52867 10.6834 6.46033 10.2535 5.87405 9.41967L10.5513 8.36436L11.3069 8.19499L12.7661 7.86928C12.7531 7.55659 12.714 7.24391 12.6489 6.94425C12.0626 4.42975 9.49598 2.85329 6.92936 3.43958C4.36274 4.02586 2.76023 6.52734 3.35955 9.05487C3.95886 11.5824 6.51245 13.1458 9.07907 12.5595C10.5904 12.2208 11.7629 11.2046 12.3623 9.91475L10.1474 9.39361Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                          Page views from email
                        </span>
                      </div>
                      <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                        241
                      </div>
                      <div className="text-component-x-small text-mailchimp-text-primary">
                        306 total page views
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-mailchimp-background-primary">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#F0F4F6] flex items-center justify-center p-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                              fill="#F05537"
                            />
                            <path
                              d="M7.42445 5.52414C8.47976 5.28963 9.53507 5.71957 10.1213 6.54037L5.45714 7.59568C5.61348 6.59248 6.36913 5.75866 7.42445 5.52414ZM10.1474 9.39361C9.78261 9.92778 9.22238 10.3056 8.58398 10.4489C7.52867 10.6834 6.46033 10.2535 5.87405 9.41967L10.5513 8.36436L11.3069 8.19499L12.7661 7.86928C12.7531 7.55659 12.714 7.24391 12.6489 6.94425C12.0626 4.42975 9.49598 2.85329 6.92936 3.43958C4.36274 4.02586 2.76023 6.52734 3.35955 9.05487C3.95886 11.5824 6.51245 13.1458 9.07907 12.5595C10.5904 12.2208 11.7629 11.2046 12.3623 9.91475L10.1474 9.39361Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="text-component-x-small text-mailchimp-text-secondary underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                          Remaining tickets
                        </span>
                      </div>
                      <div className="text-2xl font-medium text-mailchimp-text-primary leading-8 tracking-[-0.48px]">
                        132
                      </div>
                      <div className="text-component-x-small text-mailchimp-text-primary">
                        300 total tickets
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Callout */}
                <div className="w-[402px] min-w-[220px] rounded-mailchimp bg-slate-800 p-6 text-white">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-3 h-5 rounded-mailchimp flex items-center justify-center p-0.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center p-0.5">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                    <span className="text-component-x-small text-[#ADBAC2]">
                      Customized automation
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white leading-7 tracking-[-0.2px] mb-1">
                    Make your email go further
                  </h3>
                  <p className="text-base text-[#D5DEE3] leading-6 mb-3 line-clamp-7">
                    People who browse your creations will be more likely to go
                    to the auction. Automatically send browsers an email for
                    better attendance.
                  </p>
                  <button className="rounded-mailchimp border border-mailchimp-border-secondary bg-white px-2.5 py-1 text-component-x-small text-white">
                    Apply automation
                  </button>
                </div>
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
