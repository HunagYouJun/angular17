import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { bootstrapApplication } from '@angular/platform-browser';
import { FooComponent } from './components/foo.component';
import { ViewportLazyComponent } from './components/viewport-lazy.component';
import { ItemComponent } from './components/item.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FooComponent,
    ViewportLazyComponent,
    ItemComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  index = 0;
  show = true;
  obs$ = of('hello');
  message = 'hello';
  items: { id: number; label: string }[] = [
    { id: 1, label: 'foo' },
    { id: 2, label: 'bar' },
    { id: 3, label: 'baz' },
    { id: 4, label: 'hello' },
    { id: 5, label: 'world' },
  ];
}
