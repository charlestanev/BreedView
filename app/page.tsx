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
    <div className={cn("flex flex-col md:grid md:grid-cols-[auto,1fr] h-screen w-screen bg-background text-foreground")}>
      <AppLeftPanel />
      <main className="flex flex-col justify-center items-center p-4 sm:p-6 w-full">
        <div className="w-full max-w-6xl bg-white dark:bg-AppMutedPop p-4 sm:p-6 rounded-xl shadow-lg">
          {FormattedData ? (
            <AppDataTable columns={columns} data={FormattedData} />
          ) : (
            <div className="flex items-center justify-center h-40 text-lg font-medium text-gray-500">
              Loading Table...
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Page