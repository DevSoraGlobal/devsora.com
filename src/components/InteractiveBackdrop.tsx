import { useEffect, useRef } from "react";

export default function InteractiveBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;


    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;


      const dpi = window.devicePixelRatio || 1;
      canvas.width = width * dpi;
      canvas.height = height * dpi;
      ctx.scale(dpi, dpi);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);


    interface Ribbon {
      pointsCount: number;
      speed: number;
      amplitude: number;
      yProgress: number;
      wavelength: number;
      colorGrad: "gold" | "emerald" | "charcoal" | "darkGold";
      opacity: number;
      lineWidth: number;
    }

    const ribbons: Ribbon[] = [
      {
        pointsCount: 6,
        speed: 0.0018,
        amplitude: 140,
        yProgress: 0.40,
        wavelength: 0.003,
        colorGrad: "charcoal",
        opacity: 0.45,
        lineWidth: 2.2,
      },
      {
        pointsCount: 8,
        speed: 0.0012,
        amplitude: 120,
        yProgress: 0.48,
        wavelength: 0.0025,
        colorGrad: "darkGold",
        opacity: 0.35,
        lineWidth: 1.8,
      },
      {
        pointsCount: 7,
        speed: 0.0022,
        amplitude: 160,
        yProgress: 0.55,
        wavelength: 0.002,
        colorGrad: "gold",
        opacity: 0.30,
        lineWidth: 1.5,
      },
      {
        pointsCount: 9,
        speed: 0.0015,
        amplitude: 100,
        yProgress: 0.62,
        wavelength: 0.0035,
        colorGrad: "emerald",
        opacity: 0.25,
        lineWidth: 1.2,
      },
      {
        pointsCount: 6,
        speed: 0.0009,
        amplitude: 90,
        yProgress: 0.70,
        wavelength: 0.0028,
        colorGrad: "charcoal",
        opacity: 0.50,
        lineWidth: 3.0,
      }
    ];

    let t = 0;

    const render = () => {
      t += 1;


      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);


      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const gradientX = mouse.active ? mouse.x : width / 2;
      const gradientY = mouse.active ? mouse.y : height / 2;
      const radialGlow = ctx.createRadialGradient(
        gradientX,
        gradientY,
        20,
        gradientX,
        gradientY,
        Math.max(width, height) * 0.8
      );
      

      radialGlow.addColorStop(0, "rgba(20, 18, 12, 0.45)"); // Dark rich gold hint
      radialGlow.addColorStop(0.3, "rgba(5, 12, 8, 0.20)");  // Dark emerald hint
      radialGlow.addColorStop(0.7, "rgba(2, 2, 3, 0.0)");
      radialGlow.addColorStop(1, "rgba(0, 0, 0, 1)");

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);


      ribbons.forEach((ribbon) => {
        ctx.beginPath();
        ctx.lineWidth = ribbon.lineWidth;


        let grad = ctx.createLinearGradient(0, 0, width, 0);
        if (ribbon.colorGrad === "gold") {
          grad.addColorStop(0, `rgba(229, 197, 115, ${ribbon.opacity * 0.2})`);
          grad.addColorStop(0.5, `rgba(229, 197, 115, ${ribbon.opacity})`);
          grad.addColorStop(1, `rgba(229, 197, 115, ${ribbon.opacity * 0.2})`);
        } else if (ribbon.colorGrad === "darkGold") {
          grad.addColorStop(0, "rgba(100, 80, 42, 0.05)");
          grad.addColorStop(0.5, `rgba(180, 140, 80, ${ribbon.opacity})`);
          grad.addColorStop(1, "rgba(100, 80, 42, 0.05)");
        } else if (ribbon.colorGrad === "emerald") {
          grad.addColorStop(0, `rgba(0, 255, 127, ${ribbon.opacity * 0.1})`);
          grad.addColorStop(0.5, `rgba(0, 255, 127, ${ribbon.opacity})`);
          grad.addColorStop(1, `rgba(0, 255, 127, ${ribbon.opacity * 0.1})`);
        } else {

          grad.addColorStop(0, "rgba(20, 20, 22, 0.1)");
          grad.addColorStop(0.5, `rgba(80, 80, 85, ${ribbon.opacity})`);
          grad.addColorStop(1, "rgba(20, 20, 22, 0.1)");
        }

        ctx.strokeStyle = grad;

        for (let x = 0; x <= width; x += 3) {
          const xFactor = x * ribbon.wavelength;
          const timeFactor = t * ribbon.speed;
          

          const wave1 = Math.sin(xFactor + timeFactor);
          const wave2 = Math.cos(xFactor * 0.5 - timeFactor * 1.2) * 0.4;
          const wave3 = Math.sin(xFactor * 2.1 + timeFactor * 0.7) * 0.15;
          const combinedWave = wave1 + wave2 + wave3;


          const edgeDamp = Math.sin((x / width) * Math.PI);
          const y = (height * ribbon.yProgress) + (combinedWave * ribbon.amplitude * edgeDamp);


          let force = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 260) {
              const repulsion = (260 - dist) / 260;
              // Push waves away from mouse slightly
              force = Math.sin(dist * 0.02) * 35 * repulsion;
            }
          }

          if (x === 0) {
            ctx.moveTo(x, y + force);
          } else {
            ctx.lineTo(x, y + force);
          }
        }
        ctx.stroke();
      });


      ctx.strokeStyle = "rgba(229, 197, 115, 0.015)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      

      const gridOffsetX = mouse.active ? (mouse.x - width / 2) * -0.015 : 0;
      const gridOffsetY = mouse.active ? (mouse.y - height / 2) * -0.015 : 0;

      for (let x = gridOffsetX % gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = gridOffsetY % gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="backdrop_container"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    >
      <canvas
        ref={canvasRef}
        id="backdrop_canvas"
        className="w-full h-full block"
      />
    </div>
  );
}
