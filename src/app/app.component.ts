import { Component, OnInit, ElementRef } from '@angular/core';
declare var $;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private el:ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).find('.parallax').parallax();
  }
}
