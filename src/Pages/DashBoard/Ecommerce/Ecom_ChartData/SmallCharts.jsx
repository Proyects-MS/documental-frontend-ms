import ConfigDB from '../../../../Config/Theme-Config';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
export const SaleChart = {
    series: [
        {
            name: 'Desktops',
            data: [18, 30, 25, 51, 34, 40, 34],
        },
    ],
    options: {
        chart: {
            height: 142,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                bottom: 2,
                left: 10,
                blur: 6,
                color: '#000',
                opacity: 0.35
            },
        },
        colors: ['#fff'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                left: -10,
                right: 0,
                bottom: -30,
                top: -30
            }
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
    }
};
export const SmallChart1Data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'M'],
    series: [
        [4, 9, 8, 10, 7, 12],
        [10, 5, 6, 4, 7, 2,]
    ]
};
export const SmallChart1Option = {

    stackBars: true,

    chartPadding: {
        top: -15,
        right: 0,
        bottom: -15,
        left: -35
    },
    axisX: {
        showGrid: false,
    },
    axisY: {
        low: 0,
        showGrid: false,
        labelInterpolationFnc: function (value) {
            return (value / 1);
        }
    }
};
export const SmallChart2Data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'M'],
    series: [
        [4, 9, 8, 10, 7, 12],
        [10, 5, 6, 4, 7, 2]
    ]
};
export const SmallChart2Option = {
    stackBars: true,

    chartPadding: {
        top: -15,
        right: 0,
        bottom: -15,
        left: -35
    },
    axisX: {
        showGrid: false,
    },
    axisY: {
        low: 0,
        showGrid: false,
        labelInterpolationFnc: function (value) {
            return (value / 1);
        }
    }
};
export const SmallChart3Data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'M'],
    series: [
        [4, 9, 8, 10, 7, 12],
        [10, 5, 6, 4, 7, 2]
    ]
};
export const SmallChart3Option = {
    stackBars: true,

    chartPadding: {
        top: -15,
        right: 0,
        bottom: -15,
        left: -35
    },
    axisX: {
        showGrid: false,
    },
    axisY: {
        low: 0,
        showGrid: false,
        labelInterpolationFnc: function (value) {
            return (value / 1);
        }
    }
};
export const RevenueByCategoryChart = {
    series: [44, 55, 41, 17, 15],
    options: {
        labels: ['Men', 'Women', 'Accessories', 'Children', 'Apperal'],
        chart: {
            type: 'donut',
            height: 320,
        },
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            }
        },
        stroke: {
            width: 0,
        },
        responsive: [
            {
                breakpoint: 1661,
                options: {
                    chart: {
                        height: 310,
                    }
                }
            },
            {
                breakpoint: 481,
                options: {
                    chart: {
                        height: 280,
                    }
                }
            }

        ],
        colors: [primary, secondary, '#a2d24c', '#5eb5ff', '#fd7e14'],
    }
};
export const TotalSalesCharts = {
    series: [
        {
            name: 'Desktops',
            data: [25, 12, 9, 16, 10, 21, 55, 104, 64, 70, 25],
        },
    ],
    options: {
        chart: {
            height: 95,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                top: 0,
                left: 6,
                blur: 4,
                color: '#6362e7',
                opacity: 0.20
            },
        },
        colors: [primary],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            lineCap: 'butt'
        },

        tooltip: {
            enabled: false,
        },

        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                left: -10,
                right: 0,
                bottom: 0,
                top: -30
            }
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 421,
                options: {
                    chart: {
                        height: 60,
                    }
                }
            },
        ],
    }
};
