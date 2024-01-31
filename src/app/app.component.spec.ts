import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        NoopAnimationsModule,
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('應該創建應用', () => {
    expect(component).toBeTruthy();
  });

  it('點擊 Toggle 按鈕應該切換 show 狀態', () => {
    const toggleButton = fixture.debugElement.query(By.css('button[mat-stroked-button]')).nativeElement;
    expect(component.show).toBeTrue();
    toggleButton.click();
    fixture.detectChanges();
    expect(component.show).toBeFalse();
  });

  it('點擊 Next 按鈕應該切換 index', () => {
    const nextButton = fixture.debugElement.queryAll(By.css('button[mat-stroked-button]'))[1].nativeElement;
    expect(component.index).toBe(0);
    nextButton.click();
    fixture.detectChanges();
    expect(component.index).toBe(1);
  });

  // 更多的測試案例可以根據實際的業務邏輯添加
});