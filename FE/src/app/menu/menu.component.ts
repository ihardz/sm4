import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Menu, MENU } from './menu.models';
import { MenuItemClickEvent } from './menu-item/menu-item.component';
import { IconCloseToggleEvent } from './icon-close/icon-close.component';

const MINIMIZE_CLASS_NAME = 'minimize';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu = MENU;

  @HostBinding(`class.${MINIMIZE_CLASS_NAME}`)
  public get minimized(): boolean {
    return Boolean(this.menu.minimized);
  }

  constructor() { }

  ngOnInit() {
  }

  handleItemClick(event: MenuItemClickEvent): void {
    return this.menu.set(event.target);
  }

  handleMainNavToggle(event: IconCloseToggleEvent): void {
    this.menu.toggle();
  }
}
