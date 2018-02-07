import {Injectable, Provider} from '@angular/core';
import {UseCase} from '../../api';

export namespace SessionHandleUseCaseModule {

  export function providers(): Provider[] {
    return [DestroyLocalSessionUseCase, InitializeLocalSessionUseCase];
  }

  @Injectable()
  export class InitializeLocalSessionUseCase implements UseCase<LoggedUser, InitializeLocalSessionUseCaseResponse> {

    execute(request: LoggedUser): InitializeLocalSessionUseCaseResponse {
      return null;
    }
  }

  @Injectable()
  export class DestroyLocalSessionUseCase implements UseCase<LoggedUser, DestroyLocalSessionUseCaseResponse> {

    execute(request: LoggedUser): DestroyLocalSessionUseCaseResponse {
      return null;
    }
  }

  const moduleName = '[SessionHandleUseCaseModule]';

  interface LoggedUser {
    username: string;
  }

  class InitializeLocalSessionUseCaseResponse {
  }

  class DestroyLocalSessionUseCaseResponse {
  }

  export class LoggedUserBuilder {
    private buildingRequest: LoggedUser;

    constructor() {
      this.buildingRequest = <any>{};
    }

    username(username: string): LoggedUserBuilder {
      this.buildingRequest.username = username;
      return this;
    }

    build(): LoggedUser {
      return this.buildingRequest;
    }
  }

}
