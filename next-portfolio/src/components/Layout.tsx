export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="grid min-h-screen content-between">{children}</div>;
}
