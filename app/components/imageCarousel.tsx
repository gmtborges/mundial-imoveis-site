import { useState } from "react";
import { Card } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={cn("space-y-4", className)}>
      <Card className="w-full overflow-hidden rounded-lg">
        <img
          src={images[selectedIndex]}
          alt={`View ${selectedIndex + 1}`}
          className="w-full h-[600px] object-cover"
        />
      </Card>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-1/4 md:basis-1/6">
              <div
                className={cn(
                  "cursor-pointer rounded-lg overflow-hidden",
                  selectedIndex === index && "ring-2 ring-primary"
                )}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="aspect-square object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
