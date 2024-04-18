'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
                    <div className="max-w-md w-full">
                        <img
                            src="/errorcustom.jpeg"
                            alt="Error"
                            className="w-64 mx-auto"
                        />
                        <h1 className="text-4xl font-bold text-red-600 mt-5">Whoops!</h1>
                        <p className="text-gray-700 mt-3">We&apos;ve hit a snag with the API rate limits.</p>
                        {error.digest && (
                            <p className="text-sm text-gray-500 mt-2">Error Code: {error.digest}</p>
                        )}
                        <button
                            onClick={reset}
                            className="mt-6 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none transition duration-150 ease-in-out"
                        >
                            Try Again
                        </button>
                        <p className="mt-4 text-xs text-gray-500">
                            If the issue continues, please wait a minute before refreshing.
                        </p>
                    </div>
                </div>
            </body>
        </html>
    )
}
