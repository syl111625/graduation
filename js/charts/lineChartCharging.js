


//堆叠区域图
(function(){
	
	var area = echarts.init(document.getElementById("area"));
	
	option = {
    title: {
        text: '累计电费'
    },
    tooltip : {
        trigger: 'axis',
        
        axisPointer: {
            animation: false
        }
    },  
    toolbox: {
        feature: {
            saveAsImage: {}
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
            data:['2017-05','2017-05','2017-05','2017-05','2017-05']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
            show: false
        },
		max:200,
        axisLabel : {
					formatter : '{value} 元'
				}

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
            data: ['100','110','200','150','300']
        }       
    ]
};


area.setOption(option);
})();



//area.showLoading();
//$.ajax({
//url :'',
//type : '',
////async : true 必须为true
//dataType : '',
//success :function(){
//	area.setOption(option);
//},
//error : function(){
//mycharts.hideLoading();
//}
//});








