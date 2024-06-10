const HospitalCardType = ({ id, name, description, selected, onChange }: any) => {
    return (
        <div className="relative mb-4">
            <input
                className="peer hidden"
                id={id}
                type="radio"
                name="hospitalType"
                checked={selected}
                onChange={() => onChange(id)}
            />
            <span
                className={`absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 ${selected ? 'bg-green-500' : 'bg-white'} ${selected ? 'peer-checked:border-slate-300' : 'peer-checked:border-gray-900'}`}>
            </span>
            <label
                className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
                htmlFor={id}
            >
                <span className="mb-2 text-lg font-light text-slate-900">{name}</span>
                <p className="text-[12px]">{description}</p>
            </label>
        </div>
    );
};

export default HospitalCardType;
