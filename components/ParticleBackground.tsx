import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // High DPI scaling for crisp lines
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 10000), 160); // Slightly fewer particles for cleaner look
    const connectionDistance = 160; // Increased connection distance for more elegant web
    const mouseInteractionRadius = 350; // Larger radius, softer falloff

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      alpha: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // ULTRA SLOW initial velocity (Elegant drift)
        this.vx = (Math.random() - 0.5) * 0.15; 
        this.vy = (Math.random() - 0.5) * 0.15;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1; 
        this.alpha = Math.random() * 0.4 + 0.1; // Slightly more transparent
      }

      update() {
        // 1. Mouse Interaction (Gravity Well)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Physics variables
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        // Gentle attraction that falls off with distance
        const maxDistance = mouseInteractionRadius;
        let force = (maxDistance - distance) / maxDistance;
        
        // If too far, no force
        if (force < 0) force = 0;

        // Calculate acceleration towards mouse
        // DRASTICALLY REDUCED force for "elegant" slow swarm
        const directionX = forceDirectionX * force * this.density * 0.03; 
        const directionY = forceDirectionY * force * this.density * 0.03;

        if (distance < mouseInteractionRadius) {
          this.vx += directionX;
          this.vy += directionY;
        }

        // 2. Ambient Drift & Friction
        // TINY noise for organic feel without jitter
        this.vx += (Math.random() - 0.5) * 0.005; 
        this.vy += (Math.random() - 0.5) * 0.005;

        // Friction: Closer to 1.0 means more "glide". 0.99 keeps momentum very well.
        this.vx *= 0.99; 
        this.vy *= 0.99;

        // Apply Velocity
        this.x += this.vx;
        this.y += this.vy;

        // 3. Boundary Wrapping (Infinity Pool effect)
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Init
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Connect to neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Opacity based on distance - smooth fade
            const opacity = 1 - (dist / connectionDistance);
            // Cyan tint for connections, giving that "neural network" look
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.1})`; 
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse if close (High-tech visual line)
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < mouseInteractionRadius) {
            const opacity = 1 - (distMouse / mouseInteractionRadius);
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`; 
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Event Listeners
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};