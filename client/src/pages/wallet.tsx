import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon, Plus, Download, History, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Wallet() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-heading">Mon Portefeuille</h1>
            <p className="text-muted-foreground mt-1">Gérez vos devises et vos méthodes de paiement.</p>
          </div>
          <Button className="bg-primary">
            <Plus className="mr-2 h-4 w-4" /> Ajouter une devise
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Main XOF Wallet */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary to-blue-700 text-white border-none shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <CardHeader className="flex flex-row items-center justify-between pb-2">
               <CardTitle className="text-white/90 text-sm font-medium">Franc CFA (XOF)</CardTitle>
               <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">Principal</Badge>
             </CardHeader>
             <CardContent>
               <div className="text-4xl font-bold font-heading mt-2">1,250,000</div>
               <p className="text-white/70 text-sm mt-1">Disponible</p>
               
               <div className="grid grid-cols-2 gap-3 mt-8">
                 <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none h-10">
                   <Plus className="mr-2 h-4 w-4" /> Dépôt
                 </Button>
                 <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none h-10">
                   <Download className="mr-2 h-4 w-4" /> Retrait
                 </Button>
               </div>
             </CardContent>
          </Card>

          {/* NGN Wallet */}
          <Card className="col-span-1 bg-card border-border shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
             <CardHeader className="flex flex-row items-center justify-between pb-2">
               <div className="flex items-center gap-3">
                 <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">NGN</div>
                 <CardTitle className="text-foreground text-sm font-medium">Naira Nigérian</CardTitle>
               </div>
               <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><MoreHorizontal className="h-4 w-4" /></Button>
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold font-heading mt-2 text-foreground">₦ 45,000.00</div>
               <p className="text-muted-foreground text-xs mt-1">≈ 17,500 XOF</p>
               
               <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Button variant="outline" size="sm" className="w-full text-xs h-8">Convertir</Button>
               </div>
             </CardContent>
          </Card>

          {/* Add New Wallet Placeholder */}
           <Card className="col-span-1 border-dashed border-2 bg-muted/30 flex flex-col items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer h-full min-h-[180px]">
             <Plus className="h-8 w-8 mb-2" />
             <p className="font-medium text-sm">Ajouter un portefeuille</p>
           </Card>
        </div>

        {/* Detailed History */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Historique des transactions</h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Tout</TabsTrigger>
              <TabsTrigger value="incoming">Entrées</TabsTrigger>
              <TabsTrigger value="outgoing">Sorties</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <Card className="border-none shadow-sm">
                <CardContent className="p-0">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${i % 2 === 0 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                          {i % 2 === 0 ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">
                            {i % 2 === 0 ? 'Paiement Marchand' : 'Rechargement Mobile Money'}
                          </p>
                          <p className="text-xs text-muted-foreground">14 Fév 2026 • 10:30</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-sm ${i % 2 === 0 ? 'text-foreground' : 'text-emerald-600'}`}>
                          {i % 2 === 0 ? '-' : '+'} {i * 1500} FCFA
                        </p>
                        <p className="text-xs text-muted-foreground">Succès</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}