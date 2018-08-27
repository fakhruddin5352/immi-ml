import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { PredictionPercentage } from '../reducers';

@Component({
  selector: 'immi-predict-result-graph',
  templateUrl: './predict-result-graph.component.html',
  styleUrls: ['./predict-result-graph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PredictResultGraphComponent implements OnChanges {

  @Input() percentages: PredictionPercentage[];

  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartLabels: string[];
  barChartType = 'horizontalBar';
  barChartLegend = false;
  barChartData: any;
  colors = [
    {
      'backgroundColor': [
        'red', 'blue', 'green', 'yellow', 'orange', 'brown', 'black', 'pink', 'cyan'
      ]
    }
  ];

  label = '';
  percentage = 0;

  constructor() { }

  ngOnChanges() {
    if (this.percentages.length) {
      this.barChartLabels = this.percentages.map(p => p.label);
      this.barChartData = [{
        data: this.percentages.map(p => Math.round(p.percentage * 10000) / 100)
      }];
    }

  }


}
