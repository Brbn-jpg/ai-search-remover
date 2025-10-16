const remove_ai = "-ai";

chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    const url = new URL(details.url);
    let searchParam = null;

    if (url.hostname.includes("google")) {
      searchParam = "q";

      if (!url.pathname.includes("/search")) return;
    } else if (url.hostname.includes("bing")) {
      searchParam = "q";
      if (!url.pathname.includes("/search")) return;
    } else if (url.hostname.includes("duckduckgo")) {
      searchParam = "q";
    } else if (url.hostname.includes("yahoo")) {
      searchParam = "p";
      if (!url.pathname.includes("/search")) return;
    } else {
      return;
    }

    const searchParams = url.searchParams;
    const query = searchParams.get(searchParam);

    if (query && !query.includes(remove_ai)) {
      const newQuery = query + " " + remove_ai;
      searchParams.set(searchParam, newQuery);

      chrome.tabs.update(details.tabId, {
        url: url.toString(),
      });
    }
  },
  {
    url: [
      { hostContains: "google" },
      { hostContains: "bing" },
      { hostContains: "duckduckgo" },
      { hostContains: "yahoo" },
    ],
  }
);
