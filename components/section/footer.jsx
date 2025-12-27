"use client";

import React, { useState } from 'react';
import Icons from '@/components/global/icons';
import { footerLinks, socialLinks } from '@/data/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Footer = () => {

    // const [email, setEmail] = useState < string > ("");

    // const handleSubmit = () => {
    //     e.preventDefault();
    //     console.log('Newsletter:', email);
    //     setEmail('');
    // };

    return (
        <footer className="w-full relative mt-16 lg:mt-24 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-foreground/0 via-foreground/20 to-foreground/0" />
            <div className="absolute top-0 inset-x-0 w-1/2 mx-auto h-4 bg-foreground/40 blur-[4rem]" />

            <div className="py-12 w-full mx-auto max-w-7xl px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block">
                            <Icons.wordmark className="h-5 w-auto text-foreground" />
                        </Link>
                        <p className="text-sm text-muted-foreground mt-4 max-w-xs">
                            Simple workspace for teams
                        </p>
                    </div>

                    <div className="lg:col-span-2" />

                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 lg:place-items-end gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mt-0">
                                Product
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {footerLinks.product.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-foreground mt-0">
                                Resources
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-foreground mt-0">
                                Company
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-foreground/5">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Avento. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <Image
                                    src={`/${social.icon}.svg`}
                                    alt={social.label}
                                    width={20}
                                    height={20}
                                    className={cn(
                                        "size-5 grayscale",
                                        social.icon === "x" && "size-4",
                                    )}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;