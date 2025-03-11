import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AppMenuItem = ({ link, text, icon }: TitleIcon) => {
    return (
        <Link
            href={link}
            className={cn(
                "flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 sm:py-3 rounded-lg w-full text-white text-xs sm:text-sm font-medium transition-all duration-300",
                "bg-transparent hover:bg-AppPop hover:text-white hover:shadow-md"
            )}
        >
            <span className="h-5 w-5">{icon}</span>
            <span className="truncate">{text}</span>
        </Link>
    );
};

export default AppMenuItem;
