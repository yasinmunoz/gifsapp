import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private _gifsSvc: GifsService) { }

  get historial() {
    return this._gifsSvc.historial;
  }


}
