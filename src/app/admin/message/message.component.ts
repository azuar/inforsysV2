import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  email: string;
  date: string;
  name: string;
  message: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem magnam sunt officia quas ab, iure repudiandae perspiciatis sit mollitia, deserunt doloremque doloribus! Laborum.' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem magnam sunt officia quas ab, iure repudiandae perspiciatis sit mollitia, deserunt doloremque doloribus! Laborum.' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem magnam sunt officia quas ab, iure repudiandae perspiciatis sit mollitia, deserunt doloremque doloribus! Laborum.' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem magnam sunt officia quas ab, iure repudiandae perspiciatis sit mollitia, deserunt doloremque doloribus! Laborum.' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'B' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'C' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'N' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'O' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'F' },
  { date: '24 April 2021', email: 'azuarok@gmail.com', name: 'Azuar', message: 'Ne' },
];


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.date + 1}`;
  }
}
