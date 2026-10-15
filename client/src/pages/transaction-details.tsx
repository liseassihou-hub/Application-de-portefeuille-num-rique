import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TransactionDetails = () => {
  // Placeholder data for a transaction
  const transaction = {
    id: "txn_12345",
    type: "Payment Received",
    amount: "€150.00",
    currency: "EUR",
    date: "2024-02-14 10:30 AM",
    status: "Completed",
    sender: "John Doe",
    receiver: "You",
    description: "Freelance work payment",
    transactionFee: "€0.50",
    reference: "INV-2024-001",
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/history">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Transaction Details</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold text-primary">
            {transaction.amount} {transaction.currency}
          </CardTitle>
          <p className="text-center text-sm text-muted-foreground mt-1">
            {transaction.description}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-green-600">
                {transaction.status}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium">{transaction.type}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">{transaction.date}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Sender</span>
              <span className="font-medium">{transaction.sender}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Receiver</span>
              <span className="font-medium">{transaction.receiver}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Transaction ID</span>
              <span className="font-medium">{transaction.id}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Reference</span>
              <span className="font-medium">{transaction.reference}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Transaction Fee</span>
              <span className="font-medium">{transaction.transactionFee}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6">
        <Button className="w-full max-w-xs">Download Receipt</Button>
      </div>
    </div>
  );
};

export default TransactionDetails;
