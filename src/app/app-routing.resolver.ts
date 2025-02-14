import { ResolveFn } from '@angular/router';

export const appRoutingResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
