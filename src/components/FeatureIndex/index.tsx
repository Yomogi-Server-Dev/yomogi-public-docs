import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {FeatureCategory} from '@site/src/data/featureIndexTypes';
import styles from './styles.module.css';

type Props = {
    title: string;
    lead: string;
    categories: FeatureCategory[];
};

/**
 * サーバーの全機能を、カテゴリごとにタップ可能なタイルとして一覧表示する汎用コンポーネント。
 * 項目数が多いため、「アイコン+短いラベル」だけの密度の高いグリッドにして一覧性を優先した
 * (Jest/Ionic/Taro等、機能数が多いサイトの索引ページでよく使われる構成)。
 * 各タイルは docs/<item.path> の詳細ページへ直接リンクする。
 * 生活サーバー・マイクラ人狼、どちらのトップページセクションにも共通で使う。
 */
export default function FeatureIndex({title, lead, categories}: Props): ReactNode {
    return (
        <section className={styles.section}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    {title}
                </Heading>
                <p className={styles.sectionLead}>{lead}</p>
                {categories.map((group) => (
                    <div key={group.category} className={styles.categoryBlock}>
                        <h3 className={styles.categoryTitle}>{group.category}</h3>
                        <div className={styles.grid}>
                            {group.items.map((item) => (
                                <Link key={item.path} to={`/docs/${item.path}`} className={styles.tile}>
                                    <span className={styles.tileEmoji} aria-hidden="true">
                                        {item.emoji}
                                    </span>
                                    <span className={styles.tileTitle}>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
