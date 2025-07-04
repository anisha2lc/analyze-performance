const API_KEY = import.meta.env.VITE_PAGESPEED_API_KEY;

export const analyzeUrl = async (url) => {
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url
  )}&strategy=desktop&key=${API_KEY}`;

  const res = await fetch(endpoint);
  const json = await res.json();

  if (!json.lighthouseResult) {
    throw new Error(json.error?.message || "Invalid response from PageSpeed API");
  }

  const loadTime = (
    json.lighthouseResult.audits["interactive"].numericValue / 1000
  ).toFixed(2);

  const totalBytes = json.lighthouseResult.audits["total-byte-weight"].numericValue;

  const requestCount =
    json.lighthouseResult.audits["network-requests"].details.items.length;

  return {
    loadTime,
    pageSize: (totalBytes / 1024 / 1024).toFixed(2) + " MB",
    requestCount,
  };
};
