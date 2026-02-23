import { AnimatePresence, motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { todoType } from '@/types/todoType';

interface messageType {
    progress: number;
    todoList: todoType[];
    resetTodo: () => void;
}
export default function CompletionMessage({ progress, todoList, resetTodo }: messageType) {
    return (
        <AnimatePresence>
            {progress === 100 && todoList.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                >
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200 flex items-center justify-between">
                        <div>
                            <p className="text-green-700 font-medium text-sm">🎉 모든 할 일을 완료했습니다!</p>
                            <p className="text-green-600 text-xs mt-1">목록을 초기화하고 새롭게 시작하세요.</p>
                        </div>
                        <button
                            onClick={resetTodo}
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors shadow-sm"
                        >
                            <RotateCcw size={16} />
                            <span className="text-sm font-medium">초기화</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
