import React, { ReactNode, useState } from "react";

interface ClickDetail {
    description: string;
    details: ReactNode;
}

const Click: React.FC<ClickDetail> = ({ description, details }) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };

    return (
        <div>
            <div onClick={toggleDetails} className="flex justify-center items-center mx-auto text-2xl font-mono leading-tight cursor-pointer">
                {description}
            </div>
            {isDetailsVisible && <div>{details}</div>}
        </div>
    );
};

export default Click;
