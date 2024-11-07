export type ApplicationLogoProps = {
  className?: string;
};
export default function ApplicationLogo({ className }: ApplicationLogoProps) {
  return <img className={className} src="/images/logo.png" alt="Logo" />;
}
