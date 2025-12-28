import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "Difference",
        href: Routes.Difference,
    },
    {
        label: "Workflow",
        href: Routes.Workflow,
    },
    {
        label: "Capabilities",
        href: Routes.Capabilities,
    },
    {
        label: "Integrations",
        href: Routes.Integrations,
    },
    {
        label: "Membership",
        href: Routes.Membership,
    },
] ;

export const footerLinks = {
    product: [
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Changelog", href: "#" }
    ],
    resources: [
        { label: "Docs", href: "#" },
        { label: "API", href: "#" },
        { label: "Support", href: "#" },
        { label: "Status", href: "#" }
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" }
    ]
};

export const socialLinks = [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    // { label: "Cursor", href: "https://cursor.com", icon: "cursor" }
];