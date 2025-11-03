import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "./Header.jsx";
import Main1 from "./Input.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import Get from "./Get.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = canvasRef.current;
    const cv = document.createElement("canvas");
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    wrap.appendChild(cv);
    const ctx = cv.getContext("2d");
    let w = cv.width,
      h = cv.height,
      parts = [];

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function reset() {
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = w;
      cv.height = h;
      parts = [];
      for (let i = 0; i < 80; i++) {
        parts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: rand(0.3, 1.6),
          vx: rand(-0.2, 0.2),
          vy: rand(-0.2, 0.2),
        });
      }
    }

    reset();
    window.addEventListener("resize", reset);

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,240,255,0.06)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i],
            b = parts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d = dx * dx + dy * dy;
          if (d < 9000) {
            ctx.strokeStyle = "rgba(122,92,255," + 0.00008 * (9000 - d) + ")";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      frame();
      requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener("resize", reset);
      wrap.removeChild(cv);
    };
  }, []);

  return (
    <>
      <div ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: -1 }}></div>
      <Nav />

      <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.8, ease: "easeInOut" }}
>
  <Main1 />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
  viewport={{ once: true }}
>
  <About />
</motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.6, ease: "easeInOut" }}
  viewport={{ once: true }}
>
  <Project />
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.7, ease: "easeInOut" }}
  viewport={{ once: true }}
>
  <Skills />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.8, ease: "easeInOut" }}
  viewport={{ once: true }}
>
  <Get />
</motion.div>


      <Footer />
    </>
  );
}

export default App;
