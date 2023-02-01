import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayDirective]'
})
export class DelayDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input() appDelayDirective!: number;

  ngOnInit() {
    setTimeout(() => {
      this.container.createEmbeddedView(this.template);
    }, this.appDelayDirective);
  }
}
