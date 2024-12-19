import type { TOrder } from '../../utils/types';
export const WS_USER_CONNECTION_START: 'WS_USER_CONNECTION_START' = 'WS_USER_CONNECTION_START';
export const WS_USER_GET_ORDERS: 'WS_USER_GET_ORDERS' = 'WS_USER_GET_ORDERS';
export const WS_USER_RESET_ORDERS: 'WS_USER_RESET_ORDERS' = 'WS_USER_RESET_ORDERS';

export interface IWsUserConnectioonStartAction {
    readonly type: typeof WS_USER_CONNECTION_START;
    
  }
  
  export interface IWsUserGetOrdersAction {
    readonly type: typeof WS_USER_GET_ORDERS;
    readonly payload: {
        total: string;
        totalToday: string;
        orders: Array<TOrder>;
      };
    
  }

  export interface IWsUserResetOrdersAction {
    readonly type: typeof WS_USER_RESET_ORDERS;
    
  }
  
  
  export type TWsUserOrdersActions =
    | IWsUserConnectioonStartAction
    | IWsUserGetOrdersAction
    | IWsUserResetOrdersAction;
