import React, {type ReactNode} from 'react';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';
import FeedbackWidget from '@site/src/components/FeedbackWidget';

// 全ドキュメントページの末尾(タグ・編集リンクの下、ページ送りの上)に
// フィードバックボタンを表示するためのwrap swizzle。
export default function DocItemFooterWrapper(): ReactNode {
    return (
        <>
            <OriginalDocItemFooter />
            <FeedbackWidget />
        </>
    );
}
