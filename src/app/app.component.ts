import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: Array<{ firstName: string; lastName: string }> = [];
  oneMember: any = {};
  firstName: string = '';
  lastName: string = '';
  ngOnInit(): void {
    this.oneMember = { firstName: 'Ricky', lastName: 'Bobby' };
    this.people.push(this.oneMember);
    this.oneMember = { firstName: 'John', lastName: 'Doe' };
    this.people.push(this.oneMember);
  }

  addRow() {
    if (this.firstName === '' || this.lastName === '') {
      return false;
    }
    this.oneMember = { firstName: this.firstName, lastName: this.lastName };
    this.people.push(this.oneMember);
    this.firstName = '';
    this.lastName = '';
    return true;
  }

  deleteRow(index) {
    this.people.splice(index, 1);
    return true;
  }
}
