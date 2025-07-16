"use client";
import Button from "@/components/Button";
import Image from "next/image";
import design1Image from "@/assets/images/design-example-1.png";
import design2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import cursorYou from "@/assets/images/cursor-you.svg";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    // useEffect(() => {
    //     leftDesignAnimate([
    //         [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
    //         [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    //     ]);

    //     leftPointerAnimate([
    //         [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
    //         [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
    //         [
    //             leftPointerScope.current,
    //             { x: 0, y: [0, 20, 0] },
    //             { duration: 0.5 },
    //         ],
    //         [leftPointerScope.current, { scale: 1.1 }, { duration: 0.5 }],
    //         [leftPointerScope.current, { scale: 1 }, { duration: 0.5 }],
    //     ]);

    //     rightDesignAnimate([
    //         [
    //             rightDesignScope.current,
    //             { opacity: 1 },
    //             { duration: 0.5, delay: 0.8 },
    //         ],
    //         [
    //             rightDesignScope.current,
    //             { x: 0, y: 0 },
    //             { duration: 0.5, delay: 0.8 },
    //         ],
    //     ]);

    //     rightPointerAnimate([
    //         [
    //             rightPointerScope.current,
    //             { opacity: 1 },
    //             { duration: 0.5, delay: 0.8 },
    //         ],
    //         [
    //             rightPointerScope.current,
    //             { x: 100, y: 0 },
    //             { duration: 0.5, delay: 0.8 },
    //         ],
    //         [
    //             rightPointerScope.current,
    //             { x: 0, y: [0, 20, 0] },
    //             { duration: 0.5, delay: 0.2 },
    //         ],
    //         [
    //             rightPointerScope.current,
    //             { scale: 1.1 },
    //             { duration: 0.5, delay: 0.8 },
    //         ],
    //         [
    //             rightPointerScope.current,
    //             { scale: 1 },
    //             { duration: 0.5, delay: 0.8 },
    //         ],
    //     ]);
    // }, []);

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
            [leftPointerScope.current, { scale: 1.1 }, { duration: 0.5 }],
            [leftPointerScope.current, { scale: 1 }, { duration: 0.5 }],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 0.8 },
            ],
            [
                rightDesignScope.current,
                { x: 0, y: 0 },
                { duration: 0.5, delay: 0.8 },
            ],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 0.8 },
            ],
            [
                rightPointerScope.current,
                { x: 100, y: 0 },
                { duration: 0.5, delay: 0.8 },
            ],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5, delay: 0.2 },
            ],
            [
                rightPointerScope.current,
                { scale: 1.1 },
                { duration: 0.5, delay: 0.8 },
            ],
            [
                rightPointerScope.current,
                { scale: 1 },
                { duration: 0.5, delay: 0.8 },
            ],
        ]);
    }, [
        leftDesignScope,
        leftDesignAnimate,
        leftPointerScope,
        leftPointerAnimate,
        rightDesignScope,
        rightDesignAnimate,
        rightPointerScope,
        rightPointerAnimate,
    ]);

    return (
        <section
            className="my-28 lg:my-30 overflow-x-clip flex-1"
            style={{ cursor: `url(${cursorYou}), auto` }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, x: -100, y: 100, scale: 0.8 }}
                    className="absolute -left-40 -bottom-40 hidden lg:block"
                >
                    <Image src={design1Image} alt="Design 1" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 200 }}
                    className="absolute -right-80 -bottom-34 hidden lg:block"
                >
                    <Image src={design2Image} alt="Design 2" />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, x: -200, y: 100 }}
                    className="absolute left-48 top-[26rem] hidden lg:block"
                >
                    <Pointer name="Nikhil" />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 300, y: 100 }}
                    className="absolute right-48 top-44 hidden lg:block"
                >
                    <Pointer name="Saisha" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <p className="py-1 px-3 rounded-full text-neutral-950 bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                        ✨ $7.5M seeds round raised
                    </p>
                </div>
                <div className="mt-5">
                    <h1 className="text-6xl md:text-7xl font-medium text-white text-center">
                        Impactful design, created effortlessly
                    </h1>
                </div>
                <div className="mt-6 flex justify-center text-center text-xl text-white/50 max-w-2xl lg:max-w-4xl mx-auto">
                    <p>
                        Design tools shouldn&apos;t slow you down. Layers combines
                        powerful features with an intuitive interface that keeps
                        you in your creative flow.
                    </p>
                </div>
                <form className="flex border border-white/15 p-2 rounded-full mt-8 lg:max-w-3xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-grow min-w-0"
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        size="sm"
                        className="whitespace-nowrap ml-2"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
