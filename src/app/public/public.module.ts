import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SofiComponent } from './sofi/sofi.component';
import { PisiComponent } from './pisi/pisi.component';
import { CareerComponent } from './career/career.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CovidComponent } from './covid/covid.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { MaterialDesign } from '../material-desain/material';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'pisi',
        component: PisiComponent
      },
      {
        path: 'sofi',
        component: SofiComponent
      },
      {
        path: 'career',
        component: CareerComponent
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent
      },
      {
        path: 'covid-19',
        component: CovidComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },


      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public/home'
      }
    ]
  },
];

@NgModule({
  declarations: [PublicComponent, HomeComponent, ContactUsComponent, SofiComponent, PisiComponent, CareerComponent, PrivacyPolicyComponent, CovidComponent, TermsConditionsComponent, BlogComponent, MainComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialDesign,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ]
})
export class PublicModule { }
