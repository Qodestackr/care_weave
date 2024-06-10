'use client';
import React from 'react';
import { InlineCode } from '../ui/inline-code';
import MultipleSelector, { Option } from '../ui/multiple-selector';
import { initialAllergyData } from '@/actions/allergies';

///////// https://shadcnui-expansions.typeart.cc/docs/multiple-selector
const OPTIONS: Option[] = [
    // Food Allergies
    { label: 'Peanuts', value: 'peanuts', group: 'Food Allergies' },
    { label: 'Shellfish', value: 'shellfish', group: 'Food Allergies' },
    { label: 'Milk', value: 'milk', group: 'Food Allergies' },
    { label: 'Eggs', value: 'eggs', group: 'Food Allergies' },
    { label: 'Wheat', value: 'wheat', group: 'Food Allergies' },
    { label: 'Soy', value: 'soy', group: 'Food Allergies' },
    { label: 'Tree Nuts', value: 'tree-nuts', group: 'Food Allergies' },
    { label: 'Fish', value: 'fish', group: 'Food Allergies' },
    { label: 'Sesame Seeds', value: 'sesame-seeds', group: 'Food Allergies' },
    { label: 'Mustard', value: 'mustard', group: 'Food Allergies' },
    { label: 'Corn', value: 'corn', group: 'Food Allergies' },
    { label: 'Gluten', value: 'gluten', group: 'Food Allergies' },
    { label: 'Lupin', value: 'lupin', group: 'Food Allergies' },
    { label: 'Sulfites', value: 'sulfites', group: 'Food Allergies' },
    // Environmental Allergies
    { label: 'Pollen', value: 'pollen', group: 'Environmental Allergies' },
    { label: 'Dust Mites', value: 'dust-mites', group: 'Environmental Allergies' },
    { label: 'Mold', value: 'mold', group: 'Environmental Allergies' },
    { label: 'Pet Dander', value: 'pet-dander', group: 'Environmental Allergies' },
    { label: 'Grass', value: 'grass', group: 'Environmental Allergies' },
    { label: 'Weeds', value: 'weeds', group: 'Environmental Allergies' },
    { label: 'Tree Pollen', value: 'tree-pollen', group: 'Environmental Allergies' },
    { label: 'Cockroach', value: 'cockroach', group: 'Environmental Allergies' },
    { label: 'Air Pollution', value: 'air-pollution', group: 'Environmental Allergies' },
    // Medication Allergies
    { label: 'Penicillin', value: 'penicillin', group: 'Medication Allergies' },
    { label: 'Sulfa Drugs', value: 'sulfa-drugs', group: 'Medication Allergies' },
    { label: 'Aspirin', value: 'aspirin', group: 'Medication Allergies' },
    { label: 'Ibuprofen', value: 'ibuprofen', group: 'Medication Allergies' },
    { label: 'Naproxen', value: 'naproxen', group: 'Medication Allergies' },
    { label: 'Antibiotics', value: 'antibiotics', group: 'Medication Allergies' },
    { label: 'Local Anesthetics', value: 'local-anesthetics', group: 'Medication Allergies' },
    // Insect Allergies
    { label: 'Bee Stings', value: 'bee-stings', group: 'Insect Allergies' },
    { label: 'Wasp Stings', value: 'wasp-stings', group: 'Insect Allergies' },
    { label: 'Hornet Stings', value: 'hornet-stings', group: 'Insect Allergies' },
    { label: 'Fire Ants', value: 'fire-ants', group: 'Insect Allergies' },
    { label: 'Mosquito Bites', value: 'mosquito-bites', group: 'Insect Allergies' },
    { label: 'Tick Bites', value: 'tick-bites', group: 'Insect Allergies' },
    // Other Allergies
    { label: 'Latex', value: 'latex', group: 'Other Allergies' },
    { label: 'Metals (Nickel)', value: 'nickel', group: 'Other Allergies' },
    { label: 'Cosmetics', value: 'cosmetics', group: 'Other Allergies' },
    { label: 'Fragrances', value: 'fragrances', group: 'Other Allergies' },
    { label: 'Sunscreen', value: 'sunscreen', group: 'Other Allergies' },
    { label: 'Inhalants', value: 'inhalants', group: 'Other Allergies' },
    { label: 'Plants', value: 'plants', group: 'Other Allergies' },
    { label: 'Cold Weather', value: 'cold-weather', group: 'Other Allergies' },
    { label: 'Heat', value: 'heat', group: 'Other Allergies' },
    { label: 'Exercise', value: 'exercise', group: 'Other Allergies' },
];

const mockSearch = async (value: string): Promise<Option[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = OPTIONS.filter((option) => option.value.includes(value));
            resolve(res);
        }, 10);
    });
};

// const MultipleSelectorWithAsyncSearchAndCreatableAndGroup = () => {
const AllergiesMultiSelect = () => {
    const [isTriggered, setIsTriggered] = React.useState(false);
    // initialAllergyData <= Action

    const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

    const handleSelect = (options: Option[]) => {
        setSelectedOptions(options);
        console.log("Selected options:", options);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        // Extract labels from selected options and add them to form data
        const selectedLabels = selectedOptions.map(option => option.label);
        formData.append("allergyname", JSON.stringify(selectedLabels));

        console.log("Form data:", Object.fromEntries(formData.entries()));
    };

    return (
        <form
            action={initialAllergyData}
            //onSubmit={handleSubmit} 
            className="flex w-full flex-col gap-5 px-10">

            {/* <p>
                Is request been triggered? <InlineCode>{String(isTriggered)}</InlineCode>
            </p> */}

            <MultipleSelector
                name="allergyname"
                onSearch={async (value) => {
                    setIsTriggered(true);
                    const res = await mockSearch(value);
                    setIsTriggered(false);
                    return res;
                }}
                defaultOptions={[]}
                creatable
                groupBy="group"
                onChange={handleSelect}
                placeholder="start typing to get more options..."
                loadingIndicator={
                    <p className="py-2 text-center text-lg leading-10 text-muted-foreground">loading...</p>
                }
                emptyIndicator={
                    <p className="w-full text-center text-lg leading-10 text-muted-foreground">
                        no results found.
                    </p>
                }
            />

            <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Submit</button>

        </form>
    );
};

export default AllergiesMultiSelect;
