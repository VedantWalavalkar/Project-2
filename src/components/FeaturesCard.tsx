import React from "react";
import { twMerge } from "tailwind-merge";

const FeatureCard = (props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    const { title, description, children, className } = props;
    return (
        <div className={twMerge("p-6 bg-neutral-900 border border-white/10 rounded-3xl", className)}>
            <div className="aspect-video flex justify-center items-center">{children}</div>
            <div>
                <h3 className="text-3xl mt-4">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
