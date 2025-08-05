import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
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
  ExternalLink,
} from "lucide-react";

interface InboxMessage {
  id: string;
  customerName: string;
  customerAvatar?: string;
  channel: "email" | "sms" | "instagram" | "facebook" | "chat" | "review";
  subject: string;
  preview: string;
  timestamp: string;
  isVip: boolean;
  urgency: "low" | "medium" | "high";
  tags: string[];
  orderHistory?: {
    totalOrders: number;
    totalSpent: number;
    lastOrder: string;
  };
  status: "new" | "in_progress" | "waiting_customer" | "on_hold" | "done";
}

const mockMessages: InboxMessage[] = [
  {
    id: "1",
    customerName: "Sarah Chen",
    customerAvatar: "https://i.pravatar.cc/150?img=1",
    channel: "email",
    subject: "Where's my order?",
    preview: "Hi! I ordered my custom razor last week and haven't received any updates...",
    timestamp: "2 minutes ago",
    isVip: true,
    urgency: "high",
    tags: ["Order Inquiry", "VIP"],
    orderHistory: {
      totalOrders: 5,
      totalSpent: 245.00,
      lastOrder: "Order #1234 - Premium Razor Set"
    },
    status: "new"
  },
  {
    id: "2",
    customerName: "Mike Rodriguez",
    customerAvatar: "https://i.pravatar.cc/150?img=2",
    channel: "chat",
    subject: "Product arrived damaged",
    preview: "The razor I received has a crack in the handle. Can I get a replacement?",
    timestamp: "15 minutes ago",
    isVip: false,
    urgency: "high",
    tags: ["Damaged Product", "Replacement"],
    orderHistory: {
      totalOrders: 1,
      totalSpent: 89.99,
      lastOrder: "Order #1235 - Starter Kit"
    },
    status: "new"
  },
  {
    id: "3",
    customerName: "Emily Watson",
    customerAvatar: "https://i.pravatar.cc/150?img=3",
    channel: "instagram",
    subject: "DM: Love the new design!",
    preview: "Just saw your latest post - the midnight black finish looks amazing! Do you have this in stock?",
    timestamp: "1 hour ago",
    isVip: false,
    urgency: "medium",
    tags: ["Product Inquiry", "Social"],
    status: "new"
  },
  {
    id: "4",
    customerName: "David Kim",
    customerAvatar: "https://i.pravatar.cc/150?img=4",
    channel: "email",
    subject: "Custom engraving request",
    preview: "Working on your custom engraving - should be ready for shipping by Friday...",
    timestamp: "3 hours ago",
    isVip: true,
    urgency: "medium",
    tags: ["Custom Order", "VIP", "In Production"],
    orderHistory: {
      totalOrders: 8,
      totalSpent: 567.50,
      lastOrder: "Order #1230 - Custom Engraved Set"
    },
    status: "in_progress"
  },
  {
    id: "5",
    customerName: "Jessica Park",
    customerAvatar: "https://i.pravatar.cc/150?img=5",
    channel: "sms",
    subject: "SMS: Sizing question",
    preview: "Thanks for the sizing guide! I think I need a Medium. Can you confirm this will fit?",
    timestamp: "2 hours ago",
    isVip: false,
    urgency: "low",
    tags: ["Sizing", "Follow-up"],
    status: "waiting_customer"
  },
  {
    id: "6",
    customerName: "Alex Thompson",
    customerAvatar: "https://i.pravatar.cc/150?img=6",
    channel: "email",
    subject: "Out of stock notification",
    preview: "Thank you for your patience. Your backordered item will be available next week...",
    timestamp: "1 day ago",
    isVip: false,
    urgency: "low",
    tags: ["Backorder", "Notification"],
    status: "on_hold"
  },
  {
    id: "7",
    customerName: "Maria Garcia",
    customerAvatar: "https://i.pravatar.cc/150?img=7",
    channel: "review",
    subject: "5-star review response",
    preview: "Thank you so much for the amazing review! We've added you to our VIP program...",
    timestamp: "2 days ago",
    isVip: true,
    urgency: "low",
    tags: ["Review Response", "VIP Program"],
    status: "done"
  }
];

const channelIcons = {
  email: <Mail className="w-4 h-4" />,
  sms: <Phone className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  facebook: <MessageCircle className="w-4 h-4" />,
  chat: <MessageCircle className="w-4 h-4" />,
  review: <Star className="w-4 h-4" />
};

const urgencyColors = {
  low: "bg-green-100 text-green-800 border-green-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-red-100 text-red-800 border-red-200"
};

const statusColumns = {
  new: { title: "🆕 New", color: "bg-blue-50 border-blue-200" },
  in_progress: { title: "🔄 In Progress", color: "bg-purple-50 border-purple-200" },
  waiting_customer: { title: "⏰ Waiting on Customer", color: "bg-orange-50 border-orange-200" },
  on_hold: { title: "⏸️ On Hold", color: "bg-gray-50 border-gray-200" },
  done: { title: "✅ Done", color: "bg-green-50 border-green-200" }
};

function MessageCard({ message }: { message: InboxMessage }) {
  return (
    <Card className="mb-3 hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={message.customerAvatar} />
              <AvatarFallback>{message.customerName.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-sm text-mailchimp-text-primary truncate">
                  {message.customerName}
                </h4>
                {message.isVip && (
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                )}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="text-mailchimp-text-secondary">
                  {channelIcons[message.channel]}
                </div>
                <span className="text-xs text-mailchimp-text-quaternary">
                  {message.timestamp}
                </span>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Reply</DropdownMenuItem>
              <DropdownMenuItem>Assign to teammate</DropdownMenuItem>
              <DropdownMenuItem>Add tags</DropdownMenuItem>
              <DropdownMenuItem>Mark as done</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <h5 className="font-medium text-sm text-mailchimp-text-primary mb-2">
          {message.subject}
        </h5>
        <p className="text-sm text-mailchimp-text-secondary mb-3 line-clamp-2">
          {message.preview}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge 
            variant="outline" 
            className={cn("text-xs", urgencyColors[message.urgency])}
          >
            {message.urgency === "high" && <AlertCircle className="w-3 h-3 mr-1" />}
            {message.urgency === "medium" && <Clock className="w-3 h-3 mr-1" />}
            {message.urgency.charAt(0).toUpperCase() + message.urgency.slice(1)}
          </Badge>
          {message.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {message.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{message.tags.length - 2}
            </Badge>
          )}
        </div>

        {message.orderHistory && (
          <div className="bg-mailchimp-background-primary rounded-lg p-3 border">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1">
                <ShoppingBag className="w-3 h-3 text-mailchimp-text-quaternary" />
                <span className="text-mailchimp-text-secondary">
                  {message.orderHistory.totalOrders} orders • ${message.orderHistory.totalSpent}
                </span>
              </div>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                View profile
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <p className="text-xs text-mailchimp-text-quaternary mt-1">
              Latest: {message.orderHistory.lastOrder}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function StatusColumn({ 
  status, 
  messages, 
  title, 
  color 
}: { 
  status: string;
  messages: InboxMessage[];
  title: string;
  color: string;
}) {
  const statusMessages = messages.filter(m => m.status === status);
  
  return (
    <div className={cn("flex-1 min-w-80 rounded-lg border-2 border-dashed p-4", color)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-sm text-mailchimp-text-primary">
          {title}
        </h3>
        <Badge variant="secondary" className="text-xs">
          {statusMessages.length}
        </Badge>
      </div>
      <div className="space-y-3">
        {statusMessages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
        {statusMessages.length === 0 && (
          <div className="text-center py-8 text-mailchimp-text-quaternary">
            <div className="text-2xl mb-2">✨</div>
            <p className="text-sm">All clear here!</p>
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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-mailchimp-text-primary">
            Unified Inbox
          </h1>
          <p className="text-mailchimp-text-secondary mt-1">
            All customer conversations across channels in one intelligent workspace
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New message
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-mailchimp-text-primary">
                  {mockMessages.filter(m => m.status === "new").length}
                </p>
                <p className="text-xs text-mailchimp-text-secondary">New messages</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-mailchimp-text-primary">
                  {mockMessages.filter(m => m.urgency === "high").length}
                </p>
                <p className="text-xs text-mailchimp-text-secondary">Urgent items</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-mailchimp-text-primary">
                  {mockMessages.filter(m => m.isVip).length}
                </p>
                <p className="text-xs text-mailchimp-text-secondary">VIP customers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-mailchimp-text-primary">
                  2.4h
                </p>
                <p className="text-xs text-mailchimp-text-secondary">Avg response time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-mailchimp-text-quaternary" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-mailchimp-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              {selectedFilter === "all" ? "All channels" : selectedFilter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedFilter("all")}>
              All channels
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("email")}>
              Email
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("sms")}>
              SMS
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("instagram")}>
              Instagram
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("chat")}>
              Website Chat
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("vip")}>
              VIP Only
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("urgent")}>
              Urgent Only
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Kanban Board */}
      <div className="flex space-x-6 overflow-x-auto pb-6">
        {Object.entries(statusColumns).map(([status, config]) => (
          <StatusColumn
            key={status}
            status={status}
            messages={filteredMessages}
            title={config.title}
            color={config.color}
          />
        ))}
      </div>
    </div>
  );
}
