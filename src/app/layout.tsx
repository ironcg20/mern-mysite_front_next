// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

import Navbar from "../components/navbar"
// import TodoShow from "../components/todoShow"
// import { useClient } from 'next/client';

export default function Layout() {

  // useClient();s
  return (
    <>
      <Navbar />
      <main>
        {/* <TodoShow /> */}
      </main>
    </>
  )
}