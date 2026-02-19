'use client';
import { useState, useEffect } from "react";
import { Calendar, Clock, Cloud } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
export default function LiveInfo () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // 1초 간격으로 시간 갱신
        const timer = setInterval(()=> setTime(new Date()), 1000);

        return () => clearInterval(timer);
    },[]);

    return (<div className="flex flex-col items-start md:items-end gap-2 bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-white/60 shadow-sm">
        <div className="flex items-center gap-2 text-slate-600 font-bold">
              <Calendar size={18} />
              <span>{format(time, 'yyyy년 MM월 dd일 (eeee)', { locale: ko })}</span>
        </div>
        <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-3xl font-black text-slate-800 tabular-nums">
                <Clock size={24} className="text-blue-500 mt-1" />
                {format(time, 'HH:mm:ss')}
              </div>
              <div className="h-8 w-[1px] bg-slate-200" />
              <div className="flex items-center gap-2 text-slate-600">
                <Cloud size={20} className="text-blue-300" />
                <span className="font-bold">24°C 서울</span>
              </div>
            </div>
    </div>)
}
