import { LayoutDashboard } from 'lucide-react';
import LiveInfo from './LiveInfo';

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row md:items-end justify-between mt-8 mb-12 gap-6">
            <div className="space-y-2 z-10 pl-8">
                <div className="flex items-center gap-3 text-slate-500 mb-1">
                    <LayoutDashboard size={20} className="text-blue-500" />
                    <span className="font-bold tracking-widest text-sm uppercase">Personal Workspace</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                    오늘도 기분 좋은 <br />
                    <span className="text-blue-600">하루 보내세요!</span>
                </h1>
            </div>
            <LiveInfo />
        </header>
        // <div className="w-[70%] flex justify-between p-8 items-center z-10">
        //     <div className="flex-col">
        //         <p className="font-bold tracking-widest text-sm pb-1 flex">
        //             <LayoutDashboard size={20} className="text-blue-500 mr-2" />
        //             MINE-LOG
        //         </p>
        //         <h1 className="text-5xl font-black tracking-tight text-slate-900 ">
        //             오늘을 <br />
        //             <span className="text-blue-600">기록해보세요!</span>
        //         </h1>
        //     </div>
        //     <LiveInfo />
        // </div>
    );
}
