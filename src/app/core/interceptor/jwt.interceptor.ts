import { HttpInterceptorFn } from '@angular/common/http';
import { TokenStorage } from '../auth/token-storage';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = TokenStorage.getAccessToken();

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(cloned);
  }
  return next(req);
};
