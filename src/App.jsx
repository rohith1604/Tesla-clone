// src/App.jsx
import React from 'react';
import HeroSection from './components/Herosection';
import Header from './components/Header';

const App = () => {
    return (
        <div className="scroll-smooth">
          <Header/>
            {/* Hero section for Model Y */}
            <HeroSection 
                id="model-y-section"
                title="Model Y"
                subtitle="1.99% APR Financing From $31,490"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-US-v2.png"
                buttons={[
                    { label: 'Order Now', style: 'bg-gray-800 text-white' },
                    { label: 'Demo Drive', style: 'bg-white text-black' }
                ]}
            />

            {/* Hero section for Model 3 */}
            <HeroSection 
                id="model-3-section"
                title="Model 3"
                subtitle="1.99% APR Financing From $34,990"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png"
                buttons={[
                    { label: 'Order Now', style: 'bg-gray-800 text-white' },
                    { label: 'Demo Drive', style: 'bg-white text-black' }
                ]}
            />
            <HeroSection 
                id="model-X-section"
                title="Model X"
                subtitle="From $65,990"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-US.png"
                buttons={[
                    { label: 'Order Now', style: 'bg-gray-800 text-white' },
                    { label: 'Demo Drive', style: 'bg-white text-black' }
                ]}
            />
             <HeroSection 
                id="model-S-section"
                title="Model S"
                subtitle="From $68,490"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-US.png"
                buttons={[
                    { label: 'Order Now', style: 'bg-gray-800 text-white' },
                    { label: 'Demo Drive', style: 'bg-white text-black' }
                ]}
            />
            <HeroSection 
                id="cybertruck-section"
                title="CyberTruck"
                subtitle="Foundation Series"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop-v3.png"
                buttons={[
                    { label: 'Order Now', style: 'bg-zinc-700 text-white' },
                    { label: 'Demo Drive', style: 'bg-white text-black' }
                ]}
            />
            <HeroSection 
                id="Solar-Panels-section"
                title="Solar Panel"
                subtitle="Schedule a Virtual Consultation"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop"
                buttons={[
                    { label: 'Order Now', style: 'bg-zinc-700 text-white' },
                    { label: 'Learn More', style: 'bg-white text-black' }
                ]}
            />
            <HeroSection 
                id="Solar-Roofs-section"
                title="Solar Roofs"
                subtitle="Produce Clean Energy From Your Roof"
                backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png"
                buttons={[
                    { label: 'Order Now', style: 'bg-zinc-700 text-white' },
                    { label: 'Learn More', style: 'bg-white text-black' }
                ]}
            />
        </div>
    );
};

export default App;
