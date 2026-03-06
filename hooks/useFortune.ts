'use client';
import { useState } from 'react';
import { fortuneInfoType } from '@/types/fortuneType';
export default function useFortune() {
    const [step, setStep] = useState<number>(0);
    const [info, setInfo] = useState<fortuneInfoType>({
        birthDate: '',
        gender: '',
        birthTime: '',
    });
    return { step, setStep, info, setInfo };
}
