export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="main-wrapper">{children}</main>
}
