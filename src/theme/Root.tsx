import React, {type ReactNode} from 'react';
import BackToTop from '@site/src/components/BackToTop';
import ReadingProgress from '@site/src/components/ReadingProgress';

// 全ページ(トップページだけでなく、ドキュメント・ブログも含む)に
// 「トップに戻る」ボタンと読み進み具合のプログレスバーを表示するための
// テーマルート。docs/wolf/supplement/all_roles等、長いページで特に有効。
export default function Root({children}: {children: ReactNode}): ReactNode {
    return (
        <>
            <ReadingProgress />
            {children}
            <BackToTop />
        </>
    );
}
