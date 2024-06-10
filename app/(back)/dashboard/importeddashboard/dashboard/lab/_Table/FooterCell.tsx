import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export const FooterCell = ({ table }: any) => {
    const meta = table.options.meta;
    const selectedRows = table.getSelectedRowModel().rows;

    // const removeRows = () => {
    //     meta.removeSelectedRows(
    //         table.getSelectedRowModel().rows.map((row: any) => row.index)
    //     );
    //     table.resetRowSelection();
    // };

    const removeRows = () => {
        meta.removeSelectedRows(
            selectedRows.map((row: any) => row.index)
        );
        table.resetRowSelection();
    };

    return (
        <div className="footer-buttons">
            {selectedRows.length > 0 ? (
                <button className="remove-button" onClick={removeRows}>
                    <Trash />
                </button>
            ) : null}
            <Button
                variant={'outline'}
                // className="add-button"
                className="bg-blue-500 hover:bg-slate-900 hover:text-white text-slate-600 cursor-pointer flex gap-2 justify-between items-center" onClick={meta?.addRow}>
                + <span className="font-light text-xl">Add Test Result</span>
            </Button>
        </div>
    );
};