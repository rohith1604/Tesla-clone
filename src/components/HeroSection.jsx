// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ id, title, subtitle, backgroundImage, buttons }) => {
    return (
        <section 
            id={id}
            className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="text-center font-serif">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">{title}</h1>
                <p className="text-lg md:text-2xl mb-96">
                    {subtitle}
                </p>
            </div>
            <div className="flex gap-4 justify-center font-serif">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`px-6 py-2 rounded-full ${button.style}`}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
