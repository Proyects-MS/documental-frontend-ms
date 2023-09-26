import ConfigDB from '../../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
export const EchartBarOption = {
    option: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        stack: true,
        legend: {},
        grid: {
            top: '3%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        barWidth: 25,
        lineStyle: {
            cap: 'round'
        },
        barRadius: [5],
        color: ['#a6c4ff', primary, '#dbe8fe'],
        xAxis: [
            {
                type: 'category',
                data: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A13', 'A14', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A31', 'A33', 'A34', 'A35', 'A36', 'A37', 'A38', 'A39', 'A40', 'A41', 'A42', 'A43', 'A44'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    alignWithLabel: true,
                    show: false
                }
            },

        ],
        yAxis: [
            {
                show: true,
                type: 'value',
                axisLine: {
                    show: false,
                },
            },
        ],
        series: [
            {
                type: 'bar',
                stack: 'true',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

            },
            {
                type: 'bar',
                stack: 'true',
                data: [25, 19, 12, 20, 25, 32, null, 31, 35, 38, 30, 35, 18, 21, 30, null, 17, 25, 38, 25, 30, 30, 38, null, 23, 12, 21, 18, 15, 17, 38, 31, null, 38, 35, 28, 20, 23, 28, 25, null, 35, 28, 33]
            },
            {
                type: 'bar',
                stack: 'true',
                data: [null, null, null, null, null, null, 25, null, null, null, null, 20, null, null, null, null, null, null, null, null, null, null, null, 33, null, null, null, null, null, null, null, null, 20, null, null, 38, null, null,]
            },

        ]
    }
};