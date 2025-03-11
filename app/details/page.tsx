"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import AppButton from '../APP/COMPONENTS/AppButton';
import { useRouter } from 'next/navigation';

function Page() {
    const Qparams = useSearchParams();
    const Router = useRouter();
    const ImageUrl = Qparams.get('ImageUrl');

    return (
        <div className="h-screen w-screen flex bg-AppTertiary">
            <aside className="flex flex-col items-center gap-12 w-[200px] p-6 bg-white shadow-md">
                <div onClick={() => Router.back()} className="cursor-pointer">
                    <AppButton>Back</AppButton>
                </div>
            </aside>

            <main className="flex flex-col justify-center items-center bg-AppSecondary w-full p-12">
                <h1 className="capitalize text-3xl font-bold text-AppMutedPop pb-8">Image Preview</h1>
                {ImageUrl && (
                    <div className="flex justify-center">
                        <Image
                            src={ImageUrl}
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

export default Page