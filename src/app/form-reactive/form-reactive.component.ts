import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RectiveDialogComponent } from '../rective-dialog/rective-dialog.component';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  name: string = ''
  lastName: string = ''
  user: string = ''
  email: string = ''
  cpf: string = ''
  tel: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: any = ''
  confirmaSenha: any = ''

  cadastrosData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    telefone: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(
    private snackFormReactive: MatSnackBar,
    private formBirll: FormBuilder,
    private formDialogReactive: MatDialog
  ) { }

  enviarButtonReactive(): void {
    console.log(`Name = ${this.cadastrosData.controls['name'].value}`)
    console.log(`Last Name = ${this.cadastrosData.controls['lastName'].value}`)
    console.log(`Username = ${this.cadastrosData.controls['username'].value}`)
    console.log(`Email = ${this.cadastrosData.controls['email'].value}`)
    console.log(`CPF = ${this.cadastrosData.controls['cpf'].value}`)
    console.log(`Telefone = ${this.cadastrosData.controls['telefone'].value}`)
    console.log(`Endereço = ${this.cadastrosData.controls['endereco'].value}`)
    console.log(`Complemento = ${this.cadastrosData.controls['complemento'].value}`)
    console.log(`Senha = ${this.cadastrosData.controls['senha'].value}`)
    console.log(`Confirma Senha = ${this.cadastrosData.controls['confirmaSenha'].value}`)

    //CHAMAR O SNACK BAR
    this.snackFormReactive.open('Você foi cadastrado!', 'Ok', { duration: 3000 })


    //DIALOG

    let refDilogReactive = this.formDialogReactive.open(RectiveDialogComponent)

    refDilogReactive.componentInstance.nameDialog = this.cadastrosData.controls['name'].value
    refDilogReactive.componentInstance.lastnameDialog = this.cadastrosData.controls['lastName'].value
    refDilogReactive.componentInstance.usernameDialog = this.cadastrosData.controls['username'].value
    refDilogReactive.componentInstance.emailDialog = this.cadastrosData.controls['email'].value
    refDilogReactive.componentInstance.cpfDialog = this.cadastrosData.controls['cpf'].value
    refDilogReactive.componentInstance.telDialog = this.cadastrosData.controls['telefone'].value
    refDilogReactive.componentInstance.enderecoDialog = this.cadastrosData.controls['endereco'].value

  }


  validarSenhas(): void {
    if(this.cadastrosData.value.senha === this.cadastrosData.value.confirmaSenha){
      alert('Senhas são compatíveis!!')
    } else {
      alert('As senhas são divergentes! Por favor, coloque os campos (senha) iguais.')
    }
  }


}
