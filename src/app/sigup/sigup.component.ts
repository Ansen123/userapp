import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  constructor() { }
name=""
phone=""
gender=""
email=""
address=""
pin=""
blood=""

dob=""
age=""
pname=""
pass=""
conPass=""
readValues=()=>
{
  let data={
    "name":this.name,
    "phone":this.phone,
    "gender":this.gender,
    "email":this.email,
    "address":this.address,
    "pin":this.pin,
    "blood":this.blood,
    "dob":this.dob,
    "age":this.age,
    "pname":this.pname,
    "pass":this.pass,
    "conPass":this.conPass
  }
  console.log(data)
  alert("ok")
}
  ngOnInit(): void {
  }

}
