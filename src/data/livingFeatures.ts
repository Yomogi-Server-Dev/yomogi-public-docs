// 生活サーバーの機能一覧(トップページの「全機能」インデックス用)。
// docs/living/commands/ 配下の各ページ(sidebar_position順)をカテゴリ分けして整理した。
// 新しい機能ページを追加した場合はここにも追記すること。
import type {FeatureCategory} from './featureIndexTypes';

export const livingFeatureCategories: FeatureCategory[] = [
    {
        category: '生活基盤・保護',
        items: [
            {path: 'living/commands/warps', title: 'ワープ', emoji: '🌀'},
            {path: 'living/commands/land-protection', title: '土地保護', emoji: '🛡️'},
            {path: 'living/commands/chest-protection', title: 'チェスト保護', emoji: '🔒'},
            {path: 'living/commands/door-protection', title: 'ドア保護', emoji: '🚪'},
            {path: 'living/commands/elevator', title: 'エレベーター', emoji: '🛗'},
        ],
    },
    {
        category: '経済',
        items: [
            {path: 'living/commands/money', title: 'お金(YG)', emoji: '💰'},
            {path: 'living/commands/shop', title: '公式ショップ', emoji: '🏬'},
            {path: 'living/commands/chest-shop', title: 'チェストショップ', emoji: '📦'},
            {path: 'living/commands/staffed-register', title: '有人レジ', emoji: '🧑‍💼'},
            {path: 'living/commands/tradingboard', title: '出店掲示板', emoji: '📋'},
            {path: 'living/commands/trade', title: 'プレイヤー間取引', emoji: '🤝'},
            {path: 'living/commands/auction', title: 'オークション', emoji: '🔨'},
            {path: 'living/commands/sellfish', title: '釣果の売却', emoji: '💵'},
        ],
    },
    {
        category: '仕事・会社',
        items: [
            {path: 'living/commands/role', title: '役職制度', emoji: '🎖️'},
            {path: 'living/commands/company', title: '会社プラグイン', emoji: '🏢'},
            {path: 'living/commands/jobboard', title: '求人・仕事依頼', emoji: '📌'},
            {path: 'living/commands/buildingmarket', title: '建築マーケット', emoji: '🏠'},
        ],
    },
    {
        category: '成長・実績',
        items: [
            {path: 'living/commands/levels', title: 'レベル(採掘・農業・釣り)', emoji: '📈'},
            {path: 'living/commands/mission', title: 'ミッション', emoji: '📜'},
            {path: 'living/commands/rank', title: '称号プラグイン', emoji: '🏆'},
            {path: 'living/commands/profile', title: 'プロフィール', emoji: '🪪'},
            {path: 'living/commands/vote', title: '投票報酬', emoji: '🗳️'},
        ],
    },
    {
        category: 'コミュニケーション',
        items: [
            {path: 'living/commands/mail', title: 'メール', emoji: '✉️'},
            {path: 'living/commands/limited-vc', title: '近距離VC', emoji: '🎙️'},
            {path: 'living/commands/mute', title: 'ミュート機能', emoji: '🔇'},
        ],
    },
    {
        category: '遊び・エンタメ',
        items: [
            {path: 'living/commands/fishing', title: '釣り', emoji: '🎣'},
            {path: 'living/commands/enchant', title: 'エンチャント', emoji: '✨'},
            {path: 'living/commands/gacha', title: 'ガチャ', emoji: '🎰'},
            {path: 'living/commands/casino', title: 'カジノ', emoji: '♠️'},
            {path: 'living/commands/vehicles', title: '車(乗り物)', emoji: '🚗'},
            {path: 'living/commands/island', title: '島プラグイン', emoji: '🏝️'},
            {path: 'living/commands/buff', title: 'エフェクトのレンタル', emoji: '🧪'},
            {path: 'living/commands/exp-speed-boots', title: '経験値で動くバフ防具', emoji: '👢'},
            {path: 'living/commands/athletic', title: 'アスレチック', emoji: '🏃'},
        ],
    },
    {
        category: '便利機能',
        items: [
            {path: 'living/commands/custom-items', title: 'よもぎ端末とオリジナルアイテム', emoji: '🧰'},
            {path: 'living/commands/convenience', title: '便利な機能', emoji: '🧭'},
        ],
    },
];
