/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

interface UserDetails {
  username: string;
  id: string;
  profile_image_url: string;
  name: string;
}
@Component({
  selector: 'app-tweetnegar',
  templateUrl: 'tweetnegar.component.html',
  styleUrls: ['tweetnegar.component.scss'],
})
export class TweetnegarPage implements OnInit {
  tweetText = `
  گروه دانش بنیان در سال ٨۵، با تکیه بر بیش از هشت سال سابقه مؤثر مؤسسین
  خود در زمینه IT، فعالیت رسمی خود را آغاز کرد. گروه بیان با بهره گیری
  از تخصص و تجربه پرسنل خود که اندوخته های گرانقدری را از همکاری در
  پروژه های جهانی IT و حضور در شرکت های معتبر بین المللی به ارمغان آورده
  بودند، سعی کرد تا فضای علمی- تحقیقاتی متفاوتی را در صنعت فناوری
  اطلاعات ایران رقم بزند.`;
  userDetails: UserDetails = {
    username: 'badgirTeam',
    id: '1234',
    profile_image_url: '../../../assets/img/img.jpg',
    name: 'تیم بادگیر',
  };
  constructor(private http: HttpClient, private toastCtrl: ToastController) {}

  ngOnInit(): void {}

  /**
   * Gets tweet text
   *
   * @param tweetLink
   * @returns tweet text
   */
  async getTweetText(tweetLink: string): Promise<string> {
    // regex for extract twitter link
    const regex = tweetLink.match('twitter.com/.*/status(?:es)?/([^/?D]+)');
    if (regex) {
      tweetLink = regex[0];
      // extract tweet id from tail of url
      const tweetId = tweetLink.substring(tweetLink.lastIndexOf('/') + 1);
      // get tweet from twitter api
      const params = {
        ids: tweetId, // Edit Tweet IDs to look up
        expansions:
          'author_id,entities.mentions.username,in_reply_to_user_id,referenced_tweets.id.author_id',
        'user.fields': 'name,profile_image_url,username', // get user additional detailes
      };
      await this.http
        .get('/twitter/tweets', {
          params,
        })
        .subscribe(
          (data: any) => {
            if (data.data[0] && data.data[0].text) {
              // show tweet in element
              const text = data.data[0].text;
              this.setTweetText(text);
              this.setUserDetail(data.includes.users[0]);
              return text;
            } else {
              throw new Error('tweet not found');
            }
          },
          async (error) => {
            const toast = await this.toastCtrl.create({
              message: 'دریافت توییت با خطا مواجه شد',
              duration: 3000,
              color: 'danger',
            });
            toast.present();
            return error;
          }
        );
    } else {
      // input not match with regex for twitter url
      const toast = await this.toastCtrl.create({
        message: 'لینک توییت وارد شده صحیح نمی‌باشد',
        duration: 3000,
        color: 'danger',
      });
      toast.present();
      return 'wrong input url';
    }
  }

  /**
   * Sets tweet text
   *
   * @param tweetText
   */
  setTweetText(tweetText: string): void {
    if (tweetText) {
      this.tweetText = tweetText;
    } else {
      // TODO: fill this situation
    }
  }

  /**
   * Sets user detail
   *
   * @param userDetails
   */
  setUserDetail(response: UserDetails): void {
    this.userDetails = response;
  }

  /**
   * Gets tweet picture
   *
   * @param [fileType]
   */
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
