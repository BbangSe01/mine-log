import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { todoType } from '@/types/todoType';

interface TodoListProps {
    todoList: todoType[];
    deleteTodo: (idx: number) => void;
    toggleTodo: (idx: number) => void;
}

export default function TodoList({ todoList, deleteTodo, toggleTodo }: TodoListProps) {
    return (
        <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
            <AnimatePresence initial={false}>
                {todoList.length > 0 ? (
                    todoList.map((todo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={`flex items-center justify-between p-3 mb-2 rounded-xl transition-all ${
                                todo.completed
                                    ? 'bg-slate-50/50 grayscale opacity-60'
                                    : 'bg-white shadow-sm border border-slate-100'
                            }`}
                        >
                            <div
                                className="flex items-center gap-3 cursor-pointer flex-1"
                                onClick={() => toggleTodo(idx)}
                            >
                                {todo.completed ? (
                                    <CheckCircle2 className="text-blue-500" size={20} />
                                ) : (
                                    <Circle className="text-slate-300" size={20} />
                                )}
                                <span
                                    className={`text-sm ${todo.completed ? 'line-through' : 'text-slate-700 font-medium'}`}
                                >
                                    {todo.text}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteTodo(idx)}
                                className="text-slate-300 hover:text-red-400 transition-colors p-1"
                            >
                                <Trash2 size={16} />
                            </button>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center py-8 text-slate-400 text-sm italic">
                        할 일을 모두 마쳤거나 없습니다.
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
