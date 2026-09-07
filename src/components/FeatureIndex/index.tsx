import React, {type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {FeatureCategory} from '@site/src/data/featureIndexTypes';
import styles from './styles.module.css';

type Props = {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    lead: string;
    categories: FeatureCategory[];
    accent?: string;
    muted?: boolean;
};

/**
 * サーバーの全機能を、カテゴリごとにタップ可能なタイルとして一覧表示する汎用コンポーネント。
 * 項目数が多いため、「アイコン+短いラベル」だけの密度の高いグリッドにして一覧性を優先した
 * (Jest/Ionic/Taro等、機能数が多いサイトの索引ページでよく使われる構成)。
 * 各タイルは docs/<item.path> の詳細ページへ直接リンクする。
 * 生活サーバー・マイクラ人狼、どちらのトップページセクションにも共通で使う。
 * accent/mutedで見出し色・背景を切り替え、2つのセクションを見た目でも区別できるようにしている。
 * アイコンは絵文字ではなくlucide-reactのSVGコンポーネントを使い、線の太さ(stroke)を
 * 揃えて統一感のある「作り込まれた」印象にしている。
 */
export default function FeatureIndex({id, eyebrow, title, lead, categories, accent, muted}: Props): ReactNode {
    const accentStyle = accent ? ({'--feature-accent': accent} as CSSProperties) : undefined;
    return (
        <section id={id} className={clsx(styles.section, muted && styles.sectionMuted)} style={accentStyle}>
            <div className="container">
                <p className={styles.eyebrow}>{eyebrow}</p>
                <Heading as="h2" className={styles.sectionTitle}>
                    {title}
                </Heading>
                <p className={styles.sectionLead}>{lead}</p>
                {categories.map((group) => (
                    <div key={group.category} className={styles.categoryBlock}>
                        <h3 className={styles.categoryTitle}>
                            <group.icon className={styles.categoryIcon} aria-hidden="true" />
                            {group.category}
                        </h3>
                        <div className={styles.grid}>
                            {group.items.map((item) => (
                                <Link key={item.path} to={`/docs/${item.path}`} className={styles.tile}>
                                    <item.icon className={styles.tileIcon} aria-hidden="true" />
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
