import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kpi-sidebar',
  template: `
    <div class="sidebar-container d-flex flex-column justify-content-between w-100 h-100 p-3">
      <div class="d-flex flex-column">
        <img src="assets/images/brand/kpi6-logo.svg" alt="Kpi 6 logo">
        <div class="links d-flex flex-column mt-4">
          <a class="text-white text-decoration-none">
            <i class="bi bi-house-door mx-2"></i>
            Home
          </a>

          <a class="text-white text-decoration-none mt-2">
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
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
