import { Address } from './address.model';
import * as moment from 'jalali-moment';
import { PaymentMethod } from '../type/payment-method';
import { PostingMethod } from '../type/posting-method';
import { OrderStatus } from '../type/order-status';

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
