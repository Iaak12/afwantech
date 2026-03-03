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
      className="text-4xl md:text-5xl font-black text-white"
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

  const finalStats = (data?.stats && data.stats.length > 0) ? data.stats : defaultStats;

  return (
    <section className="bg-gradient-to-br from-[#1f4c6b] to-[#123447] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-y-12 md:gap-10">

        {finalStats.map((stat, index) => {
          const endValue = stat.end !== undefined ? stat.end : (stat.number !== undefined ? stat.number : 0);
          const labelValue = stat.label || stat.title || "";
          return (
            <div key={index}>
              <Counter end={endValue} suffix={stat.suffix !== undefined ? stat.suffix : "+"} />
              <p className="text-white mt-3">{labelValue}</p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default StatsSection;

