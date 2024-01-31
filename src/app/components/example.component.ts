import {
  AfterRenderPhase,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'example',
  standalone: true,
  template: `<p>example-component</p>
    <div #chart>{{ chartStr }}</div>`,
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chartRef!: ElementRef;
  chartStr = '';
  constructor() {
    afterNextRender(
      () => {
        // 这里需要操作真实DOM，必须保证DOM已经具备了
        console.log(3333);
        this.chartStr = 'hello world';
      },
      { phase: AfterRenderPhase.Write }
    );
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngOnInit(): void {
    console.log('init');
  }
}
