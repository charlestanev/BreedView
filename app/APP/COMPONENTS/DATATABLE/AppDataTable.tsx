"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    ColumnFiltersState,
    getFilteredRowModel,
    getSortedRowModel,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function AppDataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([

    ])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });


    return (
        <div className="px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-AppMutedPop text-center sm:text-left">Dog Images</h2>
                <Input
                    placeholder="Search Image..."
                    value={(table.getColumn("ImageLink")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("ImageLink")?.setFilterValue(event.target.value)
                    }
                    className="w-full sm:w-64 border border-AppSecondary focus:ring-2 focus:ring-AppPop transition-transform duration-300 hover:scale-125 hover:overflow-x-visible"
                />
            </div>

            <div className="rounded-lg border border-AppSecondary overflow-x-auto shadow-[0_12px_30px_rgba(0,0,0,0.5),0_20px_50px_rgba(210,172,255,0.6),0_0_50px_rgba(255,193,193,0.7)] transition-transform duration-300 hover:scale-105 hover:overflow-visible">
                <Table className="w-full text-sm border">
                    <TableHeader className="bg-AppPrimary text-white">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} className="px-3 py-2 text-white text-xs sm:text-sm">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="hover:bg-[#fdaeae] transition-transform duration-300 hover:scale-y-125 hover:overflow-x-visible"
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="px-3 py-2 border-b border-AppSecondary text-xs sm:text-sm">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
                <span className="text-sm text-gray-500 text-center sm:text-left">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <div className="flex space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="bg-gradient-to-r from-[#ff7eb3] to-[#ff758c] text-white px-4 py-2 rounded-md shadow-lg transition-all duration-300 hover:scale-110 hover:from-[#ff6a9d] hover:to-[#ff5a7f] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white px-4 py-2 rounded-md shadow-lg transition-all duration-300 hover:scale-110 hover:from-[#5a0fb8] hover:to-[#1b5cd6] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </Button>

                </div>
            </div>
        </div>
    );

}
