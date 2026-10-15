import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Send,
  Wallet,
  QrCode,
  History,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  MessageSquare,
  BarChart3,
  CreditCard,
  Plus,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart3, label: "Statistics", href: "/statistics" },
  { icon: Wallet, label: "My Wallet", href: "/wallet" },
  { icon: Send, label: "Transfers", href: "/transfer" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col md:flex-row pb-16 md:pb-0 font-sans">
      {/* PayPal Style Sidebar (Left Slim Bar) */}
      <aside
        className={cn(
          "hidden md:flex flex-col items-center py-8 border-r border-gray-100 bg-white fixed inset-y-0 z-50 transition-[width] duration-300",
          isSidebarExpanded ? "w-64 items-stretch px-4" : "w-20",
        )}
      >
        <div
          className={cn("mb-10 text-primary", isSidebarExpanded ? "px-2" : "")}
        >
          <div
            className={cn(
              "rounded-xl bg-primary flex items-center justify-center text-secondary font-bold text-xl shadow-lg shadow-primary/20",
              isSidebarExpanded
                ? "h-12 w-full gap-2 px-3 justify-start"
                : "size-10",
            )}
          >
            <span className="font-black">A</span>
            {isSidebarExpanded && (
              <span className="tracking-tight">AfriPay</span>
            )}
          </div>
        </div>

        <div
          className={cn("flex-1 space-y-8", isSidebarExpanded ? "px-2" : "")}
        >
          <button
            type="button"
            onClick={() => setIsSidebarExpanded((prev) => !prev)}
            className={cn(
              "rounded-xl flex items-center justify-center text-gray-400 hover:text-primary hover:bg-muted transition-all",
              isSidebarExpanded
                ? "h-10 w-full gap-3 px-3 justify-start"
                : "size-10",
            )}
            aria-label="Toggle sidebar"
          >
            {isSidebarExpanded ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            {isSidebarExpanded && (
              <span className="text-sm font-medium">Menu</span>
            )}
          </button>

          <div className="space-y-2">
            {sidebarItems.map((item, i) => {
              const isActive = location === item.href;
              return (
                <Link key={i} href={item.href}>
                  <a
                    className={cn(
                      "flex items-center transition-all relative group",
                      isSidebarExpanded
                        ? "h-11 w-full rounded-xl px-3 gap-3"
                        : "size-12 rounded-full justify-center",
                      isActive
                        ? "bg-primary text-secondary shadow-lg shadow-primary/20"
                        : "text-gray-400 hover:bg-muted",
                    )}
                  >
                    <item.icon className="size-5" />
                    {isSidebarExpanded ? (
                      <span className="text-sm font-medium">{item.label}</span>
                    ) : (
                      <span className="absolute left-16 px-2 py-1 rounded bg-gray-900 text-white text-[10px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                        {item.label}
                      </span>
                    )}
                    {isActive && !isSidebarExpanded && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-l-full"></div>
                    )}
                  </a>
                </Link>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full text-white bg-primary hover:bg-primary/90 mt-4",
              isSidebarExpanded
                ? "h-11 w-full rounded-xl justify-start gap-2 px-3"
                : "size-12",
            )}
          >
            <Plus className="size-5" />
            {isSidebarExpanded && (
              <span className="text-sm font-medium">Nouveau</span>
            )}
          </Button>
        </div>

        <div
          className={cn("mt-auto space-y-4", isSidebarExpanded ? "px-2" : "")}
        >
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full text-gray-400",
              isSidebarExpanded
                ? "h-11 w-full rounded-xl justify-start gap-2 px-3"
                : "size-10",
            )}
          >
            <LogOut className="size-5" />
            {isSidebarExpanded && (
              <span className="text-sm font-medium">Deconnexion</span>
            )}
          </Button>
        </div>
      </aside>

      {/* Top Navbar Style inspired by Image 1 */}
      <div
        className={cn(
          "flex-1 flex flex-col min-h-screen transition-[margin] duration-300",
          isSidebarExpanded ? "md:ml-64" : "md:ml-20",
        )}
      >
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-50 px-8 flex items-center sticky top-0 z-40">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xl text-primary flex items-center gap-1">
                AfriPay
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {sidebarItems.map((item, i) => (
                <Link key={i} href={item.href}>
                  <a
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location === item.href
                        ? "text-primary px-3 py-1.5 bg-primary/5 rounded-lg"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-5">
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-lg text-gray-400"
            >
              <Settings className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-lg text-gray-400 relative"
            >
              <Bell className="size-5" />
              <span className="absolute top-2 right-2 size-2 bg-emerald-500 rounded-full border-2 border-white"></span>
            </Button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <Avatar className="size-9 border-2 border-white shadow-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-x-hidden relative">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Navigation (Native App Feel) */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 h-16 bg-white/90 backdrop-blur-xl border border-white/20 z-50 flex items-center justify-around px-2 rounded-3xl shadow-2xl">
        {sidebarItems.slice(0, 4).map((item, i) => (
          <Link key={i} href={item.href}>
            <a
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-all",
                location === item.href
                  ? "text-primary scale-110"
                  : "text-gray-400",
              )}
            >
              <item.icon className="size-5" />
            </a>
          </Link>
        ))}
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </nav>
    </div>
  );
}
