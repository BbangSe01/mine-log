import { Calendar, Clock, Cloud, LayoutDashboard } from 'lucide-react';
import LiveInfo from './LiveInfo';

export default function Header() {
    return (
        <div className="w-[70%] flex justify-between p-8 items-center">
            <div className="flex-col">
                <p className="font-bold tracking-widest text-sm pb-1 flex">
                    <LayoutDashboard size={20} className="text-blue-500 mr-2" />
                    MINE-LOG
                </p>
                <h1 className="text-5xl font-black tracking-tight text-slate-900 ">
                    오늘을 <br />
                    <span className="text-blue-600">기록해보세요!</span>
                </h1>
            </div>
            <LiveInfo />
        </div>
    );
}
