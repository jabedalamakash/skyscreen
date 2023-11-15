import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import VideoApp from '@/components/VideoApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body suppressHydrationWarning className={inter.className}>
        <NavBar/>
        {/* <VideoApp> */}
        {children}
        {/* </VideoApp> */}

        </body>
    </html>
  )
}
