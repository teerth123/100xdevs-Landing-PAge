"use client";

export default function Book() {
  return (
    <div
      className="h-93.75 w-75 relative rounded-[12.5px] bg-linear-to-r from-[#D9D9D9] to-[#D6D7D6] overflow-hidden"
      style={{ boxShadow: "-18px 18px 40px rgba(0,0,0,0.15)" }}
    >
      <div className="h-full w-10.75 bg-[#262626] rounded-l-[12.5px] flex justify-center">
        <div className="h-full w-1/2 bg-white opacity-20 blur-[20px]" />
      </div>

      <svg
        className="absolute top-0 right-5"
        width="40"
        height="60"
        viewBox="0 0 40 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2.5C0 1.11929 1.11929 0 2.5 0H37.5C38.8807 0 40 1.11929 40 2.5V55.6475C40 57.577 37.907 58.779 36.2397 57.8067L21.26 49.0683C20.4832 48.614 19.5168 48.614 18.74 49.0683L3.76018 57.8067C2.09296 58.779 0 57.577 0 55.6475V2.5Z"
          fill="#0EA5E9"
        />
      </svg>

      <h1 className="absolute left-1/2 -translate-x-1/2 top-[34%] z-10 font-semibold text-[20px] text-left whitespace-nowrap pl-3">
        100xSchool Combined <br /> Bootcamp
      </h1>

      <div className="absolute right-3 bottom-3 flex items-center gap-1">
        <span className="text-black text-[24px] font-bold">100</span>
        <span className="text-[#0EA5E9] text-[24px] font-bold">x</span>
        <span className="text-black text-[24px] font-bold">Devs</span>
      </div>
    </div>
  );
}
