import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "@/styles/globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "FlappyGrant Social",
    description: "Socialize with FlappyGrant fans and general users!",
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
                {children}
            </body>
        </html>
    )
}
