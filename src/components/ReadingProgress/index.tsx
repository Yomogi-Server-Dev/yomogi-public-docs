import React, {useEffect, useState, type ReactNode} from 'react';
import styles from './styles.module.css';

// ページ全体の読み進み具合を、画面最上部の細いバーで示す。
// 役職一覧・アクセシビリティ等、長いドキュメントで「あとどれくらいか」が
// 一目でわかるようにする(参考にしたIonic/Electron等のサイトにも類似の
// 導線がある)。
export default function ReadingProgress(): ReactNode {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div className={styles.track} aria-hidden="true">
            <div className={styles.bar} style={{width: `${progress}%`}} />
        </div>
    );
}
