interface PTrailerVideoProps {
  src: string;
  widthPx?: number;
  heightPx?: number;
}
export const PTrailerVideo = ({ src, widthPx = 700, heightPx = 400 }: PTrailerVideoProps) => {
  return <iframe src={src} width={widthPx} height={heightPx}></iframe>;
};
