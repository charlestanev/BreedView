"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AppButton from "../APP/COMPONENTS/AppButton";

function DetailsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const imageUrl = searchParams.get("ImageUrl");

    return (
        <div className="h-screen w-screen flex bg-AppTertiary">
            <aside className="flex flex-col items-center gap-12 w-[200px] p-6 bg-white shadow-md">
                <div onClick={() => router.back()} className="cursor-pointer">
                    <AppButton>Back</AppButton>
                </div>
            </aside>

            <main className="flex flex-col justify-center items-center bg-AppSecondary w-full p-12">
                <h1 className="capitalize text-3xl font-bold text-AppMutedPop pb-8">
                    Image Preview
                </h1>
                {imageUrl && (
                    <div className="flex justify-center">
                        <Image
                            src={imageUrl}
                            alt="Dog Image"
                            width={400}
                            height={400}
                            className="rounded-lg border-2 border-AppPrimary shadow-lg"
                        />
                    </div>
                )}
            </main>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div className="text-center text-lg text-gray-500">Loading...</div>}>
            <DetailsContent />
        </Suspense>
    );
}
