import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const therestoApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'resto-api',
  }),
);

// const themoviedbImageApi = new Route(
//   ({ url }) => url.href.startsWith('https://image.tmdb.org/t/p/w500/'),
//   new StaleWhileRevalidate({
//     cacheName: 'resto-image-api',
//   }),
// );

registerRoute(therestoApi);
registerRoute(themoviedbImageApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');
  console.log(event);
  const dataJson = event.data.json();
  console.log(dataJson);
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };
  event.waitUntil(self.registration.showNotification(notification.title, notification.options));

  // const showNotification = self.registration.showNotification(
  //   notificationData.title,
  //   notificationData.options,
  // );

  // event.waitUntil(showNotification);
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const chainPromise = async () => {
    console.log('Notification has been clicked');
    await self.clients.openWindow('https://www.dicoding.com/');
  };
  event.waitUntil(chainPromise());
});