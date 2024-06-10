import { createUser } from '@/actions/users';
import { RegisterInputProps } from '@/types/types';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LabAccountDetails() {
    const router = useRouter();

    async function onSubmit(data: RegisterInputProps) {

        console.log(data, ".................");
        // setIsLoading(true);

        data.role = "LAB";
        data.plan = "free";
        try {
            const user = await createUser(data);
            if (user && user.status === 200) {
                console.log("User Created successfully");
                // reset();
                // setIsLoading(false);
                // toast.success("User Created successfully");
                router.push(`/verify-account/${user.data?.id}`);
                console.log(user.data);
            } else {
                console.log(user.error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>LabAccountDetails</div>
    )
}
