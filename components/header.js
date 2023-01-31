import { SiMcdonalds } from 'react-icons/si'
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <div>
                <SiMcdonalds />
            </div>
            <nav>

                <Link href='/'>Home</Link>
                <Link href='/about'>About us</Link>
                <Link href='/reviews'>Reviews</Link>
                <Link href='/burgers'>Products</Link>


            </nav>
        </header>
    )
}

export default Header
