import React, {type ReactNode} from 'react';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {useDocCardDescriptionCategoryItemsPlural} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';
import {FileText, FolderOpen, ExternalLink, type LucideIcon} from 'lucide-react';
import {livingFeatureCategories} from '@site/src/data/livingFeatures';
import {wolfFeatureCategories} from '@site/src/data/wolfFeatures';

import type {Props} from '@theme/DocCard';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

// トップページの機能一覧(FeatureIndex)で使っているアイコンデータを
// ここでも再利用し、生成インデックスページのカード一覧を絵文字から
// lucide-reactアイコンへ統一する。path(例: 'living/commands/warps')を
// キーにしたフラットな対応表を作る。
const pathIconMap: Record<string, LucideIcon> = {};
for (const category of [...livingFeatureCategories, ...wolfFeatureCategories]) {
  for (const item of category.items) {
    pathIconMap[item.path] = item.icon;
  }
}

function docPathFromHref(href: string): string {
  return href.replace(/^\/?docs\//, '').replace(/\/$/, '').replace(/#.*$/, '');
}

function resolveIcon(
  item: PropSidebarItemLink | PropSidebarItemCategory,
): ReactNode {
  if (item.type === 'category') {
    return <FolderOpen />;
  }
  if (!isInternalUrl(item.href)) {
    return <ExternalLink />;
  }
  const Icon = pathIconMap[docPathFromHref(item.href)] ?? FileText;
  return <Icon />;
}

function getIconTitleProps(
  item: PropSidebarItemLink | PropSidebarItemCategory,
): {icon: ReactNode; title: string} {
  return {
    icon: resolveIcon(item),
    title: item.label,
  };
}

function CardCategory({item}: {item: PropSidebarItemCategory}): ReactNode {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      {...getIconTitleProps(item)}
    />
  );
}

function CardLink({item}: {item: PropSidebarItemLink}): ReactNode {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      {...getIconTitleProps(item)}
    />
  );
}

export default function DocCard({item}: Props): ReactNode {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
