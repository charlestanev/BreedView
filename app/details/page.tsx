"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import AppButton from "../APP/COMPONENTS/AppButton";

function Page() {
    const Qparams = useSearchParams();
    const Router = useRouter();
    const ImageUrl = Qparams.get("ImageUrl");

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-AppTertiary">
            <aside className="flex flex-col items-center gap-6 w-full md:w-[200px] p-6 bg-gradient-to-r from-AppPrimary to-AppSecondary shadow-md">
                <button onClick={() => Router.back()} className="w-full md:w-auto">
                    <AppButton>Back</AppButton>
                </button>
            </aside>

            <main className="flex flex-col justify-center items-center bg-AppSecondary w-full p-6 md:p-12">
                <h1 className="capitalize text-2xl md:text-3xl font-bold text-AppMutedPop pb-6 text-center">
                    Image Preview
                </h1>
                {ImageUrl ? (
                    <div className="flex justify-center">
                        <Image
                            src={ImageUrl}
                            alt="Dog Image"
                            width={400}
                            height={400}
                            className="rounded-lg border-2 border-AppPrimary shadow-lg max-w-full sm:max-w-[400px] transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ) : (
                    <p className="text-gray-500 text-lg">No image found.</p>
                )}
            </main>
        </div>
    );
}

export default Page;
