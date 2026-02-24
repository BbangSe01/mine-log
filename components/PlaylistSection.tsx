'use client';
import React from 'react';
import { Music2, Play, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/public/figma/ImageWithFallback';

const YOUTUBE_VIDEOS = [
    {
        id: 1,
        title: 'Lofi Hip Hop Radio - Beats to Relax/Study to',
        videoId: 'jfKfPfyJRdk',
        channel: 'Lofi Girl',
        duration: 'LIVE',
    },
    {
        id: 2,
        title: 'Deep Focus - Peaceful Music for Concentration',
        videoId: '4oStw0r33so',
        channel: 'Yellow Brick Cinema',
        duration: '3:00:00',
    },
    {
        id: 3,
        title: 'Chill Jazz Music - Relaxing Cafe Music',
        videoId: 'kgx4WGK0oNU',
        channel: 'Cafe Music BGM channel',
        duration: '24/7 LIVE',
    },
    {
        id: 4,
        title: 'Beautiful Piano Music - Peaceful Instrumental',
        videoId: '1ZYbU82GVz4',
        channel: 'Soothing Relaxation',
        duration: '3:30:45',
    },
    {
        id: 5,
        title: 'Productive Morning - Coffee Shop Ambience',
        videoId: '6JQm5aSjX6g',
        channel: 'Relaxing Jazz Piano',
        duration: '2:15:30',
    },
    {
        id: 6,
        title: 'Study with Me - Focus Music Playlist',
        videoId: '5qap5aO4i9A',
        channel: 'The Bootleg Boy',
        duration: '1:45:20',
    },
    {
        id: 7,
        title: 'Meditation Music - Calm & Healing',
        videoId: 'lTRiuFIWV54',
        channel: 'Meditation Relax Music',
        duration: '6:00:00',
    },
    {
        id: 8,
        title: 'Workout Motivation Mix - Best Gym Music',
        videoId: '1-xGerv5FOk',
        channel: 'Trap Nation',
        duration: '1:30:15',
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
