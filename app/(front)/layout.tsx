export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="mx-auto flex-grow">{children}</main>
}
