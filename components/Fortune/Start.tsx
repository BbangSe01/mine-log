import { Sparkles, ChevronRight } from 'lucide-react';
import { stepZero } from '@/types/fortuneType';
export default function Start({ step, setStep }: stepZero) {
    return (
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center">
                <Sparkles size={32} className="text-purple-500" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">오늘의 운세</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                    생년월일을 입력하고
                    <br />
                    오늘의 운세를 확인해보세요
                </p>
            </div>
            <button
                onClick={() => setStep(step + 1)}
                className="mt-2 flex items-center gap-1.5 px-6 py-2.5 rounded-2xl bg-purple-500 text-white text-sm font-bold hover:bg-purple-600 transition-colors shadow-md"
            >
                시작하기 <ChevronRight size={16} />
            </button>
        </div>
    );
}
