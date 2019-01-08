// url example: 'http://www.pechproject.ru/pages/Online/April2018/1.jpg',
'use strict';

const download = require('image-downloader');
const urlSource = 'http://www.pechproject.ru/pages/Online/February2018/';
const destPath = '/Users/leo/Sites/dwnlImg/7/';
const length = 170;
let i;
let timeOut = -1;

for (i = 1; i < length; i++) {
  const options = {
    url: urlSource + i + '.jpg',
    dest: destPath
  }

  if (timeOut >= 0) {
    clearTimeout(timeOut);
  }

  timeOut = setTimeout(function() {
    timeOut = -1;
    download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      throw err
    });
  }, 2000);
}
