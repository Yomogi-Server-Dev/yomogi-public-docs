import type {LucideIcon} from 'lucide-react';

// FeatureIndexコンポーネント(トップページの「全機能」一覧セクション)で
// 共通して使う型。living/wolf、それぞれの機能データファイルから利用する。
// 絵文字ではなくlucide-reactのアイコンコンポーネントを直接参照する
// (「絵文字よりアイコンの方がかっこいい」との要望により差し替えた)。
export type FeatureItem = {
    path: string; // /docs/<path> に対応するドキュメントの相対パス
    title: string;
    icon: LucideIcon;
};

export type FeatureCategory = {
    category: string;
    icon: LucideIcon;
    items: FeatureItem[];
};
