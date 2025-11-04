"use client";

import { useEffect, useRef } from "react";

export default function SineWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
    let id = 0;

    let W = 0;
    let H = 0;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fov = 250;
    const pixels: { x: number; y: number; z: number }[] = [];
    for (let x = -600; x < 600; x += 7)
      for (let z = -350; z < 350; z += 7) pixels.push({ x, y: 100, z });

    const img = ctx.createImageData(W, H);
    const data = img.data;
    let last = 0;
    let offset = 0;

    const loop = (ts: number) => {
      if (ts - last < 16) return (id = requestAnimationFrame(loop));
      last = ts;
      offset += 0.001; // much slower, smooth drift

      data.fill(0);

      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];

        p.z -= 0.15; // slow forward motion
        if (p.z < -fov) p.z += 2 * fov;

        const wave =
          Math.sin(p.x * 0.015 + offset * 60) * 15 +
          Math.cos(p.z * 0.02 + offset * 40) * 10;
        p.y = H / 10 + wave;

        const scale = fov / (fov + p.z);
        const x2d = p.x * scale + W / 2;
        const y2d = p.y * scale + H / 2;
        const x = x2d | 0;
        const y = y2d | 0;

        if (x >= 0 && x < W && y >= 0 && y < H) {
          const idx = (y * W + x) * 4;
          data[idx] = 0;
          data[idx + 1] = 200;
          data[idx + 2] = 100;
          data[idx + 3] = 180;
        }
      }

      ctx.filter = "blur(0.8px)";
      ctx.putImageData(img, 0, 0);
      ctx.filter = "none";

      ctx.fillStyle = "rgba(23, 41, 58, 0.55)";
      ctx.fillRect(0, 0, W, H);

      id = requestAnimationFrame(loop);
    };

    id = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{ display: "block" }}
    />
  );
}
