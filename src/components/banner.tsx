import React from 'react';

interface TenBanner {
    text: string;
}

const Banner: React.FC<TenBanner> = ({ text }) => {
    return (
        <div className="relative w-full h-96 overflow-hidden flex items-center justify-center">
            <img src={require('../img/BANNER-01-compressed(1).jpg')} className="overflow-hidden absolute -bottom-40 w-full opacity-80" alt="Banner" />
            <h2 className="absolute text-center text-2xl text-white">{text}</h2>
        </div>
    );
};

export default Banner;
