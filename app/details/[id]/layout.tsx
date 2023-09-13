import '../../globals.css'


export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  )
}
