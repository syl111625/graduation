var gaugeChart = echarts.init(document.getElementById("echarts-gauge-chart"));
    var gaugeoption = {
        tooltip : {
//          formatter: "{a} <br/>{c} {b}"
            formatter: "{a} <br/>{c}%"
        },
//      toolbox: {
//          show : true,
//          feature : {
//              mark : {show: true},
//              restore : {show: true},
//              saveAsImage : {show: true}
//          }
//      },
        series : [
            {
                name:'使用率',
                type:'gauge',
                center : ['25%', '40%'],
                min:0,
                max:100,
                color:'blue',
                splitNumber:10,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 5
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 10, name: '使用率'}]
                
            },
            {
                name:'节能率',
                type:'gauge',
                center : ['75%', '40%'],
                min:0,
                max:100,
                splitNumber:10,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 5
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value:75, name: '节能率'}]
            }

        ]
    };
    gaugeChart.setOption(gaugeoption);
    $(window).resize(gaugeChart.resize);