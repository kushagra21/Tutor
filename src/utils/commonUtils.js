export const getPostedDay = value => {
  var post = value;
  var monthComp = value.substring(0, value.indexOf('/'));
  if (Number(monthComp) > 12) {
    var dayComp = value.substring(
      value.indexOf('/') + 1,
      value.lastIndexOf('/'),
    );
    var yearComp = value.substring(value.lastIndexOf('/') + 1, value.length);
    post = `${dayComp}/${monthComp}/${yearComp}`;
  }
  var postedDay = new Date(post);
  var current = new Date();
  var diffTime = current.getTime() - postedDay.getTime();
  var diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
  if (Math.floor(diffDays / 365) > 0) {
    if (Math.floor(diffDays / 365) === 1) {
      return `${Math.floor(diffDays / 365)} year ago`;
    } else {
      return `${Math.floor(diffDays / 365)} years ago`;
    }
  }
  if (Math.floor(diffDays / 30) > 0) {
    return `${Math.floor(diffDays / 30)} months ago`;
  }
  if (diffDays <= 29) {
    return `${diffDays} days ago`;
  }
};

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
