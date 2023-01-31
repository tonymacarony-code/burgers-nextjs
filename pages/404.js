import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFoundPage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <p>That page cannot be found.</p>
            <p>Move to <Link href=''>Main</Link> </p>
        </div>
    )
}

export default NotFoundPage
