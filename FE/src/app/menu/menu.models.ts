export class Menu {
  constructor(
    public items: MenuItem[],
    public activeId?: number,
    public minimized?: boolean
  ) {
    this.minimized = minimized || false;
  }

  set(item: MenuItem): void {
    this.activeId = item.id;
  }

  isActive(item: MenuItem): boolean {
    return this.items.indexOf(item) > 0 && this.activeId === item.id;
  }

  toggle(): void {
    this.minimized = !this.minimized;
  }
}

export interface MenuItem {
  id: number;
  title: string;
  icon: string;
}

export const MENU: Menu = new Menu(
  [
    { id: 0, icon: 'bookmark_border', title: 'News'},
    { id: 1, icon: 'today', title: 'Meters'},
    { id: 2, icon: 'insert_chart', title: 'Statistics'},
    { id: 3, icon: 'settings', title: 'Settings'}
  ]
);
