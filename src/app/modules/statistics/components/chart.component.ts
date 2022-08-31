import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'kpi-chart',
  template: `
    <canvas *ngIf="id" [id]="'chart' + id" class="w-100 h-100"></canvas>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  @Input() id: string = '';
  @Input() set config(config: ChartConfiguration | null) {
    if (config && this.id) {
      this.chart = new Chart(`chart${this.id}`, config)
    }
  }
  public chart: Chart | null = null;

  constructor() {
    Chart.register(...registerables);
  }
}
