
//实时电流	
var trendsElectricity = echarts.init(document.getElementById("trendsElectricity"));

Electricityoption = {
    title: {
        text: '实时电流'
    },
    tooltip: {
        trigger: 'axis',       
//      axisPointer : {
//					type : 'cross',
//					label : {
//						backgroundColor : '#283b56'
//					}
//				}
    },
    toolbox: {
        	feature: {
            saveAsImage: {},
            magicType: {
        		type: ['line', 'bar']
    			}
        	}
   	 	},
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        
        data:['15:53:23','15:53:23','15:53:23','15:53:23','15:53:23']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true
        },
        name:'电流(A)',
		min: 0.6,
      max:0.8	//设置以后图表不见了？直线不一样
    },
    color:['#60C0DD'],
    series: [{
        name: '电流',
        type: 'line',       
        showSymbol: false,
        hoverAnimation: false,
        markPoint : {
                    data : [
                        {type : 'max', name: '最大电流'},
                        {type : 'min', name: '最小电流'}
                    ]
                },
//      markLine : {
//                  data : [
//                      {type : 'average', name: '平均电流'}
//                  ]
//              },
		data: ['0.65','0.63','0.7','0.61','0.62']
    }]
};
//trendsElectricity.showLoading();	
trendsElectricity.setOption(Electricityoption);


//实时电压	
var trendsVoltage = echarts.init(document.getElementById("trendsVoltage"));

Voltageoption = {
    title: {
        text: '实时电压'
    },
  
//  min:0,
//  splitNumber:0.2,
//  max:1,
    tooltip: {
        trigger: 'axis',       
    },
    toolbox: {
        	feature: {
            saveAsImage: {},
            magicType: {
        		type: ['line', 'bar']
    			}
        	}
   	 	},
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data:['15:53:23','15:53:23','15:53:23','15:53:23','15:53:23']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true
        },
        name:'电压(V)',
	min: 215,
     max:230	
      
    },
    color:['#CDAD00'],
    series: [{
        name: '电压',
        type: 'line',       
        showSymbol: false,
        hoverAnimation: false,
//      itemStyle:{
//      	
//      		color:'orange';
//      	
//      	
//      },
        markPoint : {
                    data : [
                        {type : 'max', name: '最大电压'},
                        {type : 'min', name: '最小电压'}
                    ]
                },
//      markLine : {
//                  data : [
//                      {type : 'average', name: '平均电压'}
//                  ]
//              },
		data: ['216','220','225','226','230']
    }]
};
	
//trendsVoltage.showLoading();
trendsVoltage.setOption(Voltageoption);



//实时功率	
var trendsCapacity = echarts.init(document.getElementById("trendsCapacity"));
	
Capacityoption = {
    title: {
        text: '实时功率'
    },

    tooltip: {
        trigger: 'axis',       
    },
    toolbox: {
        	feature: {
            saveAsImage: {},
            magicType: {
        		type: ['line', 'bar']
    			}
        	}
   	 	},
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data:['15:53:23','15:53:23','15:53:23','15:53:23','15:53:23']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true
        },
        name:'电功率(kw)',
	  min:1,
      max:1.1	
    },
    color:['#EE7600'],
    series: [{
        name: '功率',
        type: 'line',       
        showSymbol: false,
        hoverAnimation: false,
        markPoint : {
                    data : [
                        {type : 'max', name: '最大功率'},
                        {type : 'min', name: '最小功率'}
                    ]
                },
//      markLine : {
//                  data : [
//                      {type : 'average', name: '平均功率'}
//                  ]
//              },
		data: ['1.1','1','1.09','1.04','1']
    }]
};
	
//trendsCapacity.showLoading();
trendsCapacity.setOption(Capacityoption);











