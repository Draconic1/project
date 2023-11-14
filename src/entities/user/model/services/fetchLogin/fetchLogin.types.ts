import { TokenObtainPair } from 'src/api/api.generated';

export type LoginData = TokenObtainPair;

export interface LoginBody {
  username: string;
  password: string;
}
