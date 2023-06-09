import './globals.css'
import Navbar from "@/app/components/Navbar";
import MyProfileImg from "@/app/components/MyProfileImg";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="bg-slate-800">
    <Navbar/>
    <MyProfileImg/>
    {children}
    </body>
    </html>
  )
}
