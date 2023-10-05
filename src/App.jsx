import { useState, useRef, useEffect } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);

  useEffect(() => {
    console.log(circle1, circle2, circle3);
  });
  return (
    <section>
      a
      <header>
        <section className="grid place-content-center m-8">
          <div
            ref={(el) => (circle1 = el)}
            className="h-32 w-32 bg-yellow-500 rounded-full m-4"
          ></div>
          <div
            ref={(el) => (circle2 = el)}
            className="h-32 w-32 bg-red-500 rounded-full m-4"
          ></div>
          <div
            ref={(el) => (circle3 = el)}
            className="h-32 w-32 bg-blue-500 rounded-full m-4"
          ></div>
        </section>
      </header>
    </section>
  );
}

export default App;
