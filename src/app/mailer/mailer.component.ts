import { Component, OnInit } from '@angular/core';
declare var _;

@Component({
  moduleId: module.id,
  selector: 'app-mailer',
  templateUrl: 'mailer.component.html',
  styleUrls: ['mailer.component.css']
})
export class MailerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    _.each([1, 2, 3], alert);
  }

}
