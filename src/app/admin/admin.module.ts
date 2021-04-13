import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PostComponent } from './post/post.component';
import { MessageComponent } from './message/message.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material-desain/material';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: 'messages',
        component: MessageComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },


      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/login'
      }
    ]
  },
];


@NgModule({
  declarations: [AdminComponent, PostComponent, MessageComponent, MainAdminComponent, DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialDesign,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class AdminModule { }
