
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css'
export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3004/items')
    const data = await res.json()

    return {
        props: { burgers: data }
    }
}

const Burgers = ({ burgers }) => {
    return (
        <div>
            <h1>Наши бургеры</h1>
            {burgers.map(burger => {
                return (
                    <Link className={styles.burgerCard} href={`/burgers/${burger.id}`} key={burger.id}>
                        <div className={styles.imageContainer}>
                            <Image layout='responsive' objectFit='cover' width={100} height={100} src={`${burger.image}`} alt={`${burger.name}`} />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}

export default Burgers
