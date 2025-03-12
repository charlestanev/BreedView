"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import AppLinkButton from '@/app/APP/COMPONENTS/CONSTATNS/AppLinkButton';
import { AppDataTable } from '@/app/APP/COMPONENTS/DATATABLE/AppDataTable';
import { columns } from '@/app/APP/COMPONENTS/DATATABLE/columns';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
    const Params = useParams();
    const [FormattedData, setFormattedData] = useState<DogImages[] | null>(null);

    const Convert = (data: string[]): DogImages[] => {
        return data.map((item, index) => {
            return {
                id: index + 1,
                ImageLink: item,
            }
        })
    }

    useEffect(() => {
        const GetData = async () => {
            await fetch(`https://dog.ceo/api/breed/${Params.breed}/images/random/20`)
                .then((data) => data.json())
                .then((data) => {
                    const convertedData = Convert(data.message);
                    setFormattedData(convertedData);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    console.log('Data Fetch Complete');
                });
        };
        GetData();
    }, [Params.breed]);

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-AppTertiary sm:bg-red-600">
            <aside className="flex flex-col items-center gap-6 w-full md:w-[200px] p-6 bg-white shadow-md sm:bg-red-600">
                <AppLinkButton link="/" />
                {FormattedData ? (
                    <AppSlider ImageArrayList={FormattedData} />
                ) : (
                    <p className="text-gray-500 text-sm md:text-base">Loading...</p>
                )}
            </aside>

            <main className="flex flex-col w-full h-full bg-AppSecondary p-6 md:p-12">
                <h1 className="capitalize text-2xl md:text-3xl font-bold text-AppMutedPop pb-6 text-center md:text-left">
                    {Params.breed}
                </h1>
                <div className="bg-white w-full rounded-lg shadow-md p-4 md:p-6 overflow-x-auto">
                    {FormattedData ? (
                        <AppDataTable columns={columns} data={FormattedData} />
                    ) : (
                        <p className="text-gray-500 text-center py-6 text-sm md:text-base">Loading Table...</p>
                    )}
                </div>
            </main>
        </div >
    );
}

export default Page