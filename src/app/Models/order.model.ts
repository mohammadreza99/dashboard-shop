import { Address } from './address.model';
import { Customer } from './customer.model';
import * as moment from 'jalali-moment';
import { PaymentMethod } from '../Enums/payment-method.enum';
import { PostingMethod } from '../Enums/posting-method.enum';
import { OrderStatus } from '../Enums/order-status.enum';

export class Order {
  id: string;
  trackingCode: string;
  address: Address;
  customerId: string;
  date: moment.Moment;
  price: number;
  postingPrice: number;
  discount: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  postingMethod: PostingMethod;
  status: OrderStatus;
  discription: string;
  products: [
    {
      count: number;
      productId: string;
    }
  ];
}
