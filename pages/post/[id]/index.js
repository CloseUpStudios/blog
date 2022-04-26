import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Link from 'next/link';

const ArticleView = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header/>
            <p>Article: {id}</p>      
            <Link href="/"><a>Go back</a></Link>  
        </>
    )
}

export default ArticleView;