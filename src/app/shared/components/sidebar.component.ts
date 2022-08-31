import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kpi-sidebar',
  template: `
    <div class="sidebar-container d-flex flex-column justify-content-between w-100 h-100 p-3">
      <div class="d-flex flex-column">
        <img src="assets/images/brand/kpi6-logo.svg" alt="Kpi 6 logo">
        <div class="links d-flex flex-column mt-4">
          <a class="text-decoration-none p-2 rounded-3" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <i class="bi bi-house-door mx-2"></i>
            Home
          </a>

          <a class="text-decoration-none p-2 rounded-3 mt-2" routerLink="/statistics" routerLinkActive="active">
            <i class="bi bi-speedometer2 mx-2"></i>
            Statistics
          </a>
        </div>
      </div>

      <div class="position-relative">
        <button class="btn text-white">
          <i class="bi bi-person"></i>
          Super Admin
        </button>
      </div>
    </div>
  `,
  styles: [`
    .sidebar-container {
      background-color: #567AFA;

      a {
        color: #fff;
        transition: ease-in-out 0.3s;

        &.active, &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
