'use client';
import React from 'react';
import { Music2, Play, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/public/figma/ImageWithFallback';

const YOUTUBE_VIDEOS = [
    {
        id: 1,
        title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 공부할 때 듣는 애니ost / J-Pop 피아노 플리 🔥',
        videoId: 'jWo3DdecCX0',
        channel: '상어오브뮤직',
        duration: '1:35:31',
    },
    {
        id: 2,
        title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 삿포로에서 가만히 앉아 듣던 노래🌼 일본느낌 일본감성 𝑱-𝑷𝑶𝑷 플레이리스트🤎',
        videoId: '6uxIPpuhZRA',
        channel: 'Omoide Story',
        duration: '1:31:36',
    },
    {
        id: 3,
        title: '나 𝐡𝐨𝐱𝐲 도쿄에서 퇴근중? 신나는 출퇴근길 jpop 밴드감성 & 락발라드 플레이리스트 제이팝 플리 j-pop playlist',
        videoId: 'tqmk_xLn_r4',
        channel: '뉴녕',
        duration: '1:46:52',
    },
    {
        id: 4,
        title: 'ASMR 하이큐!! ☀️ | 세이죠와의 경기에서 패배 후 돌아가는 히나타와 저녁 마을소리 | Haikyuu Evening Ambience | ハイキュー',
        videoId: 'ca339iXA-AE',
        channel: "INFP's room",
        duration: '2:15:30',
    },
    {
        id: 5,
        title: '수면, 명상 및 스트레스 해소를 위한 편안한 음악 • Peder B. Helland 작곡의 "Flying"',
        videoId: '1ZYbU82GVz4',
        channel: 'Soothing Relaxation',
        duration: '3:30:45',
    },
    {
        id: 6,
        title: '에델슈타인 카페 1시간',
        videoId: 'PU18HjdlLDU',
        channel: '느린달팽이',
        duration: '1:01:56',
    },
    {
        id: 7,
        title: '❄️공부와 작업을 위한 차분한 겨울 포켓몬 음악 | Chill Pokémon Winter Study & Work Playlist',
        videoId: 'm44XkDsKHyg',
        channel: 'Seungmin Kim',
        duration: '2:02:00',
    },
];

export default function PlaylistSection() {
    const handleVideoClick = (videoId: string) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };

    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Music2 className="text-red-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-800">YouTube Playlist</h2>
                </div>
                <ExternalLink className="text-slate-300" size={20} />
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {YOUTUBE_VIDEOS.map(video => (
                    <div
                        key={video.id}
                        onClick={() => handleVideoClick(video.videoId)}
                        className="group cursor-pointer p-3 rounded-xl hover:bg-red-50/50 transition-all border border-transparent hover:border-red-200"
                    >
                        <div className="flex items-start gap-3">
                            <div className="relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden shadow-md">
                                <ImageWithFallback
                                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <Play
                                        size={24}
                                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity fill-white drop-shadow-lg"
                                    />
                                </div>
                                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-slate-700 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                    {video.title}
                                </h3>
                                <p className="text-[11px] text-slate-500 mt-1 truncate">{video.channel}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
