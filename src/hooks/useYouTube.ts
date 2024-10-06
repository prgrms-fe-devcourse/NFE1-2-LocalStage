import { VItemType, YouTubeResponseType } from '@/types/vItem';
import { useEffect, useState } from 'react';

/**
 *
 * @param keyList 공연 이름 리스트
 * @returns 공연 관련 동영상 리스트
 * @example const videoList = useYouTube({name: '캣츠', poster: 'https://placeholder.co/300/400'})
 */
export default function useYoutube(perform: { name: string | undefined; poster: string | undefined }) {
  const [video, setVideo] = useState<VItemType>();
  const [name, setName] = useState<string | undefined>();
  useEffect(() => {
    if (perform.name == undefined || perform.poster == undefined || name === perform.name) return;
    setName(perform.name);

    const fetchData = async () => {
      try {
        const videoUrl = `https://www.googleapis.com/youtube/v3/search?q=${perform.name}&maxResults=1&part=snippet&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
        const res = await fetch(videoUrl);
        const data: YouTubeResponseType = await res.json();
        console.log(data.items[0]);
        setVideo({
          vId: data.items[0].id.videoId,
          vTitle: data.items[0].snippet.title,
          postSrc: perform.poster || '',
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [name, perform]);

  return { video };
}
