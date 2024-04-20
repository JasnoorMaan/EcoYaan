import { Card, CardContent } from "@/components/ui/card";
import TabData from "./TabData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  return (
    <div className="flex justify-center items-center h-[95vh]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[90vw] mx-auto"
      >
        <CarouselContent>
          {TabData.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                    <img
                      className="relative object-cover"
                      src={data.image}
                      alt="images"
                    />
                    <h1 className="font-outline text-3xl font-semibold">
                      {data.names}
                    </h1>
                    <button className="buttonBlack my-2">Shop</button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
