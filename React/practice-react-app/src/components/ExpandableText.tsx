import React, { useState } from "react";

interface Props {
    children: string;
    limit: number;
}

const ExpandableText = ({ children, limit }: Props) => {
    const textAdjusted = children.slice(0, limit);
    const [limited, setLimited] = useState(true);

    const handleClick = () => {
        setLimited(!limited);
    };

    return (
        <>
            {limited ? textAdjusted : children}
            <span
                onClick={handleClick}
                type="button"
                className="btn btn-secondary"
            >
                {limited ? "more" : "less"}
            </span>
        </>
    );
};

export default ExpandableText;
