export type RealState = {
  id: number;
  title: string;
  price: number;
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "Casa" | "Apartamento" | "Condomínio";
  images: string[];
  description?: string;
  yearBuilt?: number;
  amenities?: string[];
  status?: "Venda" | "Aluguel" | "Vendido";
  details?: string;
  agent?: {
    name: string;
    phone: string;
    email: string;
    photo?: string;
  };
};
