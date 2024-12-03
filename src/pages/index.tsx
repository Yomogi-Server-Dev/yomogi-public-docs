import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    useEffect(() => {
        window.location.href = '/guide-docs/docs/intro';
    }, []);

    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
        </Layout>
    );
}