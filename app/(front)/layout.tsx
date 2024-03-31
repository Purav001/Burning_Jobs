export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className=" mx-auto w-full flex-grow">{children}</main>
}
