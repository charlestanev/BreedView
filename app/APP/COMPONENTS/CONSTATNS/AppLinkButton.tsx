import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function AppLinkButton({ link }: { link: string }) {
    return (
        <Link href={link} className="w-full sm:w-auto">
            <button className="flex items-center justify-center bg-AppPop hover:bg-AppSecondary text-white w-full sm:w-[100px] h-[40px] rounded-lg gap-2 transition-all duration-300 shadow-md text-sm sm:text-base px-4">
                <FaChevronLeft className="text-base sm:text-lg" />
                <span className="font-medium capitalize">Back</span>
            </button>
        </Link>
    );
}

export default AppLinkButton;
