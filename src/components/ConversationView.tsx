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
      "flex mb-6 group",
      isCustomer ? "justify-end" : "justify-start"
    )}>
      {!isCustomer && (
        <Avatar className="w-8 h-8 mr-3 mt-1 flex-shrink-0">
          <AvatarFallback className="bg-blue-100 text-blue-600 text-xs font-medium">
            {message.agentInitials || "AG"}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[70%]",
        isCustomer ? "ml-16" : "mr-16"
      )}>
        <div className={cn(
          "rounded-2xl px-4 py-3 shadow-sm",
          isCustomer 
            ? "bg-blue-500 text-white rounded-br-md" 
            : "bg-gray-100 text-gray-900 rounded-bl-md"
        )}>
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
        
        <div className={cn(
          "flex items-center gap-2 mt-2 text-xs text-gray-500",
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
        <Avatar className="w-8 h-8 ml-3 mt-1 flex-shrink-0">
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

  // Compact collapsed view
  if (!isExpanded) {
    return (
      <div className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg">
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
        <div className="mt-2">
          <button className="w-full p-2 bg-white border border-blue-200 rounded text-left hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-2">
              <DollarSign className="w-3 h-3 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Issue Refund</span>
              <Badge variant="secondary" className="text-xs ml-auto">High</Badge>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Expanded view with better spacing
  return (
    <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg">
      <div className="flex items-center justify-between mb-3">
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
      <div className="mb-3 p-2 bg-white rounded border border-blue-100">
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
      <div className="mb-3">
        <h4 className="text-xs font-medium text-gray-700 mb-2">Top Recommendations</h4>
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
        <h4 className="text-xs font-medium text-gray-700 mb-2">Quick Replies</h4>
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

function CustomerProfilePanel({ customer }: { customer: CustomerData }) {
  return (
    <div className="space-y-6">
      {/* Customer Overview */}
      <div className="bg-gray-50 rounded-xl p-5">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-14 h-14">
            <AvatarImage src={customer.avatar} />
            <AvatarFallback className="text-lg font-semibold">
              {customer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg text-gray-900">{customer.name}</h3>
              {customer.isVip && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{customer.loyaltyLevel} Customer</p>
            <div className="flex flex-wrap gap-1">
              {customer.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <span>{customer.email}</span>
          </div>
          {customer.phone && (
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{customer.phone}</span>
            </div>
          )}
          {customer.location && (
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{customer.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Customer Value */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-700">{customer.totalOrders}</div>
          <div className="text-sm text-green-600">Orders</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-700">${customer.totalSpent.toLocaleString()}</div>
          <div className="text-sm text-blue-600">Total Spent</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Recent Activity
        </h4>
        <div className="space-y-3">
          {customer.recentOrders.slice(0, 3).map((order) => (
            <div key={order.id} className="flex justify-between items-start text-sm bg-white p-3 rounded-lg border border-gray-100">
              <div>
                <div className="font-medium text-gray-900">{order.id}</div>
                <div className="text-gray-500">{order.products}</div>
                <div className="text-xs text-gray-400">{order.date}</div>
              </div>
              <div className="font-semibold text-gray-900">${order.amount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Engagement */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Campaign Activity
        </h4>
        <div className="space-y-2">
          {customer.campaignHistory.map((campaign, index) => (
            <div key={index} className="flex justify-between items-center text-sm p-2 hover:bg-gray-50 rounded">
              <div>
                <div className="font-medium text-gray-900">{campaign.name}</div>
                <div className="text-xs text-gray-500">{campaign.date}</div>
              </div>
              <Badge variant="outline" className="text-xs">
                {campaign.engagement}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ConversationView({ messageId, onClose }: ConversationViewProps) {
  const [replyText, setReplyText] = useState("");
  const [status, setStatus] = useState(mockConversationData.status);
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
      <div
        className={cn(
          "bg-white rounded-t-xl shadow-2xl w-full max-w-6xl h-[92vh] flex flex-col transition-transform duration-200 ease-out",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Header - Simplified */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
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
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-6">
              <div className="max-w-3xl mx-auto">
                {conversation.messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}

                <AIAssistantBlock />

                {/* Bottom spacer to ensure messages stay visible above AI Assistant */}
                <div className="h-4"></div>
              </div>
            </div>

            {/* Reply Section - Simplified */}
            <div className="border-t border-gray-100 p-5 bg-gray-50">
              <div className="max-w-3xl mx-auto">
                <Textarea
                  placeholder="Type your reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="mb-3 bg-white border-gray-200"
                  rows={3}
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
          <div className="w-80 border-l border-gray-100 p-5 overflow-y-auto bg-gray-50">
            <CustomerProfilePanel customer={conversation.customer} />
          </div>
        </div>
      </div>
    </div>
  );
}
