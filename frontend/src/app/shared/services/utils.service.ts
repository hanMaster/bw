import {Injectable} from '@angular/core';

@Injectable()

export class UtilsService {
  startOfDay(date: Date): Date {
    const dd = date.getDate();
    const MM = date.getMonth() + 1;
    const YYYY = date.getFullYear();
    return new Date(`${MM}.${dd}.${YYYY}`);
  }

  generatePassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  copyText(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Async: Copying to clipboard was successful!');
    }, (err) => {
      console.error('Async: Could not copy text: ', err);
    });
  }

}
