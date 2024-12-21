import { AbsoluteIcon } from "hugeicons-react";

const NotFound = () => {
    return (
        <>
            <main className="flex w-full h-screen items-center justify-center gap-2">
                <h1 className="text-2xl text-[#1a1a32]"> No encontrado </h1>
                <AbsoluteIcon width={30} height={30} color="#1a1a32" />
            </main>
        </>
    )
};

export default NotFound;