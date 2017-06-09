import {Directive, ElementRef, OnInit} from '@angular/core';
import {HighlightJS} from './highlightjs/HighlightJS';
declare const $: any;

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private hljs = new HighlightJS();
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hljs.highlightBlock($(this.el.nativeElement)[0]);
    }, 50);
  }

}
