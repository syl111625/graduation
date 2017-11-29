//近周能耗分析
var echartsLineWeek = echarts.init(document.getElementById("echarts-line-chartWeek"));
    var Weekoption = {
        title : {
            text: '近周能耗分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
        color : [  '#60C0DD', '#9BCA63' ],
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
				axisTick : {
            		inside: false,            
        					},        		
                data : [44,43,42,41,40,39,37]
            }
        ],
        yAxis : [             //为什么设置不到双y轴
              {
                type : 'value',
                min:0,
                max:3000,
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'用电量(度)',
                nameTextStyle:{
                	color:'orange'
                }
           }
//         {
//              type : 'value',
//              min:0,
//              max:600,
//              axisLabel:{
//              	textStyle:{
//              		color:'skyblue'
//              	}               	
//              },
//              name:'功率(w)',
//              nameTextStyle:{
//              	color:'skyblue'
//              }
//         }
        ],
        series : [
            {
                name:'用电量',
                type:'bar',
                data:[1000,2000,2200,2500,1500,2000,2400],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值',symbolSize:'60'},
                        {type : 'min', name: '最小值',symbolSize:'60'}
                    ]
                },
                yAxisIndex: 0,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
//          {
//              name:'功率',
//              type:'bar',
//              data:[100,200,300,400,500,200,340],
//              barWidth:25,
//              markPoint : {
//                  data : [
//                      {type : 'max', name: '最大值'},
//                      {type : 'min', name: '最小值'}
//                  ]
//              },
//              yAxisIndex: 1,
//              markLine : {
//                  data : [
//                      {type : 'average', name: '平均值'}
//                  ]
//              }
//          }
        ]
    };
    echartsLineWeek.setOption(Weekoption);
//  echartsLineWeek.showLoading();
    $(window).resize(echartsLineWeek.resize);

//近月能耗分析

    var echartsLineMonth = echarts.init(document.getElementById("echarts-line-chartMonth"));
    var Monthoption = {
        title : {
            text: '近月能耗分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
        color : [  '#60C0DD', '#9BCA63' ],
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
				axisTick : {
            		inside: false,            
        	},        		
                data : ['2017-10-10','2017-10-12','2017-10-14','2017-10-16']
            }
        ],
        yAxis : [             //为什么设置不到双y轴
              {
                type : 'value',
                min:0,
                max:5000,
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'用电量(度)',
                nameTextStyle:{
                	color:'orange'
                }
           }
//         {
//              type : 'value',
//              min:0,
//              max:5000,
//              axisLabel:{
//              	textStyle:{
//              		color:'skyblue'
//              	}               	
//              },
//              name:'功率(w)',
//              nameTextStyle:{
//              	color:'skyblue'
//              }
//         }
        ],
        series : [
            {
                name:'用电量',
                type:'bar',
                data:[2000, 1500, 4000, 1000],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值',symbolSize:'60'},
                        {type : 'min', name: '最小值',symbolSize:'60'}
                    ]
                },
                yAxisIndex: 0,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
//          {
//              name:'功率',
//              type:'bar',
//              data:[1000,4200,1500, 1200],
//              barWidth:25,
//              markPoint : {
//                  data : [
//                      {type : 'max', name: '最大值'},
//                      {type : 'min', name: '最小值'}
//                  ]
//              },
//              yAxisIndex: 1,
//              markLine : {
//                  data : [
//                      {type : 'average', name: '平均值'}
//                  ]
//              }
//          }
        ]
    };
    echartsLineMonth.setOption(Monthoption);
//  echartsLineMonth.showLoading();
    $(window).resize(echartsLineMonth.resize);

    


//(function () {
//  var lineChart = echarts.init(document.getElementById("echarts-line-chartYear"));
//  var lineoption = {
//      title : {
//          text: '一周能耗分析'
//      },
//      tooltip : {
//          trigger: 'axis'
//      },
//      legend: {
//          data:['用电量','功率']
//      },
//      grid:{
//          x:40,
//          x2:40,
//          y2:24
//      },
//      calculable : true,
//      xAxis : [
//          {
//              type : 'category',
//              boundaryGap : true,
//				axisTick : {
//          		inside: false,            
//      	},        		
//              data : ['2017-10-10','2017-10-12','2017-10-14','2017-10-16']
//          }
//      ],
//      yAxis : [             //为什么设置不到双y轴
//            {
//              type : 'value',
//              min:0,
//              
//              axisLabel:{
//              	textStyle:{
//              		color:'orange'
//              	}               	
//              },
//              name:'用电量(度)',
//              nameTextStyle:{
//              	color:'orange'
//              }
//         },
//         {
//              type : 'value',
//              min:0,
//              
//              axisLabel:{
//              	textStyle:{
//              		color:'skyblue'
//              	}               	
//              },
//              name:'功率(w)',
//              nameTextStyle:{
//              	color:'skyblue'
//              }
//         }
//      ],
//      series : [
//          {
//              name:'用电量',
//              type:'bar',
//              data:[2, 15, 4, 10],
//              barWidth:25,
//              markPoint : {
//                  data : [
//                      {type : 'max', name: '最大值'},
//                      {type : 'min', name: '最小值'}
//                  ]
//              },
//              yAxisIndex: 0,
//              markLine : {
//                  data : [
//                      {type : 'average', name: '平均值'}
//                  ]
//              }
//          },
//          {
//              name:'功率',
//              type:'bar',
//              data:[10,12,15, 12],
//              barWidth:25,
//              markPoint : {
//                  data : [
//                      {type : 'max', name: '最大值'},
//                      {type : 'min', name: '最小值'}
//                  ]
//              },
//              yAxisIndex: 1,
//              markLine : {
//                  data : [
//                      {type : 'average', name: '平均值'}
//                  ]
//              }
//          }
//      ]
//  };
//  lineChart.setOption(lineoption);
//  $(window).resize(lineChart.resize);
//
//  
//})();

//自定义能耗分析
var echartsLineDef = echarts.init(document.getElementById("echarts-line-chartDefined"));    
    var Defoption = {
        title : {
            text: '自定义能耗分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
        color : [  '#60C0DD', '#9BCA63' ],
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
				axisTick : {
            		inside: false,            
        	},        		
                data : ['2017-10-14','2017-10-16','2017-10-10','2017-10-12','2017-10-14','2017-10-16']
            }
        ],
        yAxis : [             //为什么设置不到双y轴
              {
                type : 'value',
                min:0,
                max:1000,
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'用电量(度)',
                nameTextStyle:{
                	color:'orange'
                }
           }
//         {
//              type : 'value',
//              min:0,
//              max:1000,
//              axisLabel:{
//              	textStyle:{
//              		color:'skyblue'
//              	}               	
//              },
//              name:'功率(w)',
//              nameTextStyle:{
//              	color:'skyblue'
//              }
//         }
        ],
        series : [
            {
                name:'用电量',
                type:'bar',
                data:[400,520,250, 720,250, 320],
                barWidth:25,
                markPoint : {
                	
                    data : [
                        {type : 'max', name: '最大值',symbolSize:'60'},
                        {type : 'min', name: '最小值',symbolSize:'60'}
                    ]
                },
                yAxisIndex: 0,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
//          {
//              name:'功率',
//              type:'bar',
//              data:[830,220,650, 460,250,770],
//              barWidth:25,
//              markPoint : {
//                  data : [
//                      {type : 'max', name: '最大值'},
//                      {type : 'min', name: '最小值'}
//                  ]
//              },
//              yAxisIndex: 1,
//              markLine : {
//                  data : [
//                      {type : 'average', name: '平均值'}
//                  ]
//              }
//          }
        ]
    };
    echartsLineDef.setOption(Defoption);
//  echartsLineDef.showLoading();
    $(window).resize(echartsLineDef.resize);

    


