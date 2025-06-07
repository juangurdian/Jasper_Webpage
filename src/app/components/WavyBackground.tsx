"use client";
import React, { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

// --- Playground Component ---
export function WavyBackgroundPlayground({
  settings,
  setSettings,
}: {
  settings: {
    colors: string[];
    waveWidth: number;
    blur: number;
    speed: 'slow' | 'fast';
    waveOpacity: number;
    backgroundFill: string;
    numWaves: number;
  };
  setSettings: Dispatch<SetStateAction<{
    colors: string[];
    waveWidth: number;
    blur: number;
    speed: 'slow' | 'fast';
    waveOpacity: number;
    backgroundFill: string;
    numWaves: number;
  }>>;
}) {
  return (
    <div className="fixed top-0 left-0 z-[9999] bg-white/80 p-4 rounded-b-xl shadow-xl w-full max-w-xl mx-auto">
      <div className="flex flex-wrap gap-2 items-center">
        <label>
          <span className="text-xs">Colors (comma):</span>
          <input
            type="text"
            value={settings.colors.join(",")}
            onChange={e => setSettings(s => ({ ...s, colors: e.target.value.split(",") }))}
            className="border px-2 py-1 rounded w-48"
          />
        </label>
        <label>
          <span className="text-xs">Wave Width:</span>
          <input
            type="number"
            value={settings.waveWidth}
            min={1}
            max={200}
            onChange={e => setSettings(s => ({ ...s, waveWidth: Number(e.target.value) }))}
            className="border px-2 py-1 rounded w-16"
          />
        </label>
        <label>
          <span className="text-xs">Blur:</span>
          <input
            type="number"
            value={settings.blur}
            min={0}
            max={100}
            onChange={e => setSettings(s => ({ ...s, blur: Number(e.target.value) }))}
            className="border px-2 py-1 rounded w-16"
          />
        </label>
        <label>
          <span className="text-xs">Speed:</span>
          <select
            value={settings.speed}
            onChange={e => setSettings(s => ({ ...s, speed: e.target.value as 'slow' | 'fast' }))}
            className="border px-2 py-1 rounded"
          >
            <option value="slow">slow</option>
            <option value="fast">fast</option>
          </select>
        </label>
        <label>
          <span className="text-xs">Opacity:</span>
          <input
            type="number"
            value={settings.waveOpacity}
            min={0}
            max={1}
            step={0.05}
            onChange={e => setSettings(s => ({ ...s, waveOpacity: Number(e.target.value) }))}
            className="border px-2 py-1 rounded w-16"
          />
        </label>
        <label>
          <span className="text-xs">BG Fill:</span>
          <input
            type="color"
            value={settings.backgroundFill}
            onChange={e => setSettings(s => ({ ...s, backgroundFill: e.target.value }))}
            className="border px-2 py-1 rounded w-10"
          />
        </label>
        <label>
          <span className="text-xs"># Waves:</span>
          <input
            type="number"
            value={settings.numWaves}
            min={1}
            max={10}
            onChange={e => setSettings(s => ({ ...s, numWaves: Number(e.target.value) }))}
            className="border px-2 py-1 rounded w-12"
          />
        </label>
      </div>
    </div>
  );
}

// --- Main WavyBackground Effect ---

export const WavyBackground = ({
  className,
  colors,
  waveWidth,
  backgroundFill,
  blur = 15,
  speed = "slow",
  waveOpacity = 1,
  numWaves = 5,
  ...props
}: {
  className?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  numWaves?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(numWaves);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, [colors, waveWidth, blur, speed, waveOpacity, backgroundFill, numWaves]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <canvas
      className={cn("fixed inset-0 w-full h-full z-0 pointer-events-none", className)}
      ref={canvasRef}
      id="canvas"
      style={{
        ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
      }}
      {...props}
    ></canvas>
  );
}; 