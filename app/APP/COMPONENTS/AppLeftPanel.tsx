import React from "react";
import AppMenuItemGroup from "./AppMenuItemGroup";
import Image from "next/image";
import { cn } from "@/lib/utils";

function AppLeftPanel() {
    return (
        <div
            className={cn(
                "relative h-screen w-full sm:w-[200px] md:w-[220px] lg:w-[250px] flex flex-col items-center py-6",
                "transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]",
                "bg-gradient-to-r from-AppPrimary to-AppSecondary"
            )}
        >
            <div className="flex flex-col items-center relative z-10">
                <div className="p-1 rounded-full shadow-md">
                    <Image
                        src="/logo.svg"
                        width={50}
                        height={50}
                        alt="BreedView Logo"
                        className="rounded-full sm:w-[60px] sm:h-[60px] drop-shadow-md"
                    />
                </div>
                <h1 className="text-lg font-semibold tracking-wide text-center sm:text-left mt-3 drop-shadow-md text-white">
                    BreedView
                </h1>
            </div>
            <div className="mt-6 w-full relative z-10">
                <AppMenuItemGroup />
            </div>
        </div>
    );
}

export default AppLeftPanel;
