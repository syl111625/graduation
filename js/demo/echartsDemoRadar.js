var radarChart = echarts.init(document.getElementById("echarts-radar-chart"));
    var radaroption = {
        title : {
            text: '预算 vs 开销',
            subtext: '用电分析'
        },
        tooltip : {
            trigger: 'axis'
            
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['预算分配','实际开销']
        },
        polar : [
           {
               indicator : [
                   { text: '电表1', max: 6000},
                   { text: '电表2', max: 16000},
                   { text: '电表3', max: 30000},
                   { text: '电表4', max: 38000},
                   { text: '电表5', max: 52000},
                   { text: '电表6', max: 25000}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '预算 vs 开销',
                type: 'radar',
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
//                      value : [4300, 10000, 28000],
                        name : '预算分配'
                    },
                     {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
//                      value : [5000, 14000, 28000],
                        name : '实际开销'
                    }
                ]
            }
        ]
    };

    radarChart.setOption(radaroption);
    $(window).resize(radarChart.resize);