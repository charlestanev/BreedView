'use client';
import React, { useEffect, useState } from 'react'
import AppLeftPanel from './APP/COMPONENTS/AppLeftPanel'
import { cn } from '@/lib/utils'
import { AppDataTable } from './APP/COMPONENTS/DATATABLE/AppDataTable';
import { columns } from './APP/COMPONENTS/DATATABLE/columns';

function Page() {
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
      await fetch(`https://dog.ceo/api/breed/hound/afghan/images/random/20`)
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
  }, []);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row h-screen w-screen bg-AppTertiary justify-center items-center"
      )}
    >
      <AppLeftPanel />

      <main className="flex flex-col w-full h-full bg-AppSecondary p-6 sm:p-8 md:p-10 lg:p-12">
        <div
          className="w-full rounded-lg border border-white/30 bg-gradient-to-bl from-[#d2acff] to-[#ffc1c1] 
            shadow-[0_10px_25px_rgba(0,0,0,0.4),0_15px_35px_rgba(210,172,255,0.6),0_0_40px_rgba(255,193,193,0.5)] 
            p-6 sm:p-8 md:p-10 lg:p-12 mx-auto max-w-6xl overflow-x-auto sm:overflow-hidden 
            transition-all duration-300 hover:from-[#c69cff] hover:to-[#ffaaaa]"
        >
          {FormattedData ? (
            <AppDataTable columns={columns} data={FormattedData} />
          ) : (
            <div className="flex items-center justify-center h-full text-lg font-medium text-gray-500">
              Loading Table...
            </div>
          )}
        </div>
      </main>
    </div>
  );

}

export default Page
