import React, {useState, type KeyboardEvent} from 'react';
import {Check, Copy} from 'lucide-react';
import {ExecLanguage} from './execLanguage';
import styles from './CodeExecutor.module.css';

interface CodeExecutorProps {
    initialCode: string;
    execLanguage: ExecLanguage;
    file_name: string;
    version?: string;
}

// ブログ記事内で、紹介したコードをその場で書き換えて実行できる埋め込みエディタ
// (Piston: https://github.com/engineer-man/piston の公開APIをそのまま叩く)。
// 専用のバックエンドは持たないため、実行結果・エラーはAPIレスポンスの形を
// そのまま表示に反映する。
type PistonExecuteResponse = {
    run?: {output?: string; stdout?: string};
    message?: string;
};

function errorMessage(err: unknown): string {
    return err instanceof Error ? err.message : String(err);
}

const CodeExecutor = ({initialCode, execLanguage, file_name, version}: CodeExecutorProps) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState(false);

    const executeCode = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://emkc.org/api/v2/piston/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    language: execLanguage,
                    version: version ? version : '*',
                    files: [
                        {
                            name: file_name,
                            content: code,
                        },
                    ],
                }),
            });

            const data: PistonExecuteResponse = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            if (data.run) {
                setOutput(data.run.output || data.run.stdout || '');
            } else if (data.message) {
                setError(data.message);
            } else {
                setError('予期せぬエラーが発生しました');
            }
        } catch (err) {
            setError('実行中にエラーが発生しました: ' + errorMessage(err));
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const target = e.currentTarget;
            const start = target.selectionStart;
            const end = target.selectionEnd;
            const newCode = code.substring(0, start) + '    ' + code.substring(end);
            setCode(newCode);
            setTimeout(() => {
                target.selectionStart = target.selectionEnd = start + 4;
            }, 0);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.editorCard}>
                <div className={styles.editorHeader}>
                    <span className={styles.langLabel}>{execLanguage}</span>
                    <button onClick={handleCopy} className={styles.copyButton} title="コードをコピー">
                        {isCopied ? <Check className={styles.icon} /> : <Copy className={styles.icon} />}
                    </button>
                </div>
                <textarea
                    value={code}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setCode(e.target.value)}
                    className={styles.textarea}
                    spellCheck="false"
                />
            </div>

            <div className={styles.actions}>
                <button onClick={executeCode} disabled={isLoading} className={styles.runButton}>
                    {isLoading ? '実行中...' : 'コードを実行'}
                </button>
            </div>

            {(output || error) && (
                <div className={styles.resultBox}>
                    {output && (
                        <div>
                            <h4 className={styles.resultHeading}>実行結果:</h4>
                            <pre className={styles.resultPre}>{output}</pre>
                        </div>
                    )}

                    {error && (
                        <div>
                            <h4 className={styles.errorHeading}>エラー:</h4>
                            <pre className={styles.errorPre}>{error}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CodeExecutor;
