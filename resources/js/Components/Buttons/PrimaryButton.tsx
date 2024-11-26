export default function PrimaryButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-primary text-white hover:bg-primary-dark rounded-lg px-4 py-2 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
