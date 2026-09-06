import React, {type ReactNode} from 'react';
import BackToTop from '@site/src/components/BackToTop';

// 全ページ(トップページだけでなく、ドキュメント・ブログも含む)に
// 「トップに戻る」ボタンを表示するためのテーマルート。
// docs/wolf/supplement/all_roles等、長いページで特に有効。
export default function Root({children}: {children: ReactNode}): ReactNode {
    return (
        <>
            {children}
            <BackToTop />
        </>
    );
}
