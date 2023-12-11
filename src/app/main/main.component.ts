import { Component, OnInit } from '@angular/core';
import data from '../Json/data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  balanceView: any = [];
  moneyStatistics: any = [];
  transactionsView: any = [];
  ngOnInit(): void {
 
    this.balanceView = data.balance;
    this.moneyStatistics = data.money_statistics;
    this.transactionsView = data.transactions;
  
  }

  chartOptions = {
    theme: "light",
    // title:{
    //   text: "Platform Impressions by Quarter"
    // },
    animationEnabled: true,
    toolTip: {
      shared: true
    },
   
    axisY: {
      gridColor: "#e8e8e8",
      tickColor: "#e8e8e8" ,
    prefix: "$",
    lineThickness:0,
    labelFontFamily: "'Public Sans', sans-serif",
  
	  },
    axisX: {
      lineColor: "#e8e8e8",
      tickLength: 0,
      tickThickness: 2,
      labelFontSize: 12,
      
      labelFontFamily: "'Public Sans', sans-serif",
      interval: 1,
			intervalType: "month",
			valueFormatString: "MMM"
     
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
    // legend: {
    //   horizontalAlign: "right",
    //   verticalAlign: "top",
    //   reversed: true
    // },
    dataPointWidth: 10,
	  data: [{
		type: "column",	
    color: "#91a9ab",
		name: "Income",
		legendText: "Income",
		showInLegend: true, 
    
    dataPoints: [
      { label: "Jan", y: 40 },
      { label: "Feb", y: 35 },
      { label: "Mar", y: 45 },
      { label: "Apr", y: 45 },
      { label: "May", y: 30 },
      { label: "Jun", y: 35 },
      { label: "Jul", y: 50 },
      { label: "Aug", y: 45 },
      { label: "Sep", y: 35 },
      { label: "Oct", y: 32 },
      { label: "Nov", y: 45 },
      { label: "Dec", y: 40 },
    ]
	  }, {
		type: "column",	
		name: "Investment",
    color: "#8285b2",
		legendText: "Investment",
	
		showInLegend: true,
		dataPoints: [
      { label: "Jan", y: 10 },
      { label: "Feb", y: 0.5 },
      { label: "Mar", y: 10 },
      { label: "Apr", y: 15 },
      { label: "May", y: 5 },
      { label: "Jun", y: 5 },
      { label: "Jul", y: 13 },
      { label: "Aug", y: 5 },
      { label: "Sep", y: 15 },
      { label: "Oct", y: 5 },
      { label: "Nov", y: 10 },
      { label: "Dec", y: 15 },
    ]
	  },{
      type: "column",	
      name: "Expenses",
      legendText: "Expense",
      color: "#555d90",
     
      showInLegend: true,
      dataPoints: [
        { label: "Jan", y: 30 },
        { label: "Feb", y: 30 },
        { label: "Mar", y: 35 },
        { label: "Apr", y: 30 },
        { label: "May", y: 25 },
        { label: "Jun", y: 28 },
        { label: "Jul", y: 22 },
        { label: "Aug", y: 28 },
        { label: "Sep", y: 20 },
        { label: "Oct", y: 27 },
        { label: "Nov", y: 27 },
        { label: "Dec", y: 20 },
      ]
      }]
	}	
}
