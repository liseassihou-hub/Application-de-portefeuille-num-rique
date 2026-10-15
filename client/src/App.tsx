import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Transfer from "@/pages/transfer";
import Wallet from "@/pages/wallet";
import Scan from "@/pages/scan";
import History from "@/pages/history";
import Settings from "@/pages/settings";
import LandingPage from "@/pages/landing";
import AuthPage from "@/pages/auth";
import TransactionDetails from "@/pages/transaction-details";
import Profile from "@/pages/profile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/scan" component={Scan} />
      <Route path="/history" component={History} />
      <Route path="/settings" component={Settings} />
      <Route path="/transaction-details" component={TransactionDetails} />
      <Route path="/profile" component={Profile} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;