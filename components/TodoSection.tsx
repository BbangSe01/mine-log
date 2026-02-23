'use client';
import TitleLine from './todo/TitleLine';
import { Plus } from 'lucide-react';
import TodoList from './todo/TodoList';
import useTodo from '@/hooks/useTodo';

export default function TodoSection() {
    const { todoList, inputValue, setInputValue, addTodo, toggleTodo, deleteTodo, progress } = useTodo();

    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
            <TitleLine progress={progress} />
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
                <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            ) : (
                <div className="text-center py-8 text-slate-400 text-sm italic">할 일을 모두 마쳤거나 없습니다.</div>
            )}
        </div>
    );
}
