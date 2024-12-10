import NotificationHelper from './notification-helper.js';
import CONFIG from '../globals/config.js';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
      },
    });
  },
};

export default WebSocketInitiator;