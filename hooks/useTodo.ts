import { useState } from 'react';
import { todoType } from '@/types/todoType';
export default function useTodo() {
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

    return { todoList, inputValue, setInputValue, addTodo, toggleTodo, deleteTodo, progress };
}
