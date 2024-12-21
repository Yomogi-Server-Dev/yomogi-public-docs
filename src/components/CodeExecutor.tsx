import React, {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {ExecLanguage} from './execLanguage';

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
        <div className="my-4 space-y-4">
            <div className="relative rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        {execLanguage}
                    </span>
                    <button
                        onClick={handleCopy}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors"
                        title="コードをコピー"
                    >
                        {isCopied ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <Copy className="w-4 h-4" />
                        )}
                    </button>
                </div>
                <textarea
                    value={code}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-48 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 resize-y"
                    spellCheck="false"
                />
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={executeCode}
                    disabled={isLoading}
                    className="px-4 py-2 bg-emerald-500 dark:bg-emerald-900 text-white rounded hover:bg-emerald-700 hover:dark:bg-emerald-700 disabled:opacity-50 transition-colors"
                >
                    {isLoading ? '実行中...' : 'コードを実行'}
                </button>
            </div>

            {(output || error) && (
                <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                    {output && (
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold dark:text-gray-100">実行結果:</h4>
                            <pre className="whitespace-pre-wrap text-sm dark:text-gray-300 font-mono">
                                {output}
                            </pre>
                        </div>
                    )}

                    {error && (
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-red-700 dark:text-red-400">エラー:</h4>
                            <pre className="text-sm text-red-600 dark:text-red-400 font-mono">
                                {error}
                            </pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CodeExecutor;