import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from './CookieService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  cookieForm: FormGroup
  cookie: []

  constructor(private fb: FormBuilder, private cs: CookieService) {}

  ngOnInit() {
    this.cookieForm = this.fb.group({
      'number': this.fb.control('')
    })
  }

  async getCookie() {
    const numOfCookies = this.cookieForm.value.number.toString()
    //console.log(typeof numOfCookies)
    const res = await this.cs.getCookies(numOfCookies)
    //@ts-ignore
    numOfCookies == '1' ? this.cookie = [res.cookie] : this.cookie = res.cookie

  }

}
