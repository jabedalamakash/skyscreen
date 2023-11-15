"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
   const pathname=usePathname();
//    console.log(pathname);

    const navData=[
        {id:1, href:"/", pathname:"/",title:"Home"},
        {id:2,href:"/videos", pathname:"/videos", title:"Videos"},
        {id:3,href:"/tv",pathname:"/tv",title:"TV"},
        {id:4,href:"/map",pathname:"/map",title:"Map"}
    ]
  return (
    <section className='my-10 w-[100%] sm:w-[80%] mx-auto'>
        

        <div className='flex justify-around gap-5 sm:gap-10'>
        {
           navData.map((navitem, index)=>{
            return (
      
                <nav key={index}>
                  <Link
               
                    href={navitem.href}
                    className={`link ${pathname === navitem.pathname ? " font-bold active text-red-600 ": "text-black"}`}
                  >
                    {navitem.title}
                  </Link>
                </nav>
             
            );
           }) 
        }
        </div>
    </section>
  )
}
