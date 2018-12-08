export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface JwtPayload {
  id: string;
  email: string;
}