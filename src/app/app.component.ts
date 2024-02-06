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
import { ExampleComponent } from './components/example.component';
import * as XLSX from 'xlsx';

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
    ExampleComponent,
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

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      
      // 循環遍歷每個 sheet
      wb.SheetNames.forEach(sheetName => {
        const ws: XLSX.WorkSheet = wb.Sheets[sheetName];
        // 使用 XLSX.utils.sheet_to_json 讀取 sheet 內容
        const data = XLSX.utils.sheet_to_json(ws);
        console.log(sheetName, data); // 這裡可以看到每個工作表的內容
      });
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
