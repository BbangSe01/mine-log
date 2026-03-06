'use client';
import useFortune from '@/hooks/useFortune';
import Start from './Fortune/Start';
import PersonalInfoForm from './Fortune/PersonalInfoForm';
export default function FortuneSection() {
    const { step, setStep, info, setInfo } = useFortune();
    return (
        <>
            {step === 0 ? (
                <Start step={step} setStep={setStep} />
            ) : step === 1 ? (
                <PersonalInfoForm step={step} setStep={setStep} info={info} setInfo={setInfo} />
            ) : (
                ''
            )}
        </>
    );
}
