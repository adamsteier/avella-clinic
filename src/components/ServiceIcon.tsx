const paths: Record<string, React.ReactNode> = {
  "family-medicine": (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.4" />
      <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M15.5 20c.2-2.3 1.8-3.8 4-3.8 .5 0 1 .1 1.5 .3" />
    </>
  ),
  "seniors-health": (
    <>
      <path d="M12 20s-6.5-4.2-8.5-8A4.6 4.6 0 0 1 12 7.6 4.6 4.6 0 0 1 20.5 12c-2 3.8-8.5 8-8.5 8Z" />
      <path d="M6 12h3l1.5-2.5L13 14l1.5-2H18" />
    </>
  ),
  "preventive-care": (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
  "womens-health": (
    <>
      <path d="M12 4c1.8 2 2.8 3.8 2.8 5.6a2.8 2.8 0 1 1-5.6 0C9.2 7.8 10.2 6 12 4Z" />
      <path d="M12 12.5V20M8.5 17h7" />
    </>
  ),
  "childrens-health": (
    <>
      <circle cx="12" cy="9" r="4" />
      <path d="M8.6 6.5C7.8 6.3 7 5.6 7 4.6 7 3.6 7.8 3 8.8 3c.9 0 1.6.5 1.8 1.3" />
      <path d="M15.4 6.5c.8-.2 1.6-.9 1.6-1.9 0-1-.8-1.6-1.8-1.6-.9 0-1.6.5-1.8 1.3" />
      <path d="M5.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
    </>
  ),
};

export function ServiceIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[slug]}
    </svg>
  );
}
