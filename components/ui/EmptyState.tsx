
import { Button } from "@/components/ui/button";
import { Rabbit } from "lucide-react";
import Link from "next/link";

const EmptyState = ({ title, description, }: any) => (
    <div className="w-2/3 mx-auto flex flex-col items-center justify-center p-6 text-center">
        <Rabbit style={{ strokeWidth: 1 }} className="w-16 h-16 mb-4 text-gray-400" />
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
);

export default EmptyState;
