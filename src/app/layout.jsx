import './globals.css'

export const metadata = {
    title: 'Mi web multidioma',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    )
  }
  