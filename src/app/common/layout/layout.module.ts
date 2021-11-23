import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { Routing } from 'src/app/modules/routing';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule }  from '@angular/forms';

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
    MainComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LayoutModule { }
