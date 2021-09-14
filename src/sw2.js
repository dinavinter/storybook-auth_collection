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
 // self.workbox.precaching.precacheAndRoute([self.__WB_MANIFEST]);
