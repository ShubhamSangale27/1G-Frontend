import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FaqChatbotComponent } from './features/faq-chatbot/faq-chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FaqChatbotComponent],
  template: `
    <app-header />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-faq-chatbot />
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 140px);
      padding-top: 0;
      padding-bottom: 0;
      box-sizing: border-box;
      background: var(--bg);
    }
  `],
})
export class AppComponent {}
