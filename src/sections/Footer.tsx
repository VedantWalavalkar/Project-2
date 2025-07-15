import Image from "next/image";
import logo from "@/assets/images/logo.svg";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                    <div className="flex justify-center">
                        <Image src={logo} alt="Logo image" />
                    </div>
                    <div className="">
                        <nav className="flex gap-4">
                            {footerLinks.map((link) => (
                                <a href={link.href} className="text-white/50">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
