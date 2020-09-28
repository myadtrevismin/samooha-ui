
export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  jwtToken?: string;
  accountCode?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  address?: string;
  profileFile?: string;
  role?: string;
}
