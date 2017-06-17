import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`

  `],
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a href="#" class="navbar-brand">Angular2 Routing App</a>
          </div>

          <ul class="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>

    <home-page></home-page>

    <about-page></about-page>

    <contact-page></contact-page>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}
