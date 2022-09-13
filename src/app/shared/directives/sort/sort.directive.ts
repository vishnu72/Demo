
import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective implements OnChanges {
  @Input() sortColumn: string;
  @Input() columnName: string;
  @Input() sortOrder: boolean;
  constructor(private renderer: Renderer2, private elementRef: ElementRef,) {
    // Set the initial class of the element to 'fa'.
    this.renderer.addClass(this.elementRef.nativeElement, 'fa');
    this.sortColumn = '';
    this.columnName = '';
    this.sortOrder = false;
  }
  // Change the currently assigned class on every change of Input variables.
  ngOnChanges(changes: SimpleChanges): void {
    this.getSortClass();
  }

  // Assign appropriate icon class based on currently selected sorting column and sort order
  getSortClass() {
    if (this.sortColumn === '' || this.sortColumn !== this.columnName) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-desc');
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-asc');
      this.renderer.addClass(this.elementRef.nativeElement, 'fa-sort');
    } else if (this.sortColumn === this.columnName && this.sortOrder === true) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort');
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-desc');
      this.renderer.addClass(this.elementRef.nativeElement, 'fa-sort-asc');
    } else if (this.sortColumn === this.columnName && this.sortOrder === false) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort');
      this.renderer.removeClass(this.elementRef.nativeElement, 'fa-sort-asc');
      this.renderer.addClass(this.elementRef.nativeElement, 'fa-sort-desc');
    }
  }
}
