'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const ClinicalNotesForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission (e.g., send data to an API)
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Doctor's Clinical Notes</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Clinical Notes</label>
                    <textarea
                        id="notes"
                        {...register('notes', { required: 'Clinical notes are required' })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.notes && <p className="text-red-500 text-xs mt-1">{errors.notes.message}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
            </form>
        </div>
    );
};

export default ClinicalNotesForm;
