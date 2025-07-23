import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenComponent {
  form!: FormGroup;

  onSubmit(values: FormGroup) {
    console.log(values);
  }
}
