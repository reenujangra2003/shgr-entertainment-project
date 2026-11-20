
type LoaderProps = {
  text?: string;
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
};

export default function Loader({
  text = "Loading...",
  size = "md",
  fullScreen = false,
}: LoaderProps) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-9 w-9 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-4 ${
        fullScreen ? "min-h-screen" : "min-h-[180px] w-full"
      }`}
    >
      {/* Animated Spinner */}
      <div
        aria-hidden="true"
        className={`
          ${sizes[size]}
          animate-spin
          rounded-full
          border-[var(--border-gold)]
          border-t-[var(--gold-dark)]
        `}
      />

      {/* Loading Text */}
      {text && (
        <p className="text-center text-xs font-semibold tracking-wide text-[var(--text-secondary)]">
          {text}
        </p>
      )}

      <span className="sr-only">Loading content</span>
    </div>
  );
}
