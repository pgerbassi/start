import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Aprenda Idiomas de Forma Interativa",
  description: "Masterize sua linguagem de forma interativa e desafie-se constantemente.",
    generator: 'P6G Software'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
            <head>
        <script>
          {`
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; 
              n=f.fbq=function() {
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              }; 
              if(!f._fbq) f._fbq=n; 
              n.push=n; 
              n.loaded=!0; 
              n.version='2.0'; 
              n.queue=[]; 
              t=b.createElement(e); 
              t.async=!0; 
              t.src=v; 
              s=b.getElementsByTagName(e)[0]; 
              s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1309650653332807'); // Replace 'YOUR_PIXEL_ID' with your actual Pixel ID
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} 
               src="https://www.facebook.com/tr?id=1309650653332807&ev=PageView&noscript=1" 
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-gray-900 text-white`}>{children}

      </body>
    </html>
  )
}



import './globals.css'