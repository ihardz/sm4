import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {

  @Output() toggle: EventEmitter<IconCloseToggleEvent> = new EventEmitter<IconCloseToggleEvent>();
  @Input() default: boolean;
  closed: boolean;
  constructor() {
    this.closed = this.default;
  }

  ngOnInit() {
  }

  handleToggle(event: any): void {
    this.closed = !this.closed;
    this.toggle.emit({ closed: this.closed });
  }
}

export interface IconCloseToggleEvent {
  closed: boolean;
}
