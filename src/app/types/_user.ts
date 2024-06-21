export interface IUser {
  id: number;
  active: boolean;
  birthday: string;
  createdAt: string;
  currency: string;
  email: string;
  isHaveFirstDeposit: boolean;
  isPaymentSystemUser: boolean;
  isVerificated: boolean;
  lastName: string;
  login: string;
  balance: number;
  phone: string;
  role: string;
  roleId: number;
  secondName: string;
  permission: IPermission;
}

export interface IPermission {
  canAddSameRole?: boolean;
  canCreateRoles?: boolean;
  canTransaction?: boolean;
}