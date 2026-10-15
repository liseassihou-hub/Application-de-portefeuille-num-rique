import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Shield, Smartphone, Globe, ArrowRight, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-fintech.png";
import { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                A
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">AfriPay</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Fonctionnalités</a>
              <a href="#security" className="text-sm font-medium hover:text-primary transition-colors">Sécurité</a>
              <a href="#business" className="text-sm font-medium hover:text-primary transition-colors">Business</a>
              <Link href="/auth">
                <Button variant="ghost" className="font-medium">Se connecter</Button>
              </Link>
              <Link href="/auth">
                <Button className="font-medium shadow-lg shadow-primary/25">Ouvrir un compte</Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border p-4 space-y-4 animate-in slide-in-from-top-5">
             <a href="#features" className="block text-sm font-medium p-2 hover:bg-muted rounded">Fonctionnalités</a>
             <a href="#security" className="block text-sm font-medium p-2 hover:bg-muted rounded">Sécurité</a>
             <Link href="/auth">
               <Button className="w-full mt-4">Commencer</Button>
             </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible au Bénin
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight tracking-tight">
              Le paiement mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">réinventé</span> pour l'Afrique.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Envoyez de l'argent, payez vos factures et gérez vos finances en toute simplicité. Sécurisé, rapide et sans frais cachés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth">
                <Button size="lg" className="h-12 px-8 text-lg shadow-xl shadow-primary/20">
                  Créer un compte gratuit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                Télécharger l'app
              </Button>
            </div>
            <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground grayscale opacity-70">
              <span>Partenaires:</span>
              <span className="font-bold">Orange Money</span>
              <span className="font-bold">MTN MoMo</span>
              <span className="font-bold">Visa</span>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-700 delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50"></div>
            <img 
              src={heroImage} 
              alt="App Screenshot" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/20 rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            />
             {/* Floating Elements */}
             <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border z-20 animate-bounce delay-700">
               <div className="flex items-center gap-3">
                 <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <CheckCircle2 className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="font-bold text-sm">Transfert Réussi</p>
                   <p className="text-xs text-muted-foreground">Vous avez envoyé 25.000 FCFA</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-muted-foreground">Une seule application pour tous vos besoins financiers quotidiens.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Paiements Mobiles</h3>
              <p className="text-muted-foreground">Payez chez vos commerçants préférés en scannant simplement un QR code.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Transferts Internationaux</h3>
              <p className="text-muted-foreground">Envoyez de l'argent vers le Nigeria, le Ghana et toute la zone UEMOA instantanément.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Sécurité Maximale</h3>
              <p className="text-muted-foreground">Vos données sont chiffrées et protégées par les meilleurs standards bancaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">A</div>
            <span className="font-heading font-bold text-lg">AfriPay</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 AfriPay. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Conditions</a>
            <a href="#" className="hover:text-foreground">Confidentialité</a>
            <a href="#" className="hover:text-foreground">Aide</a>
          </div>
        </div>
      </footer>
    </div>
  );
}