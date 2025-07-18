import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HighlightDirective } from '@shared/directives';

@Component({
  selector: 'app-calendar',
  imports: [HighlightDirective],
  template: `<p appHighlight>
    aplicando la directiva appHighlight al parrafo de calendar works!
  </p>`,
  styleUrl: './calendar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {}
