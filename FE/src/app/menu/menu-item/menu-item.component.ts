import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { MenuItem } from '../menu.models';

const HIDDEN_CLASS_NAME = 'hidden';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() minimized: boolean;
  @Input() item: MenuItem;
  @Output() itemClick: EventEmitter<MenuItemClickEvent> = new EventEmitter<MenuItemClickEvent>();

  @HostBinding(`class.${HIDDEN_CLASS_NAME}`) hidden = this.minimized;

  constructor() { }

  ngOnInit() {
  }

  handleItemClick(event: any): void {
    this.itemClick.emit({ target: this.item });
  }
}

export interface MenuItemClickEvent {
  target: MenuItem;
}
