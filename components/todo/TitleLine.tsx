import { ListTodo } from 'lucide-react';
import { motion } from 'motion/react';
export default function TitleLine({ progress }: { progress: number }) {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <ListTodo className="text-blue-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-800">Todo & 진행률</h2>
                </div>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {progress}% 완료
                </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
                <motion.div
                    className="bg-blue-500 h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </>
    );
}
