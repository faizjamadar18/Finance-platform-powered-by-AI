"use client";

import { SignUp } from "@clerk/nextjs";


export default function SignInPage() {


    return (
        <div className="mt-24">

            <div className="w-full max-w-sm">
                <SignUp />
            </div>
        </div>
    );
}
