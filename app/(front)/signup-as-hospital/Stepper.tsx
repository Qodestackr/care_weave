import React from 'react';

export const Step = ({ label, children }) => (
    <div>
        <h3>{label}</h3>
        {children}
    </div>
);

export const Stepper = ({ currentStep, children }) => (
    <div>
        {React.Children.map(children, (child, index) => (
            <div
                className={index === currentStep ? 'block' : 'hidden'}
            >
                {child}
            </div>
        ))}
        <div className="flex justify-center mt-4">
            {React.Children.map(children, (child, index) => (
                <div
                    className={`h-2 w-2 mx-2 rounded-full ${index === currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
            ))}
        </div>
    </div>
);
