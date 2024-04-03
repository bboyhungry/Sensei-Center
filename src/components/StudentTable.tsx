import React, { useState, useMemo } from "react";
import { 
    getCoreRowModel, 
    useReactTable, 
    flexRender,
    getSortedRowModel,
    SortingState,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { columnDef } from "../util/columns";
import dataJson from "../data/data.json";
import "../styles/table.css";

const StudentTable = () => {

    const [sorting, setSorting] = useState<SortingState>([]);
    const [filtering, setFiltering] = useState("");

    const finalColumnDef = useMemo(() => columnDef,[]);
    const finalData = useMemo(() => dataJson,[]);

    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setFiltering,
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
    });

    return (
        <>
            <input 
                type="text"
                placeholder="Search for record..."
                onChange={(e) => setFiltering(e.target.value)} 
                style={{ margin: "16px" }}
            />
            <table>
                <thead>
                    {tableInstance.getHeaderGroups().map(headerEl => (
                        <tr key={headerEl.id}>
                            {headerEl.headers.map((columnEl, index) => (
                                <th 
                                    key={columnEl.id} 
                                    colSpan={columnEl.colSpan}
                                    onClick={columnEl.column.getToggleSortingHandler()}
                                    title={
                                        columnEl.column.getCanSort()
                                            ? columnEl.column.getNextSortingOrder() === 'asc'
                                            ? 'Sort ascending'
                                            : columnEl.column.getNextSortingOrder() === 'desc'
                                                ? 'Sort descending'
                                                : 'Clear sort'
                                            : undefined
                                        }
                                >
                                    {columnEl.isPlaceholder 
                                        ? null
                                        : flexRender(
                                            columnEl.column.columnDef.header,
                                            columnEl.getContext(),
                                    )}
                                    {columnEl.column.getIsSorted() === "asc" && <FontAwesomeIcon className="sort-icon" icon={faCaretUp} />}
                                    {columnEl.column.getIsSorted() === "desc" && <FontAwesomeIcon className="sort-icon" icon={faCaretDown} />}
                                    {
                                        columnEl.column.getCanFilter() ? (
                                            <div>
                                                <input 
                                                    type="text"
                                                    value={(columnEl.column.getFilterValue() || "") as string}
                                                    onChange={(e) => columnEl.column.setFilterValue(e.target.value)}
                                                />
                                            </div>
                                        ) : null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {tableInstance.getRowModel().rows.map((rowEl) => (
                        <tr key={rowEl.id}>{rowEl.getVisibleCells().map((cellEl)=> (
                            (<td key={cellEl.id}>
                                {cellEl.getIsPlaceholder() 
                                    ? null
                                    : flexRender(
                                        cellEl.column.columnDef.cell, 
                                        cellEl.getContext(),
                                    )}
                            </td>
                        )))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default StudentTable