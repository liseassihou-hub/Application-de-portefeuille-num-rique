import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: 1,
    type: "incoming",
    title: "Virement reçu",
    from: "Orange Money",
    date: "Aujourd'hui, 10:23",
    amount: "+ 25.000 FCFA",
    status: "success",
    avatar: "OM"
  },
  {
    id: 2,
    type: "outgoing",
    title: "Paiement Marchand",
    from: "Supermarché Erevan",
    date: "Hier, 18:45",
    amount: "- 12.500 FCFA",
    status: "success",
    avatar: "SE"
  },
  {
    id: 3,
    type: "outgoing",
    title: "Transfert à Ami",
    from: "Koffi Mensah",
    date: "12 Fév, 09:30",
    amount: "- 5.000 FCFA",
    status: "success",
    avatar: "KM"
  },
  {
    id: 4,
    type: "incoming",
    title: "Remboursement",
    from: "Canal+",
    date: "10 Fév, 14:15",
    amount: "+ 2.000 FCFA",
    status: "pending",
    avatar: "C+"
  },
];

export function RecentTransactions() {
  return (
    <Card className="col-span-1 md:col-span-3 lg:col-span-4 border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-heading text-lg">Transactions Récentes</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary font-medium">Voir tout</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10 border border-border bg-muted/50">
                  <AvatarFallback className="text-xs font-bold text-primary">{tx.avatar}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">{tx.title}</p>
                  <p className="text-xs text-muted-foreground">{tx.from} • {tx.date}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`font-bold text-sm ${tx.type === 'incoming' ? 'text-emerald-600' : 'text-foreground'}`}>
                  {tx.amount}
                </span>
                <Badge variant={tx.status === 'success' ? 'outline' : 'secondary'} className="text-[10px] h-5 px-1.5 font-normal">
                  {tx.status === 'success' ? 'Succès' : 'En attente'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}