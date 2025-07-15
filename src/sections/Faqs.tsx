"use client";
import Tag from "@/components/Tag";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number|null>(null);
    const toggleFaq = (index: number) => {
        setSelectedIndex(index);
    };
    return (
        <section>
            <div className="container">
                <div className="flex justify-center items-center">
                    <Tag>FAQs</Tag>
                </div>
                <div className="mt-8">
                    <h1 className="text-center text-6xl font-medium max-w-xl mx-auto">
                        Questions? we have got{" "}
                        <span className="text-lime-400">answers</span>
                    </h1>
                </div>
                <div className="mt-8 grid gap-4 max-w-xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 p-4 rounded-2xl border border-white/10"
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="flex justify-between items-center text-lg">
                                <p>{faq.question}</p>
                                <div className="text-lime-400">
                                    <FaPlus
                                        className={twMerge(
                                            "flex-shrink-0 transition duration-400 cursor-pointer",
                                            selectedIndex === index
                                                ? "rotate-45"
                                                : ""
                                        )}
                                    />
                                </div>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 16,
                                        }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50 text-md">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
