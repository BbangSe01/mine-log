export type fortuneInfoType = {
    birthDate: string;
    gender: string;
    birthTime: string;
};

export interface stepZero {
    step: number;
    setStep: (s: number) => void;
}

export interface stepOne extends stepZero {
    info: fortuneInfoType;
    setInfo: (info: fortuneInfoType) => void;
}
