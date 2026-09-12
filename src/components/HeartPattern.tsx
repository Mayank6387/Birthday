function HeartPattern() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hearts" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M24 40 C 12 28, 4 22, 4 14 C 4 8, 9 4, 14 4 C 18 4, 22 7, 24 10 C 26 7, 30 4, 34 4 C 39 4, 44 8, 44 14 C 44 22, 36 28, 24 40 Z"
              fill="#e91e8c"
              opacity="0.07"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hearts)" />
      </svg>
    </div>
  );
}

export default HeartPattern
