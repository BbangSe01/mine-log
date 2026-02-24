import MemoSection from '@/components/MemoSection';
import TodoSection from '@/components/TodoSection';
import NewsSection from '@/components/NewsSection';
import TimerSection from '@/components/TimerSection';
import FortuneSection from '@/components/FortuneSection';

export default function Home() {
    return (
        <div className="space-y-6">
            {/* Row 1: Todo & Memo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 h-[450px]">
                    <TodoSection />
                </div>
                <div className="h-[450px]">
                    <MemoSection />
                </div>
            </div>

            {/* Row 2: News, Timer, Horoscope */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="h-[400px]">
                    <NewsSection />
                </div>
                <div className="h-[400px]">
                    <TimerSection />
                </div>
                <div className="h-[400px]">
                    <FortuneSection />
                </div>
            </div>
        </div>
    );
}
