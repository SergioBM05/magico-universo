import React, { useEffect, useRef } from 'react';

export default function MagicCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
  const particlesRef = useRef([]);

  // Configuración de la estela mágica (Paleta Mágico Universo)
  const colors = [
    'rgba(244, 114, 182, 0.7)',  // Rosa empolvado
    'rgba(192, 132, 252, 0.6)',  // Lavanda suave
    'rgba(251, 191, 36, 0.5)',   // Melocotón / Amarillo pastel
    'rgba(147, 197, 253, 0.6)'   // Azul cielo mate
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Ajustar el canvas al tamaño completo de la pantalla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Capturar el movimiento del ratón
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Calcular la velocidad del movimiento
      const dx = mouseRef.current.x - mouseRef.current.lastX;
      const dy = mouseRef.current.y - mouseRef.current.lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Si el ratón se mueve lo suficientemente rápido, genera partículas
      if (distance > 2) {
        // Genera entre 1 y 3 partículas por movimiento para que no sature
        const count = Math.min(Math.floor(distance / 4), 3);
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: e.clientX,
            y: e.clientY,
            // Dirección aleatoria suave imitando la flotación de un globo
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5 - 0.5, // Tiende a flotar hacia arriba
            size: Math.random() * 5 + 3, // Tamaños variados (micro-globos)
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: Math.random() * 0.015 + 0.015 // Velocidad de desvanecimiento
          });
        }
      }

      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Bucle de renderizado (Animation Loop)
    let animationFrameId;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar y actualizar partículas
      particlesRef.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.98; // Se encogen sutilmente mientras flotan

        if (p.alpha <= 0 || p.size < 0.5) {
          particlesRef.current.splice(index, 1);
          return;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Efecto glow de destello pastel en cada partícula
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        ctx.restore();
      });

      // Dibujar el puntero interactivo principal que suaviza el movimiento (Cursor elástico)
      // Nota: Si quieres que el círculo principal siga al ratón, puedes dibujarlo aquí.
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    // Limpieza de eventos
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] w-full h-full"
    />
  );
}