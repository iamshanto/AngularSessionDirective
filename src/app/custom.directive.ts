import {Directive, ElementRef, Renderer, Input, OnInit,OnChanges} from '@angular/core';

@Directive({
  selector: '[custom]'
})
export class CustomDirective implements OnChanges{

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @Input('custom') color:string = 'green';
  @Input() size = 12;

  ngOnChanges(changes) {
    if(changes.hasOwnProperty('size')){
      this.renderer.setElementStyle(
          this.el.nativeElement,
          'fontSize',
          changes.size.currentValue + 'px'
      );
    }
    if(changes.hasOwnProperty('color')){
      this.renderer.setElementStyle(
          this.el.nativeElement,
          'backgroundColor',
          changes.color.currentValue
      );
    }

  }

  @Input() set sizeExe (value){
    this.renderer.setElementStyle(
        this.el.nativeElement,
        'backgroundColor',
        value
    );
  }

}
