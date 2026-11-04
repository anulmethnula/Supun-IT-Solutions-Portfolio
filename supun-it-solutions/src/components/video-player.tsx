"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const defaultSources = [
  "/videos/hero-video.mp4",
  "/videos/hero-showreel.mp4",
  "/hero-video.mp4",
  "/hero video.mp4",
  "/videos/hero-showreel.webm",
];

export function CinematicHeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  const attemptPlayback = useCallback(() => {
    if (!ref.current) return;
    const video = ref.current;
    video.muted = true;
    video.defaultMuted = true;
    void video.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    attemptPlayback();
  }, [attemptPlayback]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#04122f]">
      {!failed ? (
        <video
          ref={ref}
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          onLoadedMetadata={attemptPlayback}
          onLoadedData={attemptPlayback}
          onCanPlay={attemptPlayback}
          onError={() => setFailed(true)}
        />
      ) : null}

      <motion.div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-[8%] h-48 w-[116%] rounded-[50%] bg-blue-500/18 blur-2xl" animate={reduceMotion ? undefined : { x: [0, 24, 0], scaleY: [1, 1.14, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-[12%] h-52 w-[124%] rounded-[50%] bg-cyan-400/18 blur-3xl" animate={reduceMotion ? undefined : { x: [0, -30, 0], scaleY: [1.08, 0.92, 1.08] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}

export function VideoPlayer({
  src,
  sources,
  autoPlay = false,
  title = "Supun IT Solutions",
}: {
  src?: string;
  sources?: string[];
  autoPlay?: boolean;
  title?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const candidates = sources?.length ? sources : src ? [src, ...defaultSources.filter((item) => item !== src)] : defaultSources;
  const [sourceIndex, setSourceIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const currentSource = candidates[sourceIndex];

  const toggle = () => {
    if (!ref.current || !videoReady) return;
    if (playing) ref.current.pause();
    else void ref.current.play();
    setPlaying(!playing);
  };

  const handleError = () => {
    setVideoReady(false);
    setSourceIndex((value) => value + 1);
  };

  return (
    <div className="group relative aspect-video overflow-hidden rounded-[32px] border border-white/80 bg-slate-950 shadow-[0_35px_90px_rgba(37,99,235,0.24)]">
      <Image src="/images/projects/supun-group/supun-group.png" alt="Supun IT Solutions digital work preview" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover opacity-80" />

      {currentSource && (
        <video
          key={currentSource}
          ref={ref}
          src={currentSource}
          autoPlay={autoPlay}
          muted={muted}
          loop={autoPlay}
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
          onLoadedData={() => { setVideoReady(true); setPlaying(autoPlay); }}
          onError={handleError}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent" />
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/35 px-3 py-2 text-xs font-bold text-white backdrop-blur-xl">
        <i className={`h-2 w-2 rounded-full ${videoReady ? "bg-emerald-400" : "bg-cyan-300"}`} />
        {videoReady ? "Playing showreel" : "Digital engineering"}
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/40 p-3 text-white backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
        <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/12 transition hover:bg-white/20 disabled:opacity-40" onClick={toggle} disabled={!videoReady} aria-label={playing ? "Pause video" : "Play video"}>{playing ? <Pause size={18} /> : <Play size={18} />}</button>
        <div className="min-w-0 flex-1"><b className="block truncate text-sm">{title}</b><small className="text-blue-100">Systems • Web • Digital Products</small></div>
        <button className="hidden h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 sm:grid" onClick={() => { if (!ref.current) return; ref.current.muted = !muted; setMuted(!muted); }} disabled={!videoReady} aria-label={muted ? "Unmute video" : "Mute video"}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
        <button className="hidden h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 sm:grid" onClick={() => ref.current?.requestFullscreen()} disabled={!videoReady} aria-label="View video fullscreen"><Maximize size={18} /></button>
      </div>
    </div>
  );
}
