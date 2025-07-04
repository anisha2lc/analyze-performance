import { useState } from "react";
import FormForAnalyzing from "./components/FormForAnalyzing";
import ResultAfterAnalyzing from "./components/ResultAfterAnalyzing";
import { analyzeUrl } from "./services/pageSpeed";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (url) => {
    setLoading(true);
    setResult(null);
    try {
      const response = await analyzeUrl(url);
      console.log("API Result:", response);
      setResult(response);
    } catch (err) {
      console.error("Error details:", err);
      alert("Failed to fetch data. Try a different URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-6 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        🌐 Website Performance Analyzer
      </h1>
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">
        <FormForAnalyzing onAnalyze={handleAnalyze} />
        {loading && (
          <p className="text-center text-indigo-600 font-semibold mt-6">
            🔍 Analyzing...
          </p>
        )}
        <ResultAfterAnalyzing data={result} />
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Powered by Google PageSpeed Insights API
      </footer>
    </main>
  );
}

export default App;
