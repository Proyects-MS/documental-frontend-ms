import ConfigDB from '../../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
export const ApexInvoiceChart = {
    series: [{
        name: 'Revenue',
        data: [19, 28, 31, 25, 35, 18, 23]
    }, {
        name: 'Free Cash Flow',
        data: [25, 31, 35, 29, 39, 22, 28]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 263,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        colors: [primary, secondary],
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
                offsetX: 0,
                offsetY: -6,
                style: {
                    colors: '#8E97B2',
                    fontWeight: 400,
                    fontSize: '10px',
                    fontFamily: 'roboto'
                },
            },
            axisBorder: {
                show: false,

            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: 14,
                offsetY: -5
            },
            tooltip: {
                enabled: true
            },
            // labels: {
            //     formatter: function (value) {
            //         return value + 'k';
            //     },
            // },
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                }
            }
        },
    }
};