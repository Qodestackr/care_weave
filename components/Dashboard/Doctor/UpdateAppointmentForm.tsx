"use client";
import TextInput from '@/components/FormInputs/TextInput';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';


export type AppointmentUpdateProps = {
    status: boolean;
    meetingLink: string;
    // meetingProvider: string
}


export default function UpdateAppointmentForm() {
    const [loading, setLoading] = React.useState(false);

    // meeting link , meeting provider, status of the appt.

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AppointmentUpdateProps>()

    const handleUpdate = async () => {
        try {
            // Update Appt
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="bg-slate-100 border shadow rounded-md p-4 mt-4">
            <div className="sm:col-span-4">
                <div className="flex items-center justify-between border-b">
                    <h2 className="scroll-m-20 text-sm md:text-xl font-light tracking-tight py-2 mb-3">
                        Update Appointment Status Here
                    </h2>
                    <Button disabled={loading} onClick={handleUpdate}>

                        {loading ? "Saving please wait..." : (
                            <p className="flex gap-1">
                                <PenLine className='w-4 h-4' style={{ strokeWidth: 1 }} />
                                <span className='text-sm'>Update</span>
                            </p>
                        )}
                    </Button>
                </div>
                <div className=" mt-2">
                    <TextInput label={'Add Meeting Link'} register={register} name={''} errors={undefined}
                    />
                    {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                            KES.
                        </span>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(+e.target.value)}
                            autoComplete="price"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="100"
                        />
                    </div> */}

                    {/* Create Appointment Link. */}
                    {/* Update the Status of the Appointment. */}
                </div>
            </div>
        </div>
    )
}
