import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginGroup!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get loginGroupControls() {
    console.log(this.loginGroup.controls, 'controls')
    return this.loginGroup.controls;
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  get emailErrorMsg(): string {
    const form: FormControl = this.loginGroup.get('email') as FormControl;
    return form.hasError('required')
      ? 'Campo obligatorio'
      : form.hasError('email')
        ? 'Debe ingresar un email válido'
        : '';
  }

  get passwordErrorMsg(): string {
    const form: FormControl = this.loginGroup.get('password') as FormControl;
    return form.hasError('required')
      ? 'Campo obligatorio'
      : '';
  }

  onSubmit(): void {
    if (this.loginGroup.valid) {
      const { email, password } = this.loginGroup.value;

      this.authService.login(email, password).subscribe(success => {
        if (success) {
          this.router.navigate(['/dashboard']); // 👈 Redirigir a un menú central
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
      });
    }
  }


}
