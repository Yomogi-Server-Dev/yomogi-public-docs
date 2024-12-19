import React, { useState } from 'react';

interface CodeExecutorProps {
    code: string;
}

const CodeExecutor: React.FC<CodeExecutorProps> = ({ code }) => {
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
                    language: 'php',
                    version: '*',  // Latest version
                    files: [
                        {
                            name: 'main.php',
                            content: code
                        }
                    ]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data); // デバッグ用

            if (data.run) {
                setOutput(data.run.output || data.run.stdout);
            } else if (data.message) {
                setError(data.message);
            } else {
                setError('予期せぬエラーが発生しました');
            }
        } catch (err) {
            console.error('Error details:', err); // デバッグ用
            setError('実行中にエラーが発生しました: ' + (err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="my-4">
            <button
                onClick={executeCode}
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {isLoading ? '実行中...' : 'コードを実行'}
            </button>

            {output && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h4 className="font-bold mb-2">実行結果:</h4>
                    <pre className="whitespace-pre-wrap">{output}</pre>
                </div>
            )}

            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
                    <h4 className="font-bold mb-2">エラー:</h4>
                    <pre className="whitespace-pre-wrap">{error}</pre>
                </div>
            )}
        </div>
    );
};

export default CodeExecutor;