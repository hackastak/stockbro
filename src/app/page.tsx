import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function HomePage() {
  // This would normally be fetched from an API
  const watchlist = [
    { symbol: "AAPL", name: "Apple Inc.", price: "173.50", change: "+1.2%" },
    { symbol: "TSLA", name: "Tesla, Inc.", price: "238.45", change: "-0.8%" },
    { symbol: "BTC", name: "Bitcoin", price: "43,250.00", change: "+2.5%" },
  ];

  return (
    <main className="container py-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Welcome to Stock Bro</h1>
        <p className="text-muted-foreground">
          Monitor your favorite stocks and cryptocurrencies
        </p>
        
        <Separator className="my-4" />
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {watchlist.map((item) => (
            <Card key={item.symbol}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{item.symbol}</span>
                  <span className={item.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                    {item.change}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.name}</p>
                <p className="mt-2 text-2xl font-bold">${item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
