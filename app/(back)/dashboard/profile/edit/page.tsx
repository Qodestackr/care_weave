import { CreateProfileOne } from "@/imported/components/forms/user-profile-stepper/create-profile";

export default function EditProfile() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <CreateProfileOne categories={[]} initialData={null} />
        </div>
    );
}
