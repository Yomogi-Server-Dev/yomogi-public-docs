import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './404.module.css';

// Docusaurus既定の404ページは「Page Not Found」の一行だけで、サイトの
// 他ページで作り込んだブランド(よもぎ色のヒーロー・角丸カード等)と
// 統一感が無かった。移設・改名でリンク切れが起きた際も迷わず戻れるよう、
// トップページと同じ導線(生活サーバー/マイクラ人狼への入口)を用意する。
export default function NotFound(): ReactNode {
    return (
        <Layout title="ページが見つかりません">
            <main className={styles.main}>
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
                        <Link className="button button--outline button--lg" to="/docs/living/how-to-join">
                            🌃 生活サーバーを見る
                        </Link>
                        <Link className={`button button--outline button--lg ${styles.wolfButton}`} to="/docs/wolf/how-to-join">
                            🐺 マイクラ人狼を見る
                        </Link>
                    </div>
                    <p className={styles.help}>
                        見つからない場合は、<Link to="/docs/inquiry">お問い合わせ</Link>からご連絡ください。
                    </p>
                </div>
            </main>
        </Layout>
    );
}
