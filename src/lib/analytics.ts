type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean>;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[];
    gtag?: (event: string, name: string, params?: AnalyticsEvent["params"]) => void;
  }
}

export function trackEvent(name: string, params?: AnalyticsEvent["params"]) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ name, params });
  window.gtag?.("event", name, params);
}
