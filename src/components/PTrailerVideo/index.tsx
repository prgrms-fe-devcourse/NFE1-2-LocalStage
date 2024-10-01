interface PTrailerVideoProps {
  src: string;
  width?: number;
  height?: number;
}

export const PTrailerVideo = ({ src, width = 700, height = 400 }: PTrailerVideoProps) => {
  return <iframe src={src} width={width} height={height}></iframe>;
};
