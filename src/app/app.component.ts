import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: ElementRef;

  encRequest: String = '';
  accessCode: String;
  merchant_id: string;
  url: string;
  currency = "INR";
  amount = 1.00;
  redirect_url = "http://127.0.0.1:3001/ccavResponseHandler";
  cancel_url = "http://127.0.0.1:3001/ccavResponseHandler";
  language = "EN";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Request-Headers': "Content-Type",
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    this.merchant_id = 'XXX';
    this.accessCode = 'XXX';
    this.encRequest = '';
  }

  pay() {
    this.form.nativeElement.submit();
  }

  sendInfo(form: NgForm) {
    console.log(form.value);
    this.http.post("http://localhost:4000/api/payment/post", form.value, this.httpOptions).subscribe(success => {
      console.log(success);
      debugger;
      this.encRequest = success.toString();
    }, error => {
      console.log(error);
    });
  }

  // fb(){
  //   window.location.href = "http://localhost:3000/auth/facebook";
  // }

}
