import { Component, OnInit, Input, ViewChild, AfterViewInit  } from '@angular/core';
import { IData, StarComponent } from '../star/star.component';

export interface IDataSet {
  label: string;
  data: number[];
}


@Component({
  selector: 'app-main-star',
  templateUrl: './main-star.component.html',
  styleUrls: ['./main-star.component.scss']
})
export class MainStarComponent implements OnInit, AfterViewInit {
  @Input() starData: IDataSet[]; // added
  @Input() starLabels: string []; // added
  @Input() animation = 500;
  @Input() showLegend = false;

 // added

  @ViewChild(StarComponent) starViewChild: StarComponent;

  colors = ['white', '#06fab4', '#3fb7fd', '#f32f6d', '#6ecbd3', '#795afd'];

  outputData: IData = {
    datasets: [],
    labels: [],
    options:  {
      animation: {duration: 500},
      tooltips: {
        backgroundColor: 'rgba(	176, 32, 98, 0.7)'
      },
      layout: {
        padding: {
          left: 0,
          top: 40,
          right: 0,
          bottom: 40,
        }
      },
      legend: {
        display: true,
        labels : {
          fontColor: 'white',
          filter: function (item, starData) {
            return !item.text.includes('remove');
          }
        }
      },
      scale: {
        pointLabels: {
          fontFamily: 'nunito',
          display: true,
          fontColor: 'white',
          fontSize: 14
        },
        angleLines: {
          color: 'rgba(33,64,103)'
        },
        ticks: {
          fontFamily: 'nunito',
          maxTicksLimit: 5,
          display: false,
          min: 0,
          max: 10,
        },
        gridLines: {
          color: 'rgba(33,64,103)'
        }
      }
    }
  };

  ngOnInit() {
    this.outputData.labels = this.starLabels;
    this.outputData.options.animation = { duration: this.animation };
    this.outputData.options.legend.display = this.showLegend;
    this.createDatasets();
  }

  ngAfterViewInit() {
  }

  createDatasets() {
    for (const dataIndex in this.starData) {
      if (this.starData.hasOwnProperty(dataIndex)) {
      const dataset = {
        data: this.starData[dataIndex].data,
        label: this.starData[dataIndex].label,
        fill: false,
        lineTension: 0.3,
        borderColor: this.colors[dataIndex],
        borderWidth: 2,
        pointBorderColor: this.colors[dataIndex],
        pointRadius: 3,
        pointBackgroundColor: this.colors[dataIndex]
      };
      this.outputData.datasets.push(dataset);
    }}
  }

  removeData() {
    this.outputData.datasets.splice(0);
  }

  redraw() {
    this.removeData();
    this.createDatasets();
    this.starViewChild.redraw();
  }

}
