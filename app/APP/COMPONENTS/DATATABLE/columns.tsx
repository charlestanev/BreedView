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
import { MenuSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const ViewLargeImage = ({ ImageLink }: { ImageLink: string }) => {
    const Router = useRouter();
    return <p onClick={() => Router.push(`/details/?ImageUrl=${ImageLink}`)}>Show Image</p>;
};

export const columns: ColumnDef<DogImages>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        header: "Avatar",
        id: "Avatar",
        cell: ({ row }) => {
            const Image = row.original;
            return (
                <Avatar className="border border-AppPrimary shadow-sm">
                    <AvatarImage src={Image.ImageLink} />
                    <AvatarFallback className="bg-AppMutedPop text-white">{Image.ImageLink}</AvatarFallback>
                </Avatar>
            );
        },
    },
    {
        accessorKey: "ImageLink",
        header: "ImageLink",
        cell: ({ row }) => (
            <a
                href={row.original.ImageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-AppPop hover:underline"
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
                        <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-AppTertiary">
                            <span className="sr-only">Open menu</span>
                            <MenuSquare className="h-4 w-4 text-AppPrimary" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white shadow-md rounded-lg">
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
