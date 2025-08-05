import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "lucide-react";

interface Message {
  id: string;
  sender: "customer" | "agent" | "system";
  content: string;
  timestamp: string;
  channel: string;
  sentiment?: "positive" | "neutral" | "negative";
  attachments?: string[];
}

interface CustomerData {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  phone?: string;
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
      timestamp: "2024-01-22 10:30 AM",
      channel: "Email",
      sentiment: "neutral" as const
    },
    {
      id: "msg_2",
      sender: "agent" as const,
      content: "Hi Sarah! Thank you for reaching out. I can see your order #RS-2847 for the Premium Razor Set. Let me check the shipping status for you right away. Since you're a VIP customer, I'll make sure we get this resolved quickly!",
      timestamp: "2024-01-22 10:45 AM",
      channel: "Email",
      sentiment: "positive" as const
    },
    {
      id: "msg_3",
      sender: "agent" as const,
      content: "Good news! I've checked with our fulfillment team and your order shipped yesterday via Express shipping. Here's your tracking number: 1Z999AA1234567890. It should arrive by Thursday afternoon, well before your weekend trip!",
      timestamp: "2024-01-22 10:47 AM",
      channel: "Email",
      sentiment: "positive" as const
    },
    {
      id: "msg_4",
      sender: "system" as const,
      content: "Tracking information shared with customer",
      timestamp: "2024-01-22 10:47 AM",
      channel: "System",
      sentiment: "neutral" as const
    }
  ],
  status: "waiting_on_customer",
  priority: "high",
  assignedTo: "Current User"
};

const sentimentIcons = {
  positive: <Smile className="w-4 h-4 text-green-500" />,
  neutral: <Meh className="w-4 h-4 text-gray-500" />,
  negative: <Frown className="w-4 h-4 text-red-500" />
};

const channelIcons = {
  Email: <Mail className="w-4 h-4" />,
  SMS: <Phone className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Facebook: <MessageCircle className="w-4 h-4" />,
  Chat: <MessageCircle className="w-4 h-4" />,
  System: <Bot className="w-4 h-4" />
};

function MessageBubble({ message }: { message: Message }) {
  const isCustomer = message.sender === "customer";
  const isSystem = message.sender === "system";
  
  return (
    <div className={cn(
      "flex mb-4",
      isCustomer ? "justify-end" : "justify-start"
    )}>
      {!isCustomer && !isSystem && (
        <Avatar className="w-8 h-8 mr-3 mt-1">
          <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
            AG
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-lg px-4 py-3",
        isCustomer && "bg-blue-500 text-white",
        !isCustomer && !isSystem && "bg-gray-100 text-gray-900",
        isSystem && "bg-yellow-50 border border-yellow-200 text-yellow-800"
      )}>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {channelIcons[message.channel as keyof typeof channelIcons]}
            <span className="text-xs opacity-75">
              via {message.channel}
            </span>
          </div>
          {message.sentiment && sentimentIcons[message.sentiment]}
          <span className="text-xs opacity-75 ml-auto">
            {message.timestamp}
          </span>
        </div>
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
      
      {isCustomer && (
        <Avatar className="w-8 h-8 ml-3 mt-1">
          <AvatarImage src={mockConversationData.customer.avatar} />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

function AIAssistantBlock() {
  const [selectedReply, setSelectedReply] = useState("");
  const [tone, setTone] = useState("friendly");
  
  const suggestedReplies = [
    "Thank you for your patience! I'm happy to help track down your order.",
    "I apologize for the delay. Let me investigate this immediately and get back to you within the hour.",
    "Great news! Your order is on its way and should arrive soon."
  ];

  const nextBestActions = [
    { icon: <DollarSign className="w-4 h-4" />, label: "Issue Refund", color: "bg-green-100 text-green-700" },
    { icon: <Tag className="w-4 h-4" />, label: "Apply Discount", color: "bg-blue-100 text-blue-700" },
    { icon: <Star className="w-4 h-4" />, label: "Add to VIP", color: "bg-yellow-100 text-yellow-700" },
    { icon: <Calendar className="w-4 h-4" />, label: "Schedule Follow-up", color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Bot className="w-4 h-4 text-blue-500" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Thread Summary */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Thread Summary</span>
          </div>
          <p className="text-sm text-blue-800">
            VIP customer inquiring about delayed order #RS-2847. Issue resolved with tracking info provided. 
            Customer sentiment: Neutral → Positive. Next: Wait for delivery confirmation.
          </p>
        </div>

        {/* Suggested Replies */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Suggested Replies</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setTone("friendly")}>Friendly</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTone("formal")}>Formal</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTone("neutral")}>Neutral</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-2">
            {suggestedReplies.map((reply, index) => (
              <div
                key={index}
                className={cn(
                  "p-2 rounded border cursor-pointer text-sm",
                  selectedReply === reply ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                )}
                onClick={() => setSelectedReply(reply)}
              >
                {reply}
              </div>
            ))}
          </div>
        </div>

        {/* Next Best Actions */}
        <div>
          <span className="text-sm font-medium mb-2 block">Next Best Actions</span>
          <div className="grid grid-cols-2 gap-2">
            {nextBestActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className={cn("justify-start gap-2", action.color)}
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CustomerProfilePanel({ customer }: { customer: CustomerData }) {
  return (
    <div className="space-y-4">
      {/* Customer Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={customer.avatar} />
              <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{customer.name}</h3>
                {customer.isVip && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
              </div>
              <p className="text-sm text-gray-600">{customer.loyaltyLevel} Customer</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>{customer.email}</span>
            </div>
            {customer.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{customer.phone}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1 mt-3">
            {customer.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Order Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Order History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{customer.totalOrders}</div>
              <div className="text-xs text-gray-500">Total Orders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">${customer.totalSpent}</div>
              <div className="text-xs text-gray-500">Total Spent</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Recent Orders</div>
            {customer.recentOrders.slice(0, 3).map((order) => (
              <div key={order.id} className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-medium">{order.id}</div>
                  <div className="text-gray-500 text-xs">{order.products}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${order.amount}</div>
                  <div className="text-gray-500 text-xs">{order.date}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign History */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Campaign Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {customer.campaignHistory.map((campaign, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-medium">{campaign.name}</div>
                  <div className="text-gray-500 text-xs">{campaign.date}</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {campaign.engagement}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ConversationView({ messageId, onClose }: ConversationViewProps) {
  const [replyText, setReplyText] = useState("");
  const [status, setStatus] = useState(mockConversationData.status);
  
  const conversation = mockConversationData;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={conversation.customer.avatar} />
              <AvatarFallback>{conversation.customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">{conversation.customer.name}</h2>
                <Mail className="w-4 h-4 text-gray-400" />
                {conversation.customer.isVip && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>#{conversation.id}</span>
                <Badge variant={conversation.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                  {conversation.priority === "high" ? "Urgent" : "Normal"}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Badge variant="outline" className="cursor-pointer">
                      {status.replace('_', ' ')}
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
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Three-pane layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Message Timeline */}
          <div className="w-1/4 border-r bg-gray-50 p-4 overflow-y-auto">
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Timeline
            </h3>
            <div className="space-y-3">
              {conversation.messages.map((message, index) => (
                <div key={message.id} className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    {channelIcons[message.channel as keyof typeof channelIcons]}
                    <span className="text-xs font-medium">{message.channel}</span>
                    {message.sentiment && sentimentIcons[message.sentiment]}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">{message.content}</p>
                  <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Panel - Conversation Thread */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-4xl mx-auto">
                {conversation.messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
              </div>
              
              <AIAssistantBlock />
            </div>

            {/* Reply Section */}
            <div className="border-t p-4 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <Textarea
                  placeholder="Type your reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="mb-3"
                  rows={3}
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Internal Note
                    </Button>
                  </div>
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Customer Profile */}
          <div className="w-1/3 border-l p-4 overflow-y-auto">
            <CustomerProfilePanel customer={conversation.customer} />
          </div>
        </div>

        {/* Bottom Action Toolbar */}
        <div className="border-t p-4 bg-gray-50 rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Assign
              </Button>
              <Button size="sm" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Add Note
              </Button>
              <Button size="sm" variant="outline">
                <DollarSign className="w-4 h-4 mr-2" />
                Refund
              </Button>
              <Button size="sm" variant="outline">
                <Zap className="w-4 h-4 mr-2" />
                Automate
              </Button>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Change Status
              </Button>
              <Button size="sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Done
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
