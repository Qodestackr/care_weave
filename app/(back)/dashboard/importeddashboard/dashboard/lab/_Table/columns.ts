import { createColumnHelper } from "@tanstack/react-table";
import { TableCell } from "./TableCell";
import { EditCell } from "./EditCell";
import { LabResult } from "./types";

const columnHelper = createColumnHelper<LabResult>();

export const columns = [
  columnHelper.accessor("labName", {
    header: "Lab",
    cell: TableCell,
    // meta: {
    //   type: "number",
    // },
  }),
  columnHelper.accessor("testName", {
    header: "Test Name",
    cell: TableCell,
    meta: {
      type: "text",
      required: true,
      pattern: "^[a-zA-Z ]+$",
    },
  }),
  columnHelper.accessor("labDate", {
    header: "Date",
    cell: TableCell,
    meta: {
      type: "date",
      required: true,
      validate: (value: string) => {
        const date = new Date(value);
        const today = new Date();
        return date <= today;
      },
      validationMessage: "Date cannot be in the future",
    },
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: TableCell,
    meta: {
      type: "text",
      required: true,
      validationMessage: "Enter this field",
    },
  }), //
  columnHelper.accessor("specimen", {
    header: "Specimen",
    cell: TableCell,
    // meta: {
    //   type: "select",
    //   options: [
    //     { value: "", label: "Select" },
    //     { value: "Computer Science", label: "Computer Science" },
    //     { value: "Communications", label: "Communications" },
    //     { value: "Business", label: "Business" },
    //     { value: "Psychology", label: "Psychology" },
    //   ],
    //   required: true,
    // },
  }),
  columnHelper.accessor("flag", {
    header: "Flag",
    cell: TableCell,
    meta: {
      type: "text",
      required: true,
    },
  }), //
  columnHelper.accessor("reference", {
    header: "Reference Range",
    cell: TableCell,
    meta: {
      type: "text",
      required: true,
    },
  }), //

  columnHelper.display({
    id: "edit",
    cell: EditCell,
  }),
];
