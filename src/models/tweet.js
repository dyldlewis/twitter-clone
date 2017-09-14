import Moment from 'moment';
class Tweet {
  constructor(content) {
    this.likedStatus = false;
    this.content = content;
    this.timeOpened = new Moment();
    this.timeSinceOpened = "a few seconds";
  }

  setTimeSinceOpened() {
    this.timeSinceOpened = this.timeOpened.fromNow(true);
  }

}

export default Tweet;
