import { useEffect, useRef } from "react";

interface FadingVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export default function FadingVideo({ src, className, style, ...props }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rAFRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const FADE_MS = 500;
  const FADE_OUT_LEAD = 0.55; // seconds

  const fadeTo = (targetOpacity: number, duration: number = FADE_MS) => {
    const video = videoRef.current;
    if (!video) return;

    if (rAFRef.current !== null) {
      cancelAnimationFrame(rAFRef.current);
    }

    const startOpacity = parseFloat(video.style.opacity || "0");
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        rAFRef.current = requestAnimationFrame(animate);
      } else {
        rAFRef.current = null;
      }
    };

    rAFRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      if (rAFRef.current !== null) cancelAnimationFrame(rAFRef.current);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
      {...props}
    />
  );
}
