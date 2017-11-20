var echartsPieWeek = echarts.init(document.getElementById("echarts-pie-chartWeek"));
    var Weekoption = {
        title : {
            text: '近周能耗分析',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'horizontal',
            padding: [60, 0],
            x : 'center',
            data:['2017-10-10','2017-10-11','2017-10-12','2017-10-13','2017-10-14','2017-10-15','2017-10-16']
        },
        calculable : true,
        series : [
            {
                name:'用电量',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],               
                data:[
                    {value:335, name:'2017-10-10'},
                    {value:310, name:'2017-10-11'},
                    {value:234, name:'2017-10-12'},
                    {value:135, name:'2017-10-13'},
                    {value:548, name:'2017-10-14'},
                    {value:235, name:'2017-10-15'},
                    {value:135, name:'2017-10-16'}
                ]
            }
        ]
    };
    echartsPieWeek.setOption(Weekoption);
//  echartsPieWeek.showLoading();
    $(window).resize(echartsPieWeek.resize);
    


var echartsPieMonth = echarts.init(document.getElementById("echarts-pie-chartMonth"));
    var Monthoption = {
        title : {
            text: '月能耗分析',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'horizontal',
            padding: [60, 0],
            x : 'center',
            data:['2017-10','2017-11','2017-12','2017-13','2017-14','2017-15','2017-16']
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],               
                data:[
                    {value:335, name:'2017-10'},
                    {value:310, name:'2017-11'},
                    {value:234, name:'2017-12'},
                    {value:135, name:'2017-13'},
                    {value:548, name:'2017-14'},
                    {value:235, name:'2017-15'},
                    {value:135, name:'2017-16'}
                ]
            }
        ]
    };
    echartsPieMonth.setOption(Monthoption);
//  echartsPieMonth.showLoading();
    $(window).resize(echartsPieMonth.resize);
    
//var pieChart = echarts.init(document.getElementById("echarts-pie-chartYear"));
//  var pieoption = {
//      title : {
//          text: '月能耗分析',
//          x:'center'
//      },
//      tooltip : {
//          trigger: 'item',
//          formatter: "{a} <br/>{b} : {c} ({d}%)"
//      },
//      legend: {
//          orient : 'horizontal',
//          padding: [60, 0],
//          x : 'center',
//          data:['2017-10','2017-11','2017-12','2017-13','2017-14','2017-15','2017-16']
//      },
//      calculable : true,
//      series : [
//          {
//              name:'访问来源',
//              type:'pie',
//              radius : '55%',
//              center: ['50%', '60%'],               
//              data:[
//                  {value:335, name:'2017-10'},
//                  {value:310, name:'2017-11'},
//                  {value:234, name:'2017-12'},
//                  {value:135, name:'2017-13'},
//                  {value:548, name:'2017-14'},
//                  {value:235, name:'2017-15'},
//                  {value:135, name:'2017-16'}
//              ]
//          }
//      ]
//  };
//  pieChart.setOption(pieoption);
//  $(window).resize(pieChart.resize);
//  
//var pieChart = echarts.init(document.getElementById("echarts-pie-chartDefined"));
//  var pieoption = {
//      title : {
//          text: '月能耗分析',
//          x:'center'
//      },
//      tooltip : {
//          trigger: 'item',
//          formatter: "{a} <br/>{b} : {c} ({d}%)"
//      },
//      legend: {
//          orient : 'horizontal',
//          padding: [60, 0],
//          x : 'center',
//          data:['2017-10','2017-11','2017-12','2017-13','2017-14','2017-15','2017-16']
//      },
//      calculable : true,
//      series : [
//          {
//              name:'访问来源',
//              type:'pie',
//              radius : '55%',
//              center: ['50%', '60%'],               
//              data:[
//                  {value:335, name:'2017-10'},
//                  {value:310, name:'2017-11'},
//                  {value:234, name:'2017-12'},
//                  {value:135, name:'2017-13'},
//                  {value:548, name:'2017-14'},
//                  {value:235, name:'2017-15'},
//                  {value:135, name:'2017-16'}
//              ]
//          }
//      ]
//  };
//  pieChart.setOption(pieoption);
//  $(window).resize(pieChart.resize);