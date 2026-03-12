export const metadata = {
  title: "Threads Affiliate Generator",
  description: "AI generator untuk konten Threads affiliate",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily:"Arial, sans-serif"}}>
        {children}
      </body>
    </html>
  )
}
