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
            className="lg:h-[200px] h-auto md:w-full w-10/12 mt-6 sm:mt-12"
        >
            <CarouselContent className="flex sm:block -mt-1 md:h-[375px] gap-2 sm:gap-0 h-auto">
                {ImageArrayList.map((item) => (
                    <CarouselItem key={item.id} className="pt-1 md:basis-1/3">
                        <div className={`h-[100px] w-[200px] md:h-[120px] md:w-[150px] 
                            flex items-center justify-center
                            ${isMobile && 'h-[auto] w-auto'}`}>
                            <Image
                                src={item.ImageLink}
                                width={200}
                                height={200}
                                alt="Images"
                                className="rounded-md h-[200px] md:h-full w-full border-2 border-AppPrimary shadow-md transition-transform duration-300 hover:scale-105 object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 md:top-[-50px] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-0 text-AppPrimary" />
            <CarouselNext className="absolute top-1/3 translate-y-1/2 md:top-[390px] sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-0 text-AppPrimary" />
        </Carousel >
    );
}
