(function () {
    var lineChart = echarts.init(document.getElementById("echarts-line-chartWeek"));
    var lineoption = {
        title : {
            text: '一周能耗分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量','功率']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
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
                
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'用电量(度)',
                nameTextStyle:{
                	color:'orange'
                }
           },
           {
                type : 'value',
                min:0,
                
                axisLabel:{
                	textStyle:{
                		color:'skyblue'
                	}               	
                },
                name:'功率(w)',
                nameTextStyle:{
                	color:'skyblue'
                }
           }
        ],
        series : [
            {
                name:'用电量',
                type:'bar',
                data:[2, 15, 4, 10],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 0,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'功率',
                type:'bar',
                data:[10,12,15, 12],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 1,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(lineoption);
    $(window).resize(lineChart.resize);

    
})();


(function () {
    var lineChart = echarts.init(document.getElementById("echarts-line-chartMonth"));
    var lineoption = {
        title : {
            text: '一周能耗分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量','功率']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
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
                
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'用电量(度)',
                nameTextStyle:{
                	color:'orange'
                }
           },
           {
                type : 'value',
                min:0,
                
                axisLabel:{
                	textStyle:{
                		color:'skyblue'
                	}               	
                },
                name:'功率(w)',
                nameTextStyle:{
                	color:'skyblue'
                }
           }
        ],
        series : [
            {
                name:'用电量',
                type:'bar',
                data:[2, 15, 4, 10],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 0,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'功率',
                type:'bar',
                data:[10,12,15, 12],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 1,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(lineoption);
    $(window).resize(lineChart.resize);

    
})();

(function () {
    var lineChart = echarts.init(document.getElementById("echarts-line-chartYear"));
    var lineoption = {
        title : {
            text: '一周能耗分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量','功率']
        },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
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
                
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'用电量(度)',
                nameTextStyle:{
                	color:'orange'
                }
           },
           {
                type : 'value',
                min:0,
                
                axisLabel:{
                	textStyle:{
                		color:'skyblue'
                	}               	
                },
                name:'功率(w)',
                nameTextStyle:{
                	color:'skyblue'
                }
           }
        ],
        series : [
            {
                name:'用电量',
                type:'bar',
                data:[2, 15, 4, 10],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 0,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'功率',
                type:'bar',
                data:[10,12,15, 12],
                barWidth:25,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 1,
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(lineoption);
    $(window).resize(lineChart.resize);

    
})();



