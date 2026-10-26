import type { OfferService } from '@/services';
import { ServiceError } from '../errors';
import type { Offer } from '@/types/models';
import { formatMoney } from '@/utils/formatMoney';
import { clone, run } from './base';
import { offer } from './sampleData';

const offers = new Map<string, Offer>([[offer.id, clone(offer)]]);

function mustOffer(id: string) {
  const o = offers.get(id);
  if (!o) throw new ServiceError('Offer not found.', 'offers');
  return o;
}

export const mockOfferService: OfferService = {
  getOffer: (offerId) =>
    run('offers', () => {
      const o = mustOffer(offerId);
      if (o.status === 'open' && new Date(o.validUntil).getTime() < Date.now()) o.status = 'expired';
      return clone(o);
    }),
  acceptOffer: (offerId, maxPrice) =>
    run('offers', () => {
      const o = mustOffer(offerId);
      if (o.status === 'expired' || new Date(o.validUntil).getTime() < Date.now()) {
        o.status = 'expired';
        throw new ServiceError('This offer has expired.', 'offers');
      }
      // ByMEE never accepts above the approved maximum (BM-031).
      if (maxPrice !== undefined && o.price > maxPrice) {
        throw new ServiceError(`This offer is above your highest price (${formatMoney(maxPrice)}).`, 'offers');
      }
      o.status = 'accepted';
      return clone(o);
    }),
  declineOffer: (offerId) =>
    run('offers', () => {
      const o = mustOffer(offerId);
      o.status = 'declined';
      return clone(o);
    }),
};

export function resetOffersMock() {
  offers.clear();
  offers.set(offer.id, clone(offer));
}
