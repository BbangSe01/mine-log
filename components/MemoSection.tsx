'use client';
import { StickyNote } from 'lucide-react';
import useUserMemo from '@/hooks/useUserMemo';
import dynamic from 'next/dynamic';
import MemoSkeleton from './skeletons/MemoSkeleton';

const DynamicMemoArea = dynamic(() => import('./memo/MemoArea'), {
    ssr: false,
    loading: () => <MemoSkeleton />,
});
export default function MemoSection() {
    const { memo, setMemo } = useUserMemo();

    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <StickyNote className="text-amber-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-800">메모칸</h2>
                </div>
            </div>

            <DynamicMemoArea memo={memo} setMemo={setMemo} />
        </div>
    );
}
