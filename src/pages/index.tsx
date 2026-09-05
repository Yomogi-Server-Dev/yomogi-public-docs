import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import FeatureIndex from '@site/src/components/FeatureIndex';
import BackToTop from '@site/src/components/BackToTop';
import {livingFeatureCategories} from '@site/src/data/livingFeatures';
import {wolfFeatureCategories} from '@site/src/data/wolfFeatures';

import styles from './index.module.css';

// 以前は「/」を開くと即座に /docs/intro へリダイレクトしており、
// トップページ自体が存在しない状態だった(React Native/Ionic/Jest等の
// 参考サイトはいずれも「まず何のサーバーか・何ができるか」を伝える
// ヒーローセクションを持っている)。同じ考え方で、生活サーバー/マイクラ人狼
// それぞれへの入口を最初に見せるトップページを新設する。
function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <p className={styles.heroDescription}>
                    Minecraft統合版で遊べる「生活・経済サーバー」と、毎週土曜21:30開催の
                    「マイクラ人狼イベント」。2つのサービスを無料で提供しています。
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/living/how-to-join">
                        🌃 生活サーバーを見る
                    </Link>
                    <Link
                        className={clsx('button button--lg', styles.wolfButton)}
                        to="/docs/wolf/how-to-join">
                        🐺 マイクラ人狼を見る
                    </Link>
                </div>
                <div className={styles.statsBar}>
                    <StatPill number="無料" label="参加費" />
                    <StatPill number="275種" label="釣れる魚" />
                    <StatPill number="41種" label="人狼の役職" />
                    <StatPill number="24h" label="生活サーバー稼働" />
                </div>
                <nav className={styles.quickNav} aria-label="ページ内ナビゲーション">
                    <a href="#living-features" className={styles.quickNavLink}>
                        🗺️ 生活サーバーの機能を見る ↓
                    </a>
                    <a href="#wolf-features" className={clsx(styles.quickNavLink, styles.quickNavLinkWolf)}>
                        🐺 人狼の機能を見る ↓
                    </a>
                </nav>
            </div>
        </header>
    );
}

function StatPill({number, label}: {number: string; label: string}) {
    return (
        <div className={styles.statPill}>
            <span className={styles.statNumber}>{number}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}

function WolfHighlight() {
    return (
        <section className={styles.wolfSection}>
            <div className="container">
                <div className={clsx('card', styles.wolfCard)}>
                    <div className="card__body">
                        <Heading as="h2">🐺 マイクラ人狼イベント</Heading>
                        <p>
                            毎週土曜日21:30から開催。会議・投票を行いながら、弓や狙撃銃を使ったPvPで
                            相手陣営の全滅を目指します。遊べる役職は驚異の41種類！
                            初めての参加でも安心のサポート体制です。
                        </p>
                        <Link className={clsx('button', styles.wolfButton)} to="/docs/wolf/how-to-join">
                            参加方法を見る →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="よもぎサーバー(YOMOGI Server) 公式ガイド。生活・経済サーバーとマイクラ人狼イベントの遊び方をご案内します。">
            <HomepageHeader />
            <main>
                <FeatureIndex
                    id="living-features"
                    eyebrow="🟢 24時間稼働中"
                    title="🗺️ 生活サーバーの全機能"
                    lead="気になる項目をタップすると、詳しい使い方のページに移動します。"
                    categories={livingFeatureCategories}
                />
                <WolfHighlight />
                <FeatureIndex
                    id="wolf-features"
                    eyebrow="📅 毎週土曜 21:30開催"
                    title="🐺 マイクラ人狼の全機能"
                    lead="気になる項目をタップすると、詳しい使い方のページに移動します。"
                    categories={wolfFeatureCategories}
                    accent="var(--wolf-accent)"
                    muted
                />
            </main>
            <BackToTop />
        </Layout>
    );
}
