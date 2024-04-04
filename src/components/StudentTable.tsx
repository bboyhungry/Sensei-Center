import React, { useState, useMemo } from "react";
import { 
    getCoreRowModel, 
    useReactTable, 
    flexRender,
    getSortedRowModel,
    SortingState,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { faCaretDown, faCaretUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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

    const handleFilter = (day: string) => {
        const allColumns = tableInstance.getAllColumns();
        const filterDay = allColumns.find((e) => e.id === "day");
        if (filterDay) {
            filterDay.setFilterValue(day);
        }
    }

    return (
        <>
            <div className="input-container">
                <input 
                    type="text"
                    onChange={(e) => setFiltering(e.target.value)} 
                    className="table-input"
                />
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            </div>
            {/* <input 
                type="text"
                placeholder="Search for record..."
                onChange={(e) => setFiltering(e.target.value)} 
                className="table-input"
            /> */}
            <select
                onChange={(e) => handleFilter(e.target.value)}>
                <option value="">All Days</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
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
                                    {columnEl.column.getIsSorted() === "asc" && <FontAwesomeIcon className="sort-icon" icon={faCaretDown} />}
                                    {columnEl.column.getIsSorted() === "desc" && <FontAwesomeIcon className="sort-icon" icon={faCaretUp} />}
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