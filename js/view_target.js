//产品目标日收入
window.onload = goods_date();
//产品目标月收入
window.onload = goods_month();
//产品目标年收入
window.onload = goods_year();


//合作目标日收入
window.onload = setTimeout('cooperate_date()',4000);
//合作目标月收入
window.onload = setTimeout('cooperate_month()',4000);
//合作目标年收入
window.onload = setTimeout('cooperate_year()',4000);

//生美目标日收入
window.onload = setTimeout('beauty_date()',6000);
//生美目标月收入
window.onload = setTimeout('beauty_month()',6000);
//生美目标年收入
window.onload = setTimeout('beauty_year()',6000);



//合作目标日收入
window.onload = setTimeout('consume_date()',8000);
//合作目标月收入
window.onload = setTimeout('consume_month()',8000);
//合作目标年收入
window.onload = setTimeout('consume_year()',8000);

function goods_date(){
	var myChart = echarts.init(document.getElementById('main_1'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'剩余100%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function goods_month(){
	var myChart = echarts.init(document.getElementById('main_2'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩','邮件营销']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:350, name:'剩余35.29%'},
                {value:640, name:'完成64.71%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function goods_year(){
	var myChart = echarts.init(document.getElementById('main_3'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
            	{value:810, name:'剩余80.1%'},
                {value:190, name:'完成19.9%'}
                
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function cooperate_date(){
	var myChart = echarts.init(document.getElementById('main_4'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'剩余100%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function cooperate_month(){
	var myChart = echarts.init(document.getElementById('main_5'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩','邮件营销']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:350, name:'剩余35.29%'},
                {value:640, name:'完成64.71%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function cooperate_year(){
	var myChart = echarts.init(document.getElementById('main_6'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
            	{value:810, name:'剩余80.1%'},
                {value:190, name:'完成19.9%'}
                
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function beauty_date(){
	var myChart = echarts.init(document.getElementById('main_7'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'剩余100%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function beauty_month(){
	var myChart = echarts.init(document.getElementById('main_8'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩','邮件营销']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:350, name:'剩余35.29%'},
                {value:640, name:'完成64.71%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function beauty_year(){
	var myChart = echarts.init(document.getElementById('main_9'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
            	{value:810, name:'剩余80.1%'},
                {value:190, name:'完成19.9%'}
                
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}
function consume_date(){
	var myChart = echarts.init(document.getElementById('main_10'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'剩余100%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function consume_month(){
	var myChart = echarts.init(document.getElementById('main_11'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩','邮件营销']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:350, name:'剩余35.29%'},
                {value:640, name:'完成64.71%'}
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}

function consume_year(){
	var myChart = echarts.init(document.getElementById('main_12'));
	option = {
	    tooltip: {
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['目标业绩']
    },
    series: [
        {
            name:'目标业绩',
            type:'pie',
            radius: ['45%', '65%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
            	{value:810, name:'剩余80.1%'},
                {value:190, name:'完成19.9%'}
                
            ]
        }
    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
}
