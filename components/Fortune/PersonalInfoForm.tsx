import { Sparkles, ChevronRight } from 'lucide-react';
import { stepOne } from '@/types/fortuneType';
export default function PersonalInfoForm({ step, setStep, info, setInfo }: stepOne) {
    const canSubmitInfo = info.birthDate && info.gender;
    return (
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-500" size={20} />
                <h2 className="text-lg font-bold text-slate-800">정보 입력</h2>
                <span className="ml-auto text-xs text-slate-400">1 / 2</span>
            </div>

            <div className="flex flex-col gap-3 flex-1 justify-center">
                {/* 생년월일 */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-500">생년월일</label>
                    <input
                        type="date"
                        value={info.birthDate}
                        onChange={e => setInfo({ ...info, birthDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-purple-400 focus:bg-white transition-colors"
                    />
                </div>

                {/* 성별 */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-500">성별</label>
                    <div className="flex gap-2">
                        {['남성', '여성'].map(g => (
                            <button
                                key={g}
                                onClick={() => setInfo({ ...info, gender: g })}
                                className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${
                                    info.gender === g
                                        ? 'bg-purple-500 text-white border-purple-500'
                                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-purple-300'
                                }`}
                            >
                                {g}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 태어난 시간 */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-500">
                        태어난 시간 <span className="text-slate-300 font-normal">(선택)</span>
                    </label>
                    <input
                        type="time"
                        value={info.birthTime}
                        onChange={e => setInfo({ ...info, birthTime: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-purple-400 focus:bg-white transition-colors"
                    />
                </div>
            </div>

            <button
                onClick={() => setStep(step + 1)}
                disabled={!canSubmitInfo}
                className="mt-4 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl bg-purple-500 text-white text-sm font-bold hover:bg-purple-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
                다음 <ChevronRight size={16} />
            </button>
        </div>
    );
}
