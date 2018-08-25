import { Component, OnInit, Input } from '@angular/core';
import { Prediction } from '../reducers';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'immi-predict-result',
  templateUrl: './predict-result.component.html',
  styleUrls: ['./predict-result.component.css']
})
export class PredictResultComponent implements OnInit {

  @Input('prediction') prediction: Prediction;

  reader = new FileReader();
  imageUrl = '';

  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartLabels: string[];
  barChartType = 'horizontalBar';
  barChartLegend = true;
  barChartData: any;
  colors = [
    {
      'backgroundColor': [
        'red', 'blue', 'green', 'yellow', 'orange', 'brown', 'black', 'pink', 'cyan'
      ]
    }
  ];



  constructor() { }

  ngOnInit() {
    this.reader.readAsDataURL(this.prediction.file.file);
    this.reader.addEventListener('load', () => {
      this.imageUrl = this.reader.result as string;
    }, false);

    if (this.prediction.percentages.length) {
      this.barChartLabels = this.prediction.percentages.map(p => p.label);
      const max = this.prediction.percentages.map((p, i) => ({ percentage: p.percentage, color: this.colors[i], label: p.label }))
        .reduce((p, c) => p.percentage > c.percentage ? p : c);

      const isSure = max.percentage > 0.7;
      const label = isSure ? `Seems to be a ${max.label}` : `Not sure`;
      const color = isSure ? max.color : 'gray';
      this.barChartData = [{
        data: this.prediction.percentages.map(p => Math.round(p.percentage * 10000) / 100), label
      }];
    }
  }

  public getImageUrl() {
  }
}
