import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { ImageWithFallback } from '@/public/figma/ImageWithFallback';
const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Mine-Log',
    description: '하루 일과를 관리해주는 간편 대시보드',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-900">
                    <div className="fixed inset-0 z-0">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1765371515218-0a4c992ba8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdGl2ZSUyMHdvcmtzcGFjZSUyMG9mZmljZSUyMHNldHVwfGVufDF8fHx8MTc3MDM2NDAzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Workspace Background"
                            className="w-full h-full object-cover opacity-15 grayscale-[0.2]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/80" />
                    </div>
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
