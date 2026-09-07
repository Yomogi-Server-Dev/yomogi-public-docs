import React, {isValidElement, cloneElement, type ReactNode, type ReactElement} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/DocCard/Heading/Icon';

import styles from './styles.module.css';

export default function DocCardHeadingIcon({icon}: Props): ReactNode {
  // iconはDocCard側でlucide-reactのアイコン要素(<Icon />)として渡ってくる。
  // サイズ・色をこちら側で統一指定できるようclassNameを注入する。
  const rendered = isValidElement(icon)
    ? cloneElement(icon as ReactElement<{className?: string}>, {
        className: styles.cardTitleIcon,
      })
    : icon;
  return (
    <span
      className={clsx(ThemeClassNames.docs.docCard.icon, styles.iconWrap)}
      aria-hidden="true">
      {rendered}
    </span>
  );
}
