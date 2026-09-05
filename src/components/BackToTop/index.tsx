import React, {useEffect, useState, type ReactNode} from 'react';
import styles from './styles.module.css';

/**
 * 生活サーバー/マイクラ人狼、2つの全機能一覧でトップページが長くなったため、
 * 一定量スクロールした後にだけ「トップに戻る」ボタンを表示する。
 */
export default function BackToTop(): ReactNode {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <button
            type="button"
            aria-label="トップに戻る"
            title="トップに戻る"
            className={styles.backToTop}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            ↑
        </button>
    );
}
