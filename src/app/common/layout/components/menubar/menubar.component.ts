import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'Aktywny trening',
              icon:'pi pi-fw pi-th-large',
              url: '/training/active'
            //   items:[
            //       {
            //           label:'New',
            //           icon:'pi pi-fw pi-plus',
            //           items:[
            //           {
            //               label:'Bookmark',
            //               icon:'pi pi-fw pi-bookmark'
            //           },
            //           {
            //               label:'Video',
            //               icon:'pi pi-fw pi-video'
            //           },

            //           ]
            //       },
            //       {
            //           label:'Delete',
            //           icon:'pi pi-fw pi-trash'
            //       },
            //       {
            //           separator:true
            //       },
            //       {
            //           label:'Export',
            //           icon:'pi pi-fw pi-external-link'
            //       }
            //   ]
          },
          {
              label:'Baza ćwiczeń',
              icon:'pi pi-fw pi-book',
              url: '/exercise/list'
            //   items:[
            //       {
            //           label:'Left',
            //           icon:'pi pi-fw pi-align-left'
            //       },
            //       {
            //           label:'Right',
            //           icon:'pi pi-fw pi-align-right'
            //       }
            //   ]
          }
      ];
  }
}
