import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'VSCode Webview Angular';
  imageSrc: string;

  ngAfterViewInit() {
    setTimeout(() => {
      this.imageSrc = window['imageWebviewUri']
    }, 3000);
  }
}
