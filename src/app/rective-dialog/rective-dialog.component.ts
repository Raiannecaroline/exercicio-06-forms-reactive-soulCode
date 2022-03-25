import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rective-dialog',
  templateUrl: './rective-dialog.component.html',
  styleUrls: ['./rective-dialog.component.css']
})
export class RectiveDialogComponent implements OnInit {

  nameDialog: string = ''
  lastnameDialog: string = ''
  usernameDialog: string = ''
  emailDialog: string = ''
  cpfDialog: string = ''
  telDialog: string = ''
  enderecoDialog: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
