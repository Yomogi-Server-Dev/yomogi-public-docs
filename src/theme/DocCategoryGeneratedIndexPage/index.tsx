import React, {type ReactNode} from 'react';
import OriginalDocCategoryGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';
import type {Props} from '@theme/DocCategoryGeneratedIndexPage';
import styles from './styles.module.css';

// faq/supplement/commandsの自動生成インデックスページは、トップページの
// 全機能一覧と役割が近い「一覧ページ」であるにもかかわらず、既定では
// 見出し+説明文だけの素っ気ない見た目だった。トップページと全く同じ
// ヒーロー(グラデーションのぼかし玉)を持ち込むと過剰なので、差別化として
// 「今どのサーバーの一覧を見ているか」を示す小さな色付きバッジだけを
// 追加する。
function sectionBadge(permalink: string): {emoji: string; label: string; accent?: string} | null {
    if (permalink.includes('/wolf/')) {
        return {emoji: '🐺', label: 'マイクラ人狼', accent: 'var(--wolf-accent)'};
    }
    if (permalink.includes('/living/')) {
        return {emoji: '🌃', label: '生活サーバー'};
    }
    if (permalink.includes('/tos/')) {
        return {emoji: '📋', label: '利用規約'};
    }
    return null;
}

export default function DocCategoryGeneratedIndexPageWrapper(props: Props): ReactNode {
    const badge = sectionBadge(props.categoryGeneratedIndex.permalink);
    return (
        <>
            {badge && (
                <div className="container">
                    <span
                        className={styles.badge}
                        style={badge.accent ? ({'--badge-accent': badge.accent} as React.CSSProperties) : undefined}>
                        {badge.emoji} {badge.label}
                    </span>
                </div>
            )}
            <OriginalDocCategoryGeneratedIndexPage {...props} />
        </>
    );
}
