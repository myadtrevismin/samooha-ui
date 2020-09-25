import { AuthorizationService } from '../../app/_services/authorize/authorization.service';

// tslint:disable-next-line: typedef
export function appInitializer(authenticationService: AuthorizationService) {
  return () => new Promise(resolve => {
      authenticationService.refreshToken()
          .subscribe()
          .add(resolve);
  });
}
