// FeatureIndexコンポーネント(トップページの「全機能」一覧セクション)で
// 共通して使う型。living/wolf、それぞれの機能データファイルから利用する。
export type FeatureItem = {
    path: string; // /docs/<path> に対応するドキュメントの相対パス
    title: string;
    emoji: string;
};

export type FeatureCategory = {
    category: string;
    items: FeatureItem[];
};
