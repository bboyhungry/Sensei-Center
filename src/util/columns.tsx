import { ColumnDef, createColumnHelper  } from "@tanstack/react-table"
import React from "react";

type Student = {
    id: number,
    name: string,
    rate: string,
    class: string,
    time: string,
    day: string,
    picture: string,
}

const columnHelper = createColumnHelper<Student>();

export const columnDef: ColumnDef<Student>[] = [
    columnHelper.accessor("id", {
        header: "",
        cell: ({ row }) => 
        <img 
            src={row.original.picture}
            alt=""
            width={80}
            height={60}
        />,
        enableColumnFilter: false,
        enableGlobalFilter: false,
        enableSorting: false,
    }) as ColumnDef<Student>,
    columnHelper.accessor("name", {
        header: "Name",
        enableColumnFilter: false,
    }) as ColumnDef<Student>,
    columnHelper.accessor("rate", {
        header: "Rate",
        enableColumnFilter: false,
    }) as ColumnDef<Student>,
    columnHelper.accessor("class", {
        header: "Class",
        enableColumnFilter: false,
    }) as ColumnDef<Student>,
    columnHelper.accessor("time", {
        header: "Time",
        enableColumnFilter: false,
    }) as ColumnDef<Student>,
    columnHelper.accessor("day", {
        header: "Day",
    }) as ColumnDef<Student>,
]