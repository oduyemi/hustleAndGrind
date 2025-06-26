import React from "react";
import Image from "next/image";

export const Header: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <Image 
                src="/images/logo/white.png"
                alt="site logo"
                width={150} 
                height={50} 
            />
        </div>
    );
};
