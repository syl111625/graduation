


//实时用电量
	
	var kWhArea = echarts.init(document.getElementById("kWhArea"));
	
	kWhoption = {
    title: {
        text: '实时用电量'
    },
    tooltip : {
        trigger: 'axis',       
        axisPointer: {
            animation: false
        }
    },  
    toolbox: {
        feature: {
            saveAsImage: {},
            magicType: {
        		type: ['line', 'bar']
    			}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            splitLine: {
            show: false
        },
            data:['15:53:23','15:53:23','15:53:23','15:53:23','15:53:23']
        }
    ],
    yAxis : [
        {
            type : 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
            show: false
        },
        name:'用电量(kw.h)',
        min:535,
        max:545
        }
    ],
    series : [
        
        {
            name:'总用电量',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            showSymbol: false,
            hoverAnimation: false,
            data: ['535','540','545','538','540']
        }       
    ]
};

//kWhArea.showLoading();
kWhArea.setOption(kWhoption);











