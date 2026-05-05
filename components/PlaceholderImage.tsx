interface PlaceholderImageProps {
  className?: string
  label?: string
}

export default function PlaceholderImage({ className = '', label = 'Imagem em breve' }: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-cream-dark gap-2 ${className}`}
      aria-label={label}
      role="img"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b4a1f"
        strokeWidth="1.5"
        aria-hidden="true"
        opacity="0.45"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10.5" r="1.5" />
        <path d="m21 15-5-5L5 19" />
      </svg>
      <span className="text-brown-mid/50 text-xs font-dmsans">{label}</span>
    </div>
  )
}
