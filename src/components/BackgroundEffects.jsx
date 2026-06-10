function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Main Red Glow */}
      <div
        className="
        absolute
        top-[-150px]
        left-[15%]
        w-[700px]
        h-[700px]
        bg-red-600/15
        rounded-full
        blur-[220px]
        animate-pulse
      "
      />

      {/* Orange Glow */}
      <div
        className="
        absolute
        bottom-[-200px]
        right-[10%]
        w-[600px]
        h-[600px]
        bg-orange-500/10
        rounded-full
        blur-[220px]
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
        w-[400px]
        h-[400px]
        bg-red-500/5
        rounded-full
        blur-[180px]
      "
      />

    </div>
  );
}

export default BackgroundEffects;