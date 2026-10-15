import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Check, User, Phone, Search, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transfer() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleTransfer = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      toast({
        title: "Transfert réussi !",
        description: `Vous avez envoyé ${amount} FCFA à ${recipient}.`,
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h1 className="text-3xl font-bold font-heading">Envoyer de l'argent</h1>
          <p className="text-muted-foreground mt-2">Transférez des fonds instantanément à vos proches.</p>
        </div>

        <Tabs defaultValue="p2p" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="p2p">Vers un compte AfriPay</TabsTrigger>
            <TabsTrigger value="momo">Vers Mobile Money</TabsTrigger>
          </TabsList>
          
          <TabsContent value="p2p">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Transfert P2P</CardTitle>
                <CardDescription>Envoyez de l'argent gratuitement à un autre utilisateur AfriPay.</CardDescription>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipient">Numéro de téléphone ou Email du bénéficiaire</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="recipient" 
                          placeholder="+229 97 00 00 00" 
                          className="pl-9 h-12"
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button 
                      className="w-full h-12 text-lg" 
                      onClick={handleSearch}
                      disabled={!recipient || loading}
                    >
                      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                      Rechercher le bénéficiaire
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        KM
                      </div>
                      <div>
                        <p className="font-bold">Koffi Mensah</p>
                        <p className="text-sm text-muted-foreground">{recipient}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto text-primary" onClick={() => setStep(1)}>Modifier</Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Montant à envoyer (FCFA)</Label>
                      <div className="relative">
                        <Input 
                          id="amount" 
                          type="number"
                          placeholder="0" 
                          className="pl-4 h-16 text-3xl font-bold font-heading"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                        <span className="absolute right-4 top-5 text-muted-foreground font-medium">FCFA</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Solde disponible: 1,250,000 FCFA</p>
                    </div>

                    <Button 
                      className="w-full h-12 text-lg bg-primary hover:bg-primary/90" 
                      onClick={handleTransfer}
                      disabled={!amount || loading}
                    >
                      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ArrowRight className="mr-2 h-4 w-4" />}
                      Confirmer le transfert
                    </Button>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center animate-in zoom-in duration-300">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700">Transfert réussi !</h3>
                    <p className="text-muted-foreground max-w-xs mx-auto">
                      Vous avez envoyé <span className="font-bold text-foreground">{amount} FCFA</span> à <span className="font-bold text-foreground">Koffi Mensah</span>.
                    </p>
                    <div className="pt-6 w-full space-y-2">
                      <Button className="w-full" variant="outline" onClick={() => { setStep(1); setAmount(""); setRecipient(""); }}>
                        Nouveau transfert
                      </Button>
                      <Button className="w-full" variant="ghost" onClick={() => window.location.href = '/dashboard'}>
                        Retour au tableau de bord
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="momo">
             <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Vers Mobile Money</CardTitle>
                <CardDescription>Transférez vers un compte Orange Money, MTN MoMo, ou Moov Money.</CardDescription>
              </CardHeader>
              <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Module Mobile Money en cours de développement...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}