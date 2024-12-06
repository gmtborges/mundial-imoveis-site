import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Phone,
  Mail,
  ArrowLeft,
  BedDouble,
  Bath,
  Check,
  Ruler,
} from "lucide-react";
import type { RealState as RealState } from "~/types";
import type { Route } from "./+types/details";
import json from "~/data.json";
import { useState } from "react";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { ImageCarousel } from "~/components/imageCarousel";
import { Location } from "~/components/location";

export async function loader({ params }: Route.LoaderArgs) {
  return json.find((rs) => rs.id === Number(params.id)) as RealState;
}

export default function RealStateDetails({ loaderData }: Route.ComponentProps) {
  const property = loaderData as RealState;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para imóveis
      </Button>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center gap-4">
          <Badge>{property.type}</Badge>
          <Badge variant="secondary">{property.status}</Badge>
          <span className="text-2xl font-bold text-primary">
            R$ {property.price.toLocaleString()}
          </span>
        </div>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <ImageCarousel images={property.images} className="mb-8" />

          <Card className="mb-6">
            <CardContent className="grid grid-cols-3 gap-4 p-6">
              <div className="flex items-center gap-2">
                <BedDouble className="h-5 w-5 text-muted-foreground" />
                <span>{property.beds} Quartos</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>{property.baths} Banheiros</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-muted-foreground" />
                <span>{property.sqft} m2</span>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{property.description}</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Comodidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {property.amenities?.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="font-semibold">{property.agent?.name}</h3>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  {property.agent?.phone}
                </Button>
                <Button variant="secondary" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  E-mail
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações do imóvel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Localização</span>
                <span>{property.location}</span>
              </div>
              <Location address={property.location} />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ano</span>
                <span>{property.yearBuilt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Detalhes</span>
                <span>{property.details}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-[90vw] h-[90vh] p-0">
          <div className="relative h-full">
            <div className="h-full flex items-center justify-center bg-black/90 p-4">
              <img
                src={selectedImage || property.images[0]}
                alt="Selected view"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <div className="flex gap-2 overflow-x-auto">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === image ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
