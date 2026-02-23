'use client';
import { useState, useEffect } from 'react';
import { todoType } from '@/types/todoType';
export default function useTodo() {
    const [todoList, setTodoList] = useState<Array<todoType>>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const key = 'todolist';

    useEffect(() => {
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setTodoList(JSON.parse(saved));
            } catch (e) {
                console.error('데이터 파싱 에러', e);
            }
        }
    }, []);

    // todoList 변경 시마다 localStorage도 갱신
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todoList));
    }, [todoList]);

    const progress: number =
        todoList.length !== 0 ? Math.floor((todoList.filter(x => x.completed).length / todoList.length) * 100) : 0;

    const getFromLS = () => {
        return localStorage.getItem(key);
    };

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

    const resetTodo = (): void => {
        setTodoList([]);
    };

    return { todoList, inputValue, setInputValue, addTodo, toggleTodo, deleteTodo, resetTodo, progress, getFromLS };
}
