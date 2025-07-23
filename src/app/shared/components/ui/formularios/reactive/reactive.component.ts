import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveComponent {
  form!: FormGroup;
  fb = inject(FormBuilder);
  constructor() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
