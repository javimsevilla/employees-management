import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl,
  timeout: 5000 // request timeout
};
