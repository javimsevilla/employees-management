import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Output()
  delete: EventEmitter<void>;
  @Output()
  itemSelected: EventEmitter<void>;

  constructor() {
    this.delete = new EventEmitter<void>();
    this.itemSelected = new EventEmitter<void>();
  }

  emitDelete() {
    this.delete.emit();
  }

  emitItemSelected() {
    this.itemSelected.emit();
  }
}
