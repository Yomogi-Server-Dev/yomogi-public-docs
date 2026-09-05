// マイクラ人狼の機能一覧(トップページの「全機能」インデックス用)。
// docs/wolf/how-to-play, docs/wolf/supplement 配下のうち、ゲームの仕組み・機能を
// 説明しているページをカテゴリ分けして整理した(参加方法は既にWolfHighlightの
// CTAで案内しているため、よくある質問集(faq)は個別のQ&Aのため、ここには含めない)。
// 新しい機能ページを追加した場合はここにも追記すること。
import type {FeatureCategory} from './featureIndexTypes';

export const wolfFeatureCategories: FeatureCategory[] = [
    {
        category: 'ゲームのきほん',
        items: [
            {path: 'wolf/how-to-play/minecraft-wolf', title: 'マイクラ人狼とは', emoji: '🐺'},
            {path: 'wolf/how-to-play/werewolf', title: '人狼ゲームとは', emoji: '🃏'},
            {path: 'wolf/how-to-play/event-administer', title: 'イベントの運営方法', emoji: '🎪'},
        ],
    },
    {
        category: 'ゲームの流れ',
        items: [
            {path: 'wolf/how-to-play/chat', title: 'チャット・VC', emoji: '🎙️'},
            {path: 'wolf/how-to-play/session', title: '会議', emoji: '🗣️'},
            {path: 'wolf/how-to-play/task', title: 'タスク', emoji: '🧩'},
            {path: 'wolf/how-to-play/sabotage', title: 'サボタージュ', emoji: '💣'},
        ],
    },
    {
        category: '役職',
        items: [
            {path: 'wolf/how-to-play/roles', title: '役職(Basic)', emoji: '🎭'},
            {path: 'wolf/supplement/all_roles', title: '全役職一覧', emoji: '📖'},
        ],
    },
    {
        category: '便利機能・その他',
        items: [
            {path: 'wolf/supplement/server_scaling', title: 'サーバー分割', emoji: '🖥️'},
            {path: 'wolf/supplement/fixed_text', title: '定型文', emoji: '💬'},
            {path: 'wolf/supplement/delete_resource_packs', title: 'リソースパックの削除', emoji: '🗑️'},
            {path: 'wolf/supplement/accessibility', title: 'アクセシビリティ', emoji: '♿'},
        ],
    },
];
