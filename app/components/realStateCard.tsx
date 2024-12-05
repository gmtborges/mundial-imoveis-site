import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Badge} from "~/components/ui/badge";
import type {RealState} from "~/types";
import {Link} from "react-router";

interface RealStateCardProps {
  realState: RealState;
}

export function RealStateCard({realState: realState}: RealStateCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
        <img
          src={realState.images[0]}
          alt={realState.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
        <Badge className="absolute top-2 right-2">{realState.type}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span className="text-xl">{realState.title}</span>
          <span className="text-xl font-bold text-primary">R$ {realState.price.toLocaleString()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{realState.address}</p>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1">
            <span className="text-sm">🛏️ {realState.beds} quartos</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">🚿 {realState.baths} banheiros</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">📏 {realState.sqft} m2</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          to={`/imoveis/${realState.id}`}
          className="w-full text-center bg-primary text-primary-foreground rounded-md py-2 hover:bg-primary/90 transition-colors">
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  );
}
