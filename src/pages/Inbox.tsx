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
  channel: "email" | "sms" | "instagram" | "facebook" | "chat" | "review";
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
  // NEW MESSAGES
  {
    id: "1",
    customerName: "Sarah Chen",
    customerAvatar: "https://i.pravatar.cc/150?img=1",
    channel: "email",
    subject: "Where's my order?",
    preview: "Hi! I placed an order for the Premium Razor Set last week (Order #RS-2847) and still haven't received any shipping updates. Can you please check the status?",
    timestamp: "12 minutes ago",
    ticketNumber: "#2847",
    isVip: true,
    urgency: "high",
    tags: ["Order Status", "VIP"],
    orderHistory: {
      totalOrders: 5,
      totalSpent: 425.99,
      lastOrder: "Premium Razor Set - $89.99"
    },
    status: "new"
  },
  {
    id: "2",
    customerName: "Mike Rodriguez",
    customerAvatar: "https://i.pravatar.cc/150?img=2",
    channel: "chat",
    subject: "Product arrived damaged - need exchange",
    preview: "The razor I received today has a crack in the handle and the blade guard is loose. This is really disappointing. I need a replacement ASAP.",
    timestamp: "25 minutes ago",
    ticketNumber: "#2848",
    isVip: false,
    urgency: "high",
    tags: ["Damaged Product", "Exchange"],
    orderHistory: {
      totalOrders: 1,
      totalSpent: 59.99,
      lastOrder: "Classic Razor - $59.99"
    },
    status: "new"
  },
  {
    id: "3",
    customerName: "Emily Watson",
    customerAvatar: "https://i.pravatar.cc/150?img=3",
    channel: "instagram",
    subject: "DM: Question about razor fit",
    preview: "Hey! Love your products! I have sensitive skin and wondering if the comfort grip razor would work for me? Also, what's the difference between your Classic and Premium models?",
    timestamp: "45 minutes ago",
    ticketNumber: "#2849",
    isVip: false,
    urgency: "medium",
    tags: ["Product Question", "Social Media"],
    status: "new"
  },
  {
    id: "4",
    customerName: "James Wilson",
    customerAvatar: "https://i.pravatar.cc/150?img=4",
    channel: "email",
    subject: "Bulk order inquiry for corporate gifts",
    preview: "Hi there, I'm interested in ordering 50+ razors for our company holiday gifts. Do you offer bulk pricing and custom engraving for corporate orders?",
    timestamp: "1 hour ago",
    ticketNumber: "#2850",
    isVip: false,
    urgency: "medium",
    tags: ["Bulk Order", "Corporate"],
    status: "new"
  },

  // IN PROGRESS
  {
    id: "5",
    customerName: "David Kim",
    customerAvatar: "https://i.pravatar.cc/150?img=5",
    channel: "email",
    subject: "Custom engraving order in progress",
    preview: "Hi David! Your custom engraved razor set is currently being processed by our artisan team. Expected completion is Friday, and it will ship same day. We'll send tracking info once it's out.",
    timestamp: "2 hours ago",
    ticketNumber: "#2845",
    isVip: true,
    urgency: "medium",
    tags: ["Custom Order", "VIP", "In Production"],
    orderHistory: {
      totalOrders: 8,
      totalSpent: 678.50,
      lastOrder: "Custom Engraved Luxury Set - $149.99"
    },
    status: "waiting_on_you"
  },

  // WAITING ON CUSTOMER
  {
    id: "6",
    customerName: "Jessica Park",
    customerAvatar: "https://i.pravatar.cc/150?img=6",
    channel: "sms",
    subject: "Sizing guide sent - awaiting selection",
    preview: "Thanks for the detailed sizing guide! I'm between Medium and Large based on the measurements. Could you recommend which size would be better for someone with larger hands?",
    timestamp: "3 hours ago",
    ticketNumber: "#2846",
    isVip: false,
    urgency: "low",
    tags: ["Sizing", "Customer Response Needed"],
    status: "waiting_on_customer"
  },
  {
    id: "7",
    customerName: "Alex Thompson",
    customerAvatar: "https://i.pravatar.cc/150?img=7",
    channel: "instagram",
    subject: "Requested photo of damaged item",
    preview: "We've sent you a DM asking for photos of the damaged packaging. Once we receive them, we can process your replacement immediately. Please check your Instagram messages.",
    timestamp: "4 hours ago",
    ticketNumber: "#2843",
    isVip: false,
    urgency: "medium",
    tags: ["Damage Claim", "Photo Required"],
    status: "waiting_on_customer"
  },
  {
    id: "8",
    customerName: "Lisa Martinez",
    customerAvatar: "https://i.pravatar.cc/150?img=8",
    channel: "email",
    subject: "Discount code sent for future purchase",
    preview: "Thank you for your patience with the delayed shipment. We've sent you a 20% discount code (SAVE20) for your next order. Is there anything else we can help you with?",
    timestamp: "5 hours ago",
    ticketNumber: "#2841",
    isVip: true,
    urgency: "low",
    tags: ["Discount", "VIP", "Follow-up"],
    status: "waiting_on_customer"
  },
  {
    id: "9",
    customerName: "Rachel Green",
    customerAvatar: "https://i.pravatar.cc/150?img=9",
    channel: "email",
    subject: "Instagram feature opportunity",
    preview: "We love your recent review! Would you be interested in being featured on our Instagram page? We'd love to share your story and offer you an exclusive discount for future purchases.",
    timestamp: "6 hours ago",
    ticketNumber: "#2840",
    isVip: true,
    urgency: "low",
    tags: ["Instagram Feature", "VIP", "Marketing"],
    status: "waiting_on_customer"
  },

  // ON HOLD
  {
    id: "10",
    customerName: "Tom Bradley",
    customerAvatar: "https://i.pravatar.cc/150?img=10",
    channel: "email",
    subject: "Backorder - restock update",
    preview: "The Limited Edition Black Razor you ordered is currently out of stock. Our supplier expects new inventory by next Friday (Nov 15th). We'll ship your order immediately when it arrives.",
    timestamp: "1 day ago",
    ticketNumber: "#2835",
    isVip: false,
    urgency: "low",
    tags: ["Out of Stock", "Backorder"],
    status: "on_hold"
  },
  {
    id: "11",
    customerName: "Susan Davis",
    customerAvatar: "https://i.pravatar.cc/150?img=11",
    channel: "email",
    subject: "Shipping timeline - routed to fulfillment",
    preview: "Your international shipping question has been forwarded to our fulfillment partner. They'll provide detailed timeline and customs information within 24 hours.",
    timestamp: "1 day ago",
    ticketNumber: "#2834",
    isVip: false,
    urgency: "medium",
    tags: ["International Shipping", "3PL"],
    status: "on_hold"
  },

  // COMPLETED
  {
    id: "12",
    customerName: "Maria Garcia",
    customerAvatar: "https://i.pravatar.cc/150?img=12",
    channel: "email",
    subject: "VIP thank you message sent",
    preview: "Thank you for being one of our most valued customers! Your loyalty means everything to us. We've added exclusive early access to new products to your account.",
    timestamp: "2 days ago",
    ticketNumber: "#2830",
    isVip: true,
    urgency: "low",
    tags: ["VIP Program", "Thank You"],
    status: "done"
  },
  {
    id: "13",
    customerName: "Kevin Walsh",
    customerAvatar: "https://i.pravatar.cc/150?img=13",
    channel: "chat",
    subject: "Order delay resolved - tracking shared",
    preview: "Great news! Your delayed order has been shipped and is now on its way. Tracking number: 1Z234567890. Expected delivery: Tomorrow by 6 PM. Thank you for your patience!",
    timestamp: "2 days ago",
    ticketNumber: "#2828",
    isVip: false,
    urgency: "low",
    tags: ["Order Delay", "Resolved"],
    status: "done"
  },
  {
    id: "14",
    customerName: "Amanda Foster",
    customerAvatar: "https://i.pravatar.cc/150?img=14",
    channel: "review",
    subject: "5-star review acknowledged",
    preview: "Thank you so much for your amazing 5-star review! We're thrilled that you love your new razor. Your feedback helps other customers make confident choices.",
    timestamp: "3 days ago",
    ticketNumber: "#2825",
    isVip: true,
    urgency: "low",
    tags: ["Review Response", "5-Star"],
    status: "done"
  },
  {
    id: "15",
    customerName: "Chris Johnson",
    customerAvatar: "https://i.pravatar.cc/150?img=15",
    channel: "facebook",
    subject: "Referral program info sent",
    preview: "Thanks for asking about our referral program! We've sent you all the details. For every friend you refer, you both get $10 off your next purchase. Happy sharing!",
    timestamp: "3 days ago",
    ticketNumber: "#2822",
    isVip: false,
    urgency: "low",
    tags: ["Referral Program", "Social Media"],
    status: "done"
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
    title: "🆕 New",
    count: 4,
    bgColor: "bg-blue-50"
  },
  waiting_on_you: {
    title: "🔄 In Progress",
    count: 1,
    bgColor: "bg-purple-50"
  },
  waiting_on_customer: {
    title: "⏰ Waiting on Customer",
    count: 4,
    bgColor: "bg-orange-50"
  },
  on_hold: {
    title: "⏸️ On Hold",
    count: 2,
    bgColor: "bg-gray-50"
  },
  done: {
    title: "✅ Done",
    count: 4,
    bgColor: "bg-green-50"
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
