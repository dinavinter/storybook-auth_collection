importScripts("workbox-v6.2.4/workbox-sw.js");

self.addEventListener("message", ({ data }) => {
  if (data === "skipWaiting") {
    self.skipWaiting();
  }
});

const match = ({url, event}) => {
  if (url.pathname === '/example') {
    return {
      name: 'Workbox',
      type: 'guide',
    };
  }
};

const handler = async ({url, event}) => {
  return new Response(`Custom handler response.`);
};


self.addEventListener('push', event => {
  console.log(`Push received with data "${event.data.text()}"`);

  const title = 'Hakuna matata.';
  const options = {
    body: `${event.data.text()}`,
    data: { href: '/users/donald' },
    actions: [
      { action: 'details', title: 'Details' },
      { action: 'dismiss', title: 'Dismiss' },
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.routing.registerRoute("/api/oauth/dialog", handler);
 // self.workbox.precaching.precacheAndRoute([[{"revision":"02353191d79fa8989a957632c5c63ef7","url":"index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"build/index.esm.js"},{"revision":null,"url":"build/p-0bde800e.entry.js"},{"revision":null,"url":"build/p-0be7ee44.entry.js"},{"revision":null,"url":"build/p-0c1d6738.js"},{"revision":null,"url":"build/p-0fa3e84e.entry.js"},{"revision":null,"url":"build/p-111520a0.js"},{"revision":null,"url":"build/p-12c78700.entry.js"},{"revision":null,"url":"build/p-16c32dbb.entry.js"},{"revision":null,"url":"build/p-173fe96d.entry.js"},{"revision":null,"url":"build/p-17c5698d.entry.js"},{"revision":null,"url":"build/p-1870c584.entry.js"},{"revision":null,"url":"build/p-1a6f08b9.entry.js"},{"revision":null,"url":"build/p-1b28bdba.entry.js"},{"revision":null,"url":"build/p-1b7582f2.entry.js"},{"revision":null,"url":"build/p-20793b25.entry.js"},{"revision":null,"url":"build/p-223b90e8.entry.js"},{"revision":null,"url":"build/p-226ad342.js"},{"revision":null,"url":"build/p-22efe07a.js"},{"revision":null,"url":"build/p-245d7678.js"},{"revision":null,"url":"build/p-2474cc95.entry.js"},{"revision":null,"url":"build/p-25015b04.entry.js"},{"revision":null,"url":"build/p-257a8ebe.entry.js"},{"revision":null,"url":"build/p-29240917.entry.js"},{"revision":null,"url":"build/p-2cd7c097.entry.js"},{"revision":null,"url":"build/p-2e4e8117.js"},{"revision":null,"url":"build/p-30b8e0b5.entry.js"},{"revision":null,"url":"build/p-3723fe7f.entry.js"},{"revision":null,"url":"build/p-39ee16e2.entry.js"},{"revision":null,"url":"build/p-3b564bd8.entry.js"},{"revision":null,"url":"build/p-3cedbd61.entry.js"},{"revision":null,"url":"build/p-3d7f7614.entry.js"},{"revision":null,"url":"build/p-3e42f93e.entry.js"},{"revision":null,"url":"build/p-3f53c9c8.entry.js"},{"revision":null,"url":"build/p-3f9fbf04.entry.js"},{"revision":null,"url":"build/p-403e0e5a.entry.js"},{"revision":null,"url":"build/p-40fe36bd.entry.js"},{"revision":null,"url":"build/p-417a8dd6.js"},{"revision":null,"url":"build/p-428ffffa.entry.js"},{"revision":null,"url":"build/p-433a305f.entry.js"},{"revision":null,"url":"build/p-436a300a.entry.js"},{"revision":null,"url":"build/p-438c04a1.entry.js"},{"revision":null,"url":"build/p-45cb4622.entry.js"},{"revision":null,"url":"build/p-47aec433.entry.js"},{"revision":null,"url":"build/p-5164085a.entry.js"},{"revision":null,"url":"build/p-5371fee8.entry.js"},{"revision":null,"url":"build/p-53a71051.js"},{"revision":null,"url":"build/p-571d8aa8.entry.js"},{"revision":null,"url":"build/p-57420118.entry.js"},{"revision":null,"url":"build/p-59bbaf88.entry.js"},{"revision":null,"url":"build/p-5ea69d5c.entry.js"},{"revision":null,"url":"build/p-5ee6d043.entry.js"},{"revision":null,"url":"build/p-60723ec9.entry.js"},{"revision":null,"url":"build/p-615ca70b.js"},{"revision":null,"url":"build/p-637b687f.js"},{"revision":null,"url":"build/p-6546696e.entry.js"},{"revision":null,"url":"build/p-6740cc44.entry.js"},{"revision":null,"url":"build/p-69137eb7.js"},{"revision":null,"url":"build/p-6f618281.js"},{"revision":null,"url":"build/p-71af1c38.js"},{"revision":null,"url":"build/p-7313b136.entry.js"},{"revision":null,"url":"build/p-7511dc90.entry.js"},{"revision":null,"url":"build/p-7840618d.js"},{"revision":null,"url":"build/p-7aec025a.entry.js"},{"revision":null,"url":"build/p-7d2b577d.entry.js"},{"revision":null,"url":"build/p-7dab79f4.entry.js"},{"revision":null,"url":"build/p-7dbfc316.js"},{"revision":null,"url":"build/p-83e90af1.js"},{"revision":null,"url":"build/p-8465de99.entry.js"},{"revision":null,"url":"build/p-869aed0e.entry.js"},{"revision":null,"url":"build/p-8a15ba4e.js"},{"revision":null,"url":"build/p-8bb5e86f.js"},{"revision":null,"url":"build/p-8c161562.entry.js"},{"revision":null,"url":"build/p-8da6e3a6.js"},{"revision":null,"url":"build/p-8f72be08.js"},{"revision":null,"url":"build/p-8fc9298a.js"},{"revision":null,"url":"build/p-924a2083.js"},{"revision":null,"url":"build/p-9278b493.entry.js"},{"revision":null,"url":"build/p-93f7cf64.entry.js"},{"revision":null,"url":"build/p-9a4cab83.entry.js"},{"revision":null,"url":"build/p-9f69c97d.entry.js"},{"revision":null,"url":"build/p-9f7ec18b.entry.js"},{"revision":null,"url":"build/p-a15364c9.entry.js"},{"revision":null,"url":"build/p-a26675a2.entry.js"},{"revision":null,"url":"build/p-a2df1a24.entry.js"},{"revision":null,"url":"build/p-a51dfe01.entry.js"},{"revision":null,"url":"build/p-a6b94d1b.js"},{"revision":null,"url":"build/p-ae35a308.entry.js"},{"revision":null,"url":"build/p-aef0bba0.js"},{"revision":null,"url":"build/p-af43db96.entry.js"},{"revision":null,"url":"build/p-b05bdf1e.entry.js"},{"revision":null,"url":"build/p-b659d645.entry.js"},{"revision":null,"url":"build/p-b67a60fb.entry.js"},{"revision":null,"url":"build/p-b70d088e.entry.js"},{"revision":null,"url":"build/p-bb356fc4.entry.js"},{"revision":null,"url":"build/p-bee0dd34.entry.js"},{"revision":null,"url":"build/p-bfd61758.entry.js"},{"revision":null,"url":"build/p-c00afa46.entry.js"},{"revision":null,"url":"build/p-c563b4de.js"},{"revision":null,"url":"build/p-c674965a.entry.js"},{"revision":null,"url":"build/p-d7586d2d.js"},{"revision":null,"url":"build/p-d8494575.entry.js"},{"revision":null,"url":"build/p-d8572a62.entry.js"},{"revision":null,"url":"build/p-d8eee581.entry.js"},{"revision":null,"url":"build/p-d9a8a624.entry.js"},{"revision":null,"url":"build/p-d9a99416.entry.js"},{"revision":null,"url":"build/p-df8f8703.js"},{"revision":null,"url":"build/p-e4860b60.entry.js"},{"revision":null,"url":"build/p-e5c13e72.entry.js"},{"revision":null,"url":"build/p-e7e76dd7.entry.js"},{"revision":null,"url":"build/p-e80e2518.entry.js"},{"revision":null,"url":"build/p-ea025b82.js"},{"revision":null,"url":"build/p-ea3453f8.entry.js"},{"revision":null,"url":"build/p-ebf7dcfa.entry.js"},{"revision":null,"url":"build/p-ee46122d.js"},{"revision":null,"url":"build/p-ee5f47cd.js"},{"revision":null,"url":"build/p-eeaf7a4f.entry.js"},{"revision":null,"url":"build/p-f2660943.js"},{"revision":null,"url":"build/p-f31aba12.entry.js"},{"revision":null,"url":"build/p-f557a5de.js"},{"revision":null,"url":"build/p-f5849699.js"},{"revision":null,"url":"build/p-f584e2f9.entry.js"},{"revision":null,"url":"build/p-f5d1f416.entry.js"},{"revision":null,"url":"build/p-fba2a514.entry.js"},{"revision":null,"url":"build/p-fc1f280e.entry.js"},{"revision":null,"url":"build/p-fc3fb109.entry.js"},{"revision":null,"url":"build/p-fc5c503e.entry.js"},{"revision":"e08b0bab98d27155af10cf0c49b9f886","url":"build/swiper/swiper.bundle.js"},{"revision":"3bff251b2c56d790122af10b62a4e3f1","url":"build/swiper/swiper.js"}]]);
