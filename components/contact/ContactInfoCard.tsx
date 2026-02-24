import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactInfoCard() {
  return (
    <Card className="rounded-2xl shadow-sm border h-fit">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 text-sm">
        <div>
          <p className="font-semibold flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Office Address
          </p>
          <p className="text-muted-foreground pl-6">
            Leaf Law Firm <br />
            Nairobi, Kenya
          </p>
        </div>

        <div>
          <p className="font-semibold flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone
          </p>
          <Link href="tel:+254700000000" className="pl-6 text-muted-foreground">
            +254 700 000 000
          </Link>
        </div>

        <div>
          <p className="font-semibold flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email
          </p>
          <Link
            href="mailto:info@leaflawfirm.com"
            className="pl-6 text-muted-foreground"
          >
            info@leaflawfirm.com
          </Link>
        </div>

        <div>
          <p className="font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Working Hours
          </p>
          <p className="text-muted-foreground pl-6">
            Mon – Fri: 8AM – 5PM
          </p>
        </div>
      </CardContent>
    </Card>
  );
}