// components/NotificationInit.tsx
'use client';

import { useEffect } from 'react';

export default function NotificationInit() {
    useEffect(() => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            Notification.requestPermission();
        }
    }, []);

    return null;
}
