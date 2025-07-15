"use client";
import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const [currentWord, setCurrentWord] = useState(0);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    });

    return (
        <section className="py-28">
            <div className="container sticky top-24">
                <div className="flex justify-center">
                    <Tag className="mb-4">Introducting Layers</Tag>
                </div>
                <div className="text-center text-4xl md:text-5xl lg:text-6xl font-medium mt-10">
                    <span>Your creative process deserves better.</span>
                    <span className="">
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className={twMerge("transition duration-500 text-white/15",
                                    index < currentWord && "text-white"
                                )}
                            >{`${word} `}</span>
                        ))}
                    </span>
                    <span className="text-lime-400">
                        That's why we build Layers
                    </span>
                </div>
            </div>
            <div className="h-[100vh]" ref={scrollTarget}></div>
        </section>
    );
}
