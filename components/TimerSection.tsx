'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Timer as TimerIcon, Play, Pause, RotateCcw, Coffee } from 'lucide-react';

export default function TimerSection() {
    const [totalSet, setTotalSet] = useState(25 * 60); // seconds
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const isComplete = timeLeft === 0;
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<'work' | 'break'>('work');

    // per-mode saved times
    const [workTotal, setWorkTotal] = useState(25 * 60);
    const [breakTotal, setBreakTotal] = useState(5 * 60);

    const [editing, setEditing] = useState(false);
    const [minInput, setMinInput] = useState('25');
    const [secInput, setSecInput] = useState('00');
    const minInputRef = useRef<HTMLInputElement>(null);
    const secInputRef = useRef<HTMLInputElement>(null);

    const progress = totalSet > 0 ? ((totalSet - timeLeft) / totalSet) * 100 : 0;

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive]);

    useEffect(() => {
        if (!isComplete) return; // mode 바뀔 때는 여기서 바로 종료

        if (Notification.permission === 'granted') {
            const body =
                mode === 'work'
                    ? '집중 시간이 끝났어요. 잠깐 쉬어가세요!'
                    : '재충전 완료! 이제 다시 시작할 시간이에요.';
            new Notification('⏰ 타이머 종료', { body });
        }
    }, [isComplete, mode]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const switchMode = (newMode: 'work' | 'break') => {
        if (newMode === mode) return;
        setMode(newMode);
        setIsActive(false);
        setEditing(false);
        const t = newMode === 'work' ? workTotal : breakTotal;
        setTotalSet(t);
        setTimeLeft(t);
    };

    const reset = () => {
        setIsActive(false);
        setTimeLeft(totalSet);
    };

    const startEditing = () => {
        if (isActive) return;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        setMinInput(String(mins));
        setSecInput(secs.toString().padStart(2, '0'));
        setEditing(true);
        setTimeout(() => {
            minInputRef.current?.focus();
            minInputRef.current?.select();
        }, 50);
    };

    const applyTime = () => {
        const m = Math.min(180, Math.max(0, parseInt(minInput) || 0));
        const s = Math.min(59, Math.max(0, parseInt(secInput) || 0));
        const total = m * 60 + s;
        const clamped = Math.max(1, total);
        if (mode === 'work') setWorkTotal(clamped);
        else setBreakTotal(clamped);
        setTotalSet(clamped);
        setTimeLeft(clamped);
        setEditing(false);
    };

    const cancelEditing = () => setEditing(false);

    const handleMinKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            secInputRef.current?.focus();
            secInputRef.current?.select();
        }
        if (e.key === 'Escape') cancelEditing();
    };

    const handleSecKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') applyTime();
        if (e.key === 'Escape') cancelEditing();
    };

    // SVG ring
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    const isWork = mode === 'work';
    const accent = isWork ? 'text-rose-500' : 'text-teal-500';
    const accentBg = isWork ? 'bg-rose-500 hover:bg-rose-600' : 'bg-teal-500 hover:bg-teal-600';
    const ringBg = isWork ? '#fee2e2' : '#ccfbf1';
    const ringFg = isWork ? '#f43f5e' : '#14b8a6';

    return (
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col items-center text-center">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 self-start">
                <TimerIcon className="text-rose-500" size={22} />
                <h2 className="text-xl font-bold text-slate-800">타이머</h2>
            </div>

            {/* Mode Tabs */}
            <div className="flex gap-2 mb-4 bg-slate-100 p-1 rounded-2xl">
                <button
                    onClick={() => switchMode('work')}
                    className={`px-5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isWork ? 'bg-white shadow-sm text-rose-600' : 'text-slate-500'
                    }`}
                >
                    집중
                </button>
                <button
                    onClick={() => switchMode('break')}
                    className={`px-5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        !isWork ? 'bg-white shadow-sm text-teal-600' : 'text-slate-500'
                    }`}
                >
                    휴식
                </button>
            </div>

            {/* Circular Timer */}
            <div className="relative flex items-center justify-center mb-4">
                <svg width="160" height="160" className="-rotate-90">
                    <circle cx="80" cy="80" r={radius} fill="none" stroke={ringBg} strokeWidth="10" />
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        fill="none"
                        stroke={ringFg}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                    />
                </svg>

                <div className="absolute flex flex-col items-center">
                    {editing ? (
                        <div className="flex flex-col items-center gap-2">
                            {/* MM : SS 입력 */}
                            <div className="flex items-center gap-1">
                                <div className="flex flex-col items-center">
                                    <input
                                        ref={minInputRef}
                                        type="number"
                                        value={minInput}
                                        min={0}
                                        max={180}
                                        onChange={e => setMinInput(e.target.value)}
                                        onKeyDown={handleMinKeyDown}
                                        className={`w-12 text-center bg-transparent outline-none font-black font-mono tracking-tighter text-3xl border-b-2 ${
                                            isWork ? 'text-slate-800 border-rose-400' : 'text-teal-600 border-teal-400'
                                        }`}
                                    />
                                    <span className="text-slate-400 text-xs mt-0.5">분</span>
                                </div>
                                <span
                                    className={`text-2xl font-black mb-4 ${isWork ? 'text-slate-500' : 'text-teal-400'}`}
                                >
                                    :
                                </span>
                                <div className="flex flex-col items-center">
                                    <input
                                        ref={secInputRef}
                                        type="number"
                                        value={secInput}
                                        min={0}
                                        max={59}
                                        onChange={e => setSecInput(e.target.value)}
                                        onKeyDown={handleSecKeyDown}
                                        className={`w-12 text-center bg-transparent outline-none font-black font-mono tracking-tighter text-3xl border-b-2 ${
                                            isWork ? 'text-slate-800 border-rose-400' : 'text-teal-600 border-teal-400'
                                        }`}
                                    />
                                    <span className="text-slate-400 text-xs mt-0.5">초</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={applyTime}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${accentBg}`}
                                >
                                    확인
                                </button>
                                <button
                                    onClick={cancelEditing}
                                    className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-200 text-slate-500"
                                >
                                    취소
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={startEditing}
                            disabled={isActive}
                            className="flex flex-col items-center group disabled:cursor-default"
                        >
                            <span
                                className={`text-4xl font-black font-mono tracking-tighter ${
                                    isWork ? 'text-slate-800' : 'text-teal-600'
                                } ${!isActive ? 'group-hover:opacity-70 transition-opacity' : ''}`}
                            >
                                {formatTime(timeLeft)}
                            </span>
                            {isComplete ? (
                                <span className={`text-xs font-bold mt-1 animate-pulse ${accent}`}>완료!</span>
                            ) : !isActive ? (
                                <span className="text-xs text-slate-300 mt-1 group-hover:text-slate-400 transition-colors">
                                    탭하여 시간 설정
                                </span>
                            ) : null}
                        </button>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 mb-3">
                <button
                    onClick={() => setIsActive(!isActive)}
                    disabled={isComplete || editing}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md disabled:opacity-40 ${
                        isActive ? 'bg-slate-800 text-white' : `${accentBg} text-white`
                    }`}
                >
                    {isActive ? (
                        <Pause size={20} fill="currentColor" />
                    ) : (
                        <Play size={20} fill="currentColor" className="ml-0.5" />
                    )}
                </button>
                <button
                    onClick={reset}
                    className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-all"
                >
                    <RotateCcw size={20} />
                </button>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Coffee size={14} />
                <span>{isWork ? '집중하는 시간입니다' : '잠시 쉬어가는 시간입니다'}</span>
            </div>
        </div>
    );
}
