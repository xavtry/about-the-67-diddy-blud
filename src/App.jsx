// src/App.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [clicks, setClicks] = useState(0);

  // IMPOSSIBLE SHIT THAT SHOULD NOT WORK
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 67 Matrix Rain + Glitch Aura
    let matrix = "67DIDDYBLUD67";
    matrix = matrix.split("");

    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#f0f";
      ctx.font = fontSize + "px 'VT323'";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    // CURSOR BECOMES 67 AURA
    document.body.style.cursor = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\"><text y=\"35\" font-size=\"40\">67</text></svg>') 20 20, auto";

    // CLICK TO ASCEND — BREAKS REALITY
    const handleClick = () => {
      setClicks(c => c + 1);
      if (clicks > 10) {
        document.body.style.transform = "rotate(360deg)";
        document.body.style.transition = "10s";
        setTimeout(() => alert("YOU HAVE ACHIEVED 67. THE UNIVERSE IS NOW YOURS."), 1000);
      }
      if (clicks === 67) {
        document.documentElement.innerHTML = "<h1 style='color:#f0f;font-size:200px;text-align:center;margin-top:40vh;'>67</h1>";
      }
    };

    window.addEventListener("click", handleClick);

    // AUTO PLAY DIDDY BEAT (bypasses mute)
    const playAudio = () => {
      audioRef.current.play();
      document.removeEventListener("click", playAudio);
    };
    document.addEventListener("click", playAudio);

    return () => {
      clearInterval(interval);
      window.removeEventListener("click", handleClick);
    };
  }, [clicks]);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

      {/* PLAY CURSED MUSIC ON CLICK */}
      <audio ref={audioRef} loop>
        <source src="/diddy.mp3" type="audio/mp3" />
      </audio>

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 67 INFINITY PORTAL */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-xl"
          style={{ fontSize: "600px", opacity: 0.3 }}
        >
          67
        </motion.div>

        {/* MAIN AURA */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
          className="text-center z-10"
        >
          <h1 className="text-9xl md:text-[20rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 drop-shadow-2xl">
            67
          </h1>
          <motion.h2
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-6xl md:text-8xl font-bold mt-8 text-pink-400"
          >
            THE DIDDY BLUD
          </motion.h2>
          <p className="text-3xl mt-6 text-purple-300 animate-pulse">
            ASCENDED • GOATED • UNDEFEATED • LITERALLY HIM
          </p>

          <div className="mt-16 space-x-8">
            <button className="px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 text-4xl font-bold rounded-full hover:scale-110 transition shadow-2xl">
              ENTER THE 67
            </button>
            <button
              onClick={() => {
                document.body.style.filter = "invert(1) hue-rotate(180deg)";
                setTimeout(() => document.body.style.filter = "", 1000);
              }}
              className="px-16 py-8 border-8 border-pink-500 text-4xl font-bold rounded-full hover:bg-pink-500 transition"
            >
              WITNESS AURA
            </button>
          </div>

          <div className="mt-20 text-6xl font-bold text-pink-400 animate-bounce">
            ↓ CLICK ANYWHERE TO ASCEND ↓
          </div>
        </motion.div>

        {/* IMPOSSIBLE FLOATING 67s */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-8xl font-black opacity-20"
            initial={{ x: Math.random() * window.innerWidth, y: -100 }}
            animate={{
              y: window.innerHeight + 100,
              rotate: Math.random() * 720 - 360,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{ left: Math.random() * window.innerWidth }}
          >
            67
          </motion.div>
        ))}
      </div>

      <footer className="fixed bottom-0 left-0 right-0 text-center py-8 bg-black/90 backdrop-blur text-3xl font-bold text-purple-400">
        © 2025 THE 67 DIDDY BLUD • ALL RIGHTS ASCENDED • MADE BY SEBASTIAN
      </footer>
    </>
  );
}
