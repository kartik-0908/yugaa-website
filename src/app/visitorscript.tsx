'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    vqTrackId: () => string;
    vqTrackPc: () => number;
  }
}

const VisitorQueueScript: React.FC = () => {
  useEffect(() => {
    const loadPersonalisationScript = () => {
      const script = document.createElement('script');
      script.src = `//personalisation.visitorqueue.com/p/personalisation.min.js?id=${window.vqTrackId()}`;
      script.async = true;
      script.setAttribute('data-id', window.vqTrackId());
      document.head.appendChild(script);
    };
    loadPersonalisationScript();

    return () => {
      document.removeEventListener('vq_tracking_loaded', loadPersonalisationScript);
    };
  }, []);

  return (
    <>
      <Script id="vq-tracking" strategy="afterInteractive">
        {`
          function vqTrackId() {
            return 'fa0a7672-9460-40b0-a8f2-9a21fe688f4a';
          }
          (function(d, e) {
            var el = d.createElement(e);
            el.sa = function(an, av) {
              this.setAttribute(an, av);
              return this;
            };
            el.sa('id', 'vq_tracking')
              .sa('src', '//t.visitorqueue.com/p/tracking.min.js?id='+vqTrackId())
              .sa('async', 1)
              .sa('data-id', vqTrackId());
            d.getElementsByTagName(e)[0].parentNode.appendChild(el);
            el.onload = function() {
              var event = new Event('vq_tracking_loaded');
              document.dispatchEvent(event);
            };
          })(document, 'script');
          function vqTrackPc() {
            return 1;
          }
        `}
      </Script>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://p.visitorqueue.com/styles/fa0a7672-9460-40b0-a8f2-9a21fe688f4a.css"
        id="vq_flick_styles"
      />
    </>
  );
};

export default VisitorQueueScript;