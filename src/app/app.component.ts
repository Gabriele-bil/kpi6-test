import { Component } from '@angular/core';

@Component({
  selector: 'kpi-root',
  template: `
    <div id="container" class="d-flex">
      <aside>
        <kpi-sidebar></kpi-sidebar>
      </aside>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    #container {
      width: 100vw;
      min-height: 100vh;

      aside {
        flex-basis: 15%;
      }

      main {
        flex-basis: 75%;
      }
    }
  `]
})
export class AppComponent {}
