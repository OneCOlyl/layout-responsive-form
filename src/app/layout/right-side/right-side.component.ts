import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent {
  @Output() toggleSideEvent = new EventEmitter<boolean>();
  isCollapsed = true;

  toggleSide(): void {
    this.isCollapsed = !this.isCollapsed;
    this.toggleSideEvent.emit(this.isCollapsed);
  }
}
