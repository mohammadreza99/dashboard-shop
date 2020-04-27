import * as moment from 'jalali-moment';
import { Gender } from '../Enums/gender.type';
import { Address } from './address.model';

export class Customer {
  id: string;
  groupId: string;
  firstName: string;
  lastName: string;
  birthDate: moment.Moment;
  registerDate: moment.Moment;
  gender: Gender;
  nationalCode: string;
  email: string;
  address: Address;
  mobile: string;
  phone: string;
  password: string;
  subscription: boolean;
  ordersIds?: string[]
}
