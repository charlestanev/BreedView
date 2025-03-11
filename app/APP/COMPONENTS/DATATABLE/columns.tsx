"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

const ViewLargeImage = ({ ImageLink }: { ImageLink: string }) => {
    const Router = useRouter();
    return (
        <p onClick={() => Router.push(`/details/?ImageUrl=${ImageLink}`)} className="cursor-pointer hover:text-AppPop">
            Show Image
        </p>
    );
};

export const columns: ColumnDef<DogImages>[] = [
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
            <span className="text-xs sm:text-sm font-medium text-gray-700">{row.original.id}</span>
        ),
    },
    {
        header: "Avatar",
        id: "Avatar",
        cell: ({ row }) => {
            const Image = row.original;
            return (
                <Avatar className="border border-AppPrimary shadow-sm h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src={Image.ImageLink} />
                    <AvatarFallback className="bg-AppMutedPop text-white text-xs sm:text-sm">{Image.id}</AvatarFallback>
                </Avatar>
            );
        },
    },
    {
        accessorKey: "ImageLink",
        header: "Image",
        cell: ({ row }) => (
            <a
                href={row.original.ImageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-AppPop hover:underline truncate max-w-[120px] sm:max-w-none block"
            >
                {row.original.ImageLink}
            </a>
        ),
    },
    {
        header: "Actions",
        id: "actions",
        cell: ({ row }) => {
            const Image = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-AppTertiary">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5 text-AppPrimary" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white shadow-md rounded-lg w-40 sm:w-48">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <ViewLargeImage ImageLink={Image.ImageLink} />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
