import { Component, OnInit, ChangeDetectorRef, NgZone, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqAskResponse {
  matched: boolean;
  answer: string;
  faqId?: number;
  contactEmail?: string;
  contactWebsite?: string;
  contactPhone?: string;
}

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-faq-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="faq-chatbot" [class.is-open]="open">
      <button
        type="button"
        class="faq-fab"
        (click)="toggle()"
        [attr.aria-expanded]="open"
        [attr.aria-label]="open ? 'Close help chat' : 'Chat with 1Guntha help'"
      >
        <svg *ngIf="!open" class="fab-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
          <circle fill="currentColor" cx="8" cy="10" r="1.1"/>
          <circle fill="currentColor" cx="12" cy="10" r="1.1"/>
          <circle fill="currentColor" cx="16" cy="10" r="1.1"/>
        </svg>
        <svg *ngIf="open" class="fab-icon fab-close" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.29 19.7 5.7 21.11 12 14.82 18.3 21.11 19.71 19.7 13.41 13.4 19.71 7.11z"/>
        </svg>
        <span class="fab-pulse" *ngIf="!open" aria-hidden="true"></span>
      </button>

      <div class="faq-panel" *ngIf="open" role="dialog" aria-label="1Guntha FAQ help chat">
        <div class="faq-panel-header">
          <div class="faq-agent">
            <div class="faq-avatar" aria-hidden="true">1G</div>
            <div>
              <div class="faq-title">1Guntha Help</div>
              <div class="faq-subtitle">
                <span class="online-dot" aria-hidden="true"></span>
                Online · Usually replies instantly
              </div>
            </div>
          </div>
          <button type="button" class="faq-close" (click)="toggle()" aria-label="Close chat">×</button>
        </div>

        <div class="faq-chips" *ngIf="suggestions.length">
          <button
            type="button"
            class="faq-chip"
            *ngFor="let s of suggestions"
            (click)="askSuggestion(s.question)"
            [title]="s.question"
          >{{ s.question }}</button>
        </div>

        <div class="faq-messages" #messagesEl>
          <div
            class="faq-msg"
            *ngFor="let m of messages"
            [class.faq-msg-user]="m.role === 'user'"
            [class.faq-msg-bot]="m.role === 'bot'"
          >
            {{ m.text }}
          </div>
          <div class="faq-msg faq-msg-bot faq-typing" *ngIf="sending">
            <span></span><span></span><span></span>
          </div>
        </div>

        <form class="faq-input-row" (ngSubmit)="send()">
          <input
            type="text"
            class="faq-input"
            [(ngModel)]="draft"
            name="faqDraft"
            placeholder="Ask about buying, renting, visits…"
            [disabled]="sending"
            autocomplete="off"
          />
          <button type="submit" class="faq-send" [disabled]="sending || !draft.trim()" aria-label="Send message">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .faq-chatbot {
      position: fixed;
      right: 1.5rem;
      bottom: 1.5rem;
      z-index: 2000;
      font-family: var(--font-sans, 'DM Sans', system-ui, sans-serif);
      pointer-events: none;
    }
    .faq-chatbot > * {
      pointer-events: auto;
    }
    .faq-fab {
      position: relative;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      background: var(--primary-gradient, linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%));
      color: #fff;
      box-shadow: 0 10px 28px rgba(14, 165, 233, 0.42);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .faq-fab:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 14px 32px rgba(14, 165, 233, 0.5);
    }
    .fab-icon {
      width: 1.55rem;
      height: 1.55rem;
      position: relative;
      z-index: 1;
    }
    .fab-pulse {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: rgba(14, 165, 233, 0.45);
      animation: faq-pulse 2s ease-out infinite;
      z-index: 0;
    }
    @keyframes faq-pulse {
      0% { transform: scale(1); opacity: 0.55; }
      70% { transform: scale(1.45); opacity: 0; }
      100% { transform: scale(1.45); opacity: 0; }
    }
    .faq-panel {
      position: absolute;
      right: 0;
      bottom: 4.75rem;
      width: min(370px, calc(100vw - 2rem));
      height: min(540px, calc(100vh - 7rem));
      background: var(--surface, #fff);
      border: 1px solid var(--border, #e2e8f0);
      border-radius: 18px;
      box-shadow: 0 22px 48px rgba(15, 23, 42, 0.22);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: faq-rise 0.22s ease-out;
    }
    @keyframes faq-rise {
      from { opacity: 0; transform: translateY(12px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .faq-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.95rem 1rem;
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      color: #fff;
    }
    .faq-agent {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      min-width: 0;
    }
    .faq-avatar {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.55);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.75rem;
      letter-spacing: 0.02em;
      flex-shrink: 0;
    }
    .faq-title {
      font-family: var(--font-display, 'Space Grotesk', sans-serif);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.2;
    }
    .faq-subtitle {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.75rem;
      opacity: 0.92;
      margin-top: 0.15rem;
    }
    .online-dot {
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      background: #4ade80;
      box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.35);
      flex-shrink: 0;
    }
    .faq-close {
      border: none;
      background: rgba(255, 255, 255, 0.15);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      font-size: 1.35rem;
      line-height: 1;
      cursor: pointer;
      color: #fff;
      flex-shrink: 0;
    }
    .faq-close:hover {
      background: rgba(255, 255, 255, 0.28);
    }
    .faq-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      padding: 0.7rem 0.9rem 0.2rem;
      max-height: 5.2rem;
      overflow: auto;
      background: var(--bg, #f8fafc);
    }
    .faq-chip {
      border: 1px solid var(--border, #e2e8f0);
      background: var(--surface, #fff);
      color: var(--text, #0f172a);
      border-radius: 999px;
      padding: 0.35rem 0.7rem;
      font-size: 0.72rem;
      cursor: pointer;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: border-color 0.15s, color 0.15s;
    }
    .faq-chip:hover {
      border-color: var(--primary, #0ea5e9);
      color: var(--primary, #0ea5e9);
    }
    .faq-messages {
      flex: 1;
      overflow-y: auto;
      padding: 0.85rem 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      background: var(--bg, #f8fafc);
    }
    .faq-msg {
      max-width: 88%;
      padding: 0.7rem 0.85rem;
      border-radius: 14px;
      font-size: 0.875rem;
      line-height: 1.45;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .faq-msg-bot {
      align-self: flex-start;
      background: var(--surface, #fff);
      border: 1px solid var(--border, #e2e8f0);
      color: var(--text, #0f172a);
      border-bottom-left-radius: 4px;
    }
    .faq-msg-user {
      align-self: flex-end;
      background: var(--primary, #0ea5e9);
      color: #fff;
      border-bottom-right-radius: 4px;
    }
    .faq-typing {
      display: inline-flex;
      gap: 0.28rem;
      align-items: center;
      padding: 0.85rem 1rem;
    }
    .faq-typing span {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: #94a3b8;
      animation: faq-dot 1.2s infinite ease-in-out;
    }
    .faq-typing span:nth-child(2) { animation-delay: 0.15s; }
    .faq-typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes faq-dot {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.45; }
      40% { transform: translateY(-3px); opacity: 1; }
    }
    .faq-input-row {
      display: flex;
      gap: 0.5rem;
      padding: 0.75rem 0.85rem 0.9rem;
      border-top: 1px solid var(--border-light, #f1f5f9);
      background: var(--surface, #fff);
      align-items: center;
    }
    .faq-input {
      flex: 1;
      border: 1px solid var(--border, #e2e8f0);
      border-radius: 999px;
      padding: 0.65rem 0.95rem;
      font-size: 0.875rem;
      outline: none;
      background: var(--bg, #f8fafc);
      min-width: 0;
    }
    .faq-input:focus {
      border-color: var(--primary, #0ea5e9);
      box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
      background: #fff;
    }
    .faq-send {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: none;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: var(--primary, #0ea5e9);
      color: #fff;
      transition: opacity 0.15s, transform 0.15s;
    }
    .faq-send svg {
      width: 1.05rem;
      height: 1.05rem;
      margin-left: 2px;
    }
    .faq-send:hover:not(:disabled) {
      transform: scale(1.05);
    }
    .faq-send:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    @media (max-width: 480px) {
      .faq-chatbot {
        right: 0.85rem;
        bottom: 0.85rem;
      }
      .faq-panel {
        width: calc(100vw - 1.7rem);
        height: min(70vh, 520px);
      }
      .faq-fab {
        width: 3.4rem;
        height: 3.4rem;
      }
    }
  `],
})
export class FaqChatbotComponent implements OnInit {
  @ViewChild('messagesEl') messagesEl?: ElementRef<HTMLDivElement>;

  open = false;
  draft = '';
  sending = false;
  suggestions: FaqItem[] = [];
  messages: ChatMessage[] = [
    {
      role: 'bot',
      text: 'Hi! I am the 1Guntha help assistant. Ask about listings, site visits, payments, or tap a suggestion below.',
    },
  ];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.api.get<FaqItem[]>('/faq').subscribe({
      next: (list) => {
        this.ngZone.run(() => {
          this.suggestions = (Array.isArray(list) ? list : []).slice(0, 5);
          this.cdr.detectChanges();
        });
      },
      error: () => {
        /* public list optional; chatbot still works via /faq/ask */
      },
    });
  }

  toggle() {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => this.scrollToBottom(), 0);
    }
  }

  askSuggestion(question: string) {
    this.draft = question;
    this.send();
  }

  send() {
    const question = this.draft.trim();
    if (!question || this.sending) return;

    this.messages.push({ role: 'user', text: question });
    this.draft = '';
    this.sending = true;
    this.cdr.detectChanges();
    this.scrollToBottom();

    this.api.post<FaqAskResponse>('/faq/ask', { question }).subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.messages.push({
            role: 'bot',
            text: res?.answer || 'Sorry, something went wrong. Please try again.',
          });
          this.sending = false;
          this.cdr.detectChanges();
          this.scrollToBottom();
        });
      },
      error: () => {
        this.ngZone.run(() => {
          this.messages.push({
            role: 'bot',
            text: 'Sorry, I could not reach the help service. Please contact support@1guntha.com or visit https://1guntha.com.',
          });
          this.sending = false;
          this.cdr.detectChanges();
          this.scrollToBottom();
        });
      },
    });
  }

  private scrollToBottom() {
    setTimeout(() => {
      const el = this.messagesEl?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }
}
