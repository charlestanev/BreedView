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
        <div className="h-screen w-screen bg-AppTertiary flex">
            <aside className="flex flex-col items-center gap-10 w-[200px] p-6 bg-white shadow-md">
                <AppLinkButton link="/" />
                {FormattedData ? <AppSlider ImageArrayList={FormattedData} /> : <p className="text-gray-500">Loading...</p>}
            </aside>

            <main className="flex flex-col w-full h-full bg-AppSecondary p-12">
                <h1 className="capitalize text-3xl font-bold text-AppMutedPop pb-8">{Params.breed}</h1>
                <div className="bg-white w-full rounded-lg shadow-md p-6">
                    {FormattedData ? (
                        <AppDataTable columns={columns} data={FormattedData} />
                    ) : (
                        <p className="text-gray-500 text-center py-6">Loading Table...</p>
                    )}
                </div>
            </main>
        </div>
    );

}

export default Page