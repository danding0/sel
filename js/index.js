$(function(){
// 右边矩形图
  var myChart = echarts.init(document.querySelector('.main_left'));
  var mainleft = {
    title: {
        text: '2017年注册人数（单位:人数）',
        subtext: '',
        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['1月','2月','3月','4月','5月','6月',]
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            // data: [0,100,200, 300, 200, 100,0]
        },
        {
            name: '人数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[900, 1100, 300, 200, 900, 300]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(mainleft);



// 左边饼状图 
var myChart = echarts.init(document.querySelector('.main_right'));
var mainright = {
    title : {
        text: '热门品牌销售门店',
        subtext: '2017年6月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['阿迪','耐克','李宁','美特斯邦威','NB','特步']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:1335, name:'阿迪'},
                {value:1310, name:'耐克'},
                {value:1234, name:'李宁'},
                {value:1135, name:'美特斯邦威'},
                {value:1548, name:'NB'},
                {value:1000, name:'特步'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(mainright);
})