interface MemoAreaProps {
    memo: string;
    setMemo: (value: string) => void;
}

export default function MemoArea({ memo, setMemo }: MemoAreaProps) {
    return (
        <>
            <textarea
                value={memo}
                onChange={e => setMemo(e.target.value)}
                placeholder="자유롭게 메모를 작성하세요..."
                className="flex-1 w-full bg-amber-50/30 border border-amber-200/50 rounded-2xl p-4 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 resize-none custom-scrollbar"
            />

            <div className="mt-4 text-[10px] text-slate-400 text-right italic">
                * 작성된 내용은 자동으로 저장됩니다 (Local Storage)
            </div>
        </>
    );
}
