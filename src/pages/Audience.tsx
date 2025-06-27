import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Data Well Metrics Component
const DataWellCard = ({
  title,
  value,
  breakdown,
  chart,
}: {
  title: string;
  value: string;
  breakdown: Array<{ label: string; value: string }>;
  chart?: React.ReactNode;
}) => (
  <div
    className="flex flex-col items-end flex-1"
    style={{
      padding: `var(--space-component-inline-padding-xx-large)`,
      gap: `var(--space-column-gap-x-small)`,
      backgroundColor: `var(--color-container-background-primary)`,
    }}
  >
    <div
      className="flex flex-col justify-center items-start self-stretch"
      style={{
        gap: `var(--space-component-gap-x-small)`,
      }}
    >
      <div className="flex justify-between items-start self-stretch">
        <div
          className="flex min-h-6 items-center flex-1"
          style={{
            gap: `var(--space-component-gap-small)`,
          }}
        >
          <div
            className="flex flex-col justify-center items-start"
            style={{
              gap: `var(--space-component-gap-x-small)`,
            }}
          >
            <div
              className="text-xs font-normal leading-4 underline decoration-dotted underline-offset-[3px] decoration-auto"
              style={{
                color: `var(--color-text-secondary, #3C4348)`,
                textDecorationColor: `var(--color-container-border-tertiary)`,
                font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center self-stretch"
        style={{
          gap: `var(--space-column-gap-x-small)`,
        }}
      >
        <div
          className="flex flex-col justify-center items-start flex-1"
          style={{
            gap: `var(--space-component-gap-small)`,
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: `var(--space-component-gap-small)`,
            }}
          >
            <div
              className="text-2xl font-medium leading-8 tracking-[-0.48px]"
              style={{
                color: `var(--color-text-primary)`,
                font: "400 var(--font-size-heading-5, 24px)/32px var(--font-family-heading, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
              }}
            >
              {value}
            </div>
          </div>
        </div>
        {chart && (
          <div className="flex min-w-8 max-w-[150px] flex-col justify-center items-start flex-1 self-stretch">
            {chart}
          </div>
        )}
      </div>
    </div>
    <div
      className="flex flex-col items-start self-stretch"
      style={{
        gap: `var(--space-column-gap-x-small)`,
      }}
    >
      <div
        className="flex items-start content-start self-stretch flex-wrap"
        style={{
          gap: `var(--space-component-inline-padding-small)`,
        }}
      >
        {breakdown.map((item, index) => (
          <div
            key={index}
            className="flex min-w-10 flex-col items-start flex-1"
            style={{
              gap: `var(--space-component-gap-small)`,
            }}
          >
            <div
              className="text-[11px] font-normal leading-4"
              style={{
                color: `var(--color-text-tertiary, #4C555B)`,
                font: "400 var(--font-size-body-4, 12px)/16px var(--font-family-body, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
              }}
            >
              {item.label}
            </div>
            <div
              className="text-xs font-semibold leading-4 tracking-[-0.12px]"
              style={{
                color: `var(--color-text-primary)`,
                font: "600 var(--font-size-body-4, 12px)/16px var(--font-family-body, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Trend Chart SVG Component
const TrendChart = () => (
  <svg
    className="flex max-w-[180px] flex-col items-start gap-[-16px] flex-1 self-stretch"
    width="88"
    height="32"
    viewBox="0 0 88 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_20_14980)">
      <path
        d="M16.0661 12.438L0 13.3283V32H88V0L71.6154 4.51855L59.814 9.3876L51.628 8.62563L44.761 10.52L31.0489 9.3876L16.0661 12.438Z"
        fill="url(#paint0_linear_20_14980)"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_20_14980"
        x="0"
        y="0"
        width="88"
        height="32"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.203922 0 0 0 0 0.572549 0 0 0 0 0.937255 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_20_14980"
        />
      </filter>
      <linearGradient
        id="paint0_linear_20_14980"
        x1="41.9048"
        y1="0"
        x2="41.9048"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A0CFFF" />
        <stop offset="1" stopColor="#A0CFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
// Contact data
const contacts = [
  {
    id: 1,
    name: "Madalyn Mercer",
    email: "mercer_madalyn91@yahoo.com",
    initials: "MM",
    emailStatus: "Subscribed",
    smsStatus: null,
    location: "Oberlin, OH",
    phone: "5264902528",
    tags: ["VIP", "Referral"],
    lastUpdated: "3/10/25",
  },
  {
    id: 2,
    name: "Darcy Kidd",
    email: "darcy.kidd@mail.com",
    initials: "KD",
    emailStatus: "Subscribed",
    smsStatus: "Non-subscribed",
    location: "Dover, MA",
    phone: "5075154831",
    tags: ["Local"],
    lastUpdated: "3/10/25",
  },
  {
    id: 3,
    name: "Janet Alonso",
    email: "janet-alonso73@outlook.com",
    initials: "JA",
    emailStatus: "Subscribed",
    smsStatus: "Subscribed",
    location: "Monroe, GA",
    phone: "3643945094",
    tags: [],
    lastUpdated: "3/10/25",
  },
  {
    id: 4,
    name: "Mikael Gustafon",
    email: "gustafson_mikael17@outlook.com",
    initials: "MG",
    emailStatus: "Subscribed",
    smsStatus: null,
    location: "Langhorne, PA",
    phone: "6926727539",
    tags: ["Influencer"],
    lastUpdated: "3/10/25",
  },
  {
    id: 5,
    name: "Alex Mahoney",
    email: "mahoney-alexander@gmail.com",
    initials: "AM",
    emailStatus: "Subscribed",
    smsStatus: "Unsubscribed",
    location: "Newberry, SC",
    phone: "4950623772",
    tags: [],
    lastUpdated: "3/10/25",
  },
  {
    id: 6,
    name: "Samuel Sawyer",
    email: "samuel-sawyer63@gmail.com",
    initials: "SS",
    emailStatus: "Subscribed",
    smsStatus: null,
    location: "Elizabeth, PA",
    phone: "8442796869",
    tags: ["Event attendee", "Donor"],
    lastUpdated: "3/10/25",
  },
  {
    id: 7,
    name: "Spencer Benjamin",
    email: "spencer_benjamin38@mail.com",
    initials: "SB",
    emailStatus: "Unsubscribed",
    smsStatus: null,
    location: "Fairfield Harbour, MI",
    phone: "3894748624",
    tags: ["Event attendee"],
    lastUpdated: "3/10/25",
  },
  {
    id: 8,
    name: "Terry Salvador",
    email: "terry.salvador@gmail.com",
    initials: "TS",
    emailStatus: "Subscribed",
    smsStatus: null,
    location: "Pontiac, IL",
    phone: "1612541979",
    tags: ["VIP", "Donor"],
    lastUpdated: "3/10/25",
  },
  {
    id: 9,
    name: "Orland Gutmann",
    email: "orland.hv.gutmann@mc-mail.nosend",
    initials: "OG",
    emailStatus: "Subscribed",
    smsStatus: null,
    location: "Lake Davidmouth, IN",
    phone: "4701838753",
    tags: [],
    lastUpdated: "3/10/25",
  },
];

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4668 13.5334L10.8735 9.94006C11.7166 8.8637 12.1177 7.50643 11.995 6.14469C11.8724 4.78295 11.2353 3.51917 10.2134 2.61076C9.1916 1.70235 7.8619 1.21764 6.49517 1.25534C5.12844 1.29305 3.82749 1.85034 2.85728 2.81371C1.88708 3.77708 1.32061 5.07406 1.27325 6.44049C1.22588 7.80692 1.70119 9.14001 2.60236 10.1682C3.50353 11.1965 4.76277 11.8425 6.12361 11.9748C7.48445 12.107 8.84452 11.7155 9.92681 10.8801L13.5201 14.4801C13.5821 14.5425 13.6558 14.5921 13.7371 14.626C13.8183 14.6598 13.9055 14.6773 13.9935 14.6773C14.0815 14.6773 14.1686 14.6598 14.2499 14.626C14.3311 14.5921 14.4048 14.5425 14.4668 14.4801C14.5293 14.4181 14.5789 14.3444 14.6127 14.2631C14.6466 14.1819 14.664 14.0947 14.664 14.0067C14.664 13.9187 14.6466 13.8316 14.6127 13.7503C14.5789 13.669 14.5293 13.5954 14.4668 13.5334ZM3.83347 9.49339C3.27451 8.93381 2.89399 8.22107 2.74001 7.44526C2.58603 6.66946 2.6655 5.86542 2.96838 5.13478C3.27126 4.40413 3.78396 3.77968 4.44166 3.34035C5.09936 2.90102 5.87254 2.66654 6.66347 2.66654C7.45441 2.66654 8.22759 2.90102 8.88529 3.34035C9.54299 3.77962 10.0557 4.40413 10.3586 5.13478C10.6614 5.86536 10.7409 6.66946 10.5869 7.44526C10.433 8.22107 10.0524 8.93381 9.49347 9.49339C9.12198 9.8653 8.68083 10.1603 8.19524 10.3616C7.70964 10.5629 7.18914 10.6665 6.66347 10.6665C6.13781 10.6665 5.6173 10.5629 5.13171 10.3616C4.64612 10.1603 4.20497 9.8653 3.83347 9.49339Z"
      fill="var(--color-icon-inverse, #FFF);"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00935 10.6786C7.92165 10.6786 7.83482 10.6613 7.75382 10.6277C7.67283 10.594 7.59927 10.5448 7.53735 10.4826L3.54269 6.47665C3.48075 6.41466 3.43162 6.34109 3.39811 6.26012C3.36461 6.17915 3.34738 6.09237 3.34741 6.00475C3.34744 5.91712 3.36473 5.83035 3.3983 5.74941C3.43186 5.66846 3.48103 5.59492 3.54302 5.53298C3.605 5.47104 3.67858 5.42192 3.75955 5.38841C3.84052 5.35491 3.92729 5.33774 4.01492 5.33771C4.10255 5.33774 4.18931 5.35503 4.27026 5.38859C4.3512 5.42215 4.42474 5.47133 4.48669 5.53331L8.01068 9.06665L11.544 5.54331C11.669 5.4184 11.8389 5.34833 12.0157 5.34851C12.1926 5.3487 12.3621 5.41913 12.487 5.54431C12.6119 5.6695 12.682 5.83917 12.6818 6.01602C12.6816 6.19287 12.6112 6.3624 12.486 6.48731L8.48002 10.484C8.35508 10.6086 8.18582 10.6786 8.00935 10.6786Z"
      fill="#21262A"
    />
  </svg>
);

const SortAscendingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.47878 4.19605L10.4721 6.19605C10.732 6.45683 10.7313 6.87894 10.4705 7.13886C10.2098 7.39877 9.78764 7.39807 9.52773 7.13728L8.66659 6.27333V11.3333C8.66659 11.7015 8.36811 12 7.99992 12C7.63173 12 7.33325 11.7015 7.33325 11.3333V6.27467L6.46975 7.13297C6.20853 7.39245 5.78643 7.39105 5.52695 7.12983C5.26747 6.86861 5.26887 6.44651 5.53009 6.18703L7.53675 4.19369C7.79766 3.93452 8.21917 3.93557 8.47878 4.19605Z"
      fill="#5D686F"
    />
  </svg>
);

const MobileIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6668 1.33331H5.3335C4.22893 1.33331 3.3335 2.22874 3.3335 3.33331V12.6666C3.3335 13.7712 4.22893 14.6666 5.3335 14.6666H10.6668C11.7714 14.6666 12.6668 13.7712 12.6668 12.6666V3.33331C12.6668 2.22874 11.7714 1.33331 10.6668 1.33331ZM11.3335 12.6666C11.3335 13.0348 11.035 13.3333 10.6668 13.3333H5.3335C4.96531 13.3333 4.66683 13.0348 4.66683 12.6666V3.33331C4.66683 2.96512 4.96531 2.66665 5.3335 2.66665H6.00016V3.33331C6.00016 3.7015 6.29864 3.99998 6.66683 3.99998H9.3335C9.70169 3.99998 10.0002 3.7015 10.0002 3.33331V2.66665H10.6668C11.035 2.66665 11.3335 2.96512 11.3335 3.33331V12.6666Z"
      fill="#21262A"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4221 2.59404C13.2373 2.40746 13.0172 2.25941 12.7747 2.15848C12.5322 2.05754 12.2721 2.00573 12.0095 2.00604H11.3428C11.3428 1.82923 11.2726 1.65966 11.1475 1.53464C11.0225 1.40961 10.853 1.33937 10.6761 1.33937C10.4993 1.33937 10.3298 1.40961 10.2047 1.53464C10.0797 1.65966 10.0095 1.82923 10.0095 2.00604L6.00947 2.00004C6.00947 1.82323 5.93924 1.65366 5.81421 1.52864C5.68919 1.40361 5.51962 1.33337 5.34281 1.33337C5.166 1.33337 4.99643 1.40361 4.8714 1.52864C4.74638 1.65366 4.67614 1.82323 4.67614 2.00004H4.00947C3.47904 2.00004 2.97033 2.21075 2.59526 2.58583C2.22019 2.9609 2.00947 3.46961 2.00947 4.00004V5.32137V5.32804L1.99414 11.9907C1.99414 12.5206 2.2044 13.0288 2.57875 13.4037C2.9531 13.7787 3.46095 13.9898 3.99081 13.9907L11.9908 14.0027C12.5212 14.0027 13.0299 13.792 13.405 13.4169C13.7801 13.0418 13.9908 12.5331 13.9908 12.0027L14.0028 4.00271C14.0035 3.74125 13.9525 3.48222 13.8529 3.24049C13.7532 2.99876 13.6069 2.77908 13.4221 2.59404ZM4.00614 3.32737H4.67281C4.67281 3.50419 4.74305 3.67375 4.86807 3.79878C4.99309 3.9238 5.16266 3.99404 5.33947 3.99404C5.51628 3.99404 5.68585 3.9238 5.81088 3.79878C5.9359 3.67375 6.00614 3.50419 6.00614 3.32737L10.0061 3.33337C10.0061 3.51019 10.0764 3.67975 10.2014 3.80478C10.3264 3.9298 10.496 4.00004 10.6728 4.00004C10.8496 4.00004 11.0192 3.9298 11.1442 3.80478C11.2692 3.67975 11.3395 3.51019 11.3395 3.33337H12.0061C12.183 3.33337 12.3525 3.40361 12.4775 3.52864C12.6026 3.65366 12.6728 3.82323 12.6728 4.00004V4.65804L3.33947 4.64404V3.98604C3.34158 3.81062 3.41275 3.6431 3.53754 3.5198C3.66234 3.3965 3.83071 3.32736 4.00614 3.32737ZM11.9941 12.6727L3.99414 12.6607C3.81733 12.6607 3.64776 12.5905 3.52274 12.4654C3.39771 12.3404 3.32747 12.1709 3.32747 11.994L3.33347 5.98471L12.6668 6.00004L12.6581 12.008C12.6576 12.184 12.5875 12.3527 12.4631 12.4772C12.3387 12.6017 12.1701 12.672 11.9941 12.6727Z"
      fill="#21262A"
    />
  </svg>
);

export default function Audience() {
  return (
    <div
      className="flex w-full max-w-none flex-col items-start self-stretch rounded-b-none"
      style={{
        padding: `var(--space-container-padding-x-large) var(--space-container-padding-x-large) var(--space-container-padding-medium)`,
        gap: `var(--space-large)`,
        borderRadius: `var(--radius-x-large) var(--radius-x-large) 0 0`,
        border: `1px solid var(--color-container-border-primary)`,
        backgroundColor: `var(--color-container-background-primary)`,
      }}
    >
      {/* Page Header */}
      <div className="flex justify-between items-center self-stretch">
        {/* Left */}
        <div
          className="flex items-center"
          style={{ gap: `var(--space-column-gap-x-small)` }}
        >
          <h1
            className="font-medium leading-[120%] tracking-[-0.48px]"
            style={{
              color: `var(--color-text-primary)`,
              fontSize: `24px`,
            }}
          >
            Contacts
          </h1>
        </div>

        {/* Right */}
        <div
          className="flex items-end self-stretch"
          style={{ gap: `var(--space-column-gap-x-small)` }}
        >
          {/* Date range select */}
          <div
            className="flex min-h-8 flex-col justify-center items-end"
            style={{
              gap: `var(--space-component-gap-small)`,
              borderRadius: `var(--radius-action)`,
            }}
          >
            <Button
              variant="outline"
              className="flex min-w-16 justify-center items-center text-sm font-normal leading-5"
              style={{
                padding: `var(--space-component-stack-padding-small) var(--space-component-inline-padding-x-large)`,
                gap: `var(--space-component-gap-small)`,
                borderRadius: `var(--radius-action)`,
                border: `1px solid var(--color-container-border-secondary)`,
                backgroundColor: `var(--color-container-background-primary)`,
                color: `var(--color-text-primary)`,
              }}
            >
              All time
              <CalendarIcon />
            </Button>
          </div>

          {/* Email button with badge */}
          <div className="flex items-start">
            <Button
              variant="outline"
              size="icon"
              className="relative flex justify-center items-center"
              style={{
                padding: `var(--space-component-inline-padding-small)`,
                borderRadius: `var(--radius-action)`,
                border: `1px solid var(--color-container-border-secondary)`,
                backgroundColor: `var(--color-container-background-primary)`,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8332 3.33337H4.1665C3.50346 3.33337 2.86758 3.59677 2.39874 4.06561C1.9299 4.53445 1.6665 5.17033 1.6665 5.83337V14.1667C1.6665 14.8297 1.9299 15.4656 2.39874 15.9345C2.86758 16.4033 3.50346 16.6667 4.1665 16.6667H15.8332C16.4962 16.6667 17.1321 16.4033 17.6009 15.9345C18.0698 15.4656 18.3332 14.8297 18.3332 14.1667V5.83337C18.3332 5.17033 18.0698 4.53445 17.6009 4.06561C17.1321 3.59677 16.4962 3.33337 15.8332 3.33337ZM4.1665 5.00004H15.8332C16.0542 5.00004 16.2661 5.08784 16.4224 5.24412C16.5787 5.4004 16.6665 5.61236 16.6665 5.83337V6.89921L10.2632 9.03421C10.0921 9.09043 9.90756 9.09043 9.7365 9.03421L3.33317 6.89921V5.83337C3.33317 5.61236 3.42097 5.4004 3.57725 5.24412C3.73353 5.08784 3.94549 5.00004 4.1665 5.00004ZM15.8332 15H4.1665C3.94549 15 3.73353 14.9122 3.57725 14.756C3.42097 14.5997 3.33317 14.3877 3.33317 14.1667V8.65587L9.209 10.615C9.72304 10.7854 10.2783 10.7854 10.7923 10.615L16.6665 8.65587V14.1667C16.6665 14.3877 16.5787 14.5997 16.4224 14.756C16.2661 14.9122 16.0542 15 15.8332 15Z"
                  fill="#21262A"
                />
              </svg>
              <div
                className="absolute -top-1.5 -right-1.5 flex min-w-4 min-h-4 flex-col justify-center items-center rounded-full"
                style={{
                  gap: `var(--space-component-gap-x-small)`,
                  borderRadius: `var(--radius-full)`,
                  backgroundColor: `var(--color-text-quaternary)`,
                }}
              >
                <span
                  className="text-center text-[9px] font-medium leading-[10px]"
                  style={{
                    color: `var(--color-text-inverse)`,
                  }}
                >
                  3
                </span>
              </div>
            </Button>
          </div>

          {/* Settings button */}
          <div className="flex flex-col items-start">
            <Button
              variant="outline"
              size="icon"
              className="flex justify-center items-center"
              style={{
                padding: `var(--space-component-inline-padding-small)`,
                borderRadius: `var(--radius-action)`,
                border: `1px solid var(--color-container-border-secondary)`,
                backgroundColor: `var(--color-container-background-primary)`,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0199 6.65172H10.014C9.12996 6.65172 8.28212 7.00291 7.65699 7.62803C7.03187 8.25315 6.68068 9.101 6.68068 9.98505C6.68068 10.8691 7.03187 11.717 7.65699 12.3421C8.28212 12.9672 9.12996 13.3184 10.014 13.3184C10.8981 13.3192 11.7462 12.9687 12.3719 12.3441C12.9976 11.7196 13.3495 10.872 13.3503 9.98797C13.351 9.10391 13.0006 8.25576 12.376 7.63009C11.7514 7.00442 10.9039 6.65249 10.0199 6.65172ZM10.0149 11.6517C9.68521 11.6513 9.36309 11.5532 9.08922 11.3697C8.81536 11.1862 8.60205 10.9257 8.47628 10.6209C8.35051 10.3162 8.31792 9.98108 8.38264 9.65785C8.44735 9.33463 8.60646 9.03785 8.83985 8.80505C8.99402 8.65011 9.17742 8.52731 9.3794 8.44377C9.58138 8.36023 9.79794 8.31761 10.0165 8.31838C10.4585 8.31838 10.8825 8.49398 11.195 8.80654C11.5076 9.1191 11.6832 9.54302 11.6832 9.98505C11.6832 10.4271 11.5076 10.851 11.195 11.1636C10.8825 11.4761 10.4585 11.6517 10.0165 11.6517H10.0149Z"
                  fill="#21262A"
                />
                <path
                  d="M17.0365 11.1667L16.6124 10.9209C16.7029 10.3092 16.7029 9.68755 16.6124 9.07588L17.0382 8.83172C17.4208 8.61032 17.7001 8.24635 17.8149 7.81948C17.9297 7.39261 17.8706 6.93765 17.6507 6.55422L16.8174 5.11005C16.5962 4.72762 16.2327 4.44832 15.8062 4.33322C15.3797 4.21813 14.925 4.27661 14.5415 4.49588L14.1149 4.74172C13.628 4.36071 13.091 4.0486 12.519 3.81422V3.32255C12.519 2.88052 12.3434 2.4566 12.0309 2.14404C11.7183 1.83148 11.2944 1.65588 10.8524 1.65588H9.18568C8.74366 1.65588 8.31973 1.83148 8.00717 2.14404C7.69461 2.4566 7.51902 2.88052 7.51902 3.32255V3.82255C6.94849 4.05329 6.41259 4.36176 5.92652 4.73922L5.49402 4.48922C5.11359 4.26846 4.66131 4.20704 4.23579 4.31834C3.81026 4.42964 3.44598 4.70463 3.22235 5.08338L2.38902 6.52505C2.16747 6.90752 2.10692 7.36233 2.22069 7.78944C2.33447 8.21655 2.61323 8.58097 2.99568 8.80255L3.41985 9.04838C3.37473 9.35411 3.35161 9.66268 3.35068 9.97172C3.35074 10.2818 3.37274 10.5914 3.41652 10.8984L2.99235 11.1426C2.60925 11.3626 2.32918 11.7257 2.21371 12.1522C2.09823 12.5786 2.15679 13.0334 2.37652 13.4167L3.20985 14.8609C3.31894 15.0507 3.46435 15.2171 3.63777 15.3507C3.81118 15.4842 4.00922 15.5823 4.22055 15.6394C4.43189 15.6964 4.65239 15.7112 4.86946 15.6831C5.08654 15.6549 5.29593 15.5842 5.48568 15.475L5.91235 15.2292C6.3991 15.6105 6.9361 15.9229 7.50818 16.1575V16.6459C7.50818 17.0879 7.68378 17.5118 7.99634 17.8244C8.3089 18.137 8.73282 18.3125 9.17485 18.3125H10.8415C11.2835 18.3125 11.7075 18.137 12.02 17.8244C12.3326 17.5118 12.5082 17.0879 12.5082 16.6459V16.1667C13.0811 15.9346 13.619 15.6242 14.1065 15.2442L14.5324 15.4942C14.9148 15.7158 15.3696 15.7763 15.7967 15.6625C16.2238 15.5488 16.5883 15.27 16.8099 14.8875L17.6432 13.4459C17.7531 13.2564 17.8247 13.0472 17.8537 12.83C17.8827 12.6129 17.8687 12.3922 17.8123 12.1805C17.756 11.9689 17.6584 11.7704 17.5253 11.5964C17.3922 11.4224 17.2261 11.2764 17.0365 11.1667ZM14.8757 8.83338C15.0634 9.59392 15.0634 10.3887 14.8757 11.1492C14.8336 11.324 14.8492 11.5077 14.9201 11.6729C14.9909 11.8381 15.1134 11.976 15.269 12.0659L16.204 12.6092L15.3707 14.05L14.4349 13.5084C14.2796 13.4185 14.0994 13.3812 13.9212 13.4019C13.743 13.4226 13.5762 13.5003 13.4457 13.6234C12.878 14.159 12.1932 14.5548 11.4457 14.7792C11.2736 14.8302 11.1226 14.9353 11.0151 15.079C10.9076 15.2227 10.8493 15.3973 10.849 15.5767V16.655H9.18235V15.5775C9.18272 15.398 9.12508 15.2231 9.01802 15.079C8.91096 14.9348 8.76019 14.8291 8.58818 14.7775C7.83971 14.5519 7.15466 14.1538 6.58818 13.615C6.45757 13.4919 6.2909 13.414 6.11269 13.3927C5.93447 13.3714 5.75413 13.4079 5.59818 13.4967L4.66068 14.0367L3.82735 12.5926L4.76485 12.0534C4.92097 11.9638 5.0439 11.8261 5.11525 11.6609C5.18661 11.4957 5.20254 11.3118 5.16068 11.1367C5.06902 10.7582 5.02231 10.3703 5.02152 9.98088C5.02403 9.59111 5.07185 9.20295 5.16402 8.82422C5.2061 8.64944 5.19054 8.46574 5.11965 8.30053C5.04876 8.13533 4.92635 7.99747 4.77068 7.90755L3.83485 7.36588L4.66818 5.92338L5.60485 6.46672C5.62068 6.47588 5.63902 6.47505 5.65485 6.48338C5.70461 6.50608 5.75654 6.52367 5.80985 6.53588C5.864 6.55299 5.91991 6.56389 5.97652 6.56838C5.99318 6.56838 6.00902 6.57838 6.02568 6.57838C6.06387 6.57386 6.10172 6.56691 6.13902 6.55755C6.18693 6.55285 6.23434 6.54393 6.28068 6.53088C6.32809 6.51093 6.37355 6.48666 6.41652 6.45838C6.46266 6.43479 6.50646 6.40689 6.54735 6.37505C6.55985 6.36422 6.57568 6.36088 6.58735 6.34922C7.15469 5.81278 7.83958 5.4164 8.58735 5.19172C8.60139 5.18532 8.61502 5.17809 8.62818 5.17005C8.68194 5.148 8.73309 5.12005 8.78068 5.08672C8.82511 5.06332 8.867 5.03539 8.90568 5.00338C8.94355 4.96602 8.97761 4.92499 9.00735 4.88088C9.03904 4.84018 9.06693 4.79667 9.09068 4.75088C9.1102 4.70428 9.12553 4.65603 9.13652 4.60672C9.1535 4.55246 9.16495 4.49662 9.17068 4.44005C9.17068 4.42505 9.17985 4.41172 9.17985 4.39588V3.31755H10.8465V4.39588C10.8461 4.57545 10.9038 4.75033 11.0108 4.89448C11.1179 5.03863 11.2687 5.14435 11.4407 5.19588C12.1886 5.42282 12.8733 5.82084 13.4407 6.35838C13.5709 6.48169 13.7373 6.55972 13.9154 6.58089C14.0934 6.60206 14.2736 6.56523 14.429 6.47588L15.3674 5.93672L16.2007 7.38088L15.2632 7.92005C15.1092 8.01065 14.9885 8.14832 14.9187 8.31277C14.8489 8.47721 14.8339 8.65972 14.8757 8.83338Z"
                  fill="#21262A"
                />
              </svg>
            </Button>
          </div>

          {/* Audience select */}
          <div className="flex items-start">
            <Select>
              <SelectTrigger
                className="flex w-[200px] px-2.5 py-2 items-center gap-1 bg-white text-xs font-normal leading-4 tracking-[-0.12px]"
                style={{
                  borderRadius: "var(--radius-action)",
                  border: "1px solid var(--color-input-border-primary)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-family-component)",
                }}
              >
                <SelectValue
                  placeholder={
                    <span
                      style={{
                        fontFamily:
                          "var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                      }}
                    >
                      <b>Audience</b> Clay Collective
                    </span>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay-collective">
                  Audience Clay Collective
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Add contacts button */}
          <div className="flex items-start">
            <Button
              className="flex min-w-16 px-3 py-1.5 justify-center items-center gap-1 text-white font-mailchimp text-sm font-normal leading-5"
              style={{
                borderRadius: "var(--radius-action)",
                backgroundColor: "var(--color-action-standard)",
              }}
            >
              Add contacts
              <ChevronDownIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* Data Well */}
      <div
        className="flex w-full max-w-none flex-col items-start"
        style={{
          padding: `var(--space-container-padding-xx-small)`,
          gap: `var(--space-column-gap-x-small)`,
          borderRadius: `var(--radius-small)`,
          border: `1px solid var(--color-container-border-primary)`,
          backgroundColor: `var(--color-container-background-primary)`,
        }}
      >
        {/* Actions */}
        <div
          className="flex justify-end items-center w-full"
          style={{
            gap: `var(--space-component-inline-padding-small)`,
            position: "relative",
            right: `var(--space-container-padding-xx-small)`,
            top: `var(--space-container-padding-xx-small)`,
            marginBottom: `calc(-1 * var(--space-column-gap-x-small))`,
          }}
        >
          {/* Settings */}
          <div className="flex flex-col justify-center items-start">
            <button
              className="flex p-1 justify-center items-center bg-white"
              style={{
                borderRadius: "var(--radius-action)",
                border: "1px solid var(--color-container-border-secondary)",
              }}
            >
              <div className="flex w-4 h-4 justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01588 5.32137H8.01121C7.30397 5.32137 6.62569 5.60232 6.1256 6.10242C5.6255 6.60252 5.34455 7.2808 5.34455 7.98804C5.34455 8.69528 5.6255 9.37356 6.1256 9.87366C6.62569 10.3738 7.30397 10.6547 8.01121 10.6547C8.71846 10.6553 9.39698 10.375 9.89751 9.87531C10.398 9.37565 10.6796 8.69762 10.6802 7.99037C10.6808 7.28313 10.4005 6.60461 9.90082 6.10407C9.40116 5.60354 8.72312 5.32199 8.01588 5.32137ZM8.01188 9.32137C7.74817 9.32105 7.49047 9.24254 7.27138 9.09576C7.05229 8.94898 6.88164 8.74052 6.78103 8.49676C6.68041 8.25299 6.65434 7.98487 6.70611 7.72628C6.75788 7.4677 6.88517 7.23028 7.07188 7.04404C7.19522 6.92009 7.34193 6.82185 7.50352 6.75501C7.66511 6.68818 7.83835 6.65409 8.01321 6.65471C8.36684 6.65471 8.70597 6.79518 8.95602 7.04523C9.20607 7.29528 9.34655 7.63442 9.34655 7.98804C9.34655 8.34166 9.20607 8.6808 8.95602 8.93085C8.70597 9.1809 8.36684 9.32137 8.01321 9.32137H8.01188Z"
                    fill="#21262A"
                  />
                  <path
                    d="M13.6292 8.93337L13.2899 8.73671C13.3623 8.24737 13.3623 7.75004 13.2899 7.26071L13.6305 7.06537C13.9366 6.88826 14.16 6.59708 14.2519 6.25558C14.3437 5.91409 14.2965 5.55012 14.1205 5.24337L13.4539 4.08804C13.277 3.7821 12.9862 3.55865 12.645 3.46658C12.3038 3.3745 11.94 3.42129 11.6332 3.59671L11.2919 3.79337C10.9024 3.48857 10.4728 3.23888 10.0152 3.05137V2.65804C10.0152 2.30442 9.87474 1.96528 9.62469 1.71523C9.37464 1.46518 9.0355 1.32471 8.68188 1.32471H7.34855C6.99492 1.32471 6.65579 1.46518 6.40574 1.71523C6.15569 1.96528 6.01521 2.30442 6.01521 2.65804V3.05804C5.55879 3.24263 5.13007 3.48941 4.74121 3.79137L4.39521 3.59137C4.09087 3.41477 3.72905 3.36563 3.38863 3.45467C3.04821 3.54371 2.75678 3.76371 2.57788 4.06671L1.91121 5.22004C1.73398 5.52602 1.68554 5.88986 1.77656 6.23155C1.86757 6.57324 2.09059 6.86478 2.39655 7.04204L2.73588 7.23871C2.69978 7.48329 2.68129 7.73014 2.68055 7.97737C2.68059 8.22542 2.69819 8.47315 2.73321 8.71871L2.39388 8.91404C2.0874 9.09007 1.86335 9.38058 1.77097 9.72173C1.67858 10.0629 1.72543 10.4268 1.90121 10.7334L2.56788 11.8887C2.65515 12.0405 2.77148 12.1737 2.91021 12.2805C3.04895 12.3874 3.20737 12.4659 3.37644 12.5115C3.54551 12.5571 3.72191 12.569 3.89557 12.5464C4.06923 12.5239 4.23674 12.4673 4.38855 12.38L4.72988 12.1834C5.11928 12.4884 5.54888 12.7383 6.00655 12.926V13.3167C6.00655 13.6703 6.14702 14.0095 6.39707 14.2595C6.64712 14.5096 6.98626 14.65 7.33988 14.65H8.67321C9.02684 14.65 9.36597 14.5096 9.61602 14.2595C9.86607 14.0095 10.0065 13.6703 10.0065 13.3167V12.9334C10.4649 12.7477 10.8952 12.4993 11.2852 12.1954L11.6259 12.3954C11.9319 12.5726 12.2957 12.621 12.6374 12.53C12.9791 12.439 13.2706 12.216 13.4479 11.91L14.1145 10.7567C14.2025 10.6051 14.2597 10.4377 14.283 10.264C14.3062 10.0903 14.2949 9.91378 14.2498 9.74443C14.2048 9.57509 14.1268 9.41629 14.0203 9.27713C13.9138 9.13796 13.7809 9.02115 13.6292 8.93337ZM11.9005 7.06671C12.0507 7.67514 12.0507 8.31094 11.9005 8.91937C11.8669 9.0592 11.8793 9.20616 11.936 9.33832C11.9928 9.47048 12.0907 9.58077 12.2152 9.65271L12.9632 10.0874L12.2965 11.24L11.5479 10.8067C11.4236 10.7348 11.2795 10.7049 11.137 10.7215C10.9944 10.7381 10.861 10.8002 10.7565 10.8987C10.3024 11.3272 9.75455 11.6438 9.15655 11.8234C9.01889 11.8641 8.89808 11.9483 8.81208 12.0632C8.72607 12.1782 8.67948 12.3178 8.67921 12.4614V13.324H7.34588V12.462C7.34618 12.3184 7.30007 12.1785 7.21442 12.0632C7.12876 11.9478 7.00815 11.8633 6.87055 11.822C6.27177 11.6416 5.72373 11.323 5.27055 10.892C5.16606 10.7936 5.03272 10.7312 4.89015 10.7142C4.74758 10.6971 4.6033 10.7263 4.47855 10.7974L3.72855 11.2294L3.06188 10.074L3.81188 9.64271C3.93678 9.57106 4.03512 9.46091 4.0922 9.32872C4.14929 9.19653 4.16204 9.04941 4.12855 8.90937C4.05522 8.6066 4.01785 8.29623 4.01721 7.98471C4.01923 7.67289 4.05748 7.36236 4.13121 7.05937C4.16488 6.91955 4.15243 6.77259 4.09572 6.64043C4.03901 6.50826 3.94108 6.39798 3.81655 6.32604L3.06788 5.89271L3.73455 4.73871L4.48388 5.17337C4.49655 5.18071 4.51121 5.18004 4.52388 5.18671C4.56369 5.20486 4.60523 5.21893 4.64788 5.22871C4.6912 5.24239 4.73593 5.25112 4.78121 5.25471C4.79455 5.25471 4.80721 5.26271 4.82055 5.26271C4.85109 5.25909 4.88138 5.25352 4.91121 5.24604C4.94955 5.24228 4.98747 5.23514 5.02455 5.22471C5.06247 5.20874 5.09884 5.18933 5.13321 5.16671C5.17012 5.14783 5.20517 5.12551 5.23788 5.10004C5.24788 5.09137 5.26055 5.08871 5.26988 5.07937C5.72376 4.65023 6.27167 4.33312 6.86988 4.15337C6.88111 4.14826 6.89202 4.14247 6.90255 4.13604C6.94556 4.1184 6.98647 4.09604 7.02455 4.06937C7.06009 4.05065 7.0936 4.02831 7.12455 4.00271C7.15484 3.97282 7.18209 3.93999 7.20588 3.90471C7.23123 3.87215 7.25355 3.83734 7.27255 3.80071C7.28816 3.76342 7.30043 3.72483 7.30921 3.68537C7.3228 3.64197 7.33196 3.59729 7.33655 3.55204C7.33655 3.54004 7.34388 3.52937 7.34388 3.51671V2.65404H8.67721V3.51671C8.67692 3.66036 8.72303 3.80026 8.80868 3.91558C8.89433 4.03091 9.01494 4.11548 9.15255 4.15671C9.75086 4.33826 10.2987 4.65667 10.7525 5.08671C10.8567 5.18535 10.9899 5.24778 11.1323 5.26471C11.2747 5.28165 11.4188 5.25219 11.5432 5.18071L12.2939 4.74937L12.9605 5.90471L12.2105 6.33604C12.0874 6.40852 11.9908 6.51866 11.935 6.65021C11.8791 6.78177 11.8671 6.92778 11.9005 7.06671Z"
                    fill="#21262A"
                  />
                </svg>
              </div>
            </button>
          </div>
          {/* Analytics Button */}
          <button
            className="flex min-w-12 px-2.5 py-1 justify-center items-center gap-1 bg-white"
            style={{
              borderRadius: "var(--radius-action)",
              border: "1px solid var(--color-container-border-secondary)",
              color: "var(--color-text-primary, #21262A)",
              font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
            }}
          >
            <div
              className="text-xs font-normal leading-4"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-family-component)",
              }}
            >
              Analytics
            </div>
          </button>
        </div>

        {/* Data Wells */}
        <div className="flex items-start align-content-start self-stretch flex-wrap bg-white">
          <DataWellCard
            title="Total contacts"
            value="24,255"
            breakdown={[
              { label: "Email", value: "23,019" },
              { label: "SMS", value: "1,236" },
              { label: "Both", value: "3,236" },
            ]}
            chart={<TrendChart />}
          />
          <DataWellCard
            title="Subscribed contacts"
            value="20,448"
            breakdown={[
              { label: "Email", value: "3,236" },
              { label: "SMS", value: "1,194" },
              { label: "Both", value: "2,399" },
            ]}
            chart={<TrendChart />}
          />
          <DataWellCard
            title="Unsubcribed contacts"
            value="782"
            breakdown={[
              { label: "Email", value: "704" },
              { label: "SMS", value: "78" },
              { label: "Both", value: "54" },
            ]}
            chart={<TrendChart />}
          />
          <DataWellCard
            title="Non-subscribed contacts"
            value="1,322"
            breakdown={[
              { label: "Email", value: "1,231" },
              { label: "SMS", value: "91" },
              { label: "Both", value: "87" },
            ]}
            chart={<TrendChart />}
          />
          <DataWellCard
            title="Archived contacts"
            value="67"
            breakdown={[
              { label: "Email", value: "38" },
              { label: "SMS", value: "17" },
              { label: "Both", value: "12" },
            ]}
            chart={<TrendChart />}
          />
        </div>
      </div>

      {/* Contacts Table */}
      <div
        className="flex flex-col items-start self-stretch"
        style={{
          gap: `var(--space-column-gap-x-small)`,
          backgroundColor: `var(--color-container-background-primary)`,
        }}
      >
        {/* Table Action Bar */}
        <div
          className="flex h-8 justify-between items-center self-stretch"
          style={{
            borderRadius: `var(--radius-action)`,
            backgroundColor: `var(--color-container-background-primary)`,
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: `var(--space-column-gap-x-small)`,
            }}
          >
            {/* Search */}
            <div
              className="flex w-[240px] h-8 items-center bg-transparent outline-none"
              style={{
                padding: `var(--space-component-inline-padding-x-large) var(--space-component-inline-padding-x-large)`,
                gap: `var(--space-column-gap-x-small)`,
                borderRadius: `var(--radius-action)`,
                border: `1px solid var(--color-container-border-secondary)`,
                backgroundColor: `var(--color-container-background-primary)`,
              }}
            >
              <div className="flex h-4 w-4 items-center">
                <SearchIcon />
              </div>
              <input
                className="flex flex-col justify-center flex-1 self-stretch text-xs leading-4 bg-transparent outline-none font-normal"
                placeholder="Search contacts..."
                style={{
                  color: `var(--color-text-quaternary)`,
                }}
              />
            </div>

            {/* Filters */}
            <div
              className="flex items-center"
              style={{
                gap: `var(--space-column-gap-x-small)`,
              }}
            >
              {["Tags", "Segments", "Status", "Quick filters"].map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  className="flex h-8 justify-center items-center text-xs font-normal leading-4"
                  style={{
                    padding: `var(--space-component-stack-padding-small) var(--space-component-inline-padding-x-large)`,
                    gap: `var(--space-component-gap-small)`,
                    borderRadius: `var(--radius-action)`,
                    border: `1px solid var(--color-container-border-secondary)`,
                    backgroundColor: `var(--color-container-background-primary)`,
                    color: `var(--color-text-primary)`,
                  }}
                >
                  <span
                    style={{
                      font: "400 var(--font-size-component-x-small, 12px) var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                    }}
                  >
                    {filter}
                  </span>
                  <ChevronDownIcon />
                </Button>
              ))}
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              gap: `var(--space-component-gap-small)`,
            }}
          >
            <Button
              variant="ghost"
              className="flex min-w-12 justify-center items-center text-xs font-normal leading-4"
              style={{
                padding: `var(--space-component-stack-padding-small) var(--space-component-inline-padding-large)`,
                gap: `var(--space-component-gap-small)`,
                borderRadius: `var(--radius-action)`,
                color: `var(--color-text-primary)`,
              }}
            >
              <span
                style={{
                  font: "400 var(--font-size-component-x-small, 12px) var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                }}
              >
                Sort by
              </span>
              <ChevronDownIcon />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex justify-center items-center"
              style={{
                padding: `var(--space-component-gap-small)`,
                borderRadius: `var(--radius-action)`,
              }}
            >
              <SortAscendingIcon />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="flex items-start self-stretch">
          {/* Checkbox Column */}
          <div className="flex flex-col items-start">
            <div className="flex w-12 h-8 px-2 py-2 items-center justify-center rounded-l-mailchimp bg-mailchimp-background-tertiary">
              <Checkbox />
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex w-12 h-16 px-2 py-4 items-center justify-center border-b border-mailchimp-border-primary bg-white"
              >
                <Checkbox />
              </div>
            ))}
          </div>

          {/* Name & Email Column */}
          <div className="flex w-[376px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center self-stretch bg-mailchimp-background-tertiary">
              <div
                className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4"
                style={{
                  color: "var(--color-text-tertiary, #4C555B)",
                  font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                }}
              >
                Name & Email
              </div>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center gap-3 self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                <Avatar
                  className="w-10 h-10 rounded-full"
                  style={{
                    backgroundColor: "var(--color-container-background-accent)",
                  }}
                >
                  <AvatarFallback
                    className="text-mailchimp-text-primary font-mailchimp font-medium text-sm leading-5 tracking-[-0.14px]"
                    style={{
                      font: "600 var(--font-size-body-3, 14px)/20px var(--font-family-body, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                    }}
                  >
                    {contact.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-start gap-1 flex-1">
                  <div
                    className="text-mailchimp-text-primary font-mailchimp font-medium text-sm leading-5 tracking-[-0.14px]"
                    style={{
                      font: "600 var(--font-size-component-small, 14px)/20px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                    }}
                  >
                    {contact.name}
                  </div>
                  <div
                    className="self-stretch text-mailchimp-text-secondary font-mailchimp font-normal text-xs leading-4"
                    style={{
                      font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                    }}
                  >
                    {contact.email}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Email Marketing Column */}
          <div className="flex min-w-[140px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center self-stretch bg-mailchimp-background-tertiary">
              <div
                className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4"
                style={{
                  color: "var(--color-text-tertiary, #4C555B)",
                  font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                }}
              >
                Email Marketing
              </div>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center gap-1 self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                {contact.emailStatus && (
                  <Badge
                    variant={
                      contact.emailStatus === "Subscribed"
                        ? "success"
                        : contact.emailStatus === "Unsubscribed"
                          ? "warning"
                          : "pending"
                    }
                  >
                    {contact.emailStatus}
                  </Badge>
                )}
              </div>
            ))}
          </div>

          {/* SMS Marketing Column */}
          <div className="flex min-w-[120px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center self-stretch bg-mailchimp-background-tertiary">
              <div
                className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4"
                style={{
                  color: "var(--color-text-tertiary, #4C555B)",
                  font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                }}
              >
                SMS Marketing
              </div>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center gap-1 self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                {contact.smsStatus && (
                  <Badge
                    variant={
                      contact.smsStatus === "Subscribed"
                        ? "success"
                        : contact.smsStatus === "Unsubscribed"
                          ? "warning"
                          : "pending"
                    }
                  >
                    {contact.smsStatus}
                  </Badge>
                )}
              </div>
            ))}
          </div>

          {/* Location Column */}
          <div className="flex w-[180px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center justify-between self-stretch bg-mailchimp-background-tertiary">
              <div
                className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4"
                style={{
                  color: "var(--color-text-tertiary, #4C555B)",
                  font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                }}
              >
                Location
              </div>
              <SortAscendingIcon />
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                <div className="flex flex-col justify-center items-start flex-1">
                  <div
                    className="self-stretch text-mailchimp-text-primary font-mailchimp font-normal text-sm leading-5"
                    style={{
                      font: "400 var(--font-size-component-small, 14px)/20px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                    }}
                  >
                    {contact.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Column */}
          <div className="flex w-[162px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center self-stretch bg-mailchimp-background-tertiary">
              <div
                className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4"
                style={{
                  color: "var(--color-text-tertiary, #4C555B)",
                  font: "400 var(--font-size-component-x-small, 12px)/16px var(--font-family-component, Graphik Web, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif), sans-serif",
                }}
              >
                Phone
              </div>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center gap-2 self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                {contact.phone && <MobileIcon />}
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="self-stretch text-mailchimp-text-primary font-mailchimp font-normal text-sm leading-5">
                    {contact.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags Column */}
          <div className="flex flex-1 min-w-[120px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center self-stretch bg-mailchimp-background-tertiary">
              <div className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4">
                Tags
              </div>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center gap-1 self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                {contact.tags.map((tag, index) => (
                  <Badge key={index} variant="info">
                    {tag}
                  </Badge>
                ))}
              </div>
            ))}
          </div>

          {/* Last Updated Column */}
          <div className="flex w-[130px] flex-col items-start">
            <div className="flex h-8 px-4 py-2 items-center self-stretch rounded-r-mailchimp bg-mailchimp-background-tertiary">
              <div className="text-mailchimp-text-tertiary font-mailchimp font-normal text-xs leading-4">
                Last updated
              </div>
            </div>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-16 px-4 py-2 items-center self-stretch border-b border-mailchimp-border-primary bg-white"
              >
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="self-stretch text-mailchimp-text-primary font-mailchimp font-normal text-sm leading-5">
                    {contact.lastUpdated}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
