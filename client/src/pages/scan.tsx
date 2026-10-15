import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Camera, Zap, X } from "lucide-react";
import { useState } from "react";

export default function Scan() {
  const [scanning, setScanning] = useState(true);

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto space-y-6 animate-in fade-in duration-500 h-[80vh] flex flex-col">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold font-heading">Scanner un QR Code</h1>
          <p className="text-muted-foreground">Payer un marchand ou envoyer de l'argent.</p>
        </div>

        <div className="relative flex-1 bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900">
          {/* Camera Viewfinder UI */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
               <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 rounded-full">
                 <X className="h-6 w-6" />
               </Button>
               <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 rounded-full">
                 <Zap className="h-6 w-6" />
               </Button>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 border-2 border-primary/50 rounded-xl relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary -mt-1 -ml-1"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary -mt-1 -mr-1"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary -mb-1 -ml-1"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary -mb-1 -mr-1"></div>
                <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
                Placez le code dans le cadre
              </p>
            </div>
          </div>
          
          {/* Simulated Camera Feed */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
             <Camera className="h-16 w-16 text-white/20" />
          </div>
        </div>

        <div className="flex justify-center gap-4">
           <Button variant="secondary" className="gap-2">
             <QrCode className="h-4 w-4" /> Ma carte QR
           </Button>
           <Button variant="outline" className="gap-2">
             Saisir un code
           </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}