import React from 'react'

const ResultAfterAnalyzing = ({ data }) => {
      if (!data) return null;

  const { loadTime, pageSize, requestCount } = data;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Performance Results</h2>
      <div className="space-y-3">
        <div>🔄 Load Time: <strong>{loadTime}s</strong></div>
        <div>📦 Page Size: <strong>{pageSize}</strong></div>
        <div>📑 Number of Requests: <strong>{requestCount}</strong></div>
      </div>
    </div>
    )
}

export default ResultAfterAnalyzing
