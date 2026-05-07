import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "@/styles/globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "FlappyGrant Social",
    description: "Doomscroll through user-uploaded GIFs!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${roboto.variable} antialiased`}
        >
            <body>
                <ClerkProvider>
                    {children}
                </ClerkProvider>
            </body>
        </html>
    )
}
