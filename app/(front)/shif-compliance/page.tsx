"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--slate-900)",
        "var(--black)",
        "var(--neutral-900)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];
    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                animate={{
                    background: linearGradients[activeCard % linearGradients.length],
                }}
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};


const content = [
    {
        title: "Healthcare Compliance",
        description:
            "At AfyaMed, we prioritize compliance with healthcare regulations such as SHIF and GDPR. Our platform ensures the security and confidentiality of your personal health information. Collaborate securely with your team, clients, and stakeholders while staying compliant with industry standards.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Healthcare Compliance
            </div>
        ),
    },
    {
        title: "Secure Data Handling",
        description:
            "Our platform enables real-time collaboration while maintaining strict data security measures. With features like version control and real-time updates, you can work efficiently without compromising compliance. Rest assured that your data is protected in accordance with SHIF and GDPR requirements.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Secure Data Handling
            </div>
        ),
    },
    {
        title: "GDPR Compliance",
        description:
            "We take GDPR compliance seriously to protect your privacy and ensure transparency in data processing. Our platform adheres to GDPR standards, giving you peace of mind when collaborating and sharing sensitive information. Experience seamless collaboration without sacrificing data protection.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
                GDPR Compliance
            </div>
        ),
    },
    {
        title: "SHIF Regulations",
        description:
            "AfyaMed complies with SHIF regulations to safeguard your healthcare data. Our platform offers secure collaboration tools that meet SHIF requirements, allowing you to collaborate effectively while protecting sensitive information. Trust AfyaMed for seamless, compliant collaboration.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
                SHIF Regulations
            </div>
        ),
    },
];

export default function HealthcareCompliance() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Healthcare Compliance</h1>
            <p className="text-lg text-gray-700">
                At AfyaMed, we take data privacy and protection seriously.
                Our platform is designed to comply with the General Data Protection Regulation
                (GDPR) and Kenyan SHIF policies to ensure the security and confidentiality of our users&apos; personal health
                information. We adhere to strict standards and protocols to safeguard sensitive data
                and maintain compliance with all relevant healthcare regulations.
            </p>

            <div className="my-2">
                <h3 className="text-center font-light text-2xl">
                    How We Comply with Regulations.
                </h3>
                <div className="grid grid-cols-2 gap-2">

                    {
                        content?.map((item, index) => (
                            <Card key={index} className="my-4 p-3">
                                <h2 className="text-2xl font-semibold">{item.title}</h2>
                                <p className="text-gray-600">{item.description}</p>
                                {item.content}
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
