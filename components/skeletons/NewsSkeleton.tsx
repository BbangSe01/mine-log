import { Newspaper } from 'lucide-react';

export default function NewsSkeleton() {
    return (
        <div className="bg-white/80 backdrop-blur-md px-5 pt-4 pb-4 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col gap-3 min-h-0 animate-pulse">
            {/* 헤더 스켈레톤 */}
            <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-1.5">
                    <Newspaper className="text-slate-200" size={16} />
                    <div className="h-5 w-20 bg-slate-200 rounded-md"></div>
                </div>
            </div>

            {/* 뉴스 리스트 스켈레톤 */}
            <div className="flex-1 overflow-hidden min-h-0 -mr-1 pr-1">
                <div className="flex flex-col divide-y divide-slate-100">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="py-2.5 flex items-start gap-2.5 px-1">
                            {/* 번호 스켈레톤 */}
                            <div className="flex-shrink-0 w-4 h-4 bg-slate-100 rounded mt-0.5"></div>

                            {/* 이미지 스켈레톤 */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-slate-200 rounded-lg"></div>
                            </div>

                            {/* 내용 스켈레톤 */}
                            <div className="flex-1 min-w-0 space-y-2">
                                {/* 카테고리 태그 */}
                                <div className="w-10 h-3 bg-slate-100 rounded-md"></div>
                                {/* 제목 두 줄 */}
                                <div className="w-full h-4 bg-slate-200 rounded"></div>
                                <div className="w-3/4 h-4 bg-slate-200 rounded"></div>
                                {/* 출처 */}
                                <div className="w-16 h-3 bg-slate-100 rounded mt-1"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
