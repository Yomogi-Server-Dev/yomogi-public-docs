import React, {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {ExecLanguage} from './execLanguage';
import styles from './CodeExecutor.module.css';

interface CodeExecutorProps {
    initialCode: string;
    execLanguage: ExecLanguage;
    file_name: string;
    version?: string;
}

const CodeExecutor = ({initialCode, execLanguage, file_name, version}: CodeExecutorProps) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
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

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.run) {
                setOutput(data.run.output || data.run.stdout);
            } else if (data.message) {
                setError(data.message);
            } else {
                setError('予期せぬエラーが発生しました');
            }
        } catch (err) {
            setError('実行中にエラーが発生しました: ' + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const newCode = code.substring(0, start) + '    ' + code.substring(end);
            setCode(newCode);
            setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 4;
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
