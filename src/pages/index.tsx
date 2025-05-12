import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}へようこそ！`}
            description="Yomogi Server Guide">
            <Head>
                <meta httpEquiv="refresh" content="0;url=/docs/intro" />
            </Head>
            <div style={{padding: '2rem', textAlign: 'center'}}>
                リダイレクト中...
            </div>
        </Layout>
    );
}
