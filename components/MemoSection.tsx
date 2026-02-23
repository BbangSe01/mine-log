'use client';
import { useState } from 'react';
import { StickyNote } from 'lucide-react';

export default function MemoSection() {
    const [memo, setMemo] = useState<string>('');

    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <StickyNote className="text-amber-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-800">메모칸</h2>
                </div>
            </div>

            <textarea
                value={memo}
                onChange={e => setMemo(e.target.value)}
                placeholder="자유롭게 메모를 작성하세요..."
                className="flex-1 w-full bg-amber-50/30 border border-amber-200/50 rounded-2xl p-4 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/10 resize-none custom-scrollbar"
            />

            <div className="mt-4 text-[10px] text-slate-400 text-right italic">
                * 작성된 내용은 자동으로 저장됩니다 (Local Storage)
            </div>
        </div>
    );
}
