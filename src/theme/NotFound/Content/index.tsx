import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

import styles from './styles.module.css';

// 既定の@theme/NotFound/Contentは「Page Not Found」の一行だけで、サイトの
// 他ページで作り込んだブランド(よもぎ色のヒーロー・角丸カード等)と
// 統一感が無かった。
//
// 注意: 以前はsrc/pages/404.tsxとして単体ページ形式で実装していたが、
// これだと静的生成された/404.htmlの初回表示だけは正しく出るものの、
// Reactのハイドレーション後(クライアント側の実際に存在しないURLへの
// ルーティング解決時)にDocusaurus既定のNotFoundへ静かに置き換わってしまう
// 不具合があった(React hydration mismatch, error #418/#423)。本番でも
// 実機確認で再現したため、正しい拡張ポイントである@theme/NotFound/Content
// をスウィズル(eject)する形に作り直した。これによりSSR/CSR両方で
// 一貫してこのコンポーネントが使われる。
export default function NotFoundContent({className}: Props): ReactNode {
    return (
        <main className={clsx('container', styles.main, className)}>
            <div className="container">
                <p className={styles.emoji} aria-hidden="true">
                    🌿
                </p>
                <Heading as="h1" className={styles.title}>
                    ページが見つかりませんでした
                </Heading>
                <p className={styles.lead}>
                    お探しのページは削除されたか、URLが変更された可能性があります。
                    <br />
                    下のリンクから探し直してみてください。
                </p>
                <div className={styles.buttons}>
                    <Link className="button button--primary button--lg" to="/">
                        🏠 トップページへ
                    </Link>
                    <Link className="button button--outline button--primary button--lg" to="/docs/living/how-to-join">
                        🌃 生活サーバーを見る
                    </Link>
                    <Link className={clsx('button button--lg', styles.wolfButton)} to="/docs/wolf/how-to-join">
                        🐺 マイクラ人狼を見る
                    </Link>
                </div>
                <p className={styles.help}>
                    見つからない場合は、<Link to="/docs/inquiry">お問い合わせ</Link>からご連絡ください。
                </p>
            </div>
        </main>
    );
}
