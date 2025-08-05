import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Mail,
  MessageCircle,
  Instagram,
  Star,
  Clock,
  AlertCircle,
  MoreHorizontal,
  Search,
  Filter,
  Plus,
  Phone,
  ShoppingBag,
  ChevronDown,
  Slack,
  Hash,
  ExternalLink,
} from "lucide-react";

interface InboxMessage {
  id: string;
  customerName: string;
  customerAvatar?: string;
  channel: "email" | "sms" | "instagram" | "facebook" | "chat" | "review" | "slack";
  subject: string;
  preview: string;
  timestamp: string;
  isVip: boolean;
  urgency: "low" | "medium" | "high";
  tags: string[];
  ticketNumber?: string;
  orderHistory?: {
    totalOrders: number;
    totalSpent: number;
    lastOrder: string;
  };
  status: "new" | "waiting_on_you" | "waiting_on_customer" | "on_hold" | "done";
}

const mockMessages: InboxMessage[] = [
  {
    id: "1",
    customerName: "Richard Jeffries",
    customerAvatar: "https://i.pravatar.cc/150?img=1",
    channel: "email",
    subject: "Inability to Save Changes in Profile Settings",
    preview: "I've encountered an issue where changes made to my profile settings are not being saved...",
    timestamp: "24 minutes ago",
    ticketNumber: "#5081",
    isVip: false,
    urgency: "medium",
    tags: ["Bug Report"],
    status: "new"
  },
  {
    id: "2",
    customerName: "Robert Eng",
    customerAvatar: "https://i.pravatar.cc/150?img=2",
    channel: "slack",
    subject: "Walmart subscription renewal discussion",
    preview: "Hi there, I wanted to discuss our upcoming subscription renewal. Can you help me review the renewal options...",
    timestamp: "29 minutes ago",
    ticketNumber: "#5079",
    isVip: false,
    urgency: "low",
    tags: ["Subscription"],
    status: "new"
  },
  {
    id: "3",
    customerName: "George Gershwin",
    customerAvatar: "https://i.pravatar.cc/150?img=3",
    channel: "chat",
    subject: "Spotify integration support request",
    preview: "Hi! I just wanted to take a moment to say that your support team is incredible. Every time I've had an issue...",
    timestamp: "31 minutes ago",
    ticketNumber: "#5078",
    isVip: false,
    urgency: "low",
    tags: ["Integration"],
    status: "new"
  },
  {
    id: "4",
    customerName: "Brian Chesky",
    customerAvatar: "https://i.pravatar.cc/150?img=4",
    channel: "email",
    subject: "Frontend errors - something broken?",
    preview: "There are errors on the frontend - is something broken?",
    timestamp: "37 minutes ago",
    ticketNumber: "#5073",
    isVip: false,
    urgency: "high",
    tags: ["Bug", "Frontend"],
    status: "new"
  },
  {
    id: "5",
    customerName: "Lebron James",
    customerAvatar: "https://i.pravatar.cc/150?img=5",
    channel: "email",
    subject: "Dark Mode on the Dashboard",
    preview: "I would love to see a dark mode option for the dashboard. It would make it easier on the eyes...",
    timestamp: "15 minutes ago",
    ticketNumber: "#5083",
    isVip: true,
    urgency: "medium",
    tags: ["Feature Request"],
    status: "waiting_on_you"
  },
  {
    id: "6",
    customerName: "Richard Jeffries",
    customerAvatar: "https://i.pravatar.cc/150?img=1",
    channel: "email",
    subject: "Cancellation of Zendesk Subscription",
    preview: "I hope this message finds you well. I am writing to request the cancellation of my Zendesk subscription...",
    timestamp: "33 minutes ago",
    ticketNumber: "#5077",
    isVip: false,
    urgency: "medium",
    tags: ["Cancellation"],
    status: "waiting_on_you"
  },
  {
    id: "7",
    customerName: "Brian Chesky",
    customerAvatar: "https://i.pravatar.cc/150?img=4",
    channel: "slack",
    subject: "Netflix pricing confirmation",
    preview: "Did you get confirmation on pricing?",
    timestamp: "37 minutes ago",
    ticketNumber: "#5074",
    isVip: false,
    urgency: "low",
    tags: ["Pricing"],
    status: "waiting_on_you"
  },
  {
    id: "8",
    customerName: "Brian Chen",
    customerAvatar: "https://i.pravatar.cc/150?img=6",
    channel: "email",
    subject: "Sales inquiry follow up",
    preview: "When is the Sales segment going to be released?",
    timestamp: "45 minutes ago",
    ticketNumber: "#5072",
    isVip: false,
    urgency: "medium",
    tags: ["Sales"],
    status: "waiting_on_customer"
  }
];

const channelIcons = {
  email: <Mail className="w-3 h-3" />,
  sms: <Phone className="w-3 h-3" />,
  instagram: <Instagram className="w-3 h-3" />,
  facebook: <MessageCircle className="w-3 h-3" />,
  chat: <MessageCircle className="w-3 h-3" />,
  review: <Star className="w-3 h-3" />,
  slack: <Slack className="w-3 h-3" />
};

const channelColors = {
  email: "bg-blue-500",
  sms: "bg-green-500",
  instagram: "bg-pink-500",
  facebook: "bg-blue-600",
  chat: "bg-purple-500",
  review: "bg-yellow-500",
  slack: "bg-indigo-500"
};

const statusColumns = {
  new: { 
    title: "New", 
    count: 4,
    bgColor: "bg-gray-50"
  },
  waiting_on_you: { 
    title: "Waiting on You", 
    count: 3,
    bgColor: "bg-orange-50"
  },
  waiting_on_customer: { 
    title: "Waiting on Customer", 
    count: 1,
    bgColor: "bg-blue-50"
  }
};

function MessageCard({ message }: { message: InboxMessage }) {
  const channelColor = channelColors[message.channel];
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3 hover:shadow-md transition-shadow cursor-pointer">
      {/* Header with avatar and channel */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar className="h-8 w-8">
              <AvatarImage src={message.customerAvatar} />
              <AvatarFallback className="text-xs">
                {message.customerName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className={cn("absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center", channelColor)}>
              <div className="text-white">
                {channelIcons[message.channel]}
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm text-gray-900">
                {message.customerName}
              </span>
              <span className="text-xs text-gray-500">
                {message.ticketNumber}
              </span>
            </div>
            <div className="text-xs text-gray-500">
              {message.timestamp}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Reply</DropdownMenuItem>
            <DropdownMenuItem>Assign</DropdownMenuItem>
            <DropdownMenuItem>Change status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Subject */}
      <h4 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2">
        {message.subject}
      </h4>

      {/* Preview */}
      <p className="text-xs text-gray-600 mb-3 line-clamp-3 leading-relaxed">
        {message.preview}
      </p>

      {/* Footer with tags and indicators */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {message.urgency === "high" && (
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          )}
          {message.isVip && (
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
          )}
          {message.tags.slice(0, 1).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center space-x-1">
          {message.channel === 'email' && <Mail className="w-3 h-3 text-gray-400" />}
          {message.channel === 'slack' && <Hash className="w-3 h-3 text-gray-400" />}
        </div>
      </div>
    </div>
  );
}

function StatusColumn({ 
  status, 
  messages, 
  title, 
  count,
  bgColor
}: { 
  status: string;
  messages: InboxMessage[];
  title: string;
  count: number;
  bgColor: string;
}) {
  const statusMessages = messages.filter(m => m.status === status);
  
  return (
    <div className={cn("flex-shrink-0 w-80 rounded-lg p-4 h-fit", bgColor)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium text-sm text-gray-900">
            {title}
          </h3>
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-white">
            {count}
          </Badge>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="space-y-0">
        {statusMessages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
        
        {statusMessages.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <div className="text-lg mb-2">✨</div>
            <p className="text-sm">No items</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Inbox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredMessages = mockMessages.filter(message => {
    const matchesSearch = message.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "vip" && message.isVip) ||
                         (selectedFilter === "urgent" && message.urgency === "high") ||
                         message.channel === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6 min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Unified Inbox
          </h1>
          <p className="text-gray-600 mt-1">
            All customer conversations across channels in one intelligent workspace
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add filter
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Sort By
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Date created</DropdownMenuItem>
              <DropdownMenuItem>Priority</DropdownMenuItem>
              <DropdownMenuItem>Customer name</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Date Range
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>This week</DropdownMenuItem>
              <DropdownMenuItem>This month</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Account Owner
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All owners</DropdownMenuItem>
              <DropdownMenuItem>Me</DropdownMenuItem>
              <DropdownMenuItem>Unassigned</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Assignee
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All assignees</DropdownMenuItem>
              <DropdownMenuItem>Me</DropdownMenuItem>
              <DropdownMenuItem>Unassigned</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Account
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All accounts</DropdownMenuItem>
              <DropdownMenuItem>Premium</DropdownMenuItem>
              <DropdownMenuItem>Basic</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add filter
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto">
        <div className="flex space-x-6 pb-6 min-w-max">
          {Object.entries(statusColumns).map(([status, config]) => (
            <StatusColumn
              key={status}
              status={status}
              messages={filteredMessages}
              title={config.title}
              count={config.count}
              bgColor={config.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
