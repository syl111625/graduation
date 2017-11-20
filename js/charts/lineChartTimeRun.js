


//堆叠区域图
(function(){
	
	var area = echarts.init(document.getElementById("area"));
	
	function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}
	
	option = {
    title: {
        text: '累计用电量'
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
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
            type : 'time',
            boundaryGap : false,
            splitLine: {
            show: false
        },
            data: data
        }
    ],
    yAxis : [
        {
            type : 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
            show: false
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
            data: data
        }       
    ]
};

timeTicket = setInterval(function () {
	
	    for (var i = 0; i < 5; i++) {
	        data.shift();
	        data.push(randomData());
	    }
	
	    area.setOption({
	        series: [{
	            data: data
	        }]
	    });
	}, 1000);

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








