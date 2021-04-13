import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // this.checkLogin();
  }
  menu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard'
    },
    {
      name: 'Post',
      icon: 'post_add',
      url: '/admin/post'
    },
    {
      name: 'Messages',
      icon: 'forum',
      url: '/admin/messages'
    },
  ];

  //Login Chek
  // checkLogin() {
  //   this.api.get('bookswithauth/status').subscribe(res => {
  //     return;
  //   }, err => {
  //     this.router.navigate(['/login']);
  //   })
  // }

  // //Logout Function
  // logout() {
  //   let conf = confirm('Yakin Ingin Keluar ?');
  //   if (conf) {
  //     localStorage.removeItem('appToken');
  //     window.location.reload();
  //   }
  // }

}
