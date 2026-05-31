import { AfterViewInit, Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-rich-text-editor',
  standalone: true,
  imports: [CommonModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BlogRichTextEditorComponent),
    multi: true,
  }],
  template: `
    <div class="rte">
      <div class="rte-toolbar">
        <button type="button" class="rte-btn" (mousedown)="preventBlur($event)" (click)="exec('bold')" title="Bold"><b>B</b></button>
        <button type="button" class="rte-btn" (mousedown)="preventBlur($event)" (click)="exec('italic')" title="Italic"><i>I</i></button>
        <button type="button" class="rte-btn" (mousedown)="preventBlur($event)" (click)="heading('h2')" title="Heading 2">H2</button>
        <button type="button" class="rte-btn" (mousedown)="preventBlur($event)" (click)="heading('h3')" title="Heading 3">H3</button>
        <button type="button" class="rte-btn" (mousedown)="preventBlur($event)" (click)="heading('p')" title="Paragraph">P</button>
        <button type="button" class="rte-btn" (mousedown)="preventBlur($event)" (click)="exec('insertUnorderedList')" title="Bullet list">• List</button>
      </div>
      <div
        #editor
        class="rte-editor"
        contenteditable="true"
        (input)="onInput()"
        (blur)="onBlur()"
        data-placeholder="Write formatted text..."
      ></div>
    </div>
  `,
  styles: [`
    .rte { border: 1px solid var(--border); border-radius: var(--radius-sm); overflow: hidden; background: var(--surface); }
    .rte-toolbar { display: flex; flex-wrap: wrap; gap: 0.35rem; padding: 0.45rem; border-bottom: 1px solid var(--border-light); background: var(--bg); }
    .rte-btn {
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: var(--radius-sm);
      padding: 0.25rem 0.55rem;
      cursor: pointer;
      font-size: 0.82rem;
      min-width: 2rem;
    }
    .rte-btn:hover { border-color: var(--primary); color: var(--primary); }
    .rte-editor {
      min-height: 120px;
      padding: 0.75rem;
      line-height: 1.65;
      outline: none;
      font-size: 0.98rem;
      color: var(--text-secondary);
    }
    .rte-editor:empty:before {
      content: attr(data-placeholder);
      color: var(--text-muted);
    }
    .rte-editor h2 { font-size: 1.35rem; margin: 0.5rem 0; font-weight: 700; }
    .rte-editor h3 { font-size: 1.12rem; margin: 0.45rem 0; font-weight: 700; }
    .rte-editor p { margin: 0.35rem 0; }
    .rte-editor ul { margin: 0.35rem 0 0.35rem 1.2rem; }
  `],
})
export class BlogRichTextEditorComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private pendingValue = '';

  writeValue(value: string | null): void {
    this.pendingValue = value || '';
    if (this.editorRef?.nativeElement) {
      this.editorRef.nativeElement.innerHTML = this.pendingValue;
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    if (this.editorRef?.nativeElement) {
      this.editorRef.nativeElement.innerHTML = this.pendingValue;
    }
  }

  preventBlur(event: MouseEvent): void {
    event.preventDefault();
  }

  exec(command: string): void {
    this.editorRef.nativeElement.focus();
    document.execCommand(command, false);
    this.syncValue();
  }

  heading(tag: string): void {
    this.editorRef.nativeElement.focus();
    document.execCommand('formatBlock', false, tag);
    this.syncValue();
  }

  onInput(): void {
    this.syncValue();
  }

  onBlur(): void {
    this.onTouched();
    this.syncValue();
  }

  private syncValue(): void {
    const html = this.editorRef?.nativeElement?.innerHTML ?? '';
    this.onChange(html);
  }
}
