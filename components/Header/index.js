import Link from 'next/link'
import Image from 'next/image'
import { Home_url } from '../../contants/Pathname'

import Logo from '@/images/logo-ipsum.png';
export const Header = ()=>{
    return(
        <>
            <header className='header'>
                <div className="container p-0">
                    <div className='row'> 
                        <div className='col-12 col-md-2 col-lg-2'>
                            <Link href={Home_url}>
                                <a className='logo-wrap'> 
                                    <Image 
                                        src={Logo}
                                        alt="logo"
                                        width="100%"
                                        height="100%"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header