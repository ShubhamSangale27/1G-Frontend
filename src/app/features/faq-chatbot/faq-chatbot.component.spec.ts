import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { FaqChatbotComponent } from './faq-chatbot.component';
import { ApiService } from '../../core/services/api.service';

describe('FaqChatbotComponent', () => {
  let component: FaqChatbotComponent;
  let fixture: ComponentFixture<FaqChatbotComponent>;
  let api: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    api = jasmine.createSpyObj('ApiService', ['get', 'post']);
    api.get.and.returnValue(of([
      { id: 1, question: 'How do I list a property?', answer: 'Use List Property.' },
    ]));
    api.post.and.returnValue(of({ matched: true, answer: 'Use List Property.', faqId: 1 }));

    await TestBed.configureTestingModule({
      imports: [FaqChatbotComponent],
      providers: [{ provide: ApiService, useValue: api }],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load FAQ suggestions', () => {
    expect(component).toBeTruthy();
    expect(api.get).toHaveBeenCalledWith('/faq');
    expect(component.suggestions.length).toBe(1);
  });

  it('should mount as a floating widget fixed to bottom-right', () => {
    const host = fixture.nativeElement.querySelector('.faq-chatbot') as HTMLElement;
    expect(host).toBeTruthy();
    const fab = fixture.nativeElement.querySelector('.faq-fab') as HTMLElement;
    expect(fab).toBeTruthy();
  });

  it('should open panel and send a question', fakeAsync(() => {
    component.toggle();
    fixture.detectChanges();
    expect(component.open).toBeTrue();
    expect(fixture.nativeElement.querySelector('.faq-panel')).toBeTruthy();

    component.draft = 'How do I list a property?';
    component.send();
    tick();
    fixture.detectChanges();

    expect(api.post).toHaveBeenCalledWith('/faq/ask', { question: 'How do I list a property?' });
    expect(component.messages.some((m) => m.role === 'user')).toBeTrue();
    expect(component.messages.some((m) => m.text.includes('Use List Property'))).toBeTrue();
    expect(component.sending).toBeFalse();
  }));

  it('should show contact fallback messaging on API error', fakeAsync(() => {
    api.post.and.returnValue(throwError(() => new Error('network')));
    component.toggle();
    component.draft = 'Anything';
    component.send();
    tick();
    fixture.detectChanges();

    expect(component.messages[component.messages.length - 1].text).toContain('support@1guntha.com');
  }));

  it('should ask from suggestion chips', fakeAsync(() => {
    component.toggle();
    component.askSuggestion('How do I list a property?');
    tick();
    fixture.detectChanges();
    expect(api.post).toHaveBeenCalled();
  }));
});
