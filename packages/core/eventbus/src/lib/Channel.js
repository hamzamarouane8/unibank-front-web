import postal from 'postal'
import {UUID} from '@sgabskit/commons';

export default class Channel {

  constructor(id) {
    this.channel = postal.channel(id || UUID.create())
  }

  publish(event, payload) {
    this.channel.publish(event, payload)
  }

  subscribe(event, callback) {
    const s = this.channel.subscribe(event, callback);
    return {
      unsubscribe: () => s.unsubscribe()
    }
  }
}
