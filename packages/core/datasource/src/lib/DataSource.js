import Channel from '@sgabskit/eventbus';

export default class DataSource {

  static type = 'DataSource';

  constructor(fetch) {
    this.fetch = fetch;
    this.channel = new Channel();
    this.loading = false;
    this.error = null;
    this.data = null;
  }

  load = () => {

    if (this.loading) return

    this.loading = true;
    this.error = null;

    this.channel.publish('state', { loading: true });

    this.fetch().then((data) => {
      this.data = data;
    }).catch((err) => {
      this.error = err;
    }).finally(() => {
      this.loading = false;
      this.channel.publish('state', { data: this.data, error: this.error, loading: this.loading });
    });
  };

  subscribe = (callback) => {
    callback({ loading: this.loading, data: this.data, error: this.error });
    return this.channel.subscribe('state', ({ loading, data, error }) => {
      callback({ loading, data, error });
    });
  };

}
