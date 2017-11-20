

//自定义累计电费
    var lineChartDefined = echarts.init(document.getElementById("echarts-line-chartDefined"));
    var Definedoption = {
        title : {
            text: '累计电费'
        },
        tooltip : {
            trigger: 'axis'
        },
//      legend: {
//          data:['电费']
//      },
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
                data : ['2017-10','2017-11','2017-12','2018-1','2018-2','2018-3','2018-4']
            }
        ],
        yAxis : [             //为什么设置不到双y轴
              {
                type : 'value',
                min:0,
                max:600,
                axisLabel:{
                	textStyle:{
                		color:'orange'
                	}               	
                },
                name:'电费(元)',
                nameTextStyle:{
                	color:'orange'
                }
           }
        ],
        series : [
            {
                name:'电费',
                type:'bar',
                data:[200, 150, 320, 100,400, 120, 500],
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
            }
        ]
    };
    lineChartDefined.setOption(Definedoption);
//  $(window).resize(lineChartDefined.resize);




