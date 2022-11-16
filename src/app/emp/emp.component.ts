import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees:any = []
  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {id: 1, name: 'Virág Béla', city: 'Szeged'},
      {id: 2, name: 'Teknős Irén', city: 'Szolnok'},
      {id: 3, name: 'Parlag Ferenc', city: 'Pécs'}
    ]
  }

}
