"use client";
import React, { Fragment } from "react";
import { type IntegrationType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { reverse } from "dns";

const IntegrationColumn = (props: {
    integerations: IntegrationType;
    className?: string;
    reverse?: boolean
}) => {
    const { integerations, className, reverse } = props;
    return (
        <div>
            <motion.div
                initial={{y: reverse ? "-50%" : 0}}
                animate={{ y: reverse ? 0 : "-50%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className={twMerge("flex flex-col gap-4 pb-4", className)}
            >
                {Array.from({ length: 2 }).map((_, i) => (
                    <Fragment key={i}>
                        {integerations.map((intergration) => (
                            <div
                                key={intergration.name}
                                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                            >
                                <div className="flex justify-center">
                                    <Image
                                        src={intergration.icon}
                                        alt={`${intergration.name} icon`}
                                        className="size-28"
                                    />
                                </div>
                                <h3 className="text-2xl text-center mt-3 text-white font-medium">
                                    {intergration.name}
                                </h3>
                                <p className="text-md text-center text-white/50">
                                    {intergration.description}
                                </p>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default IntegrationColumn;
