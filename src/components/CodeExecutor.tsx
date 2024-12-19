import React, {useState} from 'react';
import {Language} from 'prism-react-renderer';

interface CodeExecutorProps {
    code: string;
    language: Language;
    file_name: string;
    version?: string;
}

const CodeExecutor: React.FC<CodeExecutorProps> = ({code, language, file_name, version}) => {
    const [output, setOutput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

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
                    language: language,
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
            // console.log('API Response:', data);

            if (data.run) {
                setOutput(data.run.output || data.run.stdout);
            } else if (data.message) {
                setError(data.message);
            } else {
                setError('予期せぬエラーが発生しました');
            }
        } catch (err) {
            // console.error('Error details:', err);
            setError('実行中にエラーが発生しました: ' + (err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="my-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800">
            <button
                onClick={executeCode}
                disabled={isLoading}
                className="px-4 py-2 bg-emerald-500 dark:bg-emerald-900 text-white rounded hover:bg-emerald-700 hover:dark:bg-emerald-700 disabled:opacity-50 transition-colors">
                {isLoading ? '実行中...' : 'コードを実行'}
            </button>
            <div>
                {output && (
                    <div>
                        <h4 className="text-lg font-semibold dark:text-gray-100">実行結果:</h4>
                        <pre
                            className="whitespace-pre-wrap dark:text-gray-300"
                            dangerouslySetInnerHTML={{
                                __html: output.replace(/\n/g, '<br>'),
                            }}
                        />
                    </div>
                )}

                {error && (
                    <div>
                        <h4 className="text-lg font-semibold text-red-700 dark:text-red-400">エラー:</h4>
                        <pre className="text-red-600 dark:text-red-400">{error}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodeExecutor;