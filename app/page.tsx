import MemoSection from '@/components/MemoSection';
import TodoSection from '@/components/TodoSection';
export default function Home() {
    return (
        <div className="w-[70%]">
            <div className="flex w-[100%] mt-8 justify-between">
                <TodoSection />
                <MemoSection />
            </div>
        </div>
    );
}
