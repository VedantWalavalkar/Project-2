import React, { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: { children: ReactNode; className?: string, otherProps?: HTMLAttributes<HTMLDivElement> }) => {
    const { children, className, otherProps } = props;
    return <div className={twMerge("size-12 bg-gray-300 rounded-lg flex justify-center items-center text-neutral-950  group-hover:outline group-hover:outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-2 group-hover:gap-5 transition-all duration-500", className)} {...otherProps}>{children}</div>;
};

export default Key;
