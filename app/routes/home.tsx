import type {RealState} from "~/types";
import {useState} from "react";
import {RealStateCard} from "~/components/realStateCard";
import {Button} from "~/components/ui/button";
import type {Route} from "./+types/home";
import {Input} from "~/components/ui/input";
import {Search} from "lucide-react";
import json from "~/data.json";

export function meta({}: Route.MetaArgs) {
  return [{title: "Mundial Imóveis"}, {name: "description", content: "Mundial Imóveis"}];
}

export async function loader({}: Route.LoaderArgs) {
  return json as RealState[];
}

export default function Home({loaderData}: Route.ComponentProps) {
  const ITEMS_PER_PAGE = 6;
  const rsList = loaderData as RealState[];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rsList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProperties = rsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main>
      <section className="relative flex-grow">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/gyn.svg')`,
            filter: "brightness(0.7)",
          }}
        />

        <div className="relative container mx-auto px-4 h-full">
          <div className="flex flex-col items-center justify-center h-full min-h-[500px] xl:min-h-[700px] text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Encontre o imóvel dos seus sonhos.
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Te ajudamos a encontrar o imóvel perfeito para você e sua família.
            </p>

            <div className="flex w-full max-w-2xl gap-2">
              <Input type="text" placeholder="Buscar imóvel..." className="bg-white/95" />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl text-center font-bold mb-8">Imóveis em destaque</h2>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProperties.map((realState) => (
            <RealStateCard key={realState.id} realState={realState} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}>
            Anterior
          </Button>
          {Array.from({length: totalPages}, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}>
            Próxima
          </Button>
        </div>
      </div>
    </main>
  );
}
