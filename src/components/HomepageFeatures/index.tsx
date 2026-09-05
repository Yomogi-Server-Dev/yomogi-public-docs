import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    emoji: string;
    title: string;
    description: ReactNode;
};

// 生活・経済サーバーの特徴。intro.md の紹介文から代表的なものを抜粋している
// (画像素材が無いため、絵文字+短い説明のカードで表現する)。
const FeatureList: FeatureItem[] = [
    {
        emoji: '🏢',
        title: '会社制度',
        description: '仲間と一緒に本格的な会社経営が楽しめます。役職や共有資産のしくみも充実。',
    },
    {
        emoji: '🎙️',
        title: '近距離VC',
        description: '近くにいるプレイヤーと自然に会話できる、近距離ボイスチャット機能。',
    },
    {
        emoji: '🏪',
        title: 'チェストショップ',
        description: '手に入れたアイテムを自分の店で販売。価格も自由に設定できます。',
    },
    {
        emoji: '🎣',
        title: '釣り(275種類)',
        description: 'バニラには無いオリジナルの魚も多数。集めて図鑑を埋めよう。',
    },
    {
        emoji: '🎰',
        title: 'ガチャ',
        description: 'ガチャを引いてレアアイテムをゲット。図鑑コンプリートで特典も。',
    },
    {
        emoji: '🚗',
        title: '車・島づくり',
        description: '車に乗って生活ワールドを駆け回ったり、島を作って自分だけの生活を楽しんだり。',
    },
];

function Feature({emoji, title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className={clsx('card', styles.featureCard)}>
                <div className="card__body">
                    <div className={styles.featureEmoji} aria-hidden="true">
                        {emoji}
                    </div>
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    生活・経済サーバーでできること
                </Heading>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
