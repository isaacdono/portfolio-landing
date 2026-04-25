import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { LandingLtr } from "@/pages/LandingLtr";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={LandingLtr} />
      <Route path="/:rest*" component={LandingLtr} />
      {/* Fallback to 404 - Removido temporariamente para o deploy funcionar em subpastas */}
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
