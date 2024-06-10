"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Patient } from "@/constants/data";
import { Edit, MoreHorizontal, Trash, View } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UpdateDialog } from './UpdateFields';
import { AlertModal } from "../../modal/alert-modal";

interface CellActionProps {
  data: Patient;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => { };

  const handleUpdate = (updatedData: any) => {

    console.log("Updated Data:", updatedData);

  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />

      <UpdateDialog data={undefined} onUpdate={function (updatedData: any): void {
        throw new Error("Function not implemented.");
      }} />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          {/*  */}
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => { }}
          >
            <View /> View
          </DropdownMenuItem>
          {/*  */}

          <DropdownMenuItem
            className="cursor-pointer"
            //  onClick={()=>{}}
            onClick={() => router.push(`/dashboard/user/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => { setOpen(true) }}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu >
    </>
  );
};
