import { Show, SignInButton, UserButton } from "@clerk/nextjs"

export default function Home() {
    return (
        <>
            <Show when="signed-in">
                <UserButton />
            </Show>
            <Show when="signed-out">
                <SignInButton />
            </Show>
        </>
    )
}
