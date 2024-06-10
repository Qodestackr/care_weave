"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Modal } from "../ui/modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Delete Confirmation"
      description="Are you sure you want to delete this item? This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-wrap items-center text-center">
        <Trash className="h-6 w-6 text-red-600 mb-4" />
        <p className="mb-4 text-sm text-gray-900">
          Deleting this item will permanently remove it from our records.
        </p>
      </div>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          {loading ? "Processing..." : "Delete"}
        </Button>
      </div>
    </Modal>
  );
};
