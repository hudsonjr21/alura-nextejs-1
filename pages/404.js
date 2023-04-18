import Link from 'next/link';


export default function Page404() {
    return (
        <div>
            <h1>
                ERROR 404 -  voce se perdeu, volte para home
            </h1>
            <Link href="/">
                Ir para Home
            </Link>
        </div>
    )
}