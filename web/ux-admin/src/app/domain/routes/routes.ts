export class ViewRoutes {
  static ADMIN_BASE = 'csm';
  static ADMIN_BASE_URI = '/csm';
  static DASHBOARD = ViewRoutes.ADMIN_BASE_URI + '/dashboard';
  static HOME = '/home';
}

export class AdminViewRoutes {
  static LIST_ITEMS = ViewRoutes.ADMIN_BASE + '/items';
  static LIST_ITEMS_URI = '/' + AdminViewRoutes.LIST_ITEMS;
  static ADD_NEW_ITEM = ViewRoutes.ADMIN_BASE + '/items/add';
  static ADD_NEW_ITEM_URI = '/' + AdminViewRoutes.ADD_NEW_ITEM;
}
