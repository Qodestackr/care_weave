import { MouseEvent } from "react";
import { PenLine, Save, } from 'lucide-react';
import { Input } from "@/components/ui/input";

export const EditCell = ({ row, table }: any) => {
    const meta = table.options.meta;
    const validRow = meta?.validRows[row.id];
    const disableSubmit = validRow ? Object.values(validRow)?.some(item => !item) : false;
    const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
        const elName = e.currentTarget.name;
        meta?.setEditedRows((old: Record<string, boolean>) => ({
            ...old,
            [row.id]: !old[row.id],
        }));
        if (elName !== "edit") {
            if (elName === "cancel") {
                meta?.revertData?.(row.index);
            } else {
                meta?.updateRow?.(row.index);
            }
        }
    };
    // const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
    //     const elName = e.currentTarget.name;
    //     meta?.setEditedRows((old: []) => ({
    //         ...old,
    //         [row.id]: !old[row.id],
    //     }));
    //     if (elName !== "edit") {
    //         e.currentTarget.name === "cancel" ? meta?.revertData(row.index) : meta?.updateRow(row.index);
    //     }
    // };

    const removeRow = () => {
        // alert('remove row?')
        meta?.removeRow(row.index);
    };

    return (
        <div
            // className="edit-cell-container"
            className="flex gap-1 items-center w-full"
        >
            {meta?.editedRows[row.id] ? (
                <div className="edit-cell-action">
                    <button onClick={setEditedRows} name="cancel">
                        {/* ⚊ */}
                        <Save />
                    </button>{" "}
                    <button onClick={setEditedRows} name="done" disabled={disableSubmit}>
                        ✔
                    </button>
                </div>
            ) : (
                <div
                    //className="edit-cell-action"
                    className="flex gap-2 items-center"
                >
                    <button onClick={setEditedRows}
                    //name="edit"
                    >
                        {/* ✐ */}
                        <PenLine className="text-blue-500 text-sm font-thin" />
                    </button>
                    <button onClick={removeRow} name="remove">
                        {/* <CircleX className="text-red-500" /> */}
                        X
                    </button>
                </div>
            )}

            <Input
                type="checkbox"
                className="mx-2"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
            />
        </div>
    );
};