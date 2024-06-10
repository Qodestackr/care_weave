import { useEffect, useState } from "react";
import { LabResult } from "./types";
import "./table.css";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { columns } from "./columns";
import { FooterCell } from "./FooterCell";
import useLabResults from "./useLabResults";

export const _Table = () => {
    const { data: originalData, isValidating, addRow, updateRow, deleteRow } = useLabResults();
    const [data, setData] = useState<LabResult[]>([]);
    const [editedRows, setEditedRows] = useState({});
    const [validRows, setValidRows] = useState({});

    useEffect(() => {
        if (isValidating) return;
        setData([...originalData]);
    }, [isValidating]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        meta: {
            editedRows,
            setEditedRows,
            validRows,
            setValidRows,
            revertData: (rowIndex: number) => {
                setData((old) =>
                    old.map((row, index) =>
                        index === rowIndex ? originalData[rowIndex] : row
                    )
                );
            },
            updateData: (rowIndex: number, columnId: string, value: string, isValid: boolean) => {
                setData((old) =>
                    old.map((row, index) => {
                        if (index === rowIndex) {
                            return {
                                ...old[rowIndex],
                                [columnId]: value,
                            };
                        }
                        return row;
                    })
                );
                setValidRows((old: any) => ({
                    ...old,
                    [rowIndex]: { ...old[rowIndex], [columnId]: isValid },
                }));
            },
            addRow: () => {
                const id = Math.floor(Math.random() * 10000);
                const newRow: LabResult = {
                    id,
                    labName: "",
                    testName: "",
                    labDate: "",
                    result: "",
                    specimen: "",
                    flag: "",
                    reference: ""
                };
                // addRow(newRow);
                setData((prevData) => [...prevData, newRow]);
            },
            removeRow: (rowIndex: number) => {
                // deleteRow(data[rowIndex].id); // Pass true to simulate
                // deleteRow(data[rowIndex].id);
                setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
            },
            removeSelectedRows: (selectedRows: number[]) => {
                selectedRows.forEach((rowIndex) => {
                    deleteRow(data[rowIndex].id);
                });
            },
        },
    });

    return (
        <article
            //className="table-container"
            className="z-2000 w-full"
        >
            <table className="z-2000 w-full rounded-md">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="w-full">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={table.getCenterLeafColumns().length} align="right">
                            <FooterCell table={table} />
                        </th>
                    </tr>
                </tfoot>
            </table>

            {/* 
            <pre>{JSON.stringify(data, null, "\t")} pre..</pre>
            */}

        </article>

    );
};