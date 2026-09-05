// 生活サーバーの機能一覧(トップページの「全機能」インデックス用)。
// docs/living/commands/ 配下の各ページ(sidebar_position順)をカテゴリ分けして整理した。
// 新しい機能ページを追加した場合はここにも追記すること。
export type LivingFeatureItem = {
    slug: string; // docs/living/commands/<slug>.md に対応
    title: string;
    emoji: string;
};

export type LivingFeatureCategory = {
    category: string;
    items: LivingFeatureItem[];
};

export const livingFeatureCategories: LivingFeatureCategory[] = [
    {
        category: '生活基盤・保護',
        items: [
            {slug: 'warps', title: 'ワープ', emoji: '🌀'},
            {slug: 'land-protection', title: '土地保護', emoji: '🛡️'},
            {slug: 'chest-protection', title: 'チェスト保護', emoji: '🔒'},
            {slug: 'door-protection', title: 'ドア保護', emoji: '🚪'},
            {slug: 'elevator', title: 'エレベーター', emoji: '🛗'},
        ],
    },
    {
        category: '経済',
        items: [
            {slug: 'money', title: 'お金(YG)', emoji: '💰'},
            {slug: 'shop', title: '公式ショップ', emoji: '🏬'},
            {slug: 'chest-shop', title: 'チェストショップ', emoji: '📦'},
            {slug: 'staffed-register', title: '有人レジ', emoji: '🧑‍💼'},
            {slug: 'tradingboard', title: '出店掲示板', emoji: '📋'},
            {slug: 'trade', title: 'プレイヤー間取引', emoji: '🤝'},
            {slug: 'auction', title: 'オークション', emoji: '🔨'},
        ],
    },
    {
        category: '仕事・会社',
        items: [
            {slug: 'role', title: '役職制度', emoji: '🎖️'},
            {slug: 'company', title: '会社プラグイン', emoji: '🏢'},
            {slug: 'jobboard', title: '求人・仕事依頼', emoji: '📌'},
            {slug: 'buildingmarket', title: '建築マーケット', emoji: '🏠'},
        ],
    },
    {
        category: '成長・実績',
        items: [
            {slug: 'levels', title: 'レベル(採掘・農業・釣り)', emoji: '📈'},
            {slug: 'mission', title: 'ミッション', emoji: '📜'},
            {slug: 'rank', title: '称号プラグイン', emoji: '🏆'},
            {slug: 'profile', title: 'プロフィール', emoji: '🪪'},
        ],
    },
    {
        category: 'コミュニケーション',
        items: [
            {slug: 'mail', title: 'メール', emoji: '✉️'},
            {slug: 'limited-vc', title: '近距離VC', emoji: '🎙️'},
            {slug: 'mute', title: 'ミュート機能', emoji: '🔇'},
        ],
    },
    {
        category: '遊び・エンタメ',
        items: [
            {slug: 'fishing', title: '釣り', emoji: '🎣'},
            {slug: 'enchant', title: 'エンチャント', emoji: '✨'},
            {slug: 'gacha', title: 'ガチャ', emoji: '🎰'},
            {slug: 'casino', title: 'カジノ', emoji: '♠️'},
            {slug: 'vehicles', title: '車(乗り物)', emoji: '🚗'},
            {slug: 'island', title: '島プラグイン', emoji: '🏝️'},
            {slug: 'buff', title: 'エフェクトのレンタル', emoji: '🧪'},
        ],
    },
    {
        category: '便利機能',
        items: [
            {slug: 'custom-items', title: 'よもぎ端末とオリジナルアイテム', emoji: '🧰'},
            {slug: 'convenience', title: '便利な機能', emoji: '🧭'},
        ],
    },
];
