import { VItemType, YouTubeResponseType } from '@/types/vItem';
import { useEffect, useState } from 'react';
import { useCacheStore } from '@/store/useCacheStore';
/**
 *
 * @param keyList 공연 정보
 * @returns 공연 관련 동영상
 * @example const videoList = useYouTube({id: 'PF250529', name: '캣츠', poster: 'https://via.placeholder.com/200?text=Poster'})
 */
export default function useYoutube(perform: { id?: string; name?: string; poster?: string }) {
  const [vItem, setVItem] = useState<VItemType>();
  const { caches, registerCache } = useCacheStore(state => state);

  useEffect(() => {
    if (perform.id === undefined || perform.name === undefined || perform.poster === undefined) return;
    const videoUrl = `https://www.googleapis.com/youtube/v3/search?q=${perform.name}&maxResults=1&part=snippet&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

    const fetchData = async () => {
      try {
        if (caches[videoUrl]) {
          setVItem(caches[videoUrl].data as VItemType);
          return;
        }
        const res = await fetch(videoUrl);
        const data: YouTubeResponseType = await res.json();
        const videoInfo: VItemType = {
          vId: data.items[0].id.videoId,
          vTitle: data.items[0].snippet.title,
          pId: perform.id,
          postSrc: perform.poster || '',
        };
        registerCache(videoUrl, videoInfo);
        setVItem(videoInfo);
      } catch (error) {
        const defaultValue = {
          vId: 'EvStWwidM98',
          vTitle: '[킹키부츠] 2020 캐스트 👠 네가 힘들 때 곁에 있을게💖｜뮤지컬 킹키부츠 KINKY BOOTS｜CJ ENM',
          pId: perform.id,
          postSrc: perform.poster || '',
        };
        setVItem(defaultValue);
        registerCache(videoUrl, defaultValue);
        console.error(error);
      }
    };

    fetchData();
  }, [caches, perform, registerCache]);

  return { vItem };
}
