import { Component } from '@angular/core';
import { UserIpService } from './shared/services/user-ip.service';

@Component({
  selector: 'kpi-root',
  template: `
    <div id="container" class="d-flex">
      <aside>
        <kpi-sidebar [ip]="ip$ | async"></kpi-sidebar>
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
        flex-basis: 100%;
      }
    }
  `]
})
export class AppComponent {
  public ip$ = this.userIpService.getIp();

  constructor(private userIpService: UserIpService) {}
}
