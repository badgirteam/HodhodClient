import { Component, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-tweetnegar',
  templateUrl: 'tweetnegar.component.html',
  styleUrls: ['tweetnegar.component.scss'],
})
export class TweetnegarPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getTweetPicture(fileType: 'png' | 'jpeg' = 'jpeg'): void {
    const tweetNode = document.getElementById('tweet');
    switch (fileType) {
      case 'png':
        domtoimage.toPng(tweetNode).then((image): void => {
          saveAs(image, 'tweet.png');
        });
        break;
      case 'jpeg':
        domtoimage.toJpeg(tweetNode).then((image): void => {
          saveAs(image, 'tweet.jpeg');
        });
        break;
      default:
        console.error('invalid file type!');
        break;
    }
  }
}
