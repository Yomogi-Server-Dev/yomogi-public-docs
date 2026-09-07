import React, {useState, type ReactNode} from 'react';
import styles from './styles.module.css';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

// 各ドキュメントページの末尾に表示する簡易フィードバックボタン。
// 専用の受付サーバーは持たず、押されたらGA4(plugin-google-gtag)へ
// カスタムイベントを送るだけにして、GA4の画面上で「どのページが
// 役に立っていないか」を後から確認できるようにする。
export default function FeedbackWidget(): ReactNode {
    const [answered, setAnswered] = useState<'helpful' | 'not_helpful' | null>(null);

    const vote = (value: 'helpful' | 'not_helpful') => {
        setAnswered(value);
        window.gtag?.('event', 'doc_feedback', {
            feedback: value,
            page_path: window.location.pathname,
        });
    };

    return (
        <div className={styles.wrapper}>
            {answered ? (
                <p className={styles.thanks}>フィードバックありがとうございました！</p>
            ) : (
                <>
                    <span className={styles.question}>このページは役に立ちましたか？</span>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.voteButton} onClick={() => vote('helpful')}>
                            👍 役に立った
                        </button>
                        <button type="button" className={styles.voteButton} onClick={() => vote('not_helpful')}>
                            👎 役に立たなかった
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
