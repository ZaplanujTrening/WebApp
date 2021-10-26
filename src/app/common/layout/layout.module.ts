import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { Routing } from 'src/app/modules/routing';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LayoutModule { }
