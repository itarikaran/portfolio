function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Main Red Glow */}
      <div
        className="
        absolute
        top-[-180px]
        left-[8%]
        w-[760px]
        h-[760px]
        bg-red-600/10
        rounded-full
        blur-[260px]
        animate-pulse
      "
      />

      {/* Orange Glow */}
      <div
        className="
        absolute
        bottom-[-220px]
        right-[6%]
        w-[680px]
        h-[680px]
        bg-orange-500/8
        rounded-full
        blur-[260px]
        animate-pulse
      "
      />

      {/* Center Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[460px]
        h-[460px]
        bg-red-500/4
        rounded-full
        blur-[180px]
      "
      />

    </div>
  );
}

export default BackgroundEffects;