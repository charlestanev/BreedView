"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import AppLinkButton from '@/app/APP/COMPONENTS/CONSTATNS/AppLinkButton';
import { AppDataTable } from '@/app/APP/COMPONENTS/DATATABLE/AppDataTable';
import { columns } from '@/app/APP/COMPONENTS/DATATABLE/columns';
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
        <div className="h-screen w-screen flex flex-col md:flex-row bg-AppTertiary">
            <aside className="flex flex-col items-center gap-6 w-full md:w-[200px] p-6 bg-gradient-to-r from-AppPrimary to-AppSecondary text-white shadow-md">
                <AppLinkButton link="/" />
                {FormattedData ? (
                    <AppSlider ImageArrayList={FormattedData} />
                ) : (
                    <p className="text-gray-500 text-sm md:text-base">Loading...</p>
                )}
            </aside>

            <main className="flex flex-col w-full h-full bg-AppSecondary p-6 sm:pl-0">
                <h1 className="capitalize text-2xl md:text-3xl font-bold text-AppMutedPop pb-6 text-center md:text-left">
                    {Params.breed}
                </h1>
                <div className="bg-gradient-to-bl from-[#d2acff] to-[#ffc1c1] w-full rounded-lg 
    shadow-[0_10px_25px_rgba(0,0,0,0.4),0_15px_35px_rgba(210,172,255,0.6),0_0_40px_rgba(255,193,193,0.5)] 
    p-6 md:p-8 overflow-x-auto border border-white/30">

                    {FormattedData ? (
                        <div className="test">
                            <AppDataTable columns={columns} data={FormattedData}  />
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-6 text-sm md:text-base">Loading Table...</p>
                    )}
                </div>
            </main >
        </div >
    );
}

export default Page