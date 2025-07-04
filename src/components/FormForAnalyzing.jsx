import React, {useState} from "react";

const FormForAnalyzing = ({ onAnalyze }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.startsWith("http")) {
      alert("Please include http:// or https://");
      return;
    }
    onAnalyze(url);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Enter website URL (e.g. https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Analyze
      </button>
    </form>
  );
};

export default FormForAnalyzing;
