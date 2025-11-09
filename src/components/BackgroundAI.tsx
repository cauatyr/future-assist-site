import { useEffect } from "react";

const BackgroundAI = () => {
  useEffect(() => {
    const canvas = document.getElementById("neuralNetwork") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number, nodes: any[];
    let animationId: number;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      nodes = Array.from({ length: 50 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Pulsação suave - IA respirando
      const pulse = 0.6 + Math.sin(Date.now() / 800) * 0.3;
      ctx.globalAlpha = pulse;
      
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > w) n1.vx *= -1;
        if (n1.y < 0 || n1.y > h) n1.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.5;
            ctx.strokeStyle = `rgba(108, 99, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    
    const handleResize = () => init();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      id="neuralNetwork" 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ mixBlendMode: 'lighten' }}
    />
  );
};

export default BackgroundAI;
