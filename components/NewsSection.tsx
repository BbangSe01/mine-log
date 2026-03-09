import { Newspaper, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/public/figma/ImageWithFallback';
// 인터페이스 정의
interface NewsItem {
    article_id: string;
    title: string;
    link: string;
    image_url: string | null;
    pubDate: string;
    category: Array<string>;
    source_name: string;
}
export default async function NewsSection() {
    const getNews = async () => {
        const apiKey = process.env.NEWS_API_KEY;
        try {
            const res = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&country=kr`);
            return res.json();
        } catch (err) {
            console.error(err);
        }
    };
    const response = await getNews();
    const newsData: NewsItem[] = response.results;
    return (
        <div className="bg-white/80 backdrop-blur-md px-5 pt-4 pb-4 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col gap-3 min-h-0">
            {/* 헤더 */}
            <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-1.5">
                    <Newspaper className="text-slate-600" size={16} />
                    <h2 className="text-base font-bold text-slate-800">주요 뉴스</h2>
                </div>
            </div>

            {/* 뉴스 리스트 */}
            <div className="flex-1 overflow-y-auto min-h-0 -mr-1 pr-1">
                <div className="flex flex-col divide-y divide-slate-100">
                    {newsData.map((item, idx) => (
                        <a
                            key={item.article_id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`py-2.5 flex items-start gap-2.5 cursor-pointer group transition-colors rounded-lg px-1`}
                        >
                            {/* 번호 */}
                            <span
                                className={`flex-shrink-0 text-xs font-black mt-0.5 w-4 text-center ${
                                    idx < 3 ? 'text-red-400' : 'text-slate-300'
                                }`}
                            >
                                {idx + 1}
                            </span>
                            <div className="flex-shrink-0">
                                {item.image_url ? (
                                    <ImageWithFallback
                                        src={item.image_url || undefined}
                                        alt={item.title}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
                                        <Newspaper className="text-slate-400" size={24} />
                                    </div>
                                )}
                            </div>
                            {/* 내용 */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className={`text-[10px] font-bold py-0.5 rounded-md `}>
                                        {item.category[0]}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm text-slate-700 leading-snug truncate group-hover:text-slate-900 transition-colors`}
                                >
                                    {item.title}
                                </p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-[11px] text-slate-400">{item.source_name}</span>
                                </div>
                            </div>
                            {/* 외부 링크 아이콘 */}
                            <ExternalLink
                                size={12}
                                className="flex-shrink-0 text-slate-200 group-hover:text-slate-400 transition-colors mt-1"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
