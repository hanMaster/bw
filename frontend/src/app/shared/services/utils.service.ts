import {Injectable} from '@angular/core';

@Injectable()

export class UtilsService {
  startOfDay(date: Date): Date {
    const dd = date.getDate();
    const MM = date.getMonth() + 1;
    const YYYY = date.getFullYear();
    return new Date(`${MM}.${dd}.${YYYY}`);
  }
}
