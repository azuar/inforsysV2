import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: any = {};
  hide: boolean = true;
  loading: boolean;

  // login() {
  //   this.loading = true;
  //   this.api.login(this.users.email, this.users.password).subscribe(res => {
  //     this.loading = false;
  //     localStorage.setItem('appToken', JSON.stringify(res));
  //     this.router.navigate(['admin/dashboard']);
  //   }, err => {
  //     this.loading = false;
  //     alert('Maaf Akun Belum Bisa Digunakan');
  //   })
  // }
}
