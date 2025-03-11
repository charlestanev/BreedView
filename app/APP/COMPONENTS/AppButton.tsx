import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function AppButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="flex items-center justify-center bg-AppPop hover:bg-AppSecondary text-white w-full sm:w-[120px] h-[36px] sm:h-[40px] rounded-lg gap-2 transition-all duration-300 shadow-md text-sm sm:text-base px-4">
            <FaChevronLeft className="text-base sm:text-lg" />
            <span className="font-medium capitalize truncate">{children}</span>
        </button>
    );
}

export default AppButton;
