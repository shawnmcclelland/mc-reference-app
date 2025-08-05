import "./tokens";
import "./design-tokens.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MailchimpNavigation } from "@/components/ui/mailchimp-navigation";
import { MailchimpHeader } from "@/components/ui/mailchimp-header";
import CampaignReport from "./pages/CampaignReport";
import Index from "./pages/Index";
import Audience from "./pages/Audience";
import Inbox from "./pages/Inbox";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MailchimpLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-mailchimp-background-tertiary">
    <MailchimpNavigation />
    <div className="flex-1 flex flex-col">
      <MailchimpHeader />
      <main className="flex-1 overflow-auto bg-mailchimp-background-tertiary">
        {children}
      </main>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MailchimpLayout>
                <Audience />
              </MailchimpLayout>
            }
          />
          <Route
            path="/campaign-report"
            element={
              <MailchimpLayout>
                <CampaignReport />
              </MailchimpLayout>
            }
          />
          <Route
            path="/home"
            element={
              <MailchimpLayout>
                <Index />
              </MailchimpLayout>
            }
          />
          <Route
            path="/audience"
            element={
              <MailchimpLayout>
                <Audience />
              </MailchimpLayout>
            }
          />
          <Route
            path="/audience/contacts"
            element={
              <MailchimpLayout>
                <Audience />
              </MailchimpLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
