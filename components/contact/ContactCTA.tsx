import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, ArrowRight, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactCTA() {
  return (
    <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      {/* Urgent Badge */}
      <div className="absolute top-3 right-3">
        <Badge variant="destructive" className="animate-pulse">
          <AlertCircle className="h-3 w-3 mr-1" />
          URGENT
        </Badge>
      </div>

      <CardContent className="p-8 md:p-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Need urgent{" "}
              <span className="text-primary">legal assistance?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-xl">
              Our emergency response team is available 24/7 to provide 
              immediate legal support when you need it most.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Live Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA */}
          <div className="flex flex-col items-center gap-4 min-w-[250px]">
            <Link href="tel:+254700000000" className="w-full">
              <Button size="lg" className="w-full h-14 text-lg font-semibold group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Call Now
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground">
              or{" "}
              <Link 
                href="/contact" 
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                schedule a callback
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </p>
            
            <p className="text-xs text-muted-foreground/60">
              Free initial consultation
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}