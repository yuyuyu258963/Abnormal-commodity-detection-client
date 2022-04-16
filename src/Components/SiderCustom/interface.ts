
export interface MenuItemType {
  id:             number,
  name:           string,
  link:           string,
  icon:           any,
  children:      MenuItemType[],
}