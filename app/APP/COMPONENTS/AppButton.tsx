import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function AppButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="flex items-center justify-center bg-AppPop hover:bg-AppSecondary text-white w-[100px] h-[40px] rounded-lg gap-2 transition-all duration-300 shadow-md">
            <FaChevronLeft className="text-lg" />
            <span className="font-medium capitalize">{children}</span>
        </button>
    );
}

export default AppButton;
