import React, { useEffect } from "react";

function Main1() {
  useEffect(() => {
    const phrases = ["Frontend Developer", "Web Designer", "Creative Coder", "Ui/Ux Designer", "Aspiring Geologist"];
    let idx = 0;
    let i = 0;
    let forward = true;
    const el = document.getElementById("typing");

    function tick() {
      const full = phrases[idx];

      if (forward) {
        i++;
        el.textContent = full.slice(0, i);
        if (i === full.length) {
          forward = false;
          setTimeout(tick, 1200); // pause at the end of a word
          return;
        }
      } else {
        i--;
        el.textContent = full.slice(0, i);
        if (i === 0) {
          forward = true;
          idx = (idx + 1) % phrases.length;
        }
      }

      setTimeout(tick, forward ? 100 : 50); // typing speed (forward: slower, backward: faster)
    }

    tick();
  }, []);

  return (
    <main>
      <section className="sec1">
        <div className="text">
          <h1>Hi, I’m Nelson 👋</h1>
            <span className="typing" id="typing">
              modern websites
            </span>{" "}          
          <div className="sub">
            I design & build{" "}

            — clean, responsive and futuristic.
          </div>
          <div className="btn" style={{ marginTop: "1.5rem" }}>
            <button className="pro" style={{ marginRight: "1.7rem" }}>
              Explore Projects 🚀
            </button>
            <button className="cm">Contact Me 💬</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main1;
