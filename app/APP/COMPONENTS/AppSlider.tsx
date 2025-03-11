import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function AppSlider({ ImageArrayList }: { ImageArrayList: DogImages[] }) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="h-[380px] w-[120px] mt-12"
        >
            <CarouselContent className="-mt-1 h-[400px]">
                {ImageArrayList.map((item) => (
                    <CarouselItem
                        key={item.id}
                        className="pt-1 md:basis-1/3"
                    >
                        <div className="h-[120px] w-[120px]">
                            <Image
                                src={item.ImageLink}
                                width={200}
                                height={200}
                                alt="Images"
                                className="rounded-md h-[100%] border-2 border-AppPrimary"

                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
