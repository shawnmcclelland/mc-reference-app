import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  X,
  Mail,
  MessageCircle,
  Instagram,
  Star,
  Clock,
  AlertCircle,
  User,
  ShoppingBag,
  CreditCard,
  Tag,
  Send,
  Bot,
  ThumbsUp,
  RefreshCw,
  UserCheck,
  MessageSquare,
  DollarSign,
  Zap,
  Phone,
  Calendar,
  ExternalLink,
  Smile,
  Meh,
  Frown,
  CheckCircle,
  Users,
  FileText,
  Heart,
  Lightbulb,
  MoreHorizontal,
  ChevronDown,
  Sparkles,
  TrendingUp,
  MapPin,
} from "lucide-react";

interface Message {
  id: string;
  sender: "customer" | "agent" | "system";
  content: string;
  timestamp: string;
  channel: string;
  sentiment?: "positive" | "neutral" | "negative";
  attachments?: string[];
  agentName?: string;
  agentInitials?: string;
}

interface CustomerData {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  phone?: string;
  location?: string;
  isVip: boolean;
  loyaltyLevel: string;
  totalOrders: number;
  totalSpent: number;
  tags: string[];
  lastOrder: {
    id: string;
    date: string;
    amount: number;
    status: string;
  };
  recentOrders: Array<{
    id: string;
    date: string;
    amount: number;
    products: string;
  }>;
  campaignHistory: Array<{
    name: string;
    date: string;
    engagement: string;
  }>;
}

interface ConversationViewProps {
  messageId: string;
  onClose: () => void;
}

const mockConversationData = {
  id: "2847",
  customer: {
    id: "cust_001",
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "sarah.chen@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    isVip: true,
    loyaltyLevel: "Gold",
    totalOrders: 12,
    totalSpent: 1247.98,
    tags: ["VIP", "Influencer", "Early Adopter"],
    lastOrder: {
      id: "ORD-2847",
      date: "2024-01-15",
      amount: 89.99,
      status: "Shipped"
    },
    recentOrders: [
      {
        id: "ORD-2847",
        date: "Jan 15, 2024",
        amount: 89.99,
        products: "Premium Razor Set"
      },
      {
        id: "ORD-2831",
        date: "Dec 10, 2023",
        amount: 149.99,
        products: "Custom Engraved Set"
      },
      {
        id: "ORD-2798",
        date: "Nov 22, 2023",
        amount: 59.99,
        products: "Starter Kit"
      }
    ],
    campaignHistory: [
      {
        name: "Holiday Sale 2023",
        date: "Dec 1, 2023",
        engagement: "Opened, Clicked"
      },
      {
        name: "Product Launch",
        date: "Oct 15, 2023",
        engagement: "Opened"
      }
    ]
  },
  messages: [
    {
      id: "msg_1",
      sender: "customer" as const,
      content: "Hi! I placed an order for the Premium Razor Set last week (Order #RS-2847) and still haven't received any shipping updates. Can you please check the status? I need it for a trip this weekend.",
      timestamp: "Today 10:30 AM",
      channel: "Email",
      sentiment: "neutral" as const
    },
    {
      id: "msg_2",
      sender: "agent" as const,
      content: "Hi Sarah! Thank you for reaching out. I can see your order #RS-2847 for the Premium Razor Set. Let me check the shipping status for you right away. Since you're a VIP customer, I'll make sure we get this resolved quickly!",
      timestamp: "Today 10:45 AM",
      channel: "Email",
      sentiment: "positive" as const,
      agentName: "Alex Rodriguez",
      agentInitials: "AR"
    },
    {
      id: "msg_3",
      sender: "agent" as const,
      content: "Good news! I've checked with our fulfillment team and your order shipped yesterday via Express shipping. Here's your tracking number: 1Z999AA1234567890. It should arrive by Thursday afternoon, well before your weekend trip!",
      timestamp: "Today 10:47 AM",
      channel: "Email",
      sentiment: "positive" as const,
      agentName: "Alex Rodriguez",
      agentInitials: "AR"
    },
    {
      id: "msg_4",
      sender: "system" as const,
      content: "Tracking information shared with customer",
      timestamp: "Today 10:47 AM",
      channel: "System",
      sentiment: "neutral" as const
    }
  ],
  status: "waiting_on_customer",
  priority: "high",
  assignedTo: "Alex Rodriguez"
};

const sentimentIcons = {
  positive: <Smile className="w-3 h-3 text-green-500" />,
  neutral: <Meh className="w-3 h-3 text-gray-400" />,
  negative: <Frown className="w-3 h-3 text-red-500" />
};

const channelIcons = {
  Email: <Mail className="w-3 h-3" />,
  SMS: <Phone className="w-3 h-3" />,
  Instagram: <Instagram className="w-3 h-3" />,
  Facebook: <MessageCircle className="w-3 h-3" />,
  Chat: <MessageCircle className="w-3 h-3" />,
  System: <Bot className="w-3 h-3" />
};

function MessageBubble({ message }: { message: Message }) {
  const isCustomer = message.sender === "customer";
  const isSystem = message.sender === "system";
  const isAgent = message.sender === "agent";
  
  if (isSystem) {
    return (
      <div className="flex justify-center my-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full text-xs text-yellow-700">
          <Bot className="w-3 h-3" />
          <span>{message.content}</span>
          <span className="text-yellow-500">•</span>
          <span>{message.timestamp}</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn(
      "flex mb-4 group",
      isCustomer ? "justify-end" : "justify-start"
    )}>
      {!isCustomer && (
        <Avatar className="w-7 h-7 mr-2 mt-1 flex-shrink-0">
          <AvatarFallback className="bg-blue-100 text-blue-600 text-xs font-medium">
            {message.agentInitials || "AG"}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={cn(
        "max-w-[70%]",
        isCustomer ? "ml-12" : "mr-12"
      )}>
        <div className={cn(
          "rounded-2xl px-3 py-2 shadow-sm",
          isCustomer
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-gray-100 text-gray-900 rounded-bl-md"
        )}>
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>

        <div className={cn(
          "flex items-center gap-1 mt-1 text-xs text-gray-500",
          isCustomer ? "justify-end" : "justify-start"
        )}>
          <div className="flex items-center gap-1">
            {channelIcons[message.channel as keyof typeof channelIcons]}
            <span>{message.channel}</span>
          </div>
          {message.sentiment && sentimentIcons[message.sentiment]}
          <span>•</span>
          <span>{message.timestamp}</span>
          {isAgent && message.agentName && (
            <>
              <span>•</span>
              <span>{message.agentName}</span>
            </>
          )}
        </div>
      </div>

      {isCustomer && (
        <Avatar className="w-7 h-7 ml-2 mt-1 flex-shrink-0">
          <AvatarImage src={mockConversationData.customer.avatar} />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

function AIAssistantBlock() {
  const [selectedReply, setSelectedReply] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const suggestedReplies = [
    "Thank you for your patience! I'm happy to help track down your order.",
    "I apologize for the delay. Let me investigate this immediately.",
    "Great news! Your order is on its way and should arrive soon."
  ];

  const smartActions = [
    {
      icon: <DollarSign className="w-4 h-4" />,
      label: "Issue Refund",
      description: "Customer seems frustrated",
      confidence: "High"
    },
    {
      icon: <Tag className="w-4 h-4" />,
      label: "Apply 10% Discount",
      description: "For the inconvenience",
      confidence: "Medium"
    },
    {
      icon: <Star className="w-4 h-4" />,
      label: "Upgrade to VIP",
      description: "High-value customer",
      confidence: "High"
    }
  ];

  // Compact collapsed view (collapsed by default on mobile)
  if (!isExpanded || isMobile) {
    return (
      <div className={cn(
        "p-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg",
        isMobile ? "mb-1" : "mb-2"
      )}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-blue-900">AI Assistant</h4>
              <p className="text-xs text-blue-700">Order resolved, customer satisfied. Ready to close.</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-800"
          >
            Show More
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Top suggested action */}
        <div className={cn("mt-2", isMobile && "mt-1")}>
          <button className={cn(
            "w-full bg-white border border-blue-200 rounded text-left hover:bg-blue-50 transition-colors",
            isMobile ? "p-1.5" : "p-2"
          )}>
            <div className="flex items-center gap-2">
              <DollarSign className="w-3 h-3 text-blue-600" />
              <span className={cn("font-medium text-gray-900", isMobile ? "text-xs" : "text-sm")}>Issue Refund</span>
              <Badge variant="secondary" className="text-xs ml-auto">High</Badge>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Expanded view with better spacing (only on desktop)
  if (isMobile) {
    return null; // Always collapsed on mobile
  }

  return (
    <div className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <h3 className="font-medium text-blue-900">AI Assistant</h3>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Compact Thread Summary */}
      <div className="mb-2 p-2 bg-white rounded border border-blue-100">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs text-gray-600">
              VIP customer order inquiry resolved. Tracking provided. Sentiment: Neutral → Positive.
            </p>
          </div>
        </div>
      </div>

      {/* Compact Smart Actions */}
      <div className="mb-2">
        <h4 className="text-xs font-medium text-gray-700 mb-1">Top Recommendations</h4>
        <div className="space-y-1">
          {smartActions.slice(0, 2).map((action, index) => (
            <button
              key={index}
              className="w-full p-2 bg-white border border-gray-200 rounded hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <div className="text-blue-600">{action.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-xs text-gray-900">{action.label}</div>
                  <div className="text-xs text-gray-500">{action.description}</div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {action.confidence}
                </Badge>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Compact Suggested Replies */}
      <div>
        <h4 className="text-xs font-medium text-gray-700 mb-1">Quick Replies</h4>
        <div className="space-y-1">
          {suggestedReplies.slice(0, 2).map((reply, index) => (
            <button
              key={index}
              className={cn(
                "w-full p-2 text-left text-xs border rounded transition-colors",
                selectedReply === reply
                  ? "border-blue-300 bg-blue-50 text-blue-900"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              )}
              onClick={() => setSelectedReply(reply)}
            >
              {reply}
            </button>
          ))}
        </div>
        {suggestedReplies.length > 2 && (
          <button className="w-full mt-1 p-1 text-xs text-blue-600 hover:text-blue-800">
            +{suggestedReplies.length - 2} more replies
          </button>
        )}
      </div>
    </div>
  );
}

function CustomerProfilePanel({ customer, isMobile }: { customer: CustomerData; isMobile?: boolean }) {
  return (
    <div className={cn(
      "flex flex-col",
      isMobile ? "h-auto" : "h-full"
    )} style={{padding: isMobile ? "0 12px" : "0 var(--space-column-gap-x-small, 8px)"}}>
      {/* Customer Overview - Compact */}
      <div className={cn(
        "bg-gray-100 rounded-lg flex-shrink-0",
        isMobile ? "p-2 mb-3" : "p-3 mb-4"
      )}>
        <div className={cn(
          "flex items-start gap-3",
          isMobile ? "mb-2" : "mb-3"
        )}>
          <Avatar className={cn(
            "flex-shrink-0",
            isMobile ? "w-8 h-8" : "w-10 h-10"
          )}>
            <AvatarImage src={customer.avatar} />
            <AvatarFallback className="text-sm font-medium">
              {customer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={cn(
                "font-semibold text-gray-900 truncate",
                isMobile ? "text-sm" : "text-base"
              )}>{customer.name}</h3>
              {customer.isVip && (
                <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
              )}
            </div>
            <p className={cn(
              "text-gray-600",
              isMobile ? "text-xs mb-1" : "text-xs mb-2"
            )}>{customer.loyaltyLevel} Customer</p>
            <div className="flex flex-wrap gap-1">
              {customer.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-1 py-0">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{customer.email}</span>
          </div>
          {customer.phone && (
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <span>{customer.phone}</span>
            </div>
          )}
          {customer.location && (
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span>{customer.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Customer Value - Single Row */}
      <div className={cn(
        "bg-white border border-gray-200 rounded-lg flex-shrink-0",
        isMobile ? "p-2 mb-3" : "p-3 mb-4"
      )}>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-lg font-bold text-green-700">{customer.totalOrders}</div>
            <div className="text-xs text-gray-600">Orders</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-700">${customer.totalSpent.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Total Spent</div>
          </div>
        </div>
      </div>

      {/* Activity Feed Header */}
      <div className="flex items-center gap-2 mb-3 flex-shrink-0">
        <TrendingUp className="w-4 h-4 text-gray-600" />
        <h4 className="font-medium text-gray-900 text-sm">Activity Feed</h4>
      </div>

      {/* Full Height Activity Feed */}
      <div className="flex-1 space-y-4 min-h-0">
        {/* Recent Orders Section */}
        <div>
          <h5 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{color: "var(--color-action-complementary-active, rgba(107, 108, 114, 0.75))"}}>Recent Orders</h5>
          <div className="space-y-3">
            {customer.recentOrders.map((order) => (
              <div key={order.id} className="pb-3 border-b border-gray-100 last:border-b-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm text-gray-900">{order.id}</div>
                  <div className="font-semibold text-sm text-gray-900">${order.amount}</div>
                </div>
                <div className="text-xs text-gray-600 mb-1">{order.products}</div>
                <div className="text-xs text-gray-400">{order.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Activity Section */}
        <div>
          <h5 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{color: "var(--color-action-complementary-active, rgba(107, 108, 114, 0.75))"}}>Campaign Engagement</h5>
          <div className="space-y-3">
            {customer.campaignHistory.map((campaign, index) => (
              <div key={index} className="pb-3 border-b border-gray-100 last:border-b-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm text-gray-900">{campaign.name}</div>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {campaign.engagement}
                  </Badge>
                </div>
                <div className="text-xs text-gray-400">{campaign.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Activity Items for Demo */}
        <div>
          <h5 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{color: "var(--color-action-complementary-active, rgba(107, 108, 114, 0.75))"}}>System Events</h5>
          <div className="space-y-3">
            <div className="pb-3 border-b border-gray-100">
              <div className="font-medium text-sm text-gray-900 mb-1">Customer Tagged as VIP</div>
              <div className="text-xs text-gray-400">Jan 10, 2024</div>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="font-medium text-sm text-gray-900 mb-1">Profile Updated</div>
              <div className="text-xs text-gray-400">Dec 28, 2023</div>
            </div>
            <div className="pb-3 border-b border-gray-100">
              <div className="font-medium text-sm text-gray-900 mb-1">Account Created</div>
              <div className="text-xs text-gray-400">Nov 15, 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const availableAgents = [
  { id: "alex", name: "Alex Rodriguez", initials: "AR", avatar: "https://i.pravatar.cc/150?img=20" },
  { id: "sarah", name: "Sarah Kim", initials: "SK", avatar: "https://i.pravatar.cc/150?img=21" },
  { id: "mike", name: "Mike Chen", initials: "MC", avatar: "https://i.pravatar.cc/150?img=22" },
  { id: "emma", name: "Emma Davis", initials: "ED", avatar: "https://i.pravatar.cc/150?img=23" },
  { id: "unassigned", name: "Unassigned", initials: "?", avatar: null }
];

export function ConversationView({ messageId, onClose }: ConversationViewProps) {
  const [replyText, setReplyText] = useState("");
  const [status, setStatus] = useState(mockConversationData.status);
  const [assignedAgent, setAssignedAgent] = useState("alex"); // Default to Alex Rodriguez
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const conversation = mockConversationData;

  // Get the most recent communication channel from the conversation
  const getRecentChannel = () => {
    const customerMessages = conversation.messages.filter(m => m.sender === "customer");
    if (customerMessages.length > 0) {
      return customerMessages[customerMessages.length - 1].channel;
    }
    return "Email"; // fallback
  };

  const [selectedChannel, setSelectedChannel] = useState(getRecentChannel());

  // Auto-scroll to bottom when component mounts and trigger slide up animation
  useEffect(() => {
    // Trigger slide up animation
    setTimeout(() => setIsVisible(true), 10);

    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      // Small delay to ensure content is rendered
      setTimeout(() => {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }, 150);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200); // Wait for animation to complete
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end px-5"
      style={{ marginTop: "var(--space-component-inline-padding-xxx-small, 0)" }}
      onClick={handleClose}
    >
      <div
        className={cn(
          "bg-white rounded-t-xl shadow-2xl w-full h-[92vh] flex flex-col transition-transform duration-200 ease-out",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Simplified */}
        <div className="flex items-center justify-between p-3 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={conversation.customer.avatar} />
              <AvatarFallback>{conversation.customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold text-gray-900">{conversation.customer.name}</h2>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">#{conversation.id}</span>
                </div>
                {conversation.customer.isVip && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
              </div>
              <div className="flex items-center gap-3 mt-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
                      {status.replace('_', ' ')}
                      <ChevronDown className="w-3 h-3 ml-1" />
                    </Badge>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setStatus("new")}>New</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatus("in_progress")}>In Progress</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatus("waiting_on_customer")}>Waiting on Customer</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatus("on_hold")}>On Hold</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatus("done")}>Done</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {conversation.priority === "high" && (
                  <Badge variant="destructive" className="text-xs">
                    Urgent
                  </Badge>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Assigned to:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-7 px-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-5 h-5">
                            {availableAgents.find(a => a.id === assignedAgent)?.avatar ? (
                              <AvatarImage src={availableAgents.find(a => a.id === assignedAgent)?.avatar} />
                            ) : null}
                            <AvatarFallback className="text-xs bg-gray-100">
                              {availableAgents.find(a => a.id === assignedAgent)?.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs">
                            {availableAgents.find(a => a.id === assignedAgent)?.name}
                          </span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {availableAgents.map((agent) => (
                        <DropdownMenuItem
                          key={agent.id}
                          onClick={() => setAssignedAgent(agent.id)}
                          className="flex items-center gap-2"
                        >
                          <Avatar className="w-6 h-6">
                            {agent.avatar ? (
                              <AvatarImage src={agent.avatar} />
                            ) : null}
                            <AvatarFallback className="text-xs bg-gray-100">
                              {agent.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span>{agent.name}</span>
                          {assignedAgent === agent.id && (
                            <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Two-pane layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Conversation Panel */}
          <div className="flex-1 flex flex-col">
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto py-4 px-2 flex flex-col">
              <div className="max-w-3xl mx-auto">
                {conversation.messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}

                <AIAssistantBlock />

                {/* Bottom spacer to ensure messages stay visible above AI Assistant */}
                <div className="h-2"></div>
              </div>
            </div>

            {/* Reply Section - Simplified */}
            <div className="border-t border-gray-100 py-3 px-2 bg-gray-50">
              <div className="max-w-3xl mx-auto">
                <Textarea
                  placeholder="Type your reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="mb-2 bg-white border-gray-200"
                  rows={2}
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Reply via:</span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="text-gray-700">
                          {channelIcons[selectedChannel as keyof typeof channelIcons]}
                          <span className="ml-2">{selectedChannel}</span>
                          <ChevronDown className="w-3 h-3 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedChannel("Email")}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedChannel("SMS")}>
                          <Phone className="w-4 h-4 mr-2" />
                          SMS
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedChannel("Instagram")}>
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedChannel("Chat")}>
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Website Chat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-xs text-gray-400">•</span>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Internal Note
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="w-4 h-4 mr-2" />
                          More
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Users className="w-4 h-4 mr-2" />
                          Assign to teammate
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="w-4 h-4 mr-2" />
                          Add internal note
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <DollarSign className="w-4 h-4 mr-2" />
                          Issue refund
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Zap className="w-4 h-4 mr-2" />
                          Create automation
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button>
                      <Send className="w-4 h-4 mr-2" />
                      Send Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Profile Panel */}
          <div className="w-80 border-l border-gray-100 p-2 overflow-y-auto bg-gray-50">
            <CustomerProfilePanel customer={conversation.customer} />
          </div>
        </div>
      </div>
    </div>
  );
}
