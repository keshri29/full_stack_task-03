import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FolderButtonComponent } from './folderbutton/folderbutton.component';
import { TableButtonComponent } from './tablebutton/tablebutton.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatButtonModule, MatIconModule,FolderButtonComponent,TableButtonComponent]
})


export class AppComponent {

  tableData: string[] = [];
  folderData: string[] = [];

  saveTableData(data: string) {
    this.tableData.push(data);
    console.log('Table data saved:', data);
  }

  cancelTable() {
    console.log('Table input canceled');
    this.cancelTable();
  }

  saveFolderData(data: string) {
    this.folderData.push(data);
    console.log('Folder data saved:', data);
  }

  cancelFolder() {
    console.log('Folder input canceled');
    console.log('Folder input canceled');
    this.cancelFolder();
  }
}

