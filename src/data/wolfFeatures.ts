// マイクラ人狼の機能一覧(トップページの「全機能」インデックス用)。
// docs/wolf/how-to-play, docs/wolf/supplement 配下のうち、ゲームの仕組み・機能を
// 説明しているページをカテゴリ分けして整理した(参加方法は既にWolfHighlightの
// CTAで案内しているため、よくある質問集(faq)は個別のQ&Aのため、ここには含めない)。
// 新しい機能ページを追加した場合はここにも追記すること。
import {
    Info,
    Moon,
    BookOpen,
    Megaphone,
    Activity,
    MessageCircle,
    Users,
    ListChecks,
    Bomb,
    Theater,
    Drama,
    BookMarked,
    Palette,
    Crosshair,
    Wrench,
    Keyboard,
    Settings,
    Backpack,
    MessageSquare,
    Monitor,
    Trash2,
    Accessibility,
} from 'lucide-react';
import type {FeatureCategory} from './featureIndexTypes';

export const wolfFeatureCategories: FeatureCategory[] = [
    {
        category: 'ゲームのきほん',
        icon: Info,
        items: [
            {path: 'wolf/how-to-play/minecraft-wolf', title: 'マイクラ人狼とは', icon: Moon},
            {path: 'wolf/how-to-play/werewolf', title: '人狼ゲームとは', icon: BookOpen},
            {path: 'wolf/how-to-play/event-administer', title: 'イベントの運営方法', icon: Megaphone},
        ],
    },
    {
        category: 'ゲームの流れ',
        icon: Activity,
        items: [
            {path: 'wolf/how-to-play/chat', title: 'チャット・VC', icon: MessageCircle},
            {path: 'wolf/how-to-play/session', title: '会議', icon: Users},
            {path: 'wolf/how-to-play/task', title: 'タスク', icon: ListChecks},
            {path: 'wolf/how-to-play/sabotage', title: 'サボタージュ', icon: Bomb},
        ],
    },
    {
        category: '役職',
        icon: Theater,
        items: [
            {path: 'wolf/how-to-play/roles', title: '役職(Basic)', icon: Drama},
            {path: 'wolf/features/all_roles', title: '全役職一覧', icon: BookMarked},
            {path: 'wolf/features/role-colors', title: '役職の識別色', icon: Palette},
            {path: 'wolf/shoot-out', title: '銃撃戦のルール', icon: Crosshair},
        ],
    },
    {
        category: '機能一覧',
        icon: Wrench,
        items: [
            {path: 'wolf/features/commands', title: '便利なコマンド', icon: Keyboard},
            {path: 'wolf/features/setting', title: '個人設定', icon: Settings},
            {path: 'wolf/features/all_items', title: '特殊アイテム一覧', icon: Backpack},
            {path: 'wolf/features/fixed_text', title: '定型文', icon: MessageSquare},
        ],
    },
    {
        category: '補足・その他',
        icon: Info,
        items: [
            {path: 'wolf/supplement/server_scaling', title: 'サーバー分割', icon: Monitor},
            {path: 'wolf/supplement/delete_resource_packs', title: 'リソースパックの削除', icon: Trash2},
            {path: 'wolf/supplement/accessibility', title: 'アクセシビリティ', icon: Accessibility},
        ],
    },
];
