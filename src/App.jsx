import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "67DIDDYBLUD";
    const fontSize = 18;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#a855f7";
      ctx.font = `${fontSize}px 'VT323'`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 33);

    // CLICK TO ASCEND
    const ascend = () => {
      setClicks(c => c + 1);
      if (clicks >= 66) {
        document.body.innerHTML = `<h1 style="color:#f0f;font-size:300px;text-align:center;margin-top:30vh;font-family:Orbitron">67</h1>`;
        document.body.style.background = "#000";
      }
    };
    window.addEventListener("click", ascend);

    // AUTO PLAY CURSED AUDIO
    const play = () => audioRef.current?.play();
    document.addEventListener("click", play, { once: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("click", ascend);
    };
  }, [clicks]);

  return (
    <>
      <canvas ref={canvasRef} />
      <audio ref={audioRef} loop>
        <source src="/diddy.mp3" type="audio/mp3" />
      </audio>

      {/* PORTAL BACKGROUND */}
      <div className="portal">67</div>

      {/* FLOATING 67s */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-67"
          initial={{ y: -200, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight + 200 }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
          style={{ left: Math.random() * window.innerWidth }}
        >
          67
        </motion.div>
      ))}

      {/* MAIN AURA */}
      <motion.div
        initial={{ scale: 0, rotate: -720 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 3, type: "spring" }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center">
          <motion.h1
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-9xl md:text-[28rem] font-black tracking-tighter"
            style={{
              background: "linear-gradient(45deg, #a855f7, #ec4899, #f472b6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 80px #f0f, 0 0 160px #f0f"
            }}
          >
            67
          </motion.h1>

          <motion.h2
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-6xl md:text-9xl font-bold mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            THE DIDDY BLUD
          </motion.h2>

          <p className="text-4xl mt-10 text-purple-300 animate-pulse">
            ASCENDED • GOATED • UNDEFEATED
          </p>

          <div className="mt-20 space-x-10">
            <button className="px-20 py-10 bg-gradient-to-r from-purple-600 to-pink-600 text-5xl font-bold rounded-full hover:scale-125 transition shadow-2xl pointer-events-auto">
              ENTER 67
            </button>
            <button
              onClick={() => document.body.style.filter = "invert(1) hue-rotate(180deg) blur(2px)" + setTimeout(() => document.body.style.filter = "", 1500)}
              className="px-20 py-10 border-8 border-pink-500 text-5xl font-bold rounded-full hover:bg-pink-500 transition pointer-events-auto"
            >
              WITNESS
            </button>
          </div>

          <p className="mt-20 text-5xl text-pink-400 animate-bounce">
            CLICK ANYWHERE TO ASCEND
          </p>
        </div>
      </motion.div>

      <footer className="fixed bottom-0 w-full text-center py-8 bg-black/90 backdrop-blur text-4xl font-bold text-purple-400">
        © 2025 THE 67 DIDDY BLUD • MADE BY SEBASTIAN
      </footer>
    </>
  );
}
