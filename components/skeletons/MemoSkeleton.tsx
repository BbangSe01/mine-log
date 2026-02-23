export default function MemoSkeleton() {
    return (
        <>
            <div className="flex-1 w-full bg-amber-50/50 border border-amber-100/50 rounded-2xl p-4 animate-pulse">
                <div className="space-y-3">
                    <div className="h-3 w-3/4 bg-amber-200/40 rounded" />
                    <div className="h-3 w-1/2 bg-amber-200/40 rounded" />
                    <div className="h-3 w-2/3 bg-amber-200/40 rounded" />
                </div>
            </div>
            <div className="mt-4 flex justify-end animate-pulse">
                <div className="h-2 w-48 bg-slate-100 rounded" />
            </div>
        </>
    );
}
