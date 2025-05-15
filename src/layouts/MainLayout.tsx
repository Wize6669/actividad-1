import type { ReactNode } from 'react';
import Header from "../components/ui/Header.tsx";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return <>
        <Header/>
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"}>
            {children}
        </div>
    </>
}