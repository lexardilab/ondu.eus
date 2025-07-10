import './globals.css'

export const metadata = {
    title: 'Ondu Centro de nutrición y salud',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    )
  }
  