export default function TodoListSkeleton() {
    return (
        <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
            {[1, 2, 3, 4].map(i => (
                <div
                    key={i}
                    className="flex items-center justify-between p-3 mb-2 rounded-xl bg-white border border-slate-100 animate-pulse"
                >
                    <div className="flex items-center gap-3 flex-1">
                        {/* 체크 아이콘 자리 */}
                        <div className="w-5 h-5 rounded-full bg-slate-200" />

                        {/* 텍스트 자리 (길이를 랜덤하게 보이도록 설정) */}
                        <div className={`h-4 bg-slate-200 rounded-md ${i % 2 === 0 ? 'w-1/2' : 'w-2/3'}`} />
                    </div>

                    {/* 휴지통 아이콘 자리 */}
                    <div className="w-6 h-6 rounded bg-slate-100" />
                </div>
            ))}
        </div>
    );
}
