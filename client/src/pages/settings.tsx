import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, Bell, Lock, User, Smartphone, Globe, LogOut } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div>
          <h1 className="text-3xl font-bold font-heading">Paramètres</h1>
          <p className="text-muted-foreground mt-1">Gérez votre compte et vos préférences de sécurité.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-1 h-fit border-none shadow-md">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                 <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>JK</AvatarFallback>
                 </Avatar>
                 <div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h2 className="text-xl font-bold font-heading">Jean Kouassi</h2>
              <p className="text-muted-foreground text-sm">jean.kouassi@email.com</p>
              <div className="mt-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
                Vérifié (KYC Tier 2)
              </div>
              
              <div className="w-full mt-6 space-y-2">
                 <Button variant="outline" className="w-full justify-start gap-2">
                   <User className="h-4 w-4" /> Modifier profil
                 </Button>
                 <Button variant="destructive" className="w-full justify-start gap-2 bg-destructive/10 text-destructive hover:bg-destructive/20 border-none">
                   <LogOut className="h-4 w-4" /> Déconnexion
                 </Button>
              </div>
            </CardContent>
          </Card>

          {/* Settings Forms */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Security Section */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" /> Sécurité
                </CardTitle>
                <CardDescription>Protégez votre compte et vos transactions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Authentification à deux facteurs</Label>
                    <p className="text-sm text-muted-foreground">Sécuriser chaque connexion avec un code SMS.</p>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Confirmer les virements</Label>
                    <p className="text-sm text-muted-foreground">Demander le code PIN pour chaque envoi.</p>
                  </div>
                  <Switch checked={true} />
                </div>
                 <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Face ID / Touch ID</Label>
                    <p className="text-sm text-muted-foreground">Utiliser la biométrie pour ouvrir l'app.</p>
                  </div>
                  <Switch checked={false} />
                </div>
              </CardContent>
            </Card>

            {/* Notifications Section */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" /> Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Notifications Push</Label>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Alertes par Email</Label>
                  </div>
                  <Switch checked={false} />
                </div>
              </CardContent>
            </Card>

            {/* Mobile Money Link */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" /> Comptes liés
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-orange-500 rounded text-white flex items-center justify-center font-bold text-xs">OM</div>
                    <div>
                      <p className="font-medium text-sm">Orange Money</p>
                      <p className="text-xs text-muted-foreground">+229 97 00 00 00</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-destructive">Délier</Button>
                </div>
                <Button variant="outline" className="w-full">
                   Lier un nouveau compte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}