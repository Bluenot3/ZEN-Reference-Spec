import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimization
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // CONFIGURATION
    const PARTICLE_COUNT = 600;
    const MOUSE_INFLUENCE_RADIUS = 400;
    // Higher drag = smoother, syrup-like movement
    const IDLE_SPEED = 0.5;

    // PALETTE
    const PALETTE = [
        '#2dd4bf', // Teal 400
        '#5eead4', // Teal 300
        '#0ea5e9', // Sky 500
        '#94a3b8', // Slate 400
        '#cbd5e1', // Slate 300
    ];

    let mouse = { x: -1000, y: -1000, active: false };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      initialX: number;
      initialY: number;
      size: number;
      color: string;
      baseSpeed: number;
      angle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.initialX = this.x;
        this.initialY = this.y;
        this.vx = (Math.random() - 0.5) * IDLE_SPEED;
        this.vy = (Math.random() - 0.5) * IDLE_SPEED;
        this.size = Math.random() * 2.5 + 0.5;
        this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.baseSpeed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        // 1. Calculate Forces
        let fx = 0;
        let fy = 0;

        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        // Use squared distance for performance, sqrt only when needed
        const distSq = dx * dx + dy * dy;
        
        if (mouse.active && distSq < MOUSE_INFLUENCE_RADIUS * MOUSE_INFLUENCE_RADIUS) {
            const dist = Math.sqrt(distSq);
            const forceWrapper = (MOUSE_INFLUENCE_RADIUS - dist) / MOUSE_INFLUENCE_RADIUS;
            
            // Avoid singularity at center (GLITCH FIX)
            const safeDist = Math.max(dist, 20); 

            // Normalized vectors
            const nx = dx / safeDist;
            const ny = dy / safeDist;

            // Spiral Forces
            // 1. Attraction (Pull to center)
            const attractionStrength = 1.5 * forceWrapper;
            fx += nx * attractionStrength;
            fy += ny * attractionStrength;

            // 2. Rotation (Tangent force)
            // Perpendicular vector (-y, x)
            const rotationStrength = 4.0 * forceWrapper;
            fx += -ny * rotationStrength;
            fy += nx * rotationStrength;

            // Add velocity
            this.vx += fx;
            this.vy += fy;

            // Apply strong drag in the vortex to stabilize orbit
            this.vx *= 0.92;
            this.vy *= 0.92;

        } else {
            // Idle State: Gentle Flow
            // Add a little Perlin-like noise (sine waves)
            this.angle += 0.01;
            this.vx += Math.cos(this.angle) * 0.02;
            this.vy += Math.sin(this.angle) * 0.02;
            
            // Return to idle speed
            this.vx = Math.max(Math.min(this.vx, 2), -2);
            this.vy = Math.max(Math.min(this.vy, 2), -2);

            this.vx *= 0.98;
            this.vy *= 0.98;
        }

        // Update Position
        this.x += this.vx;
        this.y += this.vy;

        // Boundary Wrap (Seamless)
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        // Speed-based scaling
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const radius = this.size + Math.min(speed * 0.5, 3); // Stretch slightly based on speed
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // TRAIL EFFECT:
      // Instead of clearing the canvas completely, we draw a semi-transparent rectangle
      // over the previous frame. This creates the 'motion blur' or 'trail' look.
      // Color must match the background (slate-50 / #f8fafc)
      ctx.fillStyle = 'rgba(248, 250, 252, 0.25)'; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

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
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
