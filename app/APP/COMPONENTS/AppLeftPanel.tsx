import React from "react";
import AppMenuItemGroup from "./AppMenuItemGroup";
import Image from "next/image";
import { cn } from "@/lib/utils";

function AppLeftPanel() {
    return (
        <div className={cn(
            "bg-AppPrimary text-white h-screen w-[200px] flex flex-col items-center py-6 shadow-lg",
            "md:w-[220px] lg:w-[250px] transition-all duration-300"
        )}>
            <div className="flex flex-col items-center">
                <Image src="/logo.svg" width={60} height={60} alt="BreedView Logo" className="mb-4 rounded-full" />
                <h1 className="text-lg font-semibold tracking-wide">BreedView</h1>
            </div>
            <div className="mt-10 w-full">
                <AppMenuItemGroup />
            </div>
        </div>
    );
}

export default AppLeftPanel;
