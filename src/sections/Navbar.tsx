"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { IoMenu, IoClose } from "react-icons/io5";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <section className="fixed w-full px-2 top-0 z-50 py-4">
            <div
                className={twMerge(
                    "container py-2 flex flex-col justify-center  border border-white/15 rounded-full bg-neutral-950/70 backdrop-blur-sm",
                    isMenuOpen ? "rounded-3xl" : ""
                )}
            >
                <div className="grid grid-cols-2 lg:grid-cols-3 w-full p-2 px-4 md:px-2 lg:max-w-5xl">
                    <div className="flex items-center">
                        <Image
                            src={logoImage}
                            className="h-9 md:h-auto w-auto"
                            alt="Logo Image"
                        />
                    </div>
                    <div className="hidden lg:flex justify-center items-center">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-white text-sm font-medium px-4 py-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end items-center md:gap-4">
                        {isMenuOpen ? (
                            <IoClose
                                className="text-3xl text-white cursor-pointer md:hidden transition"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <IoMenu
                                className="text-3xl text-white cursor-pointer md:hidden transition"
                                onClick={toggleMenu}
                            />
                        )}
                        <Button variant="secondary" className="hidden md:block">
                            Log In
                        </Button>
                        <Button variant="primary" className="hidden md:block">
                            Sign Up
                        </Button>
                    </div>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                                {navLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        className="font-medium text-lg"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <Button variant="secondary" className="">
                                    Log In
                                </Button>
                                <Button variant="primary" className="">
                                    Sign Up
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
