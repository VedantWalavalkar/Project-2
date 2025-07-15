import Tag from "@/components/Tag";
import Image from "next/image";

import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";

import IntegerationColumn from "@/components/IntegrationColumn";

export type IntegrationType = typeof integrations;

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <Tag>Integrations</Tag>
                        <div>
                            <h1 className="text-6xl font-medium text-white">
                                Plays well with{" "}
                                <span className="text-lime-400">others</span>
                            </h1>
                            <p className="text-lg text-white/50 mt-4">
                                Layers seamlessly connects with your favorite
                                tools, making it easy to plug into any workflow
                                and collaborate across platforms
                            </p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="h-[400px] lg:h-[800px ] mt-6 overflow-hidden 
  [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
  [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] grid md:grid-cols-2 gap-4"
                        >
                            <IntegerationColumn integerations={integrations} />
                            <IntegerationColumn
                                integerations={integrations.slice().reverse()}
                                className="hiddedn md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
