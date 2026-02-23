export default function LiveInfoSkeleton() {
    return (
        <div className="flex flex-col items-start md:items-end gap-2 bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-white/60 shadow-sm animate-pulse">
            {/* 상단 날짜 영역 스켈레톤 */}
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-slate-200 rounded-full" />
                <div className="w-32 h-4 bg-slate-200 rounded-md" />
            </div>

            {/* 하단 시간 및 그리팅 영역 스켈레톤 */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full" />
                    <div className="w-24 h-8 bg-slate-200 rounded-md" />
                </div>
                <div className="h-8 w-[1px] bg-slate-200" />
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-slate-200 rounded-full" />
                    <div className="w-20 h-5 bg-slate-200 rounded-md" />
                </div>
            </div>
        </div>
    );
}
