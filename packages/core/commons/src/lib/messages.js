export default class Messages {

  constructor(messages) {
    this.messages = messages || {};
  }

  catch = (err) => {
    const msg = err.message;
    throw new Error(this.messages[msg] || msg);
  };


}
