'use client';
import { ListTodo, Plus, CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { todoType } from '@/types/todoType';

export default function TodoSection() {
    const [todoList, setTodoList] = useState<Array<todoType>>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const progress: number =
        todoList.length !== 0 ? Math.floor((todoList.filter(x => x.completed).length / todoList.length) * 100) : 0;

    const addTodo = (e: React.FormEvent): void => {
        e.preventDefault();

        if (!inputValue.trim()) return;
        const todo = { text: inputValue, completed: false };
        setTodoList([...todoList, todo]);
        setInputValue('');
    };

    const toggleTodo = (idx: number): void => {
        setTodoList(todoList.map((x, index) => (idx === index ? { ...x, completed: !x.completed } : x)));
    };

    const deleteTodo = (idx: number): void => {
        setTodoList(todoList.filter((x, index) => idx !== index));
    };
    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
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
            <form onSubmit={addTodo} className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="오늘 할 일을 추가하세요"
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl transition-colors shadow-sm"
                >
                    <Plus size={20} />
                </button>
            </form>
            {todoList.length !== 0 ? (
                <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    <AnimatePresence initial={false}>
                        {todoList.map((todo, idx) => (
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
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="text-center py-8 text-slate-400 text-sm italic">할 일을 모두 마쳤거나 없습니다.</div>
            )}
        </div>
    );
}
