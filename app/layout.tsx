import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import { ImageWithFallback } from '@/public/figma/ImageWithFallback';

export const metadata: Metadata = {
    title: {
        default: 'Mine-Log',
        template: '%s | mine-log', // 다른 페이지에서 제목을 설정할 때 뒤에 붙는 이름
    },
    description: '로그인 없이 브라우저에서 바로 시작하는 나만의 기록장.',
    keywords: ['데일리 대시보드', '투두리스트', '온라인 메모장'],
    openGraph: {
        title: 'mine-log | 나를 위한 데일리 대시보드',
        description: '가입 없이 바로 사용하는 데일리 대시보드',
        url: 'https://mine-log.vercel.app/',
        siteName: 'Mine-Log',
        locale: 'ko_KR',
        type: 'website',
    },
    icons: {
        icon: '/layoutDashboard.svg', //설정한 아이콘 경로
    },
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
