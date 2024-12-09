import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    useEffect(() => {
        window.location.href = '/docs/intro';
    }, []);

    return (
        <Layout
            title={`${siteConfig.title}へようこそ！`}
            description="Yomogi Server Guide">
        </Layout>
    );
}
