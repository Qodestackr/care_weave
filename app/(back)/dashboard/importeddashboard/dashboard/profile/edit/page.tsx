import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateProfileOne } from "@/imported/components/forms/user-profile-stepper/create-profile";
import Link from "next/link";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile/edit" }];

export default function EditProfile() {
    return (
        <ScrollArea>
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <CreateProfileOne categories={[]} initialData={null} />
            </div>
        </ScrollArea>
    );
}
