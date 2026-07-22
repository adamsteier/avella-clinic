/**
 * Two-leaf sprig echoing the gold leaves woven through the "A" in the
 * Avella logo. Used as a quiet decorative accent, never as content.
 */
export function LeafMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M32 58C32 40 32 26 32 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 30C20 28 12 20 11 8C23 9 31 17 32 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 42C44 40 52 32 53 20C41 21 33 29 32 42Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
