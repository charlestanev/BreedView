import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function AppSlider({ ImageArrayList }: { ImageArrayList: DogImages[] }) {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const orientation = isMobile ? "horizontal" : "vertical";

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            orientation={orientation}
            className="h-[200px] sm:h-[380px] w-full sm:w-[120px] mt-6 sm:mt-12"
        >
            <CarouselContent className="flex sm:block -mt-1 h-[220px] sm:h-[400px] gap-2 sm:gap-0">
                {ImageArrayList.map((item) => (
                    <CarouselItem key={item.id} className="pt-1 md:basis-1/3">
                        <div className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] flex items-center justify-center">
                            <Image
                                src={item.ImageLink}
                                width={200}
                                height={200}
                                alt="Images"
                                className="rounded-md h-full w-full border-2 border-AppPrimary shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-0" />
            <CarouselNext className="absolute bottom-1/2 translate-y-1/2 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-0" />
        </Carousel>
    );
}
