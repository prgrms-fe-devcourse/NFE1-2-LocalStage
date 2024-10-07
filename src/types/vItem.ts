export type VItemType = {
  pId?: string;
  postSrc: string;
  vId: string;
  vTitle: string;
  width?: string;
};

export type YouTubeResponseType = {
  etag: string;
  items: {
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      channelId: string;
      channelTitle: string;
      description: string;
      liveBroadcastContent: string;
      publishTime: Date;
      publishedAt: Date;
      thumbnails: {
        default: { url: string; width: number; height: number };
        medium: { url: string; width: number; height: number };
        high: { url: string; width: number; height: number };
      };
      title: string;
    };
  }[];
};
