import FeatureCard from "@/components/FeaturesCard";
import Tag from "@/components/Tag";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section>
            <div className="">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <div className="mt-10 text-center text-7xl lg:text-9xl mx-auto text-white">
                    <h2>
                        Where power meets{" "}
                        <span className="text-lime-400">simplicity.</span>
                    </h2>
                </div>
                <div className="p-5 mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
                    <FeatureCard
                        className="md:col-span-2 lg:col-span-1 lg:h-min group"
                        title="Real-time collaboration"
                        description="Work together seamlessly with conflict-free team
                            editing"
                    >
                        <div className=" aspect-video flex justify-center items-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-purple-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-400 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-400 transition-all z-10">
                                <div className="relative size-full bg-neutral-700 rounded-full gap-1 flex justify-center items-center">
                                    <Image src={avatar4} alt="owen bhai" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                                    {Array.from({ length: 3 }).map(
                                        (_, index) => (
                                            <div
                                                key={index}
                                                className="size-1.5 bg-white rounded-full inline-flex"
                                            ></div>
                                        )
                                    )}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        className="md:col-span-2 lg:col-span-1 group"
                        title="Interactive Prototyping"
                        description="Work together seamlessly with conflict-free team
                            editing"
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <p className="text-4xl font-extrabold text-center text-white/20">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 group-hover:bg-gradient-to-l group-hover:from-yellow-400 group-hover:to-green-400 transition duration-1000 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 group"
                        title="Keyboard Quick Actions"
                        description="Work together seamlessly with conflict-free team
                            editing"
                    >
                        <div className="aspect-video inline-flex gap-4 justify-center items-center">
                            <Key className="w-28">Shift</Key>
                            <Key className="delay-150">Ctrl</Key>
                            <Key className="delay-300">Alt</Key>
                        </div>
                    </FeatureCard>
                    <div className="mt-8 flex flex-wrap gap-3 justify-center itemsc md:col-span-4 lg:col-span-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="px-3 bg-neutral-900 p-1 rounded-xl border border-white/10 inline-flex gap-2 items-center group hover:scale-105 transition"
                            >
                                <span className="bg-lime-400 rounded-full size-5 flex items-center justify-center text-black group-hover:rotate-45 transition">
                                    &#10038;
                                </span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
