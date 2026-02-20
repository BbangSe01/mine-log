'use client';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Sunrise, Sun, Coffee, Moon, LucideIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import LiveInfo_skeleton from './LiveInfo_skeleton';

const getGreetingConfig = (hour: number): { text: string; Icon: LucideIcon; color: string } => {
    if (hour < 6) return { text: '부지런하시네요!', Icon: Sunrise, color: 'text-amber-500' };
    if (hour < 12) return { text: '좋은 아침이에요!', Icon: Sun, color: 'text-yellow-500' };
    if (hour < 18) return { text: '오후도 화이팅!', Icon: Coffee, color: 'text-orange-500' };
    return { text: '편안한 밤 되세요.', Icon: Moon, color: 'text-indigo-400' };
};
export default function LiveInfo() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        // 1초 간격으로 시간 갱신
        const timer = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timer);
    }, []);

    // 브라우저에서 렌더링 시, 로딩 상태.
    if (!time) {
        return <LiveInfo_skeleton />;
    }

    const { text, Icon, color } = getGreetingConfig(time.getHours());

    return (
        <div className="flex flex-col items-start md:items-end gap-2 bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600 font-bold">
                <Calendar size={18} />
                <span>{format(time, 'yyyy년 MM월 dd일 (eeee)', { locale: ko })}</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-3xl font-black text-slate-800 tabular-nums">
                    <Clock size={24} className="text-blue-500 mt-1" />
                    {format(time, 'HH:mm:ss')}
                </div>
                <div className="h-8 w-[1px] bg-slate-300" />
                <div className="flex items-center gap-2 text-slate-600">
                    <Icon size={20} className={color} />
                    <span className="font-bold">{text}</span>
                </div>
            </div>
        </div>
    );
}
