import DashboardLayout from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Send,
  Download,
  QrCode,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  User,
  PlusCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentUsers = [
  { name: "Alina", color: "bg-pink-100 text-pink-600" },
  { name: "Mark", color: "bg-blue-100 text-blue-600" },
  { name: "Koffi", color: "bg-green-100 text-green-600" },
  { name: "Sika", color: "bg-orange-100 text-orange-600" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-700 relative pb-10">
        {/* Header with Breadcrumb-like feel */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-foreground font-medium">Overview</span>
            </div>
            <h1 className="text-3xl font-bold font-heading text-foreground tracking-tight">
              Bonjour, Jean 👋
            </h1>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 border-gray-200"
            >
              <PlusCircle className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Top Section inspired by first image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Main Hero Card */}
          <Card className="lg:col-span-4 card-premium overflow-hidden !bg-primary !text-white border-none group relative">
            <div className="absolute inset-0 opacity-10 topo-bg"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded bg-white/20 flex items-center justify-center">
                    <span className="font-bold text-white">A</span>
                  </div>
                  <span className="font-bold tracking-tight">AfriPay</span>
                </div>
                <h2 className="text-2xl font-bold font-heading leading-tight">
                  Gérez tout votre argent en un seul endroit.
                </h2>
              </div>
              <Button className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 font-semibold">
                En savoir plus
              </Button>
            </div>

            {/* Floating Mini Cards Background Decoration */}
            <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 rotate-12 opacity-20 pointer-events-none transition-transform group-hover:rotate-0 duration-700">
              <div className="w-40 h-24 bg-gradient-to-br from-white/40 to-white/10 rounded-xl border border-white/20 shadow-2xl mb-4"></div>
              <div className="w-40 h-24 bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-xl border border-white/20 shadow-2xl ml-8"></div>
            </div>
          </Card>

          {/* Balance Section */}
          <Card className="lg:col-span-3 card-premium">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Balance
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-primary h-7 px-2"
              >
                Détails &gt;
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Revenue</p>
                <div className="text-3xl font-bold font-heading tracking-tight">
                  1,250,000 FCFA
                </div>
              </div>
              <div className="flex items-end gap-1 h-12 mt-4">
                {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-muted rounded-sm relative group overflow-hidden"
                    style={{ height: "100%" }}
                  >
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 right-0 rounded-sm transition-all duration-500",
                        i === 3 ? "bg-primary" : "bg-secondary",
                      )}
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-500 mt-2 font-medium">
                <ArrowUpRight className="h-3 w-3" /> 26% ce mois
              </div>
            </CardContent>
          </Card>

          {/* Cards Carousel Area */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-bold text-sm">Vos Cartes</h3>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-6 rounded-full border-gray-100"
                >
                  <ArrowDownLeft className="size-3" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-6 rounded-full border-gray-100"
                >
                  <ArrowUpRight className="size-3" />
                </Button>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="min-w-[200px] h-32 bg-secondary rounded-3xl p-5 flex flex-col justify-between text-secondary-foreground shadow-lg shadow-secondary/10 shrink-0">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono opacity-80">
                    **** 6789
                  </span>
                  <div className="size-5 rounded-full border border-current flex items-center justify-center">
                    ★
                  </div>
                </div>
                <div className="font-bold text-lg italic">VISA</div>
              </div>
              <div className="min-w-[200px] h-32 bg-primary rounded-3xl p-5 flex flex-col justify-between text-white shadow-lg shadow-primary/10 shrink-0">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono opacity-80">
                    **** 4362
                  </span>
                  <div className="size-5 rounded-full bg-white/20 flex items-center justify-center">
                    ★
                  </div>
                </div>
                <div className="font-bold text-lg italic">VISA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section inspired by Quick Send and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Quick Send Card */}
          <Card className="lg:col-span-5 card-premium p-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold font-heading">
                Envoi Rapide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  Transférer à vos proches
                </p>
                <div className="flex items-end justify-between">
                  <div className="text-4xl font-bold font-heading">
                    250.000{" "}
                    <span className="text-lg text-muted-foreground font-medium">
                      FCFA
                    </span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-6 h-12 shadow-xl shadow-primary/20">
                    <Send className="mr-2 h-4 w-4" /> Transférer
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Utilisateurs récents
                </p>
                <div className="flex items-center gap-3">
                  {recentUsers.map((user, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 group cursor-pointer"
                    >
                      <Avatar
                        className={cn(
                          "size-12 border-2 border-white shadow-sm transition-transform group-hover:scale-110",
                          user.color,
                        )}
                      >
                        <AvatarFallback className="font-bold text-xs">
                          {user.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {user.name}
                      </span>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-12 rounded-full border-dashed border-gray-300 bg-transparent text-gray-400"
                  >
                    <Plus className="size-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscriptions inspired section */}
          <Card className="lg:col-span-7 card-premium">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold font-heading">
                Abonnements
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
                Gérer &gt;
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-gray-50 group hover:bg-white hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <span className="text-blue-500 font-bold">T</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Telegram</p>
                      <p className="text-[10px] text-muted-foreground">
                        Prochain: 15 Juil
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-sm">3.500 FCFA</p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-gray-50 group hover:bg-white hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <span className="text-red-500 font-bold">N</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Netflix</p>
                      <p className="text-[10px] text-muted-foreground">
                        Prochain: 22 Juil
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-sm">5.000 FCFA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Section Header */}
        <div className="flex items-center justify-between px-2 relative z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold font-heading">Transactions</h2>
            <span className="text-xs text-muted-foreground bg-white px-2 py-0.5 rounded-full border border-gray-100">
              3456
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-medium gap-1"
            >
              Récents <ArrowDownLeft className="size-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 rounded-full bg-white shadow-sm"
            >
              <QrCode className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative z-10">
          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
