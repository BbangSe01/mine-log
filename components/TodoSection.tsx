'use client';
import TitleLine from './todo/TitleLine';
import { Plus } from 'lucide-react';
import useTodo from '@/hooks/useTodo';
import dynamic from 'next/dynamic';
import TodoListSkeleton from './skeletons/TodoListSkeleton';
import CompletionMessage from './todo/CompletionMessage';

const DynamicTodoList = dynamic(() => import('./todo/TodoList'), {
    ssr: false,
    loading: () => <TodoListSkeleton />,
});

export default function TodoSection() {
    const { todoList, inputValue, setInputValue, addTodo, toggleTodo, deleteTodo, resetTodo, progress } = useTodo();

    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
            <TitleLine progress={progress} />
            <CompletionMessage progress={progress} todoList={todoList} resetTodo={resetTodo} />
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
            <DynamicTodoList todoList={todoList} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
    );
}
