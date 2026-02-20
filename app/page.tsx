import MemoSection from '@/components/MemoSection';
import TodoSection from '@/components/TodoSection';
export default function Home() {
    return (
        <div className="w-[70%]">
            <div className=" w-[100%] flex w-[100%] mt-8 justify-between">
                <div className="w-[60%] h-[450px]">
                    <TodoSection />
                </div>
            </div>
        </div>
    );
}
