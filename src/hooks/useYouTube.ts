import { VItemType, YouTubeResponseType } from '@/types/vItem';
import { useEffect, useState } from 'react';

/**
 *
 * @param keyList 공연 이름 리스트
 * @returns 공연 관련 동영상 리스트
 * @example const videoList = useYouTube({id: PF250529, name: '캣츠', poster: 'https://placeholder.co/300/400'})
 */
export default function useYoutube(perform: {
  id: string | undefined;
  name: string | undefined;
  poster: string | undefined;
}) {
  const [video, setVideo] = useState<VItemType>();
  const [id, setId] = useState<string | undefined>();
  useEffect(() => {
    if (perform.name == undefined || perform.poster == undefined || id === perform.id) return;
    setId(perform.id);

    const fetchData = async () => {
      try {
        const videoUrl = `https://www.googleapis.com/youtube/v3/search?q=${perform.name}&maxResults=1&part=snippet&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
        const res = await fetch(videoUrl);
        const data: YouTubeResponseType = await res.json();
        setVideo({
          vId: data.items[0].id.videoId,
          vTitle: data.items[0].snippet.title,
          pId: perform.id,
          postSrc: perform.poster || '',
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, perform]);

  return { video };
}
