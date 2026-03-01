import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000; // 2 seconds
    const targetEnd = parseInt(end) || 0;
    const increment = targetEnd / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= targetEnd) {
        setCount(targetEnd);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <h3
      ref={ref}
      className="text-5xl font-bold text-white"
    >
      {count}
      {suffix}
    </h3>
  );
};

const StatsSection = ({ data }) => {
  const defaultStats = [
    { end: 2011, label: "Established" },
    { end: 3000, label: "Clients Trust Us" },
    { end: 4, label: "Branch Locations", suffix: "" },
    { end: 10, label: "Award Wins" },
  ];

  const finalStats = data?.stats || defaultStats;

  return (
    <section className="bg-[#1f4c6b] py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-10">

        {finalStats.map((stat, index) => (
          <div key={index}>
            <Counter end={stat.end} suffix={stat.suffix !== undefined ? stat.suffix : "+"} />
            <p className="text-white mt-3">{stat.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;

