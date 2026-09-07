import {visit} from 'unist-util-visit';
import type {Plugin} from 'unified';
import type {Root, Heading, Text} from 'mdast';

type HeadingHastData = {hProperties?: Record<string, unknown>};

function headingText(node: Heading): string {
    let text = '';
    visit(node, 'text', (t: Text) => {
        text += t.value;
    });
    return text;
}

function addClassName(node: Heading, className: string[]): void {
    const data = (node.data ??= {}) as HeadingHastData;
    data.hProperties = {
        ...data.hProperties,
        className: [...((data.hProperties?.className as string[]) ?? []), ...className],
    };
}

const FACTION_CLASS: Record<string, string> = {
    市民陣営: 'role-heading--citizen',
    人狼陣営: 'role-heading--wolf',
    第三陣営: 'role-heading--third',
    第四陣営: 'role-heading--fourth',
};

// docs/wolf/features/all_roles.md: 47件の役職見出しが同じ書式(役職名+陣営名)で
// 延々と続き、色分けなしでは読み分けが難しい。見出しテキストの末尾にある
// 「(◯◯陣営)」を解析して陣営別のクラスを付与し、CSS側でアクセントカラーを
// 出し分ける。本文(見出しテキストそのもの)は一切書き換えないため、
// 「システムから自動生成」される今後の更新にもそのまま追従できる。
export const remarkRoleFactionHeadings: Plugin<[], Root> = () => (tree, file) => {
    if (!file.path?.endsWith('all_roles.md')) {
        return;
    }
    for (const node of tree.children) {
        if (node.type !== 'heading' || node.depth !== 2) {
            continue;
        }
        const text = headingText(node);
        const faction = Object.keys(FACTION_CLASS).find((f) => text.includes(f));
        if (!faction) {
            continue;
        }
        addClassName(node, ['role-heading', FACTION_CLASS[faction]]);
    }
};

// docs/wolf/features/all_items.md: 12件のアイテム見出し。陣営のような分類軸は
// 無いため、単色アクセントのカード風スタイルのみ付与する。
export const remarkItemCardHeadings: Plugin<[], Root> = () => (tree, file) => {
    if (!file.path?.endsWith('all_items.md')) {
        return;
    }
    for (const node of tree.children) {
        if (node.type !== 'heading' || node.depth !== 2) {
            continue;
        }
        addClassName(node, ['item-heading']);
    }
};
