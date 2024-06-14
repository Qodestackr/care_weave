import React from 'react';

const AfyaTelemedLogo = () => {
    return (
        <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" className="h-8 w-8">
                <rect width="32" height="32" x="1" y="1" stroke="#4376C4" strokeWidth="2" rx="16" />
                <path fill="#4376C4" d="M24.22 9.78H21.1v14.44h3.12V9.78Z" />
                <path fill="#4376C4" d="M21.1 15.44h-5.66V9.78h-3.12v5.66H6.66v3.12h5.66v5.66h3.12v-5.66h5.66v-3.12Z" opacity=".8" />
            </svg>
            <span className="text-xl font-semibold text-[#4376C4]">AfyaTelemed</span>
        </div>
    );
};

export default AfyaTelemedLogo;
