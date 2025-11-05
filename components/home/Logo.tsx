import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="mx-auto">
      <div className="group flex items-center gap-3">
        <div className="relative">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="drop-shadow-glow"
          >
            <circle
              cx="24"
              cy="24"
              r="23"
              fill="#0f172a"
              stroke="#1db954"
              strokeWidth="2"
            />
            <path
              d="M14 18h20v14H14z"
              fill="none"
              stroke="#1db954"
              strokeWidth="3"
            />
            <path
              d="M20 18v-4h8v4"
              fill="none"
              stroke="#1db954"
              strokeWidth="3"
            />
            <circle
              cx="24"
              cy="24"
              r="8"
              fill="none"
              stroke="#1db954"
              strokeWidth="2"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 24 24"
                to="360 24 24"
                dur="12s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        <span className="text-2xl font-bold text-white">ProfileSync</span>
      </div>
    </Link>
  );
}

export default Logo;
