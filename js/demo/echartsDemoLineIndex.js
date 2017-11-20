(function () {
    var lineChart = echarts.init(document.getElementById("echarts-line-chart"));
    var lineoption = {
        title : {
            text: '月总用电和总电费'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['用电量','电费']
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
                boundaryGap : false,
                data : ['2017-08','2017-09','2017-10','2017-11','2017-12','2018-01','2018-02']
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
                name:'用电量(kw.h)',
                nameTextStyle:{
                	color:'orange'
                }
           },
            {
                type : 'value',            
                min:0,
                name:'电费(元)' ,
                axisLabel:{
                	textStyle:{
                		color:'skyblue'
                	}               	
                }
                
            }
        ],
        series : [
            {
                name:'用电量',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
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
                name:'电费',
                type:'line',
                data:[3, 5, 6, 7, 3, 2, 0],
//              yAxisIndex:10,
                markPoint : {
                    data : [
                        {name : '周最低', value : 5, xAxis: 1, yAxis: 4.5}
                    ]
                },
                yAxisIndex: 1,
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(lineoption);
    $(window).resize(lineChart.resize);

    

})();
