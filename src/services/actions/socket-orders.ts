import type { TOrder } from '../../utils/types';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';

export interface IWsConnectioonStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsGetOrdersAction {
  readonly type: typeof WS_GET_ORDERS;
  readonly payload: {
    total: string;
    totalToday: string;
    orders: Array<TOrder>;
  };
}

export type TWsOrdersActions =
  | IWsConnectioonStartAction
  | IWsGetOrdersAction;
