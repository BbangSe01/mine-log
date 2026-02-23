import { useState, useEffect } from 'react';

export default function useUserMemo() {
    const [memo, setMemo] = useState<string>('');
    const key = 'memo';
    useEffect(() => {
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setMemo(saved);
            } catch (e) {
                console.error('데이터 파싱 에러', e);
            }
        }
    }, []);

    // todoList 변경 시마다 localStorage도 갱신
    useEffect(() => {
        localStorage.setItem(key, memo);
    }, [memo]);

    return { memo, setMemo };
}
