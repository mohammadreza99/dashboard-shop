import * as moment from 'jalali-moment';
import { Address } from './address.model';
import { Gender } from '../type/gender';

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
