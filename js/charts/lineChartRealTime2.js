



//动态数据+时间坐标轴
(function(){
	
	var trends = echarts.init(document.getElementById("trendsCapacity"));
	


option = {
    title: {
        text: '实时数据'
    },
//  min:0,
//  splitNumber:0.2,
//  max:1,
    tooltip: {
        trigger: 'axis',       
//      axisPointer : {
//					type : 'cross',
//					label : {
//						backgroundColor : '#283b56'
//					}
//				}
//		 formatter: "{a} <br/>{b} : {c} (w)"
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data:['15:53:23','15:53:23','15:53:23','15:53:23','15:53:23']
    },
    yAxis: [
    {
        type: 'value',
        name:'功率(w)',
        splitLine: {
            show: true
        },
//		min: 0,
      max:50	//设置以后图表不见了？直线不一样
    }
    ],
    color:['#60C0DD'],
    series: [{
        name: '功率',
        type: 'bar',       
        showSymbol: false,
        hoverAnimation: false,
        markPoint : {
                    data : [
                        {type : 'max', name: '最大功率'},
                        {type : 'min', name: '最小功率'}
                    ]
                },
        markLine : {
                    data : [
                        {type : 'average', name: '平均功率'}
                    ]
                },
		data: [  3.4,    4.5,   15,   43]
       			
		
    },
    {
        name: '电流',
        type: 'line',       
        showSymbol: false,
        hoverAnimation: false,
        
		data: [  15,   43, 3.4,    4.5]
       			
		
    },
    {
        name: '电压',
        type: 'line',       
        showSymbol: false,
        hoverAnimation: false,
        
		data: [ 24,4, 36, 35]
       			
		
    },
    {
        name: '用电量',
        type: 'bar',       
        showSymbol: false,
        hoverAnimation: false,
        
		data: [  15, 24, 5, 15]
       			
		
    }
    ]
};
	

trends.setOption(option);
})();



