import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {livingFeatureCategories} from '@site/src/data/livingFeatures';
import styles from './styles.module.css';

/**
 * 生活サーバーの全機能を、カテゴリごとにタップ可能なタイルとして一覧表示する。
 * 項目数が多いため、「アイコン+短いラベル」だけの密度の高いグリッドにして一覧性を優先した
 * (Jest/Ionic/Taro等、機能数が多いサイトの索引ページでよく使われる構成)。
 * 各タイルは docs/living/commands/<slug> の詳細ページへ直接リンクする。
 */
export default function ServerFeatureIndex(): ReactNode {
    return (
        <section className={styles.section}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    🗺️ 生活サーバーの全機能
                </Heading>
                <p className={styles.sectionLead}>
                    気になる項目をタップすると、詳しい使い方のページに移動します。
                </p>
                {livingFeatureCategories.map((group) => (
                    <div key={group.category} className={styles.categoryBlock}>
                        <h3 className={styles.categoryTitle}>{group.category}</h3>
                        <div className={styles.grid}>
                            {group.items.map((item) => (
                                <Link
                                    key={item.slug}
                                    to={`/docs/living/commands/${item.slug}`}
                                    className={styles.tile}>
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
