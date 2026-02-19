'use client';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Sunrise, Sun, Coffee, Moon } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
export default function LiveInfo() {
    const [time, setTime] = useState(new Date());
    const greeting =
        time.getHours() < 6
            ? '부지런하시네요!'
            : time.getHours() < 12
              ? '좋은 아침이에요!'
              : time.getHours() < 18
                ? '오후도 화이팅!'
                : '편안함 밤 되세요.';

    useEffect(() => {
        // 1초 간격으로 시간 갱신
        const timer = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timer);
    }, []);

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
                    {time.getHours() < 6 ? (
                        <Sunrise size={20} className="text-amber-500" />
                    ) : time.getHours() < 12 ? (
                        <Sun size={20} className="text-yellow-500" />
                    ) : time.getHours() < 18 ? (
                        <Coffee size={20} className="text-orange-500" />
                    ) : (
                        <Moon size={20} className="text-indigo-400" />
                    )}
                    <span className="font-bold">{greeting}</span>
                </div>
            </div>
        </div>
    );
}
