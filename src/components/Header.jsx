import React, { useState } from 'react';

const Header = () => {
    const [isVehiclesDropdownOpen, setVehiclesDropdownOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-5 absolute w-full top-0 z-10 capitalize font-serif">
            <div className="text-white font-semibold text-2xl">TESLA</div>
            <nav className="flex gap-4 text-white text-sm font-semibold relative">
                <div
                    className="relative"
                    onMouseEnter={() => setVehiclesDropdownOpen(true)}
                    onMouseLeave={() => setVehiclesDropdownOpen(false)}
                >
                    <a href="#" className="hover:text-gray-400">Vehicles</a>
                    {isVehiclesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 p-4 bg-white shadow-lg rounded-lg grid grid-cols-4 gap-6 transition duration-300 ease-in-out transform">
                            <div className="flex flex-col items-center">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="Model S" className="h-20"/>
                                <span className="text-gray-800 font-semibold">Model S</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png" alt="Model 3" className="h-20"/>
                                <span className="text-gray-800 font-semibold">Model 3</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="Model X" className="h-20"/>
                                <span className="text-gray-800 font-semibold">Model X</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="Model Y" className="h-20"/>
                                <span className="text-gray-800 font-semibold">Model Y</span>
                            </div>
                            {/* Add more models as needed */}
                        </div>
                    )}
                </div>
                <a href="#" className="hover:text-gray-400">Energy</a>
                <a href="#" className="hover:text-gray-400">Charging</a>
                <a href="#" className="hover:text-gray-400">Discover</a>
                <a href="#" className="hover:text-gray-400">Shop</a>
            </nav>
            <div className="flex gap-5">
                <a href="#" className="text-white">?</a>
                <a href="#" className="text-white">🌐</a>
                <a href="#" className="text-white">👤</a>
            </div>
        </header>
    );
};

export default Header;
