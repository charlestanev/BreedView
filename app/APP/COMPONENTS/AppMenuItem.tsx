import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AppMenuItem = ({ link, text, icon }: TitleIcon) => {
    return (
        <Link
            href={link}
            className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg w-full text-white transition-all duration-300",
                "bg-transparent hover:bg-AppPop hover:text-white"
            )}
        >
            <span className="text-lg">{icon}</span>
            <span className="font-medium">{text}</span>
        </Link>
    );
};

export default AppMenuItem;
