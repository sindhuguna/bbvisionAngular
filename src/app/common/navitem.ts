export interface NavItem {
  menuname: string;
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: Children[];
}

export interface Children {
  menuname: string;
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
}
