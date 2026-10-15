import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowUpRight, ArrowDownLeft, Download } from "lucide-react";

export default function History() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-heading">Historique</h1>
            <p className="text-muted-foreground mt-1">Consultez toutes vos transactions passées.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Exporter (PDF)
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center bg-card p-4 rounded-lg shadow-sm border border-border">
          <div className="relative w-full sm:w-auto flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher une transaction..." className="pl-9" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" /> Filtres
            </Button>
            <Button variant="ghost" size="sm">
              Réinitialiser
            </Button>
          </div>
        </div>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Février 2026</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
             <div className="divide-y divide-border">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${i % 3 === 0 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                          {i % 3 === 0 ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                            {i % 3 === 0 ? 'Netflix Inc.' : i % 2 === 0 ? 'Virement reçu - Koffi' : 'Dépôt Mobile Money'}
                          </p>
                          <p className="text-xs text-muted-foreground">14 Fév 2026 • 10:30 • ID: #TXN-8392{i}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-sm ${i % 3 === 0 ? 'text-foreground' : 'text-emerald-600'}`}>
                          {i % 3 === 0 ? '-' : '+'} {i * 2500} FCFA
                        </p>
                        <Badge variant={i === 1 ? 'secondary' : 'outline'} className="text-[10px]">
                          {i === 1 ? 'En attente' : 'Succès'}
                        </Badge>
                      </div>
                    </div>
                  ))}
             </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}