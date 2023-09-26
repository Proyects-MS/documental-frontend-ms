import * as Chartist from 'chartist';

//  Chartist  chart1
export const ChartistData1 = {
    labels: [1, 2, 3],
    series: [
        [2, 4, 2]
    ]
};
export const ChartistOption1 =
{
    chart: {
        type: 'line',
    },
    low: 0,
    chartPadding: 5,
    showArea: true,
    showPoint: true,
    fullWidth: true,
    width: 130,
    height: 100,
    // fill: {
    //     // type: 'gradient',
    //     type:'gradient-a',
    //     gradient: {
    //         color:'#4d8aff',
    //         opacityFrom: 0.5,
    //         opacityTo: 0.2,
    //     }
    // },
    axisX: {
        offset: 0,
        axisBorder: {
            show: false,
        },
        grid: {
            display: false,
            stroke: ('#fff')
        },
    },
    axisY: {
        axisBorder: {
            show: false,
        },
        grid: {
            drawBorder: false,
        },
        offset: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
};

export const eventHandlers = [{
    event: 'created',
    fn(data) {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient-a',
            x1: 0,
            y1: 0,
            x2: 10,
            y2: 10
        }).elem('stop', {
            offset: 0,
            'stop-color': '#4d8aff'
        }).parent().elem('stop', {
            offset: 100,
            'stop-color': 'transparent'
        });
    }
}];

//  Chartist  chart1 End

// **************************************************************************

//  Chartist  chart2


export const ChartistData2 = {
    labels: [1, 2, 3],
    series: [
        [4, 2, 4]
    ]
};

export const ChartistOption2 = {
    low: 0,
    chartPadding: 5,
    showArea: true,
    showPoint: true,
    fullWidth: true,
    width: 130,
    height: 100,
    axisX: {
        offset: 0,
        showArea: true,
    },
    axisY: {
        offset: 0,
        showArea: true,
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2,
    }),
};
//  Chartist  chart2  End

// *******************************************************************

//  Chartist  chart3  Start


export const ChartistData3 = {
    labels: [1, 2, 3],
    series: [
        [4, 3, 4]
    ]
};

export const ChartistOption3 = {
    low: 0,
    chartPadding: 5,
    showArea: true,
    showPoint: true,
    fullWidth: true,
    width: 130,
    height: 100,
    axisX: {
        offset: 0
    },
    axisY: {
        offset: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2,
    }),
};
//  Chartist  chart3  End

// *******************************************************************

//  Chartist  chart4  Start

export const ChartistData4 = {
    labels: [1, 2, 3],
    series: [
        [2, 4, 1]
    ]
};
export const ChartistOption4 = {
    low: 0,
    chartPadding: 5,
    showArea: true,
    showPoint: true,
    fullWidth: true,
    width: 130,
    height: 100,
    axisX: {
        offset: 0
    },
    axisY: {
        offset: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2,
    }),
};


//  Chartist  chart4  End



