
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  ${inter.className}`}
    >
  <Navbar/>

     

    </main>
  )
}
