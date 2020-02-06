import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';

const mapWorld = require('@highcharts/map-collection/countries/us/us-all.geo.json');
MapModule(Highcharts);
const data = [
    ['us-ma', 0],
    ['us-wa', 1],
    ['us-ca', 2],
    ['us-or', 3],
    ['us-wi', 4],
    ['us-me', 5],
    ['us-mi', 6],
    ['us-nv', 7],
    ['us-nm', 8],
    ['us-co', 9],
    ['us-wy', 10],
    ['us-ks', 11],
    ['us-ne', 12],
    ['us-ok', 13],
    ['us-mo', 14],
    ['us-il', 15],
    ['us-in', 16],
    ['us-vt', 17],
    ['us-ar', 18],
    ['us-tx', 19],
    ['us-ri', 20],
    ['us-al', 21],
    ['us-ms', 22],
    ['us-nc', 23],
    ['us-va', 24],
    ['us-ia', 25],
    ['us-md', 26],
    ['us-de', 27],
    ['us-pa', 28],
    ['us-nj', 29],
    ['us-ny', 30],
    ['us-id', 31],
    ['us-sd', 32],
    ['us-ct', 33],
    ['us-nh', 34],
    ['us-ky', 35],
    ['us-oh', 36],
    ['us-tn', 37],
    ['us-wv', 38],
    ['us-dc', 39],
    ['us-la', 40],
    ['us-fl', 41],
    ['us-ga', 42],
    ['us-sc', 43],
    ['us-mn', 44],
    ['us-mt', 45],
    ['us-nd', 46],
    ['us-az', 47],
    ['us-ut', 48],
    ['us-hi', 49],
    ['us-ak', 50]
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chart-green';
  Highcharts: typeof Highcharts = Highcharts; 

  
  // ----------------------------------------------------------------------
  // Demo #3

  chartMap: Highcharts.Options;

  ngOnInit(){
  	this.initChart();
  } 

  initChart(){
  	this.chartMap = {
    chart: {
      map: mapWorld
    },
    title: {
      text: 'Highmaps basic demo'
    },
    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
    },
    // mapNavigation: {
    //   enabled: true,
    //   buttonOptions: {
    //     alignTo: 'spacingBox'
    //   }
    // },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.properties.postal-code}'
      },
      allAreas: false,
      data: data
    } as Highcharts.SeriesMapOptions,
    {
      // Specify points using lat/lon
      type: 'mappoint',
      name: 'Canada cities',
      color: 'tomato',
      data: [
        {
          name: 'Vancouver',
          lat: 49.246292,
          lon: -123.116226
        },
        {
          name: 'Quebec City',
          lat: 46.829853,
          lon: -71.254028
        },
        {
          name: 'Yellowknife',
          lat: 62.4540,
          lon: -114.3718
        }
      ]
    } as Highcharts.SeriesMappointOptions]
  };
  }

  callback(chart):void{
  	console.log("calling back");
  	console.log(chart);
  	var point = chart.series[0].data[15];
  	console.log(point.setState("hover"));
  	console.log(chart.series[0].chart.tooltip.refresh(point));
  }
}
