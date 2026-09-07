import React, {type ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

// タイトルは元々英語の翻訳キー既定値("Page Not Found")のままだったため、
// サイトが日本語単一ロケールであることに合わせて直接日本語にした。
export default function Index(): ReactNode {
    return (
        <>
            <PageMetadata title="ページが見つかりません" />
            <Layout>
                <NotFoundContent />
            </Layout>
        </>
    );
}
