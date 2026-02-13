"use client";
import { useState, useEffect } from "react";
import { Button } from "../button";

export default function Footer() {
  const names = [
    { name: "Harkirat", color: "#EF4444" },
    { name: "Kirat", color: "#06B6D4" },
    { name: "Raman", color: "#0EA5E9" },
    { name: "Saransh", color: "#10B981" },
    { name: "Akshay", color: "#14B8A6" },
    { name: "Varun", color: "#22C55E" },
    { name: "Priya", color: "#6366F1" },
    { name: "Rohit", color: "#8B5CF6" },
    { name: "Neha", color: "#D946EF" },
    { name: "Amit", color: "#EAB308" },
    { name: "Sagar", color: "#EF4444" },
    { name: "Anjali", color: "#06B6D4" },
    { name: "Vikram", color: "#0EA5E9" },
    { name: "Meera", color: "#10B981" },
    { name: "Kunal", color: "#14B8A6" },
  ];

  const [radius, setRadius] = useState(400); // Default fallback value

  useEffect(() => {
    // Calculate radius only on client side after hydration
    const calculateRadius = () => {
      return Math.min(window.innerWidth, window.innerHeight) * 0.4; // 0.4 = 80% / 2 (radius is half diameter)
    };
    
    setRadius(calculateRadius());

    // Recalculate on window resize
    const handleResize = () => {
      setRadius(calculateRadius());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pointerDistance = radius - 80; // Pointers very close to names (80px gap)
  const centerX = 0;
  const centerY = 0;

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Center content */}
          <div className="absolute z-50 flex flex-col items-center gap-5">
            <h1 className="font-bold text-[40px] text-left">
              Why build alone?
            </h1>
            <Button variant="blue">Join us</Button>
          </div>

          {/* Names and pointers in circle */}
          {names.map((item, index) => {
            const angle = (index / names.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            // Position for the pointer (inside the circle, very close to names)
            const pointerX = centerX + pointerDistance * Math.cos(angle);
            const pointerY = centerY + pointerDistance * Math.sin(angle);
            
            // Calculate rotation angle for the pointer to point toward center
            const pointerRotation = (angle * 180) / Math.PI + 90;

            return (
              <div key={index}>
                {/* Name box on the arc */}
                <div
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <h1
                    className="rounded-[5px] p-2.5 w-fit h-fit text-white text-[24px] font-medium"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name}
                  </h1>
                </div>

                {/* Pointer inside the circle */}
                <div
                  className="absolute"
                  style={{
                    left: `calc(50% + ${pointerX}px)`,
                    top: `calc(50% + ${pointerY}px)`,
                    transform: `translate(-50%, -50%) rotate(${pointerRotation}deg)`,
                  }}
                >
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.84084 19.1309C1.7698 19.2002 1.67955 19.2466 1.58182 19.264C1.48409 19.2814 1.38339 19.269 1.29279 19.2284C1.20219 19.1878 1.12589 19.121 1.07379 19.0365C1.02168 18.952 0.996186 18.8538 1.00061 18.7546L1.37284 1.48869C1.37521 1.38366 1.4106 1.28205 1.47399 1.19827C1.53737 1.1145 1.62553 1.05282 1.72596 1.02198C1.82638 0.991149 1.93397 0.99273 2.03345 1.0265C2.13292 1.06027 2.21924 1.12451 2.28013 1.21011L5.93854 6.36917C6.14494 6.66078 6.42569 6.89177 6.75159 7.03814C7.0775 7.1845 7.43666 7.2409 7.79174 7.20147L14.0783 6.49401C14.1827 6.48244 14.2881 6.50406 14.3795 6.55579C14.471 6.60752 14.5438 6.68673 14.5876 6.78219C14.6315 6.87765 14.6442 6.98449 14.6239 7.08757C14.6036 7.19064 14.5514 7.2847 14.4746 7.3564L1.84084 19.1309Z"
                      stroke={item.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </>
  );
}
