import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: any;
  description?: string;
  variant?: "default" | "primary" | "secondary";
}

export function StatCard({ title, value, trend, trendUp, icon: Icon, description, variant = "default" }: StatCardProps) {
  const bgClass = variant === "primary" ? "bg-primary text-primary-foreground" : 
                  variant === "secondary" ? "bg-secondary text-secondary-foreground" : 
                  "bg-card text-card-foreground";
  
  const iconBgClass = variant === "primary" ? "bg-white/10 text-secondary" :
                      variant === "secondary" ? "bg-black/10 text-primary" :
                      "bg-secondary/10 text-secondary";

  const titleClass = variant === "primary" ? "text-white/60" : 
                     variant === "secondary" ? "text-primary-foreground/70" : 
                     "text-muted-foreground";

  return (
    <Card className={`border-none shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${bgClass}`}>
      {/* Mini SVG decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className={`text-sm font-medium ${titleClass}`}>
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${iconBgClass}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className={`text-2xl font-bold font-heading ${variant === 'primary' ? 'text-secondary' : ''}`}>{value}</div>
        {(trend || description) && (
          <p className={`text-xs mt-1 ${variant === 'primary' ? 'text-white/40' : variant === 'secondary' ? 'text-primary-foreground/60' : 'text-muted-foreground'} flex items-center gap-1`}>
            {trend && (
              <span className={trendUp ? "text-secondary font-medium" : "text-rose-500 font-medium"}>
                {trendUp ? <TrendingUp className="inline h-3 w-3 mr-1" /> : null}
                {trend}
              </span>
            )}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}