import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const Layout = ({title, description, keywords, children})=>{

    return(
        <>
        <Head>
            <title> {title} </title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

        {/* sticky header start */}
        <Header />

        <main className='main-wrapper'>
            {children}
        </main>

        {/* footer start */}

        <Footer />
        </>
    )
}

Layout.defaultProps = {
    title:'Mirza Irtiza | Social media',
    description: 'Frontend developer',
    keywords: 'coding, websites, vscode, nextjs'
}

export default Layout