import {Sheet, SheetTrigger,SheetContent, SheetHeader, SheetTitle} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default function Header(){
    return(
        <header className='p-2 border-b-[1px] sm:border-none flex justify-center fixed top-0 left-0 w-full bg-white shadow-md z-50  '>
            <div className='flex justify-between w-full max-w-[1200px]'>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        width={130}
                        height={130}
                        alt='Logo portal Sccp'
                    />
                </Link>

                <nav className='flex justify-end sm:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='#'>Sobre</Link></li>
                                <li><Link href='#'>Tutorial</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
                <nav className=' w-1/3 flex justify-around max-sm:hidden'>
                    <Link href='/'>Home</Link>
                    <Link href='#'>Sobre</Link>
                    <Link href="#">Tutorias</Link>
                </nav>
                </div>
            
        </header>
    )
}