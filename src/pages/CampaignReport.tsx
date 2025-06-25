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
          <div className="bg-white rounded-2xl overflow-hidden p-6 space-y-6 border border-mailchimp-border-primary">
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
              <div className="flex flex-col items-start gap-1 w-[234px] h-[234px] aspect-square relative">
                <div className="flex h-[234px] flex-col items-center gap-2 flex-shrink-0 self-stretch aspect-square rounded-t-[8.5px] bg-[#E2E9ED] relative">
                  <div className="flex h-[556.83px] pt-[43.333px] flex-col items-center gap-4 flex-shrink-0 self-stretch aspect-[234/556.83] bg-[#6B8395] relative overflow-hidden">
                    {/* Clay Logo */}
                    <div className="flex flex-col justify-center items-center gap-1 relative">
                      <div className="w-[55.937px] h-[17.291px] bg-[#F3E8E2] rounded"></div>
                    </div>

                    {/* Welcome Text */}
                    <div className="self-stretch text-[#F3E8E2] text-center font-normal text-[33.562px] leading-[33.562px]">
                      Welcome to Clay
                    </div>

                    {/* Divider */}
                    <div className="w-[3.827px] h-[29.849px] flex-shrink-0 bg-[#F3E8E2]"></div>

                    {/* Image */}
                    <img
                      className="w-[124.514px] h-[185.783px] flex-shrink-0 rounded-t-[98.359px]"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/85ccae415b6fdd0252f047beb468f6d7f06c66ee"
                      alt=""
                    />

                    {/* Text Content */}
                    <div className="w-[204.726px] text-[#FDFDFD] text-center font-normal text-[7.272px] leading-[140%]">
                      Dear Mike, We're so glad you've joined us.
                      <br />
                      <br />
                      CLAY is a leader in the field of ceramic arts, providing
                      our students and artists unparalleled access to
                      top-quality facilities, equipment, and instruction.
                      <br />
                      <br />
                      We provide robust arts education programming, centered on
                      hands-on experiences with clay, to diverse populations
                      across our region with many programs at low cost, or no
                      cost, to the participant.
                      <br />
                      <br />
                      Clay enriches our community by helping individuals reach
                      their potential for creativity and personal growth and
                      connecting people from a variety of backgrounds and
                      abilities.
                    </div>

                    {/* Button */}
                    <div className="flex py-[6.712px] px-[17.9px] items-start rounded-[14.054px] bg-[#F3E8E2]">
                      <div className="text-[#6B8395] text-center font-semibold text-[6.712px] leading-[120%]">
                        Explore member benefits
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex p-[17.415px] flex-col items-center gap-[14.803px] self-stretch bg-[#F3E8E2]">
                      <div className="w-[253.391px] h-[0.435px] bg-[#6B8395]"></div>
                      <div className="w-[253.391px] text-[#6B8395] text-center font-normal text-[10.833px] leading-[11.917px]">
                        Clay Collective
                        <br />
                        <br />
                        8550 White Fir St, Reno, NV 89523
                        <br />
                        <br />
                        Set your gender, locale and frequency so we can send you
                        emails that matter.
                        <br />
                        <br />
                        This email was sent to mark.maynard@mailchimp.com | View
                        on web | © 2023 Clay Collective LLC
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute w-[300.083px] h-[489.667px] -right-[66.083px] -bottom-[255.667px] bg-[rgba(76,85,91,0.18)]"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex w-[234px] px-2 justify-between items-center relative top-2">
                  <div className="flex items-center gap-[9.75px]">
                    <div className="flex min-w-[52px] py-1 px-[10.833px] justify-center items-center gap-1 rounded-[6.382px] border border-[#D5DEE3] bg-white">
                      <div className="text-[#21262A] font-normal text-[13px] leading-[17.333px]">
                        View clickmap
                      </div>
                    </div>
                    <div className="flex min-w-[52px] py-1 px-[10.833px] justify-center items-center gap-1 rounded-[6.382px] border border-[#D5DEE3] bg-white">
                      <div className="text-[#21262A] font-normal text-[13px] leading-[17.333px]">
                        View details
                      </div>
                    </div>
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
                <div className="flex px-4 pb-4 items-end gap-2 self-stretch">
                  {/* Y-axis labels */}
                  <div className="flex w-5 h-[280px] pb-4 flex-col justify-between items-end">
                    <div className="text-[#727E85] text-right text-[11px] font-normal leading-[140%]">
                      40k
                    </div>
                    <div className="text-[#727E85] text-right text-[11px] font-normal leading-[140%]">
                      30k
                    </div>
                    <div className="text-[#727E85] text-right text-[11px] font-normal leading-[140%]">
                      20k
                    </div>
                    <div className="text-[#727E85] text-right text-[11px] font-normal leading-[140%]">
                      10k
                    </div>
                    <div className="text-[#727E85] text-right text-[11px] font-normal leading-[140%]">
                      0
                    </div>
                  </div>

                  {/* Chart area with grid lines, line charts, and dates */}
                  <div className="flex h-[280px] pt-2 flex-col justify-between items-start flex-1 relative">
                    {/* Horizontal grid lines */}
                    <div className="w-full h-[1px] bg-[#ADBAC2]"></div>
                    <div className="w-full h-[1px] bg-[#ADBAC2]"></div>
                    <div className="w-full h-[1px] bg-[#ADBAC2]"></div>
                    <div className="w-full h-[1px] bg-[#ADBAC2]"></div>

                    {/* Line Chart Visualization */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 1180 280"
                      preserveAspectRatio="none"
                    >
                      {/* Single Blue Line */}
                      <path
                        d="M 0 200 Q 84 180 168 160 T 336 120 Q 420 110 504 100 T 672 90 Q 756 85 840 80 T 1008 75 Q 1092 72 1180 70"
                        fill="none"
                        stroke="#205EA3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Data point */}
                      <circle cx="1180" cy="70" r="3" fill="#205EA3" />
                    </svg>

                    {/* Bottom section with final grid line and dates */}
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <div className="w-full h-[1px] bg-[#ADBAC2]"></div>

                      {/* Date labels */}
                      <div className="flex justify-between items-center self-stretch">
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 4
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 6
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 8
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 10
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 12
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 14
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 16
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 18
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 20
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 22
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 24
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 26
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Feb 28
                        </div>
                        <div className="text-[#4C555B] text-[11px] font-normal leading-[140%] opacity-80">
                          Mar 1
                        </div>
                      </div>
                    </div>
                  </div>
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
                {/* Event Tracker Section */}
                <div className="flex flex-1 py-6 px-2 flex-col items-start gap-2 rounded-mailchimp border border-mailchimp-border-primary bg-white">
                  <div className="flex px-4 flex-col items-start gap-1 self-stretch">
                    <div className="flex items-start gap-6 self-stretch">
                      <div className="flex items-center gap-4 flex-1">
                        <h2 className="text-[20px] font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                          Event tracker
                        </h2>
                      </div>
                      <div className="flex h-6 justify-end items-center gap-2">
                        <button className="flex h-6 justify-end items-start">
                          <div className="flex flex-col justify-center items-start">
                            <div className="flex p-1 justify-center items-center rounded-mailchimp border border-[#D5DEE3] bg-white">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.01588 5.32133H8.01121C7.30397 5.32133 6.62569 5.60228 6.1256 6.10238C5.6255 6.60248 5.34455 7.28076 5.34455 7.988C5.34455 8.69524 5.6255 9.37352 6.1256 9.87362C6.62569 10.3737 7.30397 10.6547 8.01121 10.6547C8.71846 10.6553 9.39698 10.3749 9.89751 9.87527C10.398 9.37561 10.6796 8.69758 10.6802 7.99033C10.6808 7.28309 10.4005 6.60457 9.90082 6.10403C9.40116 5.6035 8.72312 5.32195 8.01588 5.32133ZM8.01188 9.32133C7.74817 9.32101 7.49047 9.2425 7.27138 9.09572C7.05229 8.94894 6.88164 8.74048 6.78103 8.49672C6.68041 8.25295 6.65434 7.98483 6.70611 7.72624C6.75788 7.46766 6.88517 7.23024 7.07188 7.044C7.19522 6.92005 7.34193 6.82181 7.50352 6.75497C7.66511 6.68814 7.83835 6.65405 8.01321 6.65467C8.36684 6.65467 8.70597 6.79514 8.95602 7.04519C9.20607 7.29524 9.34655 7.63438 9.34655 7.988C9.34655 8.34162 9.20607 8.68076 8.95602 8.93081C8.70597 9.18086 8.36684 9.32133 8.01321 9.32133H8.01188Z"
                                  fill="#21262A"
                                />
                                <path
                                  d="M13.6292 8.93333L13.2899 8.73667C13.3623 8.24733 13.3623 7.75 13.2899 7.26067L13.6305 7.06533C13.9366 6.88822 14.16 6.59704 14.2519 6.25554C14.3437 5.91405 14.2965 5.55008 14.1205 5.24333L13.4539 4.088C13.277 3.78206 12.9862 3.55861 12.645 3.46654C12.3038 3.37446 11.94 3.42125 11.6332 3.59667L11.2919 3.79333C10.9024 3.48853 10.4728 3.23884 10.0152 3.05133V2.658C10.0152 2.30438 9.87474 1.96524 9.62469 1.71519C9.37464 1.46514 9.0355 1.32467 8.68188 1.32467H7.34855C6.99492 1.32467 6.65579 1.46514 6.40574 1.71519C6.15569 1.96524 6.01521 2.30438 6.01521 2.658V3.058C5.55879 3.24259 5.13007 3.48937 4.74121 3.79133L4.39521 3.59133C4.09087 3.41473 3.72905 3.36559 3.38863 3.45463C3.04821 3.54367 2.75678 3.76367 2.57788 4.06667L1.91121 5.22C1.73398 5.52598 1.68554 5.88982 1.77656 6.23151C1.86757 6.5732 2.09059 6.86474 2.39655 7.042L2.73588 7.23867C2.69978 7.48325 2.68129 7.7301 2.68055 7.97733C2.68059 8.22538 2.69819 8.47311 2.73321 8.71867L2.39388 8.914C2.0874 9.09003 1.86335 9.38054 1.77097 9.72169C1.67858 10.0628 1.72543 10.4267 1.90121 10.7333L2.56788 11.8887C2.65515 12.0405 2.77148 12.1736 2.91021 12.2805C3.04895 12.3873 3.20737 12.4658 3.37644 12.5115C3.54551 12.5571 3.72191 12.569 3.89557 12.5464C4.06923 12.5238 4.23674 12.4673 4.38855 12.38L4.72988 12.1833C5.11928 12.4884 5.54888 12.7383 6.00655 12.926V13.3167C6.00655 13.6703 6.14702 14.0094 6.39707 14.2595C6.64712 14.5095 6.98626 14.65 7.33988 14.65H8.67321C9.02684 14.65 9.36597 14.5095 9.61602 14.2595C9.86607 14.0094 10.0065 13.6703 10.0065 13.3167V12.9333C10.4649 12.7477 10.8952 12.4993 11.2852 12.1953L11.6259 12.3953C11.9319 12.5726 12.2957 12.621 12.6374 12.53C12.9791 12.439 13.2706 12.216 13.4479 11.91L14.1145 10.7567C14.2025 10.6051 14.2597 10.4377 14.283 10.264C14.3062 10.0903 14.2949 9.91374 14.2498 9.74439C14.2048 9.57505 14.1268 9.41625 14.0203 9.27709C13.9138 9.13792 13.7809 9.02111 13.6292 8.93333ZM11.9005 7.06667C12.0507 7.6751 12.0507 8.3109 11.9005 8.91933C11.8669 9.05916 11.8793 9.20612 11.936 9.33828C11.9928 9.47044 12.0907 9.58073 12.2152 9.65267L12.9632 10.0873L12.2965 11.24L11.5479 10.8067C11.4236 10.7348 11.2795 10.7049 11.137 10.7215C10.9944 10.738 10.861 10.8002 10.7565 10.8987C10.3024 11.3272 9.75455 11.6438 9.15655 11.8233C9.01889 11.8641 8.89808 11.9482 8.81208 12.0632C8.72607 12.1781 8.67948 12.3178 8.67921 12.4613V13.324H7.34588V12.462C7.34618 12.3184 7.30007 12.1784 7.21442 12.0631C7.12876 11.9478 7.00815 11.8632 6.87055 11.822C6.27177 11.6415 5.72373 11.323 5.27055 10.892C5.16606 10.7935 5.03272 10.7312 4.89015 10.7141C4.74758 10.6971 4.6033 10.7263 4.47855 10.7973L3.72855 11.2293L3.06188 10.074L3.81188 9.64267C3.93678 9.57102 4.03512 9.46087 4.0922 9.32868C4.14929 9.19649 4.16204 9.04937 4.12855 8.90933C4.05522 8.60656 4.01785 8.29619 4.01721 7.98467C4.01923 7.67285 4.05748 7.36232 4.13121 7.05933C4.16488 6.91951 4.15243 6.77255 4.09572 6.64039C4.03901 6.50822 3.94108 6.39794 3.81655 6.326L3.06788 5.89267L3.73455 4.73867L4.48388 5.17333C4.49655 5.18067 4.51121 5.18 4.52388 5.18667C4.56369 5.20482 4.60523 5.21889 4.64788 5.22867C4.6912 5.24235 4.73593 5.25108 4.78121 5.25467C4.79455 5.25467 4.80721 5.26267 4.82055 5.26267C4.85109 5.25905 4.88138 5.25348 4.91121 5.246C4.94955 5.24224 4.98747 5.2351 5.02455 5.22467C5.06247 5.2087 5.09884 5.18929 5.13321 5.16667C5.17012 5.14779 5.20517 5.12547 5.23788 5.1C5.24788 5.09133 5.26055 5.08867 5.26988 5.07933C5.72376 4.65019 6.27167 4.33308 6.86988 4.15333C6.88111 4.14822 6.89202 4.14243 6.90255 4.136C6.94556 4.11836 6.98647 4.096 7.02455 4.06933C7.06009 4.05061 7.0936 4.02827 7.12455 4.00267C7.15484 3.97278 7.18209 3.93995 7.20588 3.90467C7.23123 3.87211 7.25355 3.8373 7.27255 3.80067C7.28816 3.76338 7.30043 3.72479 7.30921 3.68533C7.3228 3.64193 7.33196 3.59725 7.33655 3.552C7.33655 3.54 7.34388 3.52933 7.34388 3.51667V2.654H8.67721V3.51667C8.67692 3.66032 8.72303 3.80022 8.80868 3.91554C8.89433 4.03087 9.01494 4.11544 9.15255 4.15667C9.75086 4.33822 10.2987 4.65663 10.7525 5.08667C10.8567 5.18531 10.9899 5.24774 11.1323 5.26467C11.2747 5.28161 11.4188 5.25215 11.5432 5.18067L12.2939 4.74933L12.9605 5.90467L12.2105 6.336C12.0874 6.40848 11.9908 6.51862 11.935 6.65017C11.8791 6.78173 11.8671 6.92774 11.9005 7.06667Z"
                                  fill="#21262A"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div className="flex items-start">
                          <button className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-1 rounded-mailchimp border border-[#D5DEE3] bg-white">
                            <div className="flex items-center gap-2">
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
                            </div>
                            <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                              View event
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex max-w-[600px] pr-15 justify-center items-center gap-2.5 self-stretch">
                      <p className="flex-1 text-[#4C555B] text-component-x-small font-normal leading-4">
                        Track the progress of your event linked in your email.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start self-stretch bg-white">
                    {/* Data Well Item 1 - Purchased from email */}
                    <div className="flex p-4 flex-col items-end gap-2 flex-1 bg-white">
                      <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
                        <div className="flex min-w-[146px] justify-between items-start self-stretch">
                          <div className="flex min-h-6 items-center gap-1 flex-1">
                            <div className="flex items-start gap-[-1] rounded-full">
                              <div className="flex w-6 h-6 p-1 items-start rounded-full bg-[#F0F4F6]">
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
                            </div>
                            <div className="flex flex-col justify-center items-start gap-0.5">
                              <span className="text-[#4C555B] text-component-x-small font-normal leading-4 underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                                Purchased from email
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                          <div className="flex min-w-[120px] flex-col justify-center items-start gap-1">
                            <div className="flex items-center gap-1">
                              <span className="text-mailchimp-text-primary text-[24px] font-medium leading-8 tracking-[-0.48px]">
                                121
                              </span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                                168 total purchased
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Well Item 2 - Revenue from email */}
                    <div className="flex p-4 flex-col items-end gap-2 flex-1 bg-white">
                      <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
                        <div className="flex min-w-[146px] justify-between items-start self-stretch">
                          <div className="flex min-h-6 items-center gap-1 flex-1">
                            <div className="flex items-start gap-[-1] rounded-full">
                              <div className="flex w-6 h-6 p-1 items-start rounded-full bg-[#F0F4F6]">
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.5 15C12.366 15 15.5 11.866 15.5 8C15.5 4.13401 12.366 1 8.5 1C4.63401 1 1.5 4.13401 1.5 8C1.5 11.866 4.63401 15 8.5 15Z"
                                    fill="#F05537"
                                  />
                                  <path
                                    d="M7.92445 5.52414C8.97976 5.28963 10.0351 5.71957 10.6213 6.54037L5.95714 7.59568C6.11348 6.59248 6.86913 5.75866 7.92445 5.52414ZM10.6474 9.39361C10.2826 9.92778 9.72238 10.3056 9.08398 10.4489C8.02867 10.6834 6.96033 10.2535 6.37405 9.41967L11.0513 8.36436L11.8069 8.19499L13.2661 7.86928C13.2531 7.55659 13.214 7.24391 13.1489 6.94425C12.5626 4.42975 9.99598 2.85329 7.42936 3.43958C4.86274 4.02586 3.26023 6.52734 3.85955 9.05487C4.45886 11.5824 7.01245 13.1458 9.57907 12.5595C11.0904 12.2208 12.2629 11.2046 12.8623 9.91475L10.6474 9.39361Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-0.5">
                              <span className="text-[#4C555B] text-component-x-small font-normal leading-4 underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                                Revenue from email
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                          <div className="flex min-w-[120px] flex-col justify-center items-start gap-1">
                            <div className="flex items-center gap-1">
                              <span className="text-mailchimp-text-primary text-[24px] font-medium leading-8 tracking-[-0.48px]">
                                $3,630
                              </span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                                $5,040 total revenue
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Well Item 3 - Page views from email */}
                    <div className="flex p-4 flex-col items-end gap-2 flex-1 bg-white">
                      <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
                        <div className="flex min-w-[146px] justify-between items-start self-stretch">
                          <div className="flex min-h-6 items-center gap-1 flex-1">
                            <div className="flex items-start gap-[-1] rounded-full">
                              <div className="flex w-6 h-6 p-1 items-start rounded-full bg-[#F0F4F6]">
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
                            </div>
                            <div className="flex flex-col justify-center items-start gap-0.5">
                              <span className="text-[#4C555B] text-component-x-small font-normal leading-4 underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                                Page views from email
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                          <div className="flex min-w-[120px] flex-col justify-center items-start gap-1">
                            <div className="flex items-center gap-1">
                              <span className="text-mailchimp-text-primary text-[24px] font-medium leading-8 tracking-[-0.48px]">
                                241
                              </span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                                306 total page views
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Well Item 4 - Remaining tickets */}
                    <div className="flex p-4 flex-col items-end gap-2 flex-1 bg-white">
                      <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
                        <div className="flex min-w-[146px] justify-between items-start self-stretch">
                          <div className="flex min-h-6 items-center gap-1 flex-1">
                            <div className="flex items-start gap-[-1] rounded-full">
                              <div className="flex w-6 h-6 p-1 items-start rounded-full bg-[#F0F4F6]">
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.5 15C12.366 15 15.5 11.866 15.5 8C15.5 4.13401 12.366 1 8.5 1C4.63401 1 1.5 4.13401 1.5 8C1.5 11.866 4.63401 15 8.5 15Z"
                                    fill="#F05537"
                                  />
                                  <path
                                    d="M7.92445 5.52414C8.97976 5.28963 10.0351 5.71957 10.6213 6.54037L5.95714 7.59568C6.11348 6.59248 6.86913 5.75866 7.92445 5.52414ZM10.6474 9.39361C10.2826 9.92778 9.72238 10.3056 9.08398 10.4489C8.02867 10.6834 6.96033 10.2535 6.37405 9.41967L11.0513 8.36436L11.8069 8.19499L13.2661 7.86928C13.2531 7.55659 13.214 7.24391 13.1489 6.94425C12.5626 4.42975 9.99598 2.85329 7.42936 3.43958C4.86274 4.02586 3.26023 6.52734 3.85955 9.05487C4.45886 11.5824 7.01245 13.1458 9.57907 12.5595C11.0904 12.2208 12.2629 11.2046 12.8623 9.91475L10.6474 9.39361Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-0.5">
                              <span className="text-[#4C555B] text-component-x-small font-normal leading-4 underline decoration-dotted decoration-[#ADBAC2] underline-offset-[3px]">
                                Remaining tickets
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                          <div className="flex min-w-[120px] flex-col justify-center items-start gap-1">
                            <div className="flex items-center gap-1">
                              <span className="text-mailchimp-text-primary text-[24px] font-medium leading-8 tracking-[-0.48px]">
                                132
                              </span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                                300 total tickets
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Callout - Shortened */}
                <div className="flex w-[402px] min-w-[220px] p-6 flex-col items-start gap-3 self-stretch rounded-mailchimp bg-slate-800">
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="flex justify-between items-center content-center gap-1 self-stretch flex-wrap">
                      <div className="flex items-center gap-1">
                        <div className="flex w-[13px] h-5 py-0.5 px-[0.5px] justify-center items-center gap-[3.952px] rounded-mailchimp">
                          <div className="flex justify-center items-center gap-[3.952px]">
                            <div className="flex w-4 h-4 py-[1.332px] px-[1.335px] justify-center items-center rounded-[63.237px]">
                              <div className="w-[13px] h-[13px] flex-shrink-0 absolute left-[1px] top-[1px]">
                                <div className="w-[13px] h-[12px] flex-shrink-0 fill-white absolute left-0 top-0"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex pt-0.5 justify-center items-center gap-2 self-stretch">
                          <span className="text-[#ADBAC2] text-component-x-small font-normal leading-4">
                            Customized automation
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 self-stretch">
                      <h3 className="self-stretch text-white text-xl font-medium leading-7 tracking-[-0.2px]">
                        Make your email go further
                      </h3>
                      <p className="self-stretch text-[#D5DEE3] text-base font-normal leading-6 overflow-hidden line-clamp-7">
                        People who browse your creations will be more likely to
                        go to the auction. Automatically send browsers an email
                        for better attendance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-stretch">
                    <button className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-1 rounded-mailchimp border border-[#D5DEE3] bg-white">
                      <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                        Apply automation
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Demographics Row */}
            <div className="flex gap-6">
              {/* Predicted demographics */}
              <div className="flex-1 min-h-[140px] p-6 flex flex-col gap-4 rounded-mailchimp border border-mailchimp-border-primary bg-white">
                <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-6 self-stretch">
                    <div className="flex items-center gap-4 flex-1">
                      <h2 className="text-[20px] font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                        Predicted demographics
                      </h2>
                    </div>
                    <div className="flex h-6 justify-end items-center gap-2">
                      <div className="flex items-start">
                        <div className="flex p-0.5 items-center gap-0.5 rounded-mailchimp bg-[#F0F4F6]">
                          <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded bg-white shadow-[0px_1px_4px_0px_rgba(76,85,91,0.2)]">
                            <span className="flex-1 text-mailchimp-text-primary text-center text-component-x-small font-normal leading-4">
                              Opens
                            </span>
                          </div>
                          <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded">
                            <span className="flex-1 text-[#727E85] text-center text-component-x-small font-normal leading-4">
                              Clicks
                            </span>
                          </div>
                          <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded">
                            <span className="flex-1 text-[#727E85] text-center text-component-x-small font-normal leading-4">
                              Recipients
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="flex flex-col justify-center items-start">
                        <div className="flex p-1 justify-center items-center rounded-mailchimp border border-[#D5DEE3] bg-white">
                          <OptionsIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex max-w-[600px] pr-15 justify-center items-center gap-2.5 self-stretch">
                    <p className="flex-1 text-[#4C555B] text-component-x-small font-normal leading-4">
                      Based on user interests and behavior data science predicts
                      age and gender of contacts to identify key characteristics
                      of your audience.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex items-start gap-6 self-stretch">
                    {/* Gender Chart */}
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <h3 className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px] self-stretch">
                        Gender
                      </h3>
                      <div className="flex h-[168px] items-center gap-4 self-stretch">
                        <svg
                          className="w-[150px] h-[150px] aspect-square"
                          width="154"
                          height="154"
                          viewBox="0 0 154 154"
                          fill="none"
                        >
                          <path
                            d="M113.687 142.413C128.21 134.268 139.609 121.522 146.088 106.184C152.568 90.8463 153.759 73.7883 149.474 57.6986C145.19 41.6088 135.673 27.4024 122.423 17.3181C109.174 7.23391 92.9455 1.84535 76.2958 2.00171L76.507 24.5007C88.1619 24.3913 99.5217 28.1633 108.796 35.2222C118.071 42.2812 124.733 52.2257 127.732 63.4885C130.731 74.7513 129.897 86.692 125.362 97.4286C120.826 108.165 112.847 117.087 102.681 122.789L113.687 142.413Z"
                            fill="#205EA3"
                            stroke="white"
                            strokeWidth="4"
                          />
                          <path
                            d="M77.0232 1.9984C65.3273 1.99479 53.7926 4.72663 43.3407 9.97566C32.8888 15.2247 23.8094 22.8454 16.8278 32.2291C9.84619 41.6127 5.15596 52.4991 3.1318 64.0185C1.10764 75.538 1.80566 87.3712 5.17009 98.5727L26.7191 92.1004C24.364 84.2593 23.8754 75.9761 25.2923 67.9125C26.7092 59.8489 29.9924 52.2284 34.8795 45.6599C39.7666 39.0913 46.1222 33.7568 53.4385 30.0825C60.7549 26.4082 68.8291 24.4959 77.0163 24.4984L77.0232 1.9984Z"
                            fill="#F7576C"
                            stroke="white"
                            strokeWidth="4"
                          />
                          <path
                            d="M39.8147 11.8674C29.6575 17.6663 20.9974 25.7603 14.5261 35.5028C8.05476 45.2454 3.95169 56.3664 2.54465 67.9774C1.13761 79.5884 2.46561 91.3675 6.42254 102.374C10.3795 113.38 16.8557 123.308 25.3337 131.365L40.8336 115.056C34.899 109.416 30.3656 102.466 27.5958 94.7616C24.8259 87.0572 23.8963 78.8118 24.8812 70.6842C25.8662 62.5565 28.7383 54.7718 33.2682 47.952C37.7981 41.1322 43.8603 35.4664 50.9703 31.4072L39.8147 11.8674Z"
                            fill="#E56C1D"
                            stroke="white"
                            strokeWidth="4"
                          />
                          <path
                            d="M5.81601 100.619C9.60305 112.032 16.0791 122.368 24.6981 130.754C33.3171 139.14 43.8262 145.331 55.3393 148.804C66.8523 152.277 79.0318 152.931 90.8505 150.71C102.669 148.489 113.781 143.459 123.248 136.044L109.373 118.331C102.746 123.521 94.9684 127.042 86.6953 128.597C78.4222 130.152 69.8966 129.694 61.8375 127.263C53.7783 124.832 46.4219 120.498 40.3886 114.628C34.3554 108.758 29.8221 101.523 27.1712 93.5331L5.81601 100.619Z"
                            fill="#009EAC"
                            stroke="white"
                            strokeWidth="4"
                          />
                        </svg>
                        <div className="flex flex-col justify-center items-start flex-1 self-stretch">
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#205EA3"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                Female
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  58.3%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#009EAC"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                Male
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  14.8%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#E56C1D"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                Another identity
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  6.3%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#F7576C"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                Unknown
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  20.6%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Age Range Chart */}
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <h3 className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px] self-stretch">
                        Age Range
                      </h3>
                      <div className="flex items-center gap-4 self-stretch">
                        <img
                          className="w-[150px] h-[150px] aspect-square"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8cc099edd11ee3c5977cf52a570b84796938f57"
                          alt="donut chart"
                        />
                        <div className="flex flex-col justify-center items-start flex-1 self-stretch">
                          <div className="flex p-1 items-center gap-2 self-stretch rounded bg-[#F8FAFB]">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#205EA3"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                18-24
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  26.9%
                                </span>
                                <button className="flex p-1 justify-center items-center rounded-mailchimp bg-[#E2E9ED]">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M8.00008 9.33332C8.73646 9.33332 9.33341 8.73637 9.33341 7.99999C9.33341 7.26361 8.73646 6.66666 8.00008 6.66666C7.2637 6.66666 6.66675 7.26361 6.66675 7.99999C6.66675 8.73637 7.2637 9.33332 8.00008 9.33332Z"
                                      fill="#21262A"
                                    ></path>
                                    <path
                                      d="M4.00008 9.33332C4.73646 9.33332 5.33341 8.73637 5.33341 7.99999C5.33341 7.26361 4.73646 6.66666 4.00008 6.66666C3.2637 6.66666 2.66675 7.26361 2.66675 7.99999C2.66675 8.73637 3.2637 9.33332 4.00008 9.33332Z"
                                      fill="#21262A"
                                    ></path>
                                    <path
                                      d="M12.0001 9.33332C12.7365 9.33332 13.3334 8.73637 13.3334 7.99999C13.3334 7.26361 12.7365 6.66666 12.0001 6.66666C11.2637 6.66666 10.6667 7.26361 10.6667 7.99999C10.6667 8.73637 11.2637 9.33332 12.0001 9.33332Z"
                                      fill="#21262A"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#009EAC"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                25-34
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  14.8%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#E56C1D"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                35-44
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  6.3%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#F7576C"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                45-54
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  6.9%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#A275FF"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                55-64
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  2.9%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex p-1 items-center gap-2 self-stretch">
                            <svg
                              className="flex h-5 items-center gap-2.5"
                              width="12"
                              height="20"
                              viewBox="0 0 12 20"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="10"
                                r="6"
                                fill="#8F1229"
                              ></circle>
                            </svg>
                            <div className="flex justify-between items-center flex-1">
                              <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                                65+
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                                  10.7%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top locations */}
              <div className="w-[402px] min-h-[140px] p-6 flex flex-col items-start gap-4 self-stretch rounded-mailchimp border border-mailchimp-border-primary bg-white">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex items-start gap-6 self-stretch">
                    <div className="flex items-center gap-4 flex-1">
                      <h2 className="text-[20px] font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                        Top locations
                      </h2>
                    </div>
                    <div className="flex h-6 justify-end items-center gap-2">
                      <div className="flex h-6 flex-col items-end">
                        <div className="flex flex-col items-start">
                          <button className="flex min-w-12 px-1.5 py-1 justify-center items-center gap-0.5 self-stretch rounded-mailchimp border border-[#D5DEE3] bg-white">
                            <span className="text-component-x-small text-mailchimp-text-primary font-normal leading-4">
                              Opens
                            </span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.00935 10.6787C7.92165 10.6787 7.83482 10.6613 7.75382 10.6277C7.67283 10.5941 7.59927 10.5448 7.53735 10.4827L3.54269 6.47668C3.48075 6.41469 3.43162 6.34112 3.39811 6.26015C3.36461 6.17918 3.34738 6.0924 3.34741 6.00478C3.34744 5.91715 3.36473 5.83038 3.3983 5.74944C3.43186 5.66849 3.48103 5.59495 3.54302 5.53301C3.605 5.47107 3.67858 5.42195 3.75955 5.38844C3.84052 5.35494 3.92729 5.33771 4.01492 5.33774C4.10255 5.33777 4.18931 5.35506 4.27026 5.38862C4.3512 5.42218 4.42474 5.47136 4.48669 5.53334L8.01068 9.06668L11.544 5.54334C11.6692 5.41843 11.8389 5.34836 12.0157 5.34854C12.1926 5.34873 12.3621 5.41916 12.487 5.54434C12.6119 5.66953 12.682 5.8392 12.6818 6.01605C12.6816 6.1929 12.6112 6.36243 12.486 6.48734L8.48002 10.484C8.35508 10.6086 8.18582 10.6786 8.00935 10.6787Z"
                                fill="#21262A"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <button className="flex flex-col justify-center items-start">
                          <div className="flex p-1 justify-center items-center rounded-mailchimp border border-[#D5DEE3] bg-white">
                            <OptionsIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex max-w-[600px] pr-15 justify-center items-center gap-2.5 self-stretch">
                    <p className="flex-1 text-[#4C555B] text-component-x-small font-normal leading-4">
                      Geolocation estimates where contacts are located, to
                      target emails for specific regions or time zones.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 self-stretch rounded-mailchimp">
                  <div className="flex py-[37px] px-0 items-center gap-4 self-stretch">
                    <svg
                      className="w-[150px] h-[150px] aspect-square"
                      width="154"
                      height="154"
                      viewBox="0 0 154 154"
                      fill="none"
                    >
                      <path
                        d="M113.687 142.413C128.209 134.268 139.609 121.522 146.088 106.184C152.568 90.8463 153.759 73.7883 149.474 57.6986C145.189 41.6088 135.673 27.4024 122.423 17.3181C109.174 7.23391 92.9454 1.84535 76.2956 2.00171L76.5069 24.5007C88.1617 24.3913 99.5216 28.1633 108.796 35.2222C118.071 42.2812 124.733 52.2257 127.732 63.4885C130.731 74.7513 129.897 86.692 125.362 97.4286C120.826 108.165 112.847 117.087 102.681 122.789L113.687 142.413Z"
                        fill="#205EA3"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <path
                        d="M77.0232 1.9984C65.3273 1.99479 53.7926 4.72663 43.3407 9.97566C32.8888 15.2247 23.8094 22.8454 16.8278 32.2291C9.84619 41.6127 5.15596 52.4991 3.1318 64.0185C1.10764 75.538 1.80566 87.3712 5.17009 98.5727L26.7191 92.1004C24.364 84.2593 23.8754 75.9761 25.2923 67.9125C26.7092 59.8489 29.9924 52.2284 34.8795 45.6599C39.7666 39.0913 46.1222 33.7568 53.4385 30.0825C60.7549 26.4082 68.8291 24.4959 77.0163 24.4984L77.0232 1.9984Z"
                        fill="#F7576C"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <path
                        d="M39.8148 11.8674C29.6577 17.6663 20.9975 25.7603 14.5262 35.5028C8.05489 45.2454 3.95181 56.3664 2.54478 67.9774C1.13774 79.5884 2.46573 91.3675 6.42267 102.374C10.3796 113.38 16.8558 123.308 25.3338 131.365L40.8337 115.056C34.8991 109.416 30.3657 102.466 27.5959 94.7616C24.826 87.0572 23.8964 78.8118 24.8814 70.6842C25.8663 62.5565 28.7384 54.7718 33.2684 47.952C37.7983 41.1322 43.8604 35.4664 50.9704 31.4072L39.8148 11.8674Z"
                        fill="#E56C1D"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <path
                        d="M5.81614 100.619C9.60318 112.032 16.0792 122.368 24.6982 130.754C33.3172 139.14 43.8263 145.331 55.3394 148.804C66.8525 152.277 79.0319 152.931 90.8506 150.71C102.669 148.489 113.781 143.459 123.248 136.044L109.373 118.331C102.746 123.521 94.9685 127.042 86.6954 128.597C78.4223 130.152 69.8968 129.694 61.8376 127.263C53.7784 124.832 46.422 120.498 40.3888 114.628C34.3555 108.758 29.8222 101.523 27.1713 93.5331L5.81614 100.619Z"
                        fill="#009EAC"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                    <div className="flex flex-col justify-center items-start flex-1 self-stretch">
                      <div className="flex p-1 items-center gap-2 self-stretch">
                        <svg
                          className="flex h-5 items-center gap-2.5"
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                        >
                          <circle cx="6" cy="10" r="6" fill="#205EA3"></circle>
                        </svg>
                        <div className="flex justify-between items-center flex-1">
                          <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                            United States
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                              92.8%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-1 items-center gap-2 self-stretch">
                        <svg
                          className="flex h-5 items-center gap-2.5"
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                        >
                          <circle cx="6" cy="10" r="6" fill="#009EAC"></circle>
                        </svg>
                        <div className="flex justify-between items-center flex-1">
                          <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                            Australia
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                              1.6%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-1 items-center gap-2 self-stretch">
                        <svg
                          className="flex h-5 items-center gap-2.5"
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                        >
                          <circle cx="6" cy="10" r="6" fill="#E56C1D"></circle>
                        </svg>
                        <div className="flex justify-between items-center flex-1">
                          <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                            Singapore
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                              1.8%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-1 items-center gap-2 self-stretch">
                        <svg
                          className="flex h-5 items-center gap-2.5"
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                        >
                          <circle cx="6" cy="10" r="6" fill="#F7576C"></circle>
                        </svg>
                        <div className="flex justify-between items-center flex-1">
                          <span className="text-component-small font-medium text-mailchimp-text-primary leading-[140%] tracking-[-0.14px]">
                            Other
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-component-small text-mailchimp-text-primary text-right leading-[140%]">
                              3.8%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Domain performance */}
            <div className="flex w-full h-[321px] p-6 flex-col items-start gap-4 rounded-mailchimp border border-mailchimp-border-primary bg-white">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="flex items-start gap-6 self-stretch">
                  <div className="flex items-center gap-4 flex-1">
                    <h2 className="text-[20px] font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                      Domain performance
                    </h2>
                  </div>
                  <div className="flex h-6 justify-end items-center gap-2">
                    <div className="flex items-start">
                      <div className="flex p-0.5 items-center gap-0.5 rounded-mailchimp bg-[#F0F4F6]">
                        <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded bg-white shadow-[0px_1px_4px_0px_rgba(76,85,91,0.2)]">
                          <span className="flex-1 text-mailchimp-text-primary text-center text-component-x-small font-normal leading-4">
                            Counts
                          </span>
                        </div>
                        <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded">
                          <span className="flex-1 text-[#727E85] text-center text-component-x-small font-normal leading-4">
                            Percentages
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="flex h-6 justify-end items-start">
                      <div className="flex flex-col justify-center items-start">
                        <div className="flex p-1 justify-center items-center rounded-mailchimp border border-[#D5DEE3] bg-white">
                          <OptionsIcon />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                {/* Table Column 1 - Segment name */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 items-center self-stretch bg-[#F0F4F6]">
                    <div className="flex justify-center items-center">
                      <span className="text-[#727E85] text-component-x-small font-normal leading-4">
                        Segment name
                      </span>
                    </div>
                  </div>
                  <div className="group flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      gmail.com
                    </span>
                  </div>
                  <div className="group flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      yahoo.com
                    </span>
                  </div>
                  <div className="group flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                    <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                      <span className="self-stretch text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                        outlook.com
                      </span>
                    </div>
                  </div>
                  <div className="group flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      claycollective.com
                    </span>
                  </div>
                </div>

                {/* Table Column 2 - Deliveries */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Deliveries
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      18,103
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      3,522
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                    <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                      <span className="self-stretch text-mailchimp-text-primary text-right text-component-small font-normal leading-5">
                        1,729
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      3
                    </span>
                  </div>
                </div>

                {/* Table Column 3 - Unique opens */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Unique opens
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      3,780
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      625
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                    <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                      <span className="self-stretch text-mailchimp-text-primary text-right text-component-small font-normal leading-5">
                        326
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      3
                    </span>
                  </div>
                </div>

                {/* Table Column 4 - Clicked */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Clicked
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      431
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      179
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                    <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                      <span className="self-stretch text-mailchimp-text-primary text-right text-component-small font-normal leading-5">
                        51
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      3
                    </span>
                  </div>
                </div>

                {/* Table Column 5 - Bounced */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Bounced
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      97
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      23
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                    <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                      <span className="self-stretch text-mailchimp-text-primary text-right text-component-small font-normal leading-5">
                        11
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      0
                    </span>
                  </div>
                </div>

                {/* Table Column 6 - Unsubscribed */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Unsubscribed
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      462
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      60
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB]">
                    <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                      <span className="self-stretch text-mailchimp-text-primary text-right text-component-small font-normal leading-5">
                        20
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      0
                    </span>
                  </div>
                </div>

                {/* Table Column 7 - Actions */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 items-center self-stretch bg-[#F0F4F6]"></div>
                  {/* Gmail.com row */}
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch border-b border-mailchimp-border-primary bg-white hover:bg-gray-50">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center gap-[-1px]">
                      <button className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-2.5 rounded-l-mailchimp border border-[#D5DEE3] bg-white">
                        <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                          View insights
                        </span>
                      </button>
                      <button className="flex px-1 py-1 justify-center items-center gap-2.5 rounded-r-mailchimp border border-[#D5DEE3] bg-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0096 10.6786C7.9219 10.6786 7.83506 10.6613 7.75407 10.6277C7.67307 10.594 7.59951 10.5448 7.5376 10.4826L3.54293 6.47665C3.48099 6.41466 3.43186 6.34109 3.39836 6.26012C3.36485 6.17915 3.34763 6.09237 3.34766 6.00475C3.34769 5.91712 3.36498 5.83035 3.39854 5.74941C3.4321 5.66846 3.48128 5.59492 3.54326 5.53298C3.60525 5.47104 3.67882 5.42192 3.75979 5.38841C3.84076 5.35491 3.92754 5.33768 4.01517 5.33771C4.10279 5.33774 4.18956 5.35503 4.2705 5.38859C4.35145 5.42215 4.42499 5.47133 4.48693 5.53331L8.01093 9.06665L11.5443 5.54331C11.6694 5.4184 11.8391 5.34833 12.016 5.34851C12.1928 5.3487 12.3623 5.41913 12.4873 5.54431C12.6122 5.6695 12.6823 5.83917 12.6821 6.01602C12.6819 6.19287 12.6114 6.3624 12.4863 6.48731L8.48026 10.484C8.35532 10.6086 8.18607 10.6786 8.0096 10.6786Z"
                            fill="#21262A"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Yahoo.com row */}
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch border-b border-mailchimp-border-primary bg-white hover:bg-gray-50">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center gap-[-1px]">
                      <button className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-2.5 rounded-l-mailchimp border border-[#D5DEE3] bg-white">
                        <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                          View insights
                        </span>
                      </button>
                      <button className="flex px-1 py-1 justify-center items-center gap-2.5 rounded-r-mailchimp border border-[#D5DEE3] bg-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0096 10.6786C7.9219 10.6786 7.83506 10.6613 7.75407 10.6277C7.67307 10.594 7.59951 10.5448 7.5376 10.4826L3.54293 6.47665C3.48099 6.41466 3.43186 6.34109 3.39836 6.26012C3.36485 6.17915 3.34763 6.09237 3.34766 6.00475C3.34769 5.91712 3.36498 5.83035 3.39854 5.74941C3.4321 5.66846 3.48128 5.59492 3.54326 5.53298C3.60525 5.47104 3.67882 5.42192 3.75979 5.38841C3.84076 5.35491 3.92754 5.33768 4.01517 5.33771C4.10279 5.33774 4.18956 5.35503 4.2705 5.38859C4.35145 5.42215 4.42499 5.47133 4.48693 5.53331L8.01093 9.06665L11.5443 5.54331C11.6694 5.4184 11.8391 5.34833 12.016 5.34851C12.1928 5.3487 12.3623 5.41913 12.4873 5.54431C12.6122 5.6695 12.6823 5.83917 12.6821 6.01602C12.6819 6.19287 12.6114 6.3624 12.4863 6.48731L8.48026 10.484C8.35532 10.6086 8.18607 10.6786 8.0096 10.6786Z"
                            fill="#21262A"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Outlook.com row */}
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch border-b border-mailchimp-border-primary bg-[#F8FAFB] hover:bg-gray-50">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center gap-[-1px]">
                      <button className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-2.5 rounded-l-mailchimp border border-[#D5DEE3] bg-white">
                        <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                          View insights
                        </span>
                      </button>
                      <button className="flex px-1 py-1 justify-center items-center gap-2.5 rounded-r-mailchimp border border-[#D5DEE3] bg-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0096 10.6786C7.9219 10.6786 7.83506 10.6613 7.75407 10.6277C7.67307 10.594 7.59951 10.5448 7.5376 10.4826L3.54293 6.47665C3.48099 6.41466 3.43186 6.34109 3.39836 6.26012C3.36485 6.17915 3.34763 6.09237 3.34766 6.00475C3.34769 5.91712 3.36498 5.83035 3.39854 5.74941C3.4321 5.66846 3.48128 5.59492 3.54326 5.53298C3.60525 5.47104 3.67882 5.42192 3.75979 5.38841C3.84076 5.35491 3.92754 5.33768 4.01517 5.33771C4.10279 5.33774 4.18956 5.35503 4.2705 5.38859C4.35145 5.42215 4.42499 5.47133 4.48693 5.53331L8.01093 9.06665L11.5443 5.54331C11.6694 5.4184 11.8391 5.34833 12.016 5.34851C12.1928 5.3487 12.3623 5.41913 12.4873 5.54431C12.6122 5.6695 12.6823 5.83917 12.6821 6.01602C12.6819 6.19287 12.6114 6.3624 12.4863 6.48731L8.48026 10.484C8.35532 10.6086 8.18607 10.6786 8.0096 10.6786Z"
                            fill="#21262A"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Claycollective.com row */}
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch bg-white hover:bg-gray-50">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center gap-[-1px]">
                      <button className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-2.5 rounded-l-mailchimp border border-[#D5DEE3] bg-white">
                        <span className="text-mailchimp-text-primary text-component-x-small font-normal leading-4">
                          View insights
                        </span>
                      </button>
                      <button className="flex px-1 py-1 justify-center items-center gap-2.5 rounded-r-mailchimp border border-[#D5DEE3] bg-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.0096 10.6786C7.9219 10.6786 7.83506 10.6613 7.75407 10.6277C7.67307 10.594 7.59951 10.5448 7.5376 10.4826L3.54293 6.47665C3.48099 6.41466 3.43186 6.34109 3.39836 6.26012C3.36485 6.17915 3.34763 6.09237 3.34766 6.00475C3.34769 5.91712 3.36498 5.83035 3.39854 5.74941C3.4321 5.66846 3.48128 5.59492 3.54326 5.53298C3.60525 5.47104 3.67882 5.42192 3.75979 5.38841C3.84076 5.35491 3.92754 5.33768 4.01517 5.33771C4.10279 5.33774 4.18956 5.35503 4.2705 5.38859C4.35145 5.42215 4.42499 5.47133 4.48693 5.53331L8.01093 9.06665L11.5443 5.54331C11.6694 5.4184 11.8391 5.34833 12.016 5.34851C12.1928 5.3487 12.3623 5.41913 12.4873 5.54431C12.6122 5.6695 12.6823 5.83917 12.6821 6.01602C12.6819 6.19287 12.6114 6.3624 12.4863 6.48731L8.48026 10.484C8.35532 10.6086 8.18607 10.6786 8.0096 10.6786Z"
                            fill="#21262A"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Targeted performance */}
            <div className="flex w-full h-[321px] p-6 flex-col items-start gap-4 rounded-mailchimp border border-mailchimp-border-primary bg-white">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="flex items-start gap-6 self-stretch">
                  <div className="flex items-center gap-4 flex-1">
                    <h2 className="text-[20px] font-medium text-mailchimp-text-primary leading-[120%] tracking-[-0.4px]">
                      Targeted performance
                    </h2>
                  </div>
                  <div className="flex h-6 justify-end items-center gap-2">
                    <div className="flex items-start">
                      <div className="flex p-0.5 items-center gap-0.5 rounded-mailchimp bg-[#F0F4F6]">
                        <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded bg-white shadow-[0px_1px_4px_0px_rgba(76,85,91,0.2)]">
                          <span className="flex-1 text-mailchimp-text-primary text-center text-component-x-small font-normal leading-4">
                            Segments
                          </span>
                        </div>
                        <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded">
                          <span className="flex-1 text-[#727E85] text-center text-component-x-small font-normal leading-4">
                            Tags
                          </span>
                        </div>
                        <div className="flex min-w-12 px-2.5 py-0.5 justify-center items-center gap-1 rounded">
                          <span className="flex-1 text-[#727E85] text-center text-component-x-small font-normal leading-4">
                            Groups
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <button className="flex flex-col justify-center items-start">
                        <div className="flex p-1 justify-center items-center rounded-mailchimp border border-[#D5DEE3] bg-white">
                          <OptionsIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                {/* Table Column 1 - Segment name */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 items-center self-stretch bg-[#F0F4F6]">
                    <div className="flex justify-center items-center">
                      <span className="text-[#727E85] text-component-x-small font-normal leading-4">
                        Segment name
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      New subscribers
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      Previous buyers
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      High spenders
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 items-center gap-0.5 self-stretch bg-white">
                    <span className="flex-1 text-mailchimp-text-primary text-component-small font-medium leading-5 tracking-[-0.14px]">
                      Students
                    </span>
                  </div>
                </div>

                {/* Table Column 2 - Deliveries */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Deliveries
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      7,203
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      11,119
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      4,492
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      2,842
                    </span>
                  </div>
                </div>

                {/* Table Column 3 - Unique opens */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Unique opens
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      1,454
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      2,423
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      933
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      434
                    </span>
                  </div>
                </div>

                {/* Table Column 4 - Clicked */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Clicked
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      265
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      429
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      192
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      105
                    </span>
                  </div>
                </div>

                {/* Table Column 5 - Bounced */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Bounced
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      82
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      2
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      7
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      19
                    </span>
                  </div>
                </div>

                {/* Table Column 6 - Unsubscribed */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 justify-end items-center self-stretch bg-[#F0F4F6]">
                    <span className="text-[#727E85] text-component-x-small font-normal leading-[140%]">
                      Unsubscribed
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      12
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      37
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch border-b border-mailchimp-border-primary bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      10
                    </span>
                  </div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center gap-0.5 self-stretch bg-white">
                    <span className="text-mailchimp-text-primary text-right text-component-small font-normal leading-[140%]">
                      2
                    </span>
                  </div>
                </div>

                {/* Table Column 7 - Actions */}
                <div className="flex flex-col items-start flex-1">
                  <div className="flex h-8 px-3 py-2 items-center self-stretch bg-[#F0F4F6]"></div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch border-b border-mailchimp-border-primary bg-white"></div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch border-b border-mailchimp-border-primary bg-white"></div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch border-b border-mailchimp-border-primary bg-white"></div>
                  <div className="flex h-[52px] px-3 py-2.5 justify-end items-center self-stretch bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
