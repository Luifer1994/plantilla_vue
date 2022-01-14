"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -------------------------------------------------------------------------- */

/*                                    Utils                                   */

/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};

var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};

var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};

var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};
/* ----------------------------- Colors function ---------------------------- */


var hexToRgb = function hexToRgb(hexValue) {
  var hex;
  hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  }));
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};

var rgbaColor = function rgbaColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};
/* --------------------------------- Colors --------------------------------- */


var getColor = function getColor(name) {
  var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  return getComputedStyle(dom).getPropertyValue("--falcon-".concat(name)).trim();
};

var getColors = function getColors(dom) {
  return {
    primary: getColor('primary', dom),
    secondary: getColor('secondary', dom),
    success: getColor('success', dom),
    info: getColor('info', dom),
    warning: getColor('warning', dom),
    danger: getColor('danger', dom),
    light: getColor('light', dom),
    dark: getColor('dark', dom)
  };
};

var getSoftColors = function getSoftColors(dom) {
  return {
    primary: getColor('soft-primary', dom),
    secondary: getColor('soft-secondary', dom),
    success: getColor('soft-success', dom),
    info: getColor('soft-info', dom),
    warning: getColor('soft-warning', dom),
    danger: getColor('soft-danger', dom),
    light: getColor('soft-light', dom),
    dark: getColor('soft-dark', dom)
  };
};

var getGrays = function getGrays(dom) {
  return {
    white: getColor('white', dom),
    100: getColor('100', dom),
    200: getColor('200', dom),
    300: getColor('300', dom),
    400: getColor('400', dom),
    500: getColor('500', dom),
    600: getColor('600', dom),
    700: getColor('700', dom),
    800: getColor('800', dom),
    900: getColor('900', dom),
    1000: getColor('1000', dom),
    1100: getColor('1100', dom),
    black: getColor('black', dom)
  };
};

var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};

var addClass = function addClass(el, className) {
  el.classList.add(className);
};

var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}

var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};

var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;

  if (classes) {
    breakpoint = breakpoints[classes.split(' ').filter(function (cls) {
      return cls.includes('navbar-expand-');
    }).pop().split('-').pop()];
  }

  return breakpoint;
};
/* --------------------------------- Cookie --------------------------------- */


var setCookie = function setCookie(name, value, expire) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires.toUTCString());
};

var getCookie = function getCookie(name) {
  var keyValue = document.cookie.match("(^|;) ?".concat(name, "=([^;]*)(;|$)"));
  return keyValue ? keyValue[2] : keyValue;
};

var settings = {
  tinymce: {
    theme: 'oxide'
  },
  chart: {
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};
/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext('2d');
  return new window.Chart(ctx, config);
};
/* ---------------------------------- Store --------------------------------- */


var getItemFromStore = function getItemFromStore(key, defaultValue) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;

  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch (_unused) {
    return store.getItem(key) || defaultValue;
  }
};

var setItemToStore = function setItemToStore(key, payload) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  return store.setItem(key, payload);
};

var getStoreSpace = function getStoreSpace() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage;
  return parseFloat((escape(encodeURIComponent(JSON.stringify(store))).length / (1024 * 1024)).toFixed(2));
};
/* get Dates between */


var getDates = function getDates(startDate, endDate) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000 * 60 * 60 * 24;
  var duration = endDate - startDate;
  var steps = duration / interval;
  return Array.from({
    length: steps + 1
  }, function (v, i) {
    return new Date(startDate.valueOf() + interval * i);
  });
};

var getPastDates = function getPastDates(duration) {
  var days;

  switch (duration) {
    case 'week':
      days = 7;
      break;

    case 'month':
      days = 30;
      break;

    case 'year':
      days = 365;
      break;

    default:
      days = duration;
  }

  var date = new Date();
  var endDate = date;
  var startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};
/* Get Random Number */


var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var utils = {
  docReady: docReady,
  resize: resize,
  isIterableArray: isIterableArray,
  camelize: camelize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
  hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  getColor: getColor,
  getColors: getColors,
  getSoftColors: getSoftColors,
  getGrays: getGrays,
  getOffset: getOffset,
  isScrolledIntoView: isScrolledIntoView,
  getBreakpoint: getBreakpoint,
  setCookie: setCookie,
  getCookie: getCookie,
  newChart: newChart,
  settings: settings,
  getItemFromStore: getItemFromStore,
  setItemToStore: setItemToStore,
  getStoreSpace: getStoreSpace,
  getDates: getDates,
  getPastDates: getPastDates,
  getRandomNumber: getRandomNumber
};
/* eslint-disable */

var getPosition = function getPosition(pos, params, dom, rect, size) {
  return {
    top: pos[1] - size.contentSize[1] - 10,
    left: pos[0] - size.contentSize[0] / 2
  };
};

var echartSetOption = function echartSetOption(chart, userOptions, getDefaultOptions) {
  var themeController = document.body; // Merge user options with lodash

  chart.setOption(window._.merge(getDefaultOptions(), userOptions));
  themeController.addEventListener('clickControl', function (_ref) {
    var control = _ref.detail.control;

    if (control === 'theme') {
      chart.setOption(window._.merge(getDefaultOptions(), userOptions));
    }
  });
};

var tooltipFormatter = function tooltipFormatter(params) {
  var tooltipItem = "";
  params.forEach(function (el) {
    tooltipItem = tooltipItem + "<div class='ms-1'> \n        <h6 class=\"text-700\"><span class=\"fas fa-circle me-1 fs--2\" style=\"color:".concat(el.borderColor ? el.borderColor : el.color, "\"></span>\n          ").concat(el.seriesName, " : ").concat(_typeof(el.value) === 'object' ? el.value[1] : el.value, "\n        </h6>\n      </div>");
  });
  return "<div>\n            <p class='mb-2 text-600'>\n              ".concat(window.dayjs(params[0].axisValue).isValid() ? window.dayjs(params[0].axisValue).format('MMMM DD') : params[0].axisValue, "\n            </p>\n            ").concat(tooltipItem, "\n          </div>");
};
/* -------------------------------------------------------------------------- */

/*                      Echarts Area Pieces Chart                             */

/* -------------------------------------------------------------------------- */


var echartsAreaPiecesChartInit = function echartsAreaPiecesChartInit() {
  var $areaPiecesChartEl = document.querySelector('.echart-area-pieces-chart-example');

  if ($areaPiecesChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($areaPiecesChartEl, 'options');
    var chart = window.echarts.init($areaPiecesChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            margin: 15,
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [{
            gt: 1,
            lt: 3,
            color: utils.rgbaColor(utils.getColor('primary'), 0.4)
          }, {
            gt: 5,
            lt: 7,
            color: utils.rgbaColor(utils.getColor('primary'), 0.4)
          }]
        },
        series: [{
          type: 'line',
          name: 'Total',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
            color: utils.getColor('primary'),
            width: 5
          },
          markLine: {
            symbol: ['none', 'none'],
            label: {
              show: false
            },
            data: [{
              xAxis: 1
            }, {
              xAxis: 3
            }, {
              xAxis: 5
            }, {
              xAxis: 7
            }]
          },
          areaStyle: {},
          data: [['2019-10-10', 200], ['2019-10-11', 560], ['2019-10-12', 750], ['2019-10-13', 580], ['2019-10-14', 250], ['2019-10-15', 300], ['2019-10-16', 450], ['2019-10-17', 300], ['2019-10-18', 100]]
        }],
        grid: {
          right: 20,
          left: 5,
          bottom: 5,
          top: 8,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBarLineChartInit = function echartsBarLineChartInit() {
  var $barLineChartEl = document.querySelector('.echart-bar-line-chart-example');

  if ($barLineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barLineChartEl, 'options');
    var chart = window.echarts.init($barLineChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: utils.getGrays()['500']
            },
            label: {
              show: true,
              backgroundColor: utils.getGrays()['600'],
              color: utils.getGrays()['100']
            }
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        toolbox: {
          top: 0,
          feature: {
            dataView: {
              show: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          },
          iconStyle: {
            borderColor: utils.getGrays()['700'],
            borderWidth: 1
          },
          emphasis: {
            iconStyle: {
              textFill: utils.getGrays()['600']
            }
          }
        },
        legend: {
          top: 40,
          data: ['Evaporation', 'Precipitation', 'Average temperature'],
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        xAxis: [{
          type: 'category',
          data: months,
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: function formatter(value) {
              return value.slice(0, 3);
            }
          },
          axisPointer: {
            type: 'shadow'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: '{value} ml'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        }, {
          type: 'value',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: '{value} °C'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        }],
        series: [{
          name: 'Evaporation',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          }
        }, {
          name: 'Precipitation',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          itemStyle: {
            color: utils.getColor('info'),
            barBorderRadius: [3, 3, 0, 0]
          }
        }, {
          name: 'Average temperature',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          lineStyle: {
            color: utils.getColor('warning')
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 10
        }],
        grid: {
          right: 5,
          left: 5,
          bottom: 5,
          top: '23%',
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBarNegativeChartInit = function echartsBarNegativeChartInit() {
  var $barNegativeChartEl = document.querySelector('.echart-bar-chart-negative-example');

  if ($barNegativeChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barNegativeChartEl, 'options');
    var chart = window.echarts.init($barNegativeChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        grid: {
          top: 5,
          bottom: 5,
          left: 5,
          right: 5
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: ['Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One']
        },
        series: [{
          name: 'Cost',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            formatter: '{b}',
            color: '#fff'
          },
          itemStyle: {
            color: utils.getColor('primary')
          },
          data: [-0.12, -0.19, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36, 0.18]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                         Echarts Bar Race Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBarRaceChartInit = function echartsBarRaceChartInit() {
  var $barRaceChartEl = document.querySelector('.echart-bar-race-chart-example');

  if ($barRaceChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barRaceChartEl, 'options');
    var chart = window.echarts.init($barRaceChartEl);
    var data = Array.from(Array(7).keys()).map(function () {
      return Math.round(Math.random() * 200);
    });

    var getDefaultOptions = function getDefaultOptions() {
      return {
        xAxis: {
          max: 'dataMax',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisLabel: {
            color: utils.getGrays()['500']
          }
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          inverse: true,
          axisLabel: {
            color: utils.getGrays()['500']
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 4 // only the largest 5 bars will be displayed

        },
        series: [{
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            color: utils.getGrays()['700'],
            fontWeight: 500,
            valueAnimation: true
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [0, 3, 3, 0]
          }
        }],
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        grid: {
          right: '10%',
          left: 5,
          bottom: 5,
          top: 5,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);

    var run = function run() {
      data = data.map(function (item) {
        return Math.random() > 0.9 ? item + Math.round(Math.random() * 2000) : item + Math.round(Math.random() * 200);
      });
      chart.setOption({
        series: [{
          data: data
        }]
      });
    };

    setTimeout(function () {
      run();
    }, 0);
    setInterval(function () {
      run();
    }, 3000);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBarSeriesChartInit = function echartsBarSeriesChartInit() {
  var $barSeriesChartEl = document.querySelector('.echart-bar-chart-series-example');

  if ($barSeriesChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barSeriesChartEl, 'options');
    var chart = window.echarts.init($barSeriesChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('primary'), utils.getColor('info')],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: function formatter(value) {
              return "".concat(value / 1000, "k");
            },
            color: utils.getGrays()['500']
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China']
        },
        series: [{
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744],
          itemStyle: {
            barBorderRadius: [0, 3, 3, 0]
          }
        }, {
          name: '2012',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141],
          itemStyle: {
            barBorderRadius: [0, 3, 3, 0]
          }
        }],
        grid: {
          right: 15,
          left: '12%',
          bottom: '10%',
          top: 5
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBarStackedChartInit = function echartsBarStackedChartInit() {
  var $barStackedChartEl = document.querySelector('.echart-bar-stacked-chart-example');

  if ($barStackedChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barStackedChartEl, 'options');
    var chart = window.echarts.init($barStackedChartEl);
    var xAxisData = [];
    var _data = [];
    var _data2 = [];
    var data3 = [];
    var data4 = [];

    for (var i = 0; i < 10; i += 1) {
      xAxisData.push("Class".concat(i + 1));

      _data.push((Math.random() * 2).toFixed(2));

      _data2.push((Math.random() * 5).toFixed(2));

      data3.push((Math.random() + 0.3).toFixed(2));
      data4.push(-Math.random().toFixed(2));
    }

    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3)
      }
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('primary'), utils.getColor('info'), utils.getColor('warning'), utils.getColor('danger')],
        legend: {
          data: ['Bar1', 'Bar2', 'Bar3', 'Bar4'],
          textStyle: {
            color: utils.getGrays()['700']
          },
          left: 0
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            }
          },
          iconStyle: {
            borderColor: utils.getGrays()['700'],
            borderWidth: 1
          }
        },
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['400']
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisLabel: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          name: 'Bar1',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: _data
        }, {
          name: 'Bar2',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: _data2
        }, {
          name: 'Bar3',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data3
        }, {
          name: 'Bar4',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data4
        }],
        grid: {
          top: '10%',
          bottom: 10,
          left: 5,
          right: 7,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                         Echarts Bar Timeline Chart                         */

/* -------------------------------------------------------------------------- */


var echartsBarTimelineChartInit = function echartsBarTimelineChartInit() {
  var $barTimelineChartEl = document.querySelector('.echart-bar-timeline-chart-example');

  if ($barTimelineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barTimelineChartEl, 'options');
    var chart = window.echarts.init($barTimelineChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dataMap = {};

    var dataFormatter = function dataFormatter(obj) {
      return Object.keys(obj).reduce(function (acc, val) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, val, obj[val].map(function (value, index) {
          return {
            name: months[index],
            value: value
          };
        })));
      }, {});
    };

    dataMap.dataTI = dataFormatter({
      2005: [88.68, 112.38, 1400, 262.42, 589.56, 882.41, 625.61, 684.6, 90.26, 1461.51, 892.83, 966.5],
      2006: [88.8, 103.35, 1461.81, 276.77, 634.94, 939.43, 672.76, 750.14, 93.81, 1545.05, 925.1, 1011.03],
      2007: [101.26, 110.19, 1804.72, 311.97, 762.1, 1133.42, 783.8, 915.38, 101.84, 1816.31, 986.02, 1200.18],
      2008: [112.83, 122.58, 2034.59, 313.58, 907.95, 1302.02, 916.72, 1088.94, 111.8, 2100.11, 1095.96, 1418.09],
      2009: [118.29, 128.85, 2207.34, 477.59, 929.6, 1414.9, 980.57, 1154.33, 113.82, 2261.86, 1163.08, 1495.45],
      2010: [124.36, 145.58, 2562.81, 554.48, 1095.28, 1631.08, 1050.15, 1302.9, 114.15, 2540.1, 1360.56, 1729.02],
      2011: [136.27, 159.72, 2905.73, 641.42, 1306.3, 1915.57, 1277.44, 1701.5, 124.94, 3064.78, 1583.04, 2015.31]
    });
    dataMap.dataSI = dataFormatter({
      2005: [2026.51, 2135.07, 5271.57, 2357.04, 1773.21, 3869.4, 1580.83, 2971.68, 4381.2, 10524.96, 7164.75, 2245.9],
      2006: [2191.43, 2457.08, 6110.43, 2755.66, 2374.96, 4566.83, 1915.29, 3365.31, 4969.95, 12282.89, 8511.51, 2711.18],
      2007: [2509.4, 2892.53, 7201.88, 3454.49, 3193.67, 5544.14, 2475.45, 3695.58, 5571.06, 14471.26, 10154.25, 3370.96],
      2008: [2626.41, 3709.78, 8701.34, 4242.36, 4376.19, 7158.84, 3097.12, 4319.75, 6085.84, 16993.34, 11567.42, 4198.93],
      2009: [2855.55, 3987.84, 8959.83, 3993.8, 5114, 7906.34, 3541.92, 4060.72, 6001.78, 18566.37, 11908.49, 4905.22],
      2010: [3388.38, 4840.23, 10707.68, 5234, 6367.69, 9976.82, 4506.31, 5025.15, 7218.32, 21753.93, 14297.93, 6436.62],
      2011: [3752.48, 5928.32, 13126.86, 6635.26, 8037.69, 12152.15, 5611.48, 5962.41, 7927.89, 25203.28, 16555.58, 8309.38]
    });
    dataMap.dataPI = dataFormatter({
      2005: [4854.33, 1658.19, 3340.54, 1611.07, 1542.26, 3295.45, 1413.83, 1857.42, 4776.2, 6612.22, 5360.1, 2137.77],
      2006: [5837.55, 1902.31, 3895.36, 1846.18, 1934.35, 3798.26, 1687.07, 2096.35, 5508.48, 7914.11, 6281.86, 2390.29],
      2007: [7236.15, 2250.04, 4600.72, 2257.99, 2467.41, 4486.74, 2025.44, 2493.04, 6821.11, 9730.91, 7613.46, 2789.78],
      2008: [8375.76, 2886.65, 5276.04, 2759.46, 3212.06, 5207.72, 2412.26, 2905.68, 7872.23, 11888.53, 8799.31, 3234.64],
      2009: [9179.19, 3405.16, 6068.31, 2886.92, 3696.65, 5891.25, 2756.26, 3371.95, 8930.85, 13629.07, 9918.78, 3662.15],
      2010: [10600.84, 4238.65, 7123.77, 3412.38, 4209.03, 6849.37, 3111.12, 4040.55, 9833.51, 17131.45, 12063.82, 4193.69],
      2011: [12363.18, 5219.24, 8483.17, 3960.87, 5015.89, 8158.98, 3679.91, 4918.09, 11142.86, 20842.21, 14180.23, 4975.96]
    });

    var getDefaultOptions = function getDefaultOptions() {
      return {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: ['2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01'],
            label: {
              formatter: function formatter(s) {
                return new Date(s).getFullYear();
              }
            },
            lineStyle: {
              color: utils.getColor('info')
            },
            itemStyle: {
              color: utils.getColor('secondary')
            },
            checkpointStyle: {
              color: utils.getColor('primary'),
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0
            },
            controlStyle: {
              color: utils.getColor('info')
            }
          },
          title: {
            textStyle: {
              color: utils.getGrays()['700']
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            padding: [7, 10],
            backgroundColor: utils.getGrays()['100'],
            borderColor: utils.getGrays()['300'],
            textStyle: {
              color: utils.getColors().dark
            },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter
          },
          legend: {
            left: 'right',
            data: ['Primary industry', 'Secondary industry', 'Tertiary Industry'],
            textStyle: {
              color: utils.getGrays()['700']
            }
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            data: months,
            splitLine: {
              show: false
            },
            axisLabel: {
              color: utils.getGrays()['600']
            },
            axisLine: {
              lineStyle: {
                color: utils.getGrays()['400']
              }
            }
          }],
          yAxis: [{
            type: 'value',
            axisLabel: {
              formatter: function formatter(value) {
                return "".concat(value / 1000, "k");
              },
              color: utils.getGrays()['600']
            },
            splitLine: {
              lineStyle: {
                color: utils.getGrays()['200']
              }
            }
          }],
          series: [{
            name: 'Primary industry',
            type: 'bar',
            itemStyle: {
              color: utils.getColor('primary'),
              barBorderRadius: [3, 3, 0, 0]
            }
          }, {
            name: 'Secondary industry',
            type: 'bar',
            itemStyle: {
              color: utils.getColor('info'),
              barBorderRadius: [3, 3, 0, 0]
            }
          }, {
            name: 'Tertiary Industry',
            type: 'bar',
            itemStyle: {
              color: utils.getColor('warning'),
              barBorderRadius: [3, 3, 0, 0]
            }
          }],
          grid: {
            top: '10%',
            bottom: '15%',
            left: 5,
            right: 10,
            containLabel: true
          }
        },
        options: [{
          title: {
            text: '2005'
          },
          series: [{
            data: dataMap.dataPI['2005']
          }, {
            data: dataMap.dataSI['2005']
          }, {
            data: dataMap.dataTI['2005']
          }]
        }, {
          title: {
            text: '2006'
          },
          series: [{
            data: dataMap.dataPI['2006']
          }, {
            data: dataMap.dataSI['2006']
          }, {
            data: dataMap.dataTI['2006']
          }]
        }, {
          title: {
            text: '2007'
          },
          series: [{
            data: dataMap.dataPI['2007']
          }, {
            data: dataMap.dataSI['2007']
          }, {
            data: dataMap.dataTI['2007']
          }]
        }, {
          title: {
            text: '2008'
          },
          series: [{
            data: dataMap.dataPI['2008']
          }, {
            data: dataMap.dataSI['2008']
          }, {
            data: dataMap.dataTI['2008']
          }]
        }, {
          title: {
            text: '2009'
          },
          series: [{
            data: dataMap.dataPI['2009']
          }, {
            data: dataMap.dataSI['2009']
          }, {
            data: dataMap.dataTI['2009']
          }]
        }, {
          title: {
            text: '2010'
          },
          series: [{
            data: dataMap.dataPI['2010']
          }, {
            data: dataMap.dataSI['2010']
          }, {
            data: dataMap.dataTI['2010']
          }]
        }, {
          title: {
            text: '2011'
          },
          series: [{
            data: dataMap.dataPI['2011']
          }, {
            data: dataMap.dataSI['2011']
          }, {
            data: dataMap.dataTI['2011']
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsWaterFallChartInit = function echartsWaterFallChartInit() {
  var $waterfallChartEl = document.querySelector('.echart-nightfall-chart-example');

  if ($waterfallChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($waterfallChartEl, 'options');
    var chart = window.echarts.init($waterfallChartEl);
    var days = ['2021-06-05', '2021-06-06', '2021-06-07', '2021-06-08', '2021-06-09', '2021-06-10', '2021-06-11', '2021-06-12', '2021-06-13', '2021-06-14', '2021-06-15'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          data: ['Expenditure', 'Income'],
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,

          /* eslint-disable prefer-destructuring */
          formatter: function formatter(params) {
            var tar;

            if (params[1].value !== '-') {
              tar = params[1];
            } else {
              tar = params[2];
            }

            return "".concat(window.dayjs(tar.name).format('MMM DD'), "<br/>").concat(tar.seriesName, " : ").concat(tar.value);
          },
          transitionDuration: 0,
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: days,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          name: 'Assist',
          type: 'bar',
          stack: 'Total',
          itemStyle: {
            barBorderColor: 'transparent',
            color: 'transparent'
          },
          emphasis: {
            itemStyle: {
              barBorderColor: 'transparent',
              color: 'transparent'
            }
          },
          data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        }, {
          name: 'Income',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'top',
            color: utils.getGrays()['600']
          },
          data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          }
        }, {
          name: 'Expenditure',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'bottom',
            color: utils.getGrays()['600']
          },
          data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
          itemStyle: {
            color: utils.getColor('success'),
            barBorderRadius: [3, 3, 0, 0]
          }
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '10%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBasicBarChartInit = function echartsBasicBarChartInit() {
  var $barChartEl = document.querySelector('.echart-basic-bar-chart-example');

  if ($barChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barChartEl, 'options');
    var chart = window.echarts.init($barChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: tooltipFormatter,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: months,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          type: 'bar',
          name: 'Total',
          data: data,
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* eslint-disable */

/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBasicCandlestickChartInit = function echartsBasicCandlestickChartInit() {
  var $basicCandleStickChartEl = document.querySelector('.echart-candlestick-chart-example');

  if ($basicCandleStickChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($basicCandleStickChartEl, 'options');
    var chart = window.echarts.init($basicCandleStickChartEl);
    var data = [['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94], ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38], ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92], ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8], ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76], ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82], ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15], ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38], ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42], ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73], ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89], ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03], ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8], ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07], ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94], ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82], ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88], ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78], ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71], ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63], ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16], ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65], ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54], ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14], ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44], ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02], ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67], ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96], ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29], ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33], ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22], ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08], ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05], ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31], ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86], ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81], ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332], ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89], ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99], ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48], ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55], ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87], ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95], ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42], ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34], ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59], ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73], ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04], ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48], ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26]];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        toolbox: {
          top: 0,
          feature: {
            dataZoom: {
              yAxisIndex: false
            },
            restore: {
              show: true
            }
          },
          iconStyle: {
            borderColor: utils.getGrays()['700'],
            borderWidth: 1
          },
          emphasis: {
            iconStyle: {
              textFill: utils.getGrays()['600']
            }
          }
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 100,
          minValueSpan: 10
        }],
        xAxis: {
          type: 'category',
          data: data.map(function (item) {
            return item[0];
          }),
          scale: true,
          splitLine: {
            show: false
          },
          splitNumber: 10,
          min: 'dataMin',
          max: 'dataMax',
          boundaryGap: true,
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value, 'YYYY-MM-DD').format('MMM DD');
            },
            margin: 15,
            fontWeight: 500
          }
        },
        yAxis: {
          scale: true,
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'dashed'
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['600'],
            margin: 15,
            fontWeight: 500
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: 'candlestick',
          name: 'Volume',
          data: data.map(function (item) {
            return item.slice(1);
          }),
          itemStyle: {
            color: utils.getColor('warning'),
            color0: utils.getColor('primary'),
            borderColor: utils.getColor('warning'),
            borderColor0: utils.getColor('primary')
          }
        }],
        grid: {
          right: 5,
          left: 5,
          bottom: 5,
          top: '15%',
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Basic Gauge Chart                      */

/* -------------------------------------------------------------------------- */


var echartsBasicGaugeChartInit = function echartsBasicGaugeChartInit() {
  var $basicGaugeChartEl = document.querySelector('.echart-basic-gauge-chart-example');

  if ($basicGaugeChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($basicGaugeChartEl, 'options');
    var chart = window.echarts.init($basicGaugeChartEl);

    var _tooltipFormatter = function _tooltipFormatter(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].color, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        radius: '100%',
        series: [{
          name: 'Pressure',
          type: 'gauge',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['600']
            }
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          detail: {
            formatter: '{value}'
          },
          title: {
            color: utils.getGrays()['600']
          },
          data: [{
            value: 50,
            name: 'SCORE',
            detail: {
              color: utils.getGrays()['600']
            }
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Line Chart                             */

/* -------------------------------------------------------------------------- */


var echartsLineChartInit = function echartsLineChartInit() {
  var $lineChartEl = document.querySelector('.echart-line-chart-example');

  if ($lineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineChartEl, 'options');
    var chart = window.echarts.init($lineChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

    var _tooltipFormatter2 = function _tooltipFormatter2(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].borderColor, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter2,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: months,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          type: 'line',
          data: data,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 10,
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                           Echarts Bubble Chart                             */

/* -------------------------------------------------------------------------- */


var echartsBubbleChartInit = function echartsBubbleChartInit() {
  var $bubbleChartEl = document.querySelector('.echart-bubble-chart-example');

  if ($bubbleChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($bubbleChartEl, 'options');
    var chart = window.echarts.init($bubbleChartEl);
    var data = [[[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]], [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        title: {
          text: '1990 and 2015 have per capita and GDP',
          left: 0,
          top: 0,
          textStyle: {
            color: utils.getGrays()['600'],
            fontWeight: 600
          }
        },
        legend: {
          right: 0,
          top: '10%',
          data: ['1990', '2015'],
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        xAxis: {
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: function formatter(value) {
              return "".concat(value / 1000, "k");
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          scale: true,
          axisLabel: {
            color: utils.getGrays()['600']
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        series: [{
          name: '1990',
          data: data[0],
          type: 'scatter',
          symbolSize: function symbolSize(value) {
            return Math.sqrt(value[2]) / 5e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              color: utils.getGrays()['600'],
              show: true,
              formatter: function formatter(param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            color: utils.rgbaColor(utils.getColor('primary'), 0.7)
          }
        }, {
          name: '2015',
          data: data[1],
          type: 'scatter',
          symbolSize: function symbolSize(value) {
            return Math.sqrt(value[2]) / 7e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              color: utils.getGrays()['600'],
              show: true,
              formatter: function formatter(param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            color: utils.rgbaColor(utils.getColor('warning'), 0.7)
          }
        }],
        grid: {
          left: 5,
          right: 10,
          bottom: 5,
          top: '20%',
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsCandlestickMixedChartInit = function echartsCandlestickMixedChartInit() {
  var $candleStickMixedChartEl = document.querySelector('.echart-candlestick-mixed-chart-example');

  if ($candleStickMixedChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($candleStickMixedChartEl, 'options');
    var chart = window.echarts.init($candleStickMixedChartEl);
    var colorList = [utils.getColor('primary'), utils.getColor('info'), utils.getColor('dark'), utils.getColor('warning')];
    /* eslint-disable no-continue */

    var calculateMA = function calculateMA(dayCount, data) {
      var result = [];

      for (var i = 0, len = data.length; i < len; i += 1) {
        if (i < dayCount) {
          result.push('-');
          continue;
        }

        var sum = 0;

        for (var j = 0; j < dayCount; j += 1) {
          sum += data[i - j][1];
        }

        result.push((sum / dayCount).toFixed(2));
      }

      return result;
    };

    var dates = utils.getPastDates(61).map(function (date) {
      return window.dayjs(date).format('MMM DD, YYYY');
    });
    var data = [[17512.58, 17633.11, 17434.27, 17642.81, 86160000], [17652.36, 17716.66, 17652.36, 17790.11, 79330000], [17716.05, 17685.09, 17669.72, 17755.7, 102600000], [17661.74, 17792.75, 17568.02, 17811.48, 104890000], [17799.39, 17737, 17710.67, 17806.38, 85230000], [17718.03, 17603.32, 17579.56, 17718.03, 115230000], [17605.45, 17716.05, 17542.54, 17723.55, 99410000], [17687.28, 17541.96, 17484.23, 17687.28, 90120000], [17555.39, 17576.96, 17528.16, 17694.51, 79990000], [17586.48, 17556.41, 17555.9, 17731.63, 107100000], [17571.34, 17721.25, 17553.57, 17744.43, 81020000], [17741.66, 17908.28, 17741.66, 17918.35, 91710000], [17912.25, 17926.43, 17885.44, 17962.14, 84510000], [17925.95, 17897.46, 17867.41, 17937.65, 118160000], [17890.2, 18004.16, 17848.22, 18009.53, 89390000], [18012.1, 18053.6, 17984.43, 18103.46, 89820000], [18059.49, 18096.27, 18031.21, 18167.63, 100210000], [18092.84, 17982.52, 17963.89, 18107.29, 102720000], [17985.05, 18003.75, 17909.89, 18026.85, 134120000], [17990.94, 17977.24, 17855.55, 17990.94, 83770000], [17987.38, 17990.32, 17934.17, 18043.77, 92570000], [17996.14, 18041.55, 17920.26, 18084.66, 109090000], [18023.88, 17830.76, 17796.55, 18035.73, 100920000], [17813.09, 17773.64, 17651.98, 17814.83, 136670000], [17783.78, 17891.16, 17773.71, 17912.35, 80100000], [17870.75, 17750.91, 17670.88, 17870.75, 97060000], [17735.02, 17651.26, 17609.01, 17738.06, 95020000], [17664.48, 17660.71, 17615.82, 17736.11, 81530000], [17650.3, 17740.63, 17580.38, 17744.54, 80020000], [17743.85, 17705.91, 17668.38, 17783.16, 85590000], [17726.66, 17928.35, 17726.66, 17934.61, 75790000], [17919.03, 17711.12, 17711.05, 17919.03, 87390000], [17711.12, 17720.5, 17625.38, 17798.19, 88560000], [17711.12, 17535.32, 17512.48, 17734.74, 86640000], [17531.76, 17710.71, 17531.76, 17755.8, 88440000], [17701.46, 17529.98, 17469.92, 17701.46, 103260000], [17501.28, 17526.62, 17418.21, 17636.22, 79120000], [17514.16, 17435.4, 17331.07, 17514.16, 95530000], [17437.32, 17500.94, 17437.32, 17571.75, 111990000], [17507.04, 17492.93, 17480.05, 17550.7, 87790000], [17525.19, 17706.05, 17525.19, 17742.59, 86480000], [17735.09, 17851.51, 17735.09, 17891.71, 79180000], [17859.52, 17828.29, 17803.82, 17888.66, 68940000], [17826.85, 17873.22, 17824.73, 17873.22, 73190000], [17891.5, 17787.2, 17724.03, 17899.24, 147390000], [17754.55, 17789.67, 17664.79, 17809.18, 78530000], [17789.05, 17838.56, 17703.55, 17838.56, 75560000], [17799.8, 17807.06, 17689.68, 17833.17, 82270000], [17825.69, 17920.33, 17822.81, 17949.68, 71870000], [17936.22, 17938.28, 17936.22, 18003.23, 78750000], [17931.91, 18005.05, 17931.91, 18016, 71260000], [17969.98, 17985.19, 17915.88, 18005.22, 69690000], [17938.82, 17865.34, 17812.34, 17938.82, 90540000], [17830.5, 17732.48, 17731.35, 17893.28, 101690000], [17710.77, 17674.82, 17595.79, 17733.92, 93740000], [17703.65, 17640.17, 17629.01, 17762.96, 94130000], [17602.23, 17733.1, 17471.29, 17754.91, 91950000], [17733.44, 17675.16, 17602.78, 17733.44, 248680000], [17736.87, 17804.87, 17736.87, 17946.36, 99380000], [17827.33, 17829.73, 17799.8, 17877.84, 85130000], [17832.67, 17780.83, 17770.36, 17920.16, 89440000]];
    var dataMA5 = calculateMA(5, data);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        animation: false,
        color: colorList,
        legend: {
          top: 0,
          data: ['MA1', 'MA5', 'Volume'],
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, el, elRect, size) {
            var obj = {
              top: 60
            };
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return obj;
          }
        },
        axisPointer: {
          link: [{
            xAxisIndex: [0, 1]
          }]
        },
        dataZoom: [{
          type: 'slider',
          xAxisIndex: [0, 1],
          realtime: false,
          start: 20,
          end: 70,
          top: 35,
          height: 15,
          handleIcon: 'path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '120%'
        }, {
          type: 'inside',
          xAxisIndex: [0, 1],
          start: 40,
          end: 70,
          top: 30,
          height: 20
        }],
        xAxis: [{
          type: 'category',
          data: dates,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            }
          },
          min: 'dataMin',
          max: 'dataMax',
          axisPointer: {
            show: true
          }
        }, {
          type: 'category',
          gridIndex: 1,
          data: dates,
          scale: true,
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'blue'
            }
          },
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax',
          axisPointer: {
            type: 'shadow',
            label: {
              show: false
            },
            triggerTooltip: true
          }
        }],
        yAxis: [{
          scale: true,
          splitNumber: 2,
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['600']
          }
        }, {
          scale: true,
          gridIndex: 1,
          splitNumber: 2,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        grid: [{
          left: 5,
          right: 12,
          // top: 110,
          bottom: 60,
          height: 160,
          containLabel: true
        }, {
          left: 50,
          right: 12,
          height: 40,
          top: 260,
          containLabel: true
        }],
        series: [{
          name: 'Volume',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            color: utils.getColor('primary')
          },
          emphasis: {
            itemStyle: {
              color: utils.getColor('primary')
            }
          },
          data: data.map(function (item) {
            return item[4];
          })
        }, {
          type: 'candlestick',
          name: 'MA1',
          data: data,
          itemStyle: {
            color: utils.getColor('success'),
            color0: utils.getColor('info'),
            borderColor: utils.getColor('success'),
            borderColor0: utils.getColor('info')
          }
        }, {
          name: 'MA5',
          type: 'line',
          data: dataMA5,
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 1,
            color: utils.getColor('primary')
          }
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Doughnut Chart                         */

/* -------------------------------------------------------------------------- */


var echartsDoughnutChartInit = function echartsDoughnutChartInit() {
  var $doughnutChartEl = document.querySelector('.echart-doughnut-chart-example');

  if ($doughnutChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($doughnutChartEl, 'options');
    var chart = window.echarts.init($doughnutChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          left: 'left',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '55%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [{
            value: 1048,
            name: 'Facebook',
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 735,
            name: 'Youtube',
            itemStyle: {
              color: utils.getColor('danger')
            }
          }, {
            value: 580,
            name: 'Twitter',
            itemStyle: {
              color: utils.getColor('info')
            }
          }, {
            value: 484,
            name: 'Linkedin',
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 300,
            name: 'Github',
            itemStyle: {
              color: utils.getColor('warning')
            }
          }]
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Doughnut Chart                         */

/* -------------------------------------------------------------------------- */


var echartsDoughnutRoundedChartInit = function echartsDoughnutRoundedChartInit() {
  var $doughnutRoundedChartEl = document.querySelector('.echart-doughnut-rounded-chart');

  if ($doughnutRoundedChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($doughnutRoundedChartEl, 'options');
    var chart = window.echarts.init($doughnutRoundedChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '70%'],
          center: window.innerWidth < 530 ? ['65%', '55%'] : ['50%', '55%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: utils.getGrays()['100'],
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [{
            value: 1048,
            name: 'Starter',
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 735,
            name: 'Basic',
            itemStyle: {
              color: utils.getColor('danger')
            }
          }, {
            value: 580,
            name: 'Optimal',
            itemStyle: {
              color: utils.getColor('info')
            }
          }, {
            value: 484,
            name: 'Business',
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 300,
            name: 'Premium',
            itemStyle: {
              color: utils.getColor('warning')
            }
          }]
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
    utils.resize(function () {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{
            center: ['65%', '55%']
          }]
        });
      } else {
        chart.setOption({
          series: [{
            center: ['50%', '55%']
          }]
        });
      }
    });
  }
};
/* eslint-disable */

/* -------------------------------------------------------------------------- */

/*                           Echarts Dynamic Line Chart                       */

/* -------------------------------------------------------------------------- */


var echartsDynamicLineChartInit = function echartsDynamicLineChartInit() {
  var $dynamicLineChartEl = document.querySelector('.echart-dynamic-line-chart-example');

  if ($dynamicLineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($dynamicLineChartEl, 'options');
    var chart = window.echarts.init($dynamicLineChartEl);

    var randomData = function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)]
      };
    };

    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;

    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['500']
          }
        },
        series: [{
          name: 'Total',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data,
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 10
        }],
        grid: {
          right: 5,
          left: '7%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      chart.setOption({
        series: [{
          data: data
        }]
      });
    }, 1000);
  }
};
/* -------------------------------------------------------------------------- */

/*                          Echarts Gauge Progress Chart                      */

/* -------------------------------------------------------------------------- */


var echartsGaugeGradeChartInit = function echartsGaugeGradeChartInit() {
  var $gaugeGradeChartEl = document.querySelector('.echart-gauge-grade-chart-example');

  if ($gaugeGradeChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($gaugeGradeChartEl, 'options');
    var chart = window.echarts.init($gaugeGradeChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        series: [{
          radius: '100%',
          type: 'gauge',
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [[0.25, utils.getColor('danger')], [0.5, utils.getColor('warning')], [0.75, utils.getColor('info')], [1, utils.getColor('success')]]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: utils.getGrays()['600'],
            distance: -60,
            formatter: function formatter(value) {
              if (value === 0.875) {
                return 'Excellent';
              }

              if (value === 0.625) {
                return 'Good';
              }

              if (value === 0.375) {
                return 'Well';
              }

              if (value === 0.125) {
                return 'Bad';
              }

              return '';
            }
          },
          title: {
            offsetCenter: [0, '-20%'],
            color: utils.getGrays()['600']
          },
          detail: {
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function formatter(value) {
              return Math.round(value * 100);
            },
            color: 'auto'
          },
          data: [{
            value: 0.7,
            name: 'Grade'
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                          Echarts Gauge Progress Chart                      */

/* -------------------------------------------------------------------------- */


var echartsGaugeMultiRingChartInit = function echartsGaugeMultiRingChartInit() {
  var $gaugeMultiRingChartEl = document.querySelector('.echart-gauge-multi-ring-chart-example');

  if ($gaugeMultiRingChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($gaugeMultiRingChartEl, 'options');
    var chart = window.echarts.init($gaugeMultiRingChartEl);

    var _tooltipFormatter3 = function _tooltipFormatter3(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].color, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter3,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'gauge',
          radius: '100%',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: utils.getGrays()['500']
            }
          },
          axisLine: {
            lineStyle: {
              width: 40
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [{
            value: 60,
            name: 'Perfect',
            title: {
              offsetCenter: ['0%', '-50%']
            },
            detail: {
              offsetCenter: ['0%', '-35%']
            },
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 40,
            name: 'Good',
            title: {
              offsetCenter: ['0%', '-10%']
            },
            detail: {
              offsetCenter: ['0%', '5%']
            },
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 20,
            name: 'Commonly',
            title: {
              offsetCenter: ['0%', '30%']
            },
            detail: {
              offsetCenter: ['0%', '45%']
            },
            itemStyle: {
              color: utils.getColor('warning')
            }
          }],
          title: {
            fontSize: 14,
            color: utils.getGrays()['600']
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'auto',
            borderColor: 'auto',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                          Echarts Gauge Progress Chart                      */

/* -------------------------------------------------------------------------- */


var echartsGaugeMultiTitleChartInit = function echartsGaugeMultiTitleChartInit() {
  var $gaugeMultiTitleChartEl = document.querySelector('.echart-gauge-multi-title-chart-example');

  if ($gaugeMultiTitleChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($gaugeMultiTitleChartEl, 'options');
    var chart = window.echarts.init($gaugeMultiTitleChartEl);

    var _tooltipFormatter4 = function _tooltipFormatter4(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].color, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter4,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'gauge',
          radius: '100%',
          anchor: {
            show: true,
            showAbove: true,
            size: 18,
            itemStyle: {
              color: utils.getColor('warning')
            }
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true
          },
          axisLine: {
            roundCap: true
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              width: 2,
              color: utils.getGrays()['600']
            }
          },
          axisLabel: {
            distance: 25,
            color: utils.getGrays()['600']
          },
          data: [{
            value: 20,
            name: 'Perfect',
            title: {
              offsetCenter: ['-40%', '80%']
            },
            detail: {
              offsetCenter: ['-40%', '95%']
            },
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 40,
            name: 'Good',
            title: {
              offsetCenter: ['0%', '80%']
            },
            detail: {
              offsetCenter: ['0%', '95%']
            },
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 60,
            name: 'Commonly',
            title: {
              offsetCenter: ['40%', '80%']
            },
            detail: {
              offsetCenter: ['40%', '95%']
            },
            itemStyle: {
              color: utils.getColor('warning')
            }
          }],
          title: {
            fontSize: 14,
            color: utils.getGrays()['600']
          },
          detail: {
            width: 40,
            height: 14,
            fontSize: 14,
            color: '#fff',
            backgroundColor: 'auto',
            borderRadius: 3,
            formatter: '{value}%'
          }
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                          Echarts Gauge Progress Chart                      */

/* -------------------------------------------------------------------------- */


var echartsGaugeProgressChartInit = function echartsGaugeProgressChartInit() {
  var $gaugeProgressChartEl = document.querySelector('.echart-gauge-progress-chart-example');

  if ($gaugeProgressChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($gaugeProgressChartEl, 'options');
    var chart = window.echarts.init($gaugeProgressChartEl);

    var _tooltipFormatter5 = function _tooltipFormatter5(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].color, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter5,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'gauge',
          center: ['50%', '60%'],
          radius: '100%',
          startAngle: 180,
          endAngle: 0,
          progress: {
            show: true,
            width: 18,
            itemStyle: {
              color: utils.getColor('info')
            }
          },
          itemStyle: {
            color: utils.getColor('info'),
            shadowColor: utils.rgbaColor(utils.getColor('primary'), 0.5),
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              width: 2,
              color: utils.getGrays()['600']
            }
          },
          axisLabel: {
            distance: 25,
            color: utils.getGrays()['600']
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              color: utils.getColor('info')
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%']
          },
          data: [{
            value: 70,
            detail: {
              fontSize: 30,
              color: utils.getGrays()['600'],
              offsetCenter: [0, '40%']
            }
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                          Echarts Gauge Progress Chart                      */

/* -------------------------------------------------------------------------- */


var echartsGaugeRingChartInit = function echartsGaugeRingChartInit() {
  var $gaugeRingChartEl = document.querySelector('.echart-gauge-ring-chart-example');

  if ($gaugeRingChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($gaugeRingChartEl, 'options');
    var chart = window.echarts.init($gaugeRingChartEl);

    var _tooltipFormatter6 = function _tooltipFormatter6(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].color, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter6,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'gauge',
          radius: '100%',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: utils.getGrays()['500']
            }
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [{
            value: 80,
            title: {
              offsetCenter: ['0%', '0%']
            },
            detail: {
              offsetCenter: ['0%', '0%']
            },
            itemStyle: {
              color: utils.getColor('primary')
            }
          }],
          title: {
            fontSize: 14
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 20,
            color: 'auto',
            formatter: '{value}%'
          }
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                       Echarts Gradient Bar Chart                           */

/* -------------------------------------------------------------------------- */


var echartsGradientBarChartInit = function echartsGradientBarChartInit() {
  var $gradientBarChartEl = document.querySelector('.echart-gradient-bar-chart-example');

  if ($gradientBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($gradientBarChartEl, 'options');
    var chart = window.echarts.init($gradientBarChartEl);
    var dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        title: {
          text: 'Gradient and Clickable bar chart',
          textStyle: {
            color: utils.getGrays()['600']
          },
          left: 'center'
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: utils.getGrays()['600']
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getColor()['300']
            }
          }
        },
        dataZoom: [{
          type: 'inside'
        }],
        series: [{
          type: 'bar',
          name: 'Total',
          showBackground: true,
          itemStyle: {
            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: utils.getColor('info')
            }, {
              offset: 0.5,
              color: utils.getColor('primary')
            }, {
              offset: 1,
              color: utils.getColor('primary')
            }]),
            barBorderRadius: [3, 3, 0, 0]
          },
          emphasis: {
            itemStyle: {
              color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: utils.getColor('primary')
              }, {
                offset: 0.7,
                color: utils.getColor('primary')
              }, {
                offset: 1,
                color: utils.getColor('info')
              }])
            }
          },
          data: data
        }],
        grid: {
          right: 5,
          left: 5,
          bottom: 5,
          top: '10%',
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
    var zoomSize = 6;
    chart.on('click', function (params) {
      chart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                                Market Share                                */

/* -------------------------------------------------------------------------- */


var echartsHeatMapChartInit = function echartsHeatMapChartInit() {
  var ECHART_HEATMAP_CHART = '.echart-heatmap-chart-example';
  var $echartHeatmapChart = document.querySelector(ECHART_HEATMAP_CHART);
  var hours = ['12a', '2a', '4a', '6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'];
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var data = [];

  for (var i = 0; i < 7; i += 1) {
    for (var j = 0; j < 12; j += 1) {
      data.push([j, i, utils.getRandomNumber(5, 12)]);
    }
  }

  if ($echartHeatmapChart) {
    var userOptions = utils.getData($echartHeatmapChart, 'options');
    var chart = window.echarts.init($echartHeatmapChart);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          position: 'top',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1
        },
        grid: {
          right: 5,
          left: 5,
          top: 5,
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['400']
            }
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            color: utils.getGrays()['600']
          },
          splitArea: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['400']
            }
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '0%',
          textStyle: {
            color: utils.getGrays()['600'],
            fontWeight: 500
          },
          inRange: {
            color: [utils.rgbaColor(utils.getColors().primary, 1), utils.rgbaColor(utils.getColors().info, 1), utils.rgbaColor(utils.getColors().success, 1) // utils.rgbaColor(utils.getColors()['warning'], 1),
            // utils.rgbaColor(utils.getColors()['danger'], 1)
            ]
          }
        },
        series: [{
          type: 'heatmap',
          data: data,
          label: {
            show: true
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: utils.rgbaColor(utils.getColors().black, 0.5)
            }
          }
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                                Market Share                                */

/* -------------------------------------------------------------------------- */


var echartsHeatMapSingleSeriesChartInit = function echartsHeatMapSingleSeriesChartInit() {
  var ECHART_HEATMAP_CHART = '.echart-heatmap-single-series-chart';
  var $echartHeatmapChart = document.querySelector(ECHART_HEATMAP_CHART);
  var hours = ['12a', '2a', '4a', '6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'];
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var data = [];

  for (var i = 0; i < 7; i += 1) {
    for (var j = 0; j < 12; j += 1) {
      data.push([j, i, utils.getRandomNumber(1, 12)]);
    }
  }

  if ($echartHeatmapChart) {
    var userOptions = utils.getData($echartHeatmapChart, 'options');
    var chart = window.echarts.init($echartHeatmapChart);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        gradientColor: [utils.rgbaColor(utils.getColors().info, 1), utils.rgbaColor(utils.getColors().primary, 1)],
        tooltip: {
          position: 'top',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1
        },
        grid: {
          right: 5,
          left: 5,
          top: 5,
          bottom: 5,
          containLabel: true
        },
        xAxis: {
          axisTick: {
            show: false
          },
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['400']
            }
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          type: 'category',
          data: days,
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            color: utils.getGrays()['600']
          },
          splitArea: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['400']
            }
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '0%',
          textStyle: {
            color: utils.getGrays()['600'],
            fontWeight: 500
          }
        },
        series: [{
          type: 'heatmap',
          data: data,
          label: {
            show: true
          },
          itemStyle: {
            borderColor: utils.getColor('white'),
            borderWidth: 3
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: utils.rgbaColor(utils.getColors().black, 0.5)
            }
          }
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                       Echarts Horizontal Bar Chart                         */

/* -------------------------------------------------------------------------- */


var echartsHorizontalBarChartInit = function echartsHorizontalBarChartInit() {
  var $horizontalBarChartEl = document.querySelector('.echart-horizontal-bar-chart-example');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalBarChartEl, 'options');
    var chart = window.echarts.init($horizontalBarChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204]; // const tooltipFormatter = params => {
    //   return `
    //   <div>
    //       <h6 class="fs--1 text-700 mb-0">
    //         <span class="fas fa-circle me-1" style='color:${params[0].color}'></span>
    //         ${params[0].name} : ${params[0].value}
    //       </h6>
    //   </div>
    //   `;
    // };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: tooltipFormatter,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'value',
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          splitLine: {
            show: false
          },
          min: 600
        },
        yAxis: {
          type: 'category',
          data: months,
          boundaryGap: true,
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            show: true,
            color: utils.getGrays()['500'],
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        series: [{
          type: 'bar',
          name: 'Total',
          data: data,
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [0, 3, 3, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Line Chart                             */

/* -------------------------------------------------------------------------- */


var echartsLineAreaChartInit = function echartsLineAreaChartInit() {
  var $lineAreaChartEl = document.querySelector('.echart-line-area-chart-example');

  if ($lineAreaChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineAreaChartEl, 'options');
    var chart = window.echarts.init($lineAreaChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1142, 1160, 1179, 946, 1420, 1434, 986, 1247, 1051, 1297, 927, 1282];

    var _tooltipFormatter7 = function _tooltipFormatter7(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].borderColor, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter7,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: months,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          type: 'line',
          data: data,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          showSymbol: false,
          symbolSize: 10,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: utils.rgbaColor(utils.getColors().primary, 0.5)
              }, {
                offset: 1,
                color: utils.rgbaColor(utils.getColors().primary, 0)
              }]
            }
          }
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Line Gradient Chart                    */

/* -------------------------------------------------------------------------- */


var echartsLineGradientChartInit = function echartsLineGradientChartInit() {
  var $lineGradientChartEl = document.querySelector('.echart-line-gradient-chart-example');

  if ($lineGradientChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineGradientChartEl, 'options');
    var chart = window.echarts.init($lineGradientChartEl);
    var data = [['2021-06-05', 116], ['2021-06-06', 129], ['2021-06-07', 135], ['2021-06-08', 86], ['2021-06-09', 73], ['2021-06-10', 85], ['2021-06-11', 73], ['2021-06-12', 68], ['2021-06-13', 92], ['2021-06-14', 130], ['2021-06-15', 245], ['2021-06-16', 139], ['2021-06-17', 115], ['2021-06-18', 111], ['2021-06-19', 309], ['2021-06-20', 206], ['2021-06-21', 137], ['2021-06-22', 128], ['2021-06-23', 85], ['2021-06-24', 94], ['2021-06-25', 71], ['2021-06-26', 106], ['2021-06-27', 84], ['2021-06-28', 93], ['2021-06-29', 85], ['2021-06-30', 73], ['2021-07-01', 83], ['2021-07-02', 125], ['2021-07-03', 107], ['2021-07-04', 82], ['2021-07-05', 44], ['2021-07-06', 72], ['2021-07-07', 106], ['2021-07-08', 107], ['2021-07-09', 66], ['2021-07-10', 91], ['2021-07-11', 92], ['2021-07-12', 113], ['2021-07-13', 107], ['2021-07-14', 131], ['2021-07-15', 111], ['2021-07-16', 64], ['2021-07-17', 69], ['2021-07-18', 88], ['2021-07-19', 77], ['2021-07-20', 83], ['2021-07-21', 111], ['2021-07-22', 57], ['2021-07-23', 55], ['2021-07-24', 60]];
    var dateList = data.map(function (item) {
      return item[0];
    });
    var valueList = data.map(function (item) {
      return item[1];
    });

    var getDefaultOptions = function getDefaultOptions() {
      return {
        visualMap: {
          show: false,
          type: 'continuous',
          dimension: 0,
          min: 0,
          max: dateList.length - 1,
          color: [utils.getColor('danger'), utils.getColor('warning')]
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: dateList,
          axisLabel: {
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            },
            color: utils.getGrays()['500'],
            margin: 15
          },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            color: utils.getGrays()['500'],
            margin: 15
          },
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'dashed'
            }
          }
        },
        grid: {
          right: '3%',
          left: '8%',
          bottom: '10%',
          top: '5%'
        },
        series: {
          name: 'Total',
          type: 'line',
          showSymbol: false,
          symbolSize: 10,
          symbol: 'circle',
          data: valueList,
          itemStyle: {
            color: utils.getGrays().white,
            borderWidth: 2
          }
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                           Echarts Line Log Chart                           */

/* -------------------------------------------------------------------------- */


var echartsLineLogChartInit = function echartsLineLogChartInit() {
  var $lineLogChartEl = document.querySelector('.echart-line-log-chart-example');

  if ($lineLogChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineLogChartEl, 'options');
    var chart = window.echarts.init($lineLogChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          splitLine: {
            show: false
          },
          data: Array.from(Array(10).keys()).map(function (item) {
            return item + 1;
          })
        },
        yAxis: {
          type: 'log',
          axisLabel: {
            color: utils.getGrays()['600']
          },
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        },
        series: [{
          name: 'Index Of 3',
          type: 'line',
          data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
          symbolSize: 7,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle'
        }, {
          name: 'Index of 2',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
          symbolSize: 7,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('success'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('success')
          },
          symbol: 'circle'
        }, {
          name: 'Index of 1/2',
          type: 'line',
          data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
          symbolSize: 7,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle'
        }],
        grid: {
          right: 10,
          left: 5,
          bottom: 5,
          top: 10,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                        Echarts Line Marker Chart                           */

/* -------------------------------------------------------------------------- */


var echartsLineMarkerChartInit = function echartsLineMarkerChartInit() {
  var $lineMarkerChartEl = document.querySelector('.echart-line-marker-chart-example');

  if ($lineMarkerChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineMarkerChartEl, 'options');
    var chart = window.echarts.init($lineMarkerChartEl);
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('primary'), utils.getColor('warning') // utils.getColor('danger')
        ],
        legend: {
          data: [{
            name: 'Max',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }, {
            name: 'Min',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }]
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: days,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'Max',
          type: 'line',
          data: [10, 11, 13, 11, 12, 9, 12],
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle',
          markPoint: {
            itemStyle: {
              color: utils.getColor('primary')
            },
            data: [{
              type: 'max',
              name: 'Max'
            }, {
              type: 'min',
              name: 'Min'
            }]
          },
          markLine: {
            lineStyle: {
              color: utils.getColor('primary')
            },
            label: {
              color: utils.getGrays()['600']
            },
            data: [{
              type: 'average',
              name: 'average'
            }]
          }
        }, {
          name: 'Min',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle',
          markPoint: {
            itemStyle: {
              color: utils.getColor('danger')
            },
            label: {
              color: '#fff'
            },
            data: [{
              name: 'Weekly lowest',
              value: -2,
              xAxis: 1,
              yAxis: -1.5
            }]
          },
          markLine: {
            lineStyle: {
              color: utils.getColor('danger')
            },
            label: {
              color: utils.getGrays()['600']
            },
            data: [{
              type: 'average',
              name: 'average'
            }, [{
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            }, {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: 'Highest point'
            }]]
          }
        }],
        grid: {
          right: '8%',
          left: '5%',
          bottom: '10%',
          top: '15%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Line Race Chart                        */

/* -------------------------------------------------------------------------- */


var echartsLineRaceChartInit = function echartsLineRaceChartInit() {
  var $lineRaceChartEl = document.querySelector('.echart-line-race-chart-example');

  if ($lineRaceChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineRaceChartEl, 'options');
    var chart = window.echarts.init($lineRaceChartEl);
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('primary'), utils.getColor('warning')],
        legend: {
          data: [{
            name: 'Max',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }, {
            name: 'Min',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }]
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          // formatter: tooltipFormatter,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: days,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'Max',
          type: 'line',
          data: [10, 11, 13, 11, 12, 9, 12],
          markPoint: {
            data: [{
              type: 'max',
              name: 'Max'
            }, {
              type: 'min',
              name: 'Min'
            }]
          },
          markLine: {
            label: {
              color: utils.getGrays()['600']
            },
            data: [{
              type: 'average',
              name: 'average'
            }]
          }
        }, {
          name: 'Min',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            label: {
              color: '#fff'
            },
            data: [{
              name: 'Weekly lowest',
              value: -2,
              xAxis: 1,
              yAxis: -1.5
            }]
          },
          markLine: {
            label: {
              color: utils.getGrays()['600']
            },
            data: [{
              type: 'average',
              name: 'average'
            }, [{
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            }, {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: 'Highest point'
            }]]
          }
        }],
        grid: {
          right: '8%',
          left: '5%',
          bottom: '10%',
          top: '15%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                    Echarts Line Share Dataset Chart                        */

/* -------------------------------------------------------------------------- */


var echartsLineShareDatasetChartInit = function echartsLineShareDatasetChartInit() {
  var $lineShareChartEl = document.querySelector('.echart-line-share-dataset-chart-example');

  if ($lineShareChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineShareChartEl, 'options');
    var chart = window.echarts.init($lineShareChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('danger'), utils.getColor('warning'), utils.getColor('info'), utils.getColor('primary')],
        legend: {
          top: 0,
          textStyle: {
            color: utils.getGrays()['700']
          }
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [['product', '2012', '2013', '2014', '2015', '2016', '2017'], ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1], ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7], ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5], ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]]
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        yAxis: {
          gridIndex: 0,
          axisLabel: {
            color: utils.getGrays()['600']
          },
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        },
        series: [{
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: {
            focus: 'series'
          },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle'
        }, {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: {
            focus: 'series'
          },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle'
        }, {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: {
            focus: 'series'
          },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('warning')
          },
          symbol: 'circle'
        }, {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: {
            focus: 'series'
          },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle'
        }, {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '28%'],
          emphasis: {
            focus: 'data'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)',
            color: utils.getGrays()['600']
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }],
        grid: {
          right: 10,
          left: 5,
          bottom: 5,
          top: '55%',
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
    chart.on('updateAxisPointer', function (event) {
      var xAxisInfo = event.axesInfo[0];

      if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        chart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: "{b}: {@[".concat(dimension, "]} ({d}%)")
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                                Session By Country Map                      */

/* -------------------------------------------------------------------------- */


var echartsUsaMapInit = function echartsUsaMapInit() {
  var $usaMapEl = document.querySelector('.echart-map-usa-example');
  var data = [{
    name: 'Alabama',
    value: 4822023
  }, {
    name: 'Alaska',
    value: 731449
  }, {
    name: 'Arizona',
    value: 6553255
  }, {
    name: 'Arkansas',
    value: 2949131
  }, {
    name: 'California',
    value: 38041430
  }, {
    name: 'Colorado',
    value: 5187582
  }, {
    name: 'Connecticut',
    value: 3590347
  }, {
    name: 'Delaware',
    value: 917092
  }, {
    name: 'District of Columbia',
    value: 632323
  }, {
    name: 'Florida',
    value: 19317568
  }, {
    name: 'Georgia',
    value: 9919945
  }, {
    name: 'Hawaii',
    value: 1392313
  }, {
    name: 'Idaho',
    value: 1595728
  }, {
    name: 'Illinois',
    value: 12875255
  }, {
    name: 'Indiana',
    value: 6537334
  }, {
    name: 'Iowa',
    value: 3074186
  }, {
    name: 'Kansas',
    value: 2885905
  }, {
    name: 'Kentucky',
    value: 4380415
  }, {
    name: 'Louisiana',
    value: 4601893
  }, {
    name: 'Maine',
    value: 1329192
  }, {
    name: 'Maryland',
    value: 5884563
  }, {
    name: 'Massachusetts',
    value: 6646144
  }, {
    name: 'Michigan',
    value: 9883360
  }, {
    name: 'Minnesota',
    value: 5379139
  }, {
    name: 'Mississippi',
    value: 2984926
  }, {
    name: 'Missouri',
    value: 6021988
  }, {
    name: 'Montana',
    value: 1005141
  }, {
    name: 'Nebraska',
    value: 1855525
  }, {
    name: 'Nevada',
    value: 2758931
  }, {
    name: 'New Hampshire',
    value: 1320718
  }, {
    name: 'New Jersey',
    value: 8864590
  }, {
    name: 'New Mexico',
    value: 2085538
  }, {
    name: 'New York',
    value: 19570261
  }, {
    name: 'North Carolina',
    value: 9752073
  }, {
    name: 'North Dakota',
    value: 699628
  }, {
    name: 'Ohio',
    value: 11544225
  }, {
    name: 'Oklahoma',
    value: 3814820
  }, {
    name: 'Oregon',
    value: 3899353
  }, {
    name: 'Pennsylvania',
    value: 12763536
  }, {
    name: 'Rhode Island',
    value: 1050292
  }, {
    name: 'South Carolina',
    value: 4723723
  }, {
    name: 'South Dakota',
    value: 833354
  }, {
    name: 'Tennessee',
    value: 6456243
  }, {
    name: 'Texas',
    value: 26059203
  }, {
    name: 'Utah',
    value: 2855287
  }, {
    name: 'Vermont',
    value: 626011
  }, {
    name: 'Virginia',
    value: 8185867
  }, {
    name: 'Washington',
    value: 6897012
  }, {
    name: 'West Virginia',
    value: 1855413
  }, {
    name: 'Wisconsin',
    value: 5726398
  }, {
    name: 'Wyoming',
    value: 576412
  }, {
    name: 'Puerto Rico',
    value: 3667084
  }];

  if ($usaMapEl) {
    var userOptions = utils.getData($usaMapEl, 'options');
    var chart = window.echarts.init($usaMapEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            return "<strong>".concat(params.data.name, " :</strong> ").concat(params.data.value);
          }
        },
        toolbox: {
          show: false,
          feature: {
            restore: {}
          }
        },
        visualMap: {
          left: 'right',
          min: 500000,
          max: 38000000,
          inRange: {
            color: [utils.getColor('primary'), utils.getColor('info')]
          },
          text: ['High', 'Low'],
          calculable: true,
          textStyle: {
            color: utils.getGrays()['600']
          },
          formatter: function formatter(value) {
            return "".concat(value / 1000, "k");
          }
        },
        series: [{
          left: 10,
          name: 'USA PopEstimates',
          type: 'map',
          zoom: 1.2,
          roam: true,
          scaleLimit: {
            min: 1,
            max: 5
          },
          itemStyle: {
            borderColor: utils.getGrays()['300']
          },
          label: {
            color: '#fff'
          },
          map: 'USA',
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            },
            itemStyle: {
              areaColor: utils.getColor('warning')
            }
          },
          data: data
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
    document.querySelector('.usa-map-reset').addEventListener('click', function () {
      chart.dispatchAction({
        type: 'restore'
      });
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Pie Chart                              */

/* -------------------------------------------------------------------------- */


var echartsPieChartInit = function echartsPieChartInit() {
  var $pieChartEl = document.querySelector('.echart-pie-chart-example');

  if ($pieChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($pieChartEl, 'options');
    var chart = window.echarts.init($pieChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          left: 'left',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          label: {
            color: utils.getGrays()['700']
          },
          center: ['50%', '55%'],
          data: [{
            value: 1048,
            name: 'Facebook',
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 735,
            name: 'Youtube',
            itemStyle: {
              color: utils.getColor('danger')
            }
          }, {
            value: 580,
            name: 'Twitter',
            itemStyle: {
              color: utils.getColor('info')
            }
          }, {
            value: 484,
            name: 'Linkedin',
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 300,
            name: 'Github',
            itemStyle: {
              color: utils.getColor('warning')
            }
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: utils.rgbaColor(utils.getGrays()['600'], 0.5)
            }
          }
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart radius on window resize

    utils.resize(function () {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{
            radius: '45%'
          }]
        });
      } else {
        chart.setOption({
          series: [{
            radius: '60%'
          }]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Doughnut Chart                         */

/* -------------------------------------------------------------------------- */


var echartsPieEdgeAlignChartInit = function echartsPieEdgeAlignChartInit() {
  var $echartPieAEdgeAlignChartEl = document.querySelector('.echart-pie-edge-align-chart');
  var data = [{
    value: 800,
    name: 'Starter',
    itemStyle: {
      color: utils.rgbaColor(utils.getColors().primary, 0.5)
    }
  }, {
    value: 1048,
    name: 'Starter Pro',
    itemStyle: {
      color: utils.getColor('danger')
    }
  }, {
    value: 735,
    name: 'Basic',
    itemStyle: {
      color: utils.getColor('primary')
    }
  }, {
    value: 580,
    name: 'Optimal',
    itemStyle: {
      color: utils.getColor('secondary')
    }
  }, {
    value: 484,
    name: 'Business',
    itemStyle: {
      color: utils.getColor('warning')
    }
  }, {
    value: 600,
    name: 'Classic addition',
    itemStyle: {
      color: utils.rgbaColor(utils.getColors().warning, 0.8)
    }
  }, {
    value: 300,
    name: 'Premium',
    itemStyle: {
      color: utils.getColor('success')
    }
  }, {
    value: 300,
    name: 'Platinum',
    itemStyle: {
      color: utils.getColor('info')
    }
  }, {
    value: 400,
    name: 'Platinum Pro',
    itemStyle: {
      color: utils.rgbaColor(utils.getColors().primary, 0.5)
    }
  }];

  if ($echartPieAEdgeAlignChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($echartPieAEdgeAlignChartEl, 'options');
    var chart = window.echarts.init($echartPieAEdgeAlignChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        title: [{
          text: 'Pie Edge Align Chart',
          left: 'center',
          textStyle: {
            color: utils.getGrays()['600']
          }
        }, {
          subtext: 'alignTo: "edge"',
          left: '50%',
          top: '85%',
          textAlign: 'center',
          subtextStyle: {
            color: utils.getGrays()['700']
          }
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          center: ['50%', '50%'],
          data: data,
          label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20,
            color: utils.getGrays()['700']
          },
          left: '5%',
          right: '5%',
          top: 0,
          bottom: 0
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart radius on window resize

    utils.resize(function () {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{
            radius: '45%'
          }]
        });
      } else {
        chart.setOption({
          series: [{
            radius: '60%'
          }]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Doughnut Chart                         */

/* -------------------------------------------------------------------------- */


var echartsPieLabelAlignChartInit = function echartsPieLabelAlignChartInit() {
  var $echartPieLabelAlignChartEl = document.querySelector('.echart-pie-label-align-chart');

  if ($echartPieLabelAlignChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($echartPieLabelAlignChartEl, 'options');
    var chart = window.echarts.init($echartPieLabelAlignChartEl);
    var data = [{
      value: 800,
      name: 'Starter',
      itemStyle: {
        color: utils.rgbaColor(utils.getColors().primary, 0.5)
      }
    }, {
      value: 1048,
      name: 'Starter Pro',
      itemStyle: {
        color: utils.getColor('danger')
      }
    }, {
      value: 735,
      name: 'Basic',
      itemStyle: {
        color: utils.getColor('primary')
      }
    }, {
      value: 580,
      name: 'Optimal',
      itemStyle: {
        color: utils.getColor('secondary')
      }
    }, {
      value: 484,
      name: 'Business',
      itemStyle: {
        color: utils.getColor('warning')
      }
    }, {
      value: 600,
      name: 'Classic addition',
      itemStyle: {
        color: utils.rgbaColor(utils.getColors().warning, 0.8)
      }
    }, {
      value: 300,
      name: 'Premium',
      itemStyle: {
        color: utils.getColor('success')
      }
    }, {
      value: 300,
      name: 'Platinum',
      itemStyle: {
        color: utils.getColor('info')
      }
    }, {
      value: 400,
      name: 'Platinum Pro',
      itemStyle: {
        color: utils.rgbaColor(utils.getColors().primary, 0.5)
      }
    }];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        title: [{
          text: 'Pie Label Align Chart',
          left: 'center',
          textStyle: {
            color: utils.getGrays()['600']
          }
        }, {
          subtext: 'alignTo: "labelLine"',
          left: '50%',
          top: '85%',
          textAlign: 'center',
          subtextStyle: {
            color: utils.getGrays()['700']
          }
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          center: ['50%', '50%'],
          data: data,
          label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5,
            color: utils.getGrays()['700']
          },
          left: '5%',
          right: '5%',
          top: 0,
          bottom: 0
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart radius on window resize

    utils.resize(function () {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{
            radius: '45%'
          }]
        });
      } else {
        chart.setOption({
          series: [{
            radius: '60%'
          }]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Doughnut Chart                         */

/* -------------------------------------------------------------------------- */


var data1 = [{
  value: 1048,
  name: 'Starter',
  itemStyle: {
    color: utils.getColor('danger')
  }
}, {
  value: 735,
  name: 'Basic',
  itemStyle: {
    color: utils.getColor('primary')
  }
}, {
  value: 580,
  name: 'Optimal',
  itemStyle: {
    color: utils.getColor('secondary')
  }
}, {
  value: 484,
  name: 'Business',
  itemStyle: {
    color: utils.getColor('warning')
  }
}, {
  value: 300,
  name: 'Premium',
  itemStyle: {
    color: utils.getColor('success')
  }
}, {
  value: 300,
  name: 'Platinum',
  itemStyle: {
    color: utils.getColor('info')
  }
}];
var data2 = [{
  value: 1048,
  name: 'Facebook',
  itemStyle: {
    color: utils.getColor('primary')
  }
}, {
  value: 735,
  name: 'Youtube',
  itemStyle: {
    color: utils.getColor('danger')
  }
}, {
  value: 580,
  name: 'Twitter',
  itemStyle: {
    color: utils.getColor('info')
  }
}, {
  value: 484,
  name: 'Linkedin',
  itemStyle: {
    color: utils.getColor('success')
  }
}, {
  value: 300,
  name: 'Github',
  itemStyle: {
    color: utils.getColor('warning')
  }
}];
var defaultRadius = {
  radius: '55%'
};
var smallRadius = {
  radius: '48%'
};

var echartsPieMultipleChartInit = function echartsPieMultipleChartInit() {
  var $echartPieMultipleChartEl = document.querySelector('.echart-pie-multiple-chart');

  if ($echartPieMultipleChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($echartPieMultipleChartEl, 'options');
    var chart = window.echarts.init($echartPieMultipleChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        title: [{
          text: 'Pie Multiple Chart',
          left: 'center',
          textStyle: {
            color: utils.getGrays()['600']
          }
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'pie',
          radius: window.innerWidth < 450 ? '48%' : '55%',
          center: ['25%', '50%'],
          data: data1,
          label: {
            show: false
          }
        }, {
          type: 'pie',
          radius: window.innerWidth < 450 ? '48%' : '55%',
          center: ['75%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: false
          },
          data: data2
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart radius on window resize

    utils.resize(function () {
      if (window.innerWidth < 450) {
        chart.setOption({
          series: [smallRadius, smallRadius]
        });
      } else {
        chart.setOption({
          series: [defaultRadius, defaultRadius]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Pie Chart                              */

/* -------------------------------------------------------------------------- */


var echartsRadarChartInit = function echartsRadarChartInit() {
  var $radarChartEl = document.querySelector('.echart-radar-chart-example');

  if ($radarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($radarChartEl, 'options');
    var chart = window.echarts.init($radarChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        radar: {
          indicator: [{
            name: 'Marketing',
            max: 6500
          }, {
            name: 'Admin',
            max: 16000
          }, {
            name: 'Tech',
            max: 30000
          }, {
            name: 'Support',
            max: 38000
          }, {
            name: 'Dev ',
            max: 52000
          }, {
            name: 'Sales ',
            max: 25000
          }],
          radius: 120,
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        },
        series: [{
          type: 'radar',
          data: [{
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Data A',
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Data B',
            itemStyle: {
              color: utils.getColor('warning')
            }
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Pie Chart                              */

/* -------------------------------------------------------------------------- */


var echartsRadarCustomizedChartInit = function echartsRadarCustomizedChartInit() {
  var $radarChartEl = document.querySelector('.echart-radar-customized-chart');

  function getFormatter(params) {
    var indicators = [['Marketing', 'Sales', 'Dev', 'Support', 'Tech', 'Admin'], ['Language', 'Math', 'English', 'Physics', 'Chemistry', 'Biology']];
    var num = params.seriesIndex;
    return "<strong > ".concat(params.name, " </strong>\n    <div class=\"fs--1 text-600\">\n      <strong >").concat(indicators[params.seriesIndex][0], "</strong>: ").concat(params.value[0], "  <br>\n      <strong>").concat(indicators[num][1], "</strong>: ").concat(params.value[1], "  <br>\n      <strong>").concat(indicators[num][2], "</strong>: ").concat(params.value[2], "  <br>\n      <strong>").concat(indicators[num][3], "</strong>: ").concat(params.value[3], "  <br>\n      <strong>").concat(indicators[num][4], "</strong>: ").concat(params.value[4], "  <br>\n      <strong>").concat(indicators[num][5], "</strong>: ").concat(params.value[5], "  <br>\n    </div>");
  }

  if ($radarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($radarChartEl, 'options');
    var chart = window.echarts.init($radarChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          },
          formatter: getFormatter
        },
        radar: [{
          radius: window.innerWidth < 576 ? 90 : 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          center: window.innerWidth < 992 ? ['50%', '30%'] : ['25%', '50%'],
          indicator: [{
            name: 'Admin',
            max: 6500
          }, {
            name: 'Tech',
            max: 16000
          }, {
            name: 'Support',
            max: 30000
          }, {
            name: 'Dev',
            max: 38000
          }, {
            name: 'Sales',
            max: 52000
          }, {
            name: 'Marketing',
            max: 25000
          }],
          name: {
            formatter: '{value}',
            textStyle: {
              color: utils.getGrays()['700']
            }
          },
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        }, {
          indicator: [{
            text: 'Language',
            max: 150
          }, {
            text: 'Math',
            max: 150
          }, {
            text: 'English',
            max: 150
          }, {
            text: 'physics',
            max: 120
          }, {
            text: 'Chemistry',
            max: 108
          }, {
            text: 'Biology',
            max: 72
          }],
          radius: window.innerWidth < 576 ? 90 : 120,
          center: window.innerWidth < 992 ? ['50%', '75%'] : ['75%', '50%'],
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          },
          name: {
            textStyle: {
              color: utils.rgbaColor(utils.getGrays()['1000']),
              backgroundColor: utils.rgbaColor(utils.getGrays()['100']),
              borderRadius: 3,
              padding: [3, 5]
            }
          }
        }],
        series: [{
          type: 'radar',
          data: [{
            value: [5200, 4000, 20000, 30000, 20000, 18000],
            name: 'Data A',
            itemStyle: {
              color: utils.getColor('info')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().info, 0.3)
            }
          }, {
            value: [5000, 12000, 28000, 26000, 32000, 21000],
            name: 'Data B',
            itemStyle: {
              color: utils.getColor('success')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().success, 0.3)
            }
          }]
        }, {
          type: 'radar',
          radarIndex: 1,
          data: [{
            value: [130, 110, 130, 100, 99, 70],
            name: 'Data C',
            symbol: 'rect',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed'
            },
            itemStyle: {
              color: utils.getColor('warning')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().warning, 0.3)
            },
            label: {
              show: true,
              formatter: function formatter(params) {
                return params.value;
              },
              color: utils.getGrays()['700']
            }
          }, {
            value: [100, 93, 50, 90, 70, 60],
            name: 'Data D',
            itemStyle: {
              color: utils.getColor('danger')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().danger, 0.3)
            }
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart position on Window resize

    utils.resize(function () {
      if (window.innerWidth < 992) {
        chart.setOption({
          radar: [{
            center: ['50%', '30%']
          }, {
            center: ['50%', '75%']
          }]
        });
      } else {
        chart.setOption({
          radar: [{
            center: ['25%', '50%']
          }, {
            center: ['75%', '50%']
          }]
        });
      }

      if (window.innerWidth < 576) {
        chart.setOption({
          radar: [{
            radius: 90
          }, {
            radius: 90
          }]
        });
      } else {
        chart.setOption({
          radar: [{
            radius: 120
          }, {
            radius: 120
          }]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                      Echarts Radar Multiple Chart                          */

/* -------------------------------------------------------------------------- */


var echartsRadarMultipleChartInit = function echartsRadarMultipleChartInit() {
  var $radarChartEl = document.querySelector('.echart-radar-multiple-chart');

  if ($radarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($radarChartEl, 'options');
    var chart = window.echarts.init($radarChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var getCenter = function getCenter() {
      if (window.innerWidth < 1540 && window.innerWidth > 992) {
        return [['25%', '40%'], ['50%', '75%'], ['75%', '40%']];
      }

      if (window.innerWidth < 992) {
        return [['50%', '20%'], ['50%', '50%'], ['50%', '80%']];
      }

      return [['15%', '50%'], ['50%', '50%'], ['85%', '50%']];
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          left: 'left',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        radar: [{
          indicator: [{
            text: 'Brand',
            max: 100
          }, {
            text: 'content',
            max: 100
          }, {
            text: 'Usability',
            max: 100
          }, {
            text: 'Features',
            max: 100
          }],
          center: getCenter()[0],
          radius: 85,
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        }, {
          indicator: [{
            text: 'Exterior',
            max: 100
          }, {
            text: 'Take pictures',
            max: 100
          }, {
            text: 'system',
            max: 100
          }, {
            text: 'performance',
            max: 100
          }, {
            text: 'screen',
            max: 100
          }],
          radius: 85,
          center: getCenter()[1],
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        }, {
          indicator: months.map(function (month) {
            return {
              text: month,
              max: 100
            };
          }),
          center: getCenter()[2],
          radius: 85,
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        }],
        series: [{
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          areaStyle: {
            color: utils.rgbaColor(utils.getColors().info, 0.5)
          },
          data: [{
            value: [60, 73, 85, 40],
            name: 'A software',
            itemStyle: {
              color: utils.getColor('info')
            }
          }]
        }, {
          type: 'radar',
          radarIndex: 1,
          data: [{
            value: [85, 90, 90, 95, 95],
            name: 'A staple mobile phone',
            itemStyle: {
              color: utils.rgbaColor(utils.getColors().primary, 0.8)
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().primary, 0.3)
            }
          }, {
            value: [95, 80, 75, 90, 93],
            name: 'A fruit phone',
            itemStyle: {
              color: utils.getColor('success')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().success, 0.3)
            }
          }]
        }, {
          type: 'radar',
          radarIndex: 2,
          areaStyle: {},
          tooltip: {
            show: false
          },
          data: [{
            name: 'Precipitation',
            value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle: {
              color: utils.getColor('primary')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().primary, 0.5)
            }
          }, {
            name: 'Evaporation',
            value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle: {
              color: utils.getColor('warning')
            },
            areaStyle: {
              color: utils.rgbaColor(utils.getColors().warning, 0.5)
            }
          }]
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); // - set chart position on Window resize

    utils.resize(function () {
      chart.setOption({
        radar: getCenter().map(function (item) {
          return {
            center: item
          };
        })
      });
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                        Echarts Scatter Basic Chart                         */

/* -------------------------------------------------------------------------- */


var echartsScatterBasicChartInit = function echartsScatterBasicChartInit() {
  var $basicScatterChartEl = document.querySelector('.echart-basic-scatter-chart-example');

  if ($basicScatterChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($basicScatterChartEl, 'options');
    var chart = window.echarts.init($basicScatterChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'none'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0
        },
        xAxis: {
          axisLabel: {
            color: utils.getGrays()['600']
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          axisLabel: {
            color: utils.getGrays()['600']
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        },
        series: [{
          // symbolSize: val => val[2] * 2,
          data: [[10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81], [11.0, 8.33], [14.0, 7.66], [13.4, 6.81], [10.0, 6.33], [14.0, 8.96], [12.5, 6.82], [9.15, 7.2], [11.5, 7.2], [3.03, 4.23], [12.2, 7.83], [2.02, 4.47], [1.05, 3.33], [4.05, 4.96], [6.03, 7.24], [12.0, 6.26], [12.0, 8.84], [7.08, 5.82], [5.02, 5.68]],
          type: 'scatter',
          itemStyle: {
            color: utils.getColor('danger')
          }
        }],
        grid: {
          right: 8,
          left: 5,
          bottom: 5,
          top: 8,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                      Echarts Scatter Quartet Chart                         */

/* -------------------------------------------------------------------------- */


var echartsScatterQuartetChartInit = function echartsScatterQuartetChartInit() {
  var $scatterQuartetChartEl = document.querySelector('.echart-scatter-quartet-chart-example');

  if ($scatterQuartetChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($scatterQuartetChartEl, 'options');
    var chart = window.echarts.init($scatterQuartetChartEl);
    var dataAll = [[[10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33], [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82], [5.0, 5.68]], [[10.0, 9.14], [8.0, 8.14], [13.0, 8.74], [9.0, 8.77], [11.0, 9.26], [14.0, 8.1], [6.0, 6.13], [4.0, 3.1], [12.0, 9.13], [7.0, 7.26], [5.0, 4.74]], [[10.0, 7.46], [8.0, 6.77], [13.0, 12.74], [9.0, 7.11], [11.0, 7.81], [14.0, 8.84], [6.0, 6.08], [4.0, 5.39], [12.0, 8.15], [7.0, 6.42], [5.0, 5.73]], [[8.0, 6.58], [8.0, 5.76], [8.0, 7.71], [8.0, 8.84], [8.0, 8.47], [8.0, 7.04], [8.0, 5.25], [19.0, 12.5], [8.0, 5.56], [8.0, 7.91], [8.0, 6.89]]];

    var xAxis = function xAxis() {
      return {
        axisLabel: {
          color: utils.getGrays()['600']
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
          }
        }
      };
    };

    var yAxis = function yAxis() {
      return {
        axisLabel: {
          color: utils.getGrays()['600']
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        }
      };
    };

    var markLineOpt = {
      animation: false,
      label: {
        formatter: 'y = 0.5 * x + 3',
        align: 'right',
        color: utils.getGrays()['600'],
        fontWeight: 600
      },
      lineStyle: {
        type: 'solid'
      },
      tooltip: {
        formatter: 'y = 0.5 * x + 3'
      },
      data: [[{
        coord: [0, 3],
        symbol: 'none'
      }, {
        coord: [20, 13],
        symbol: 'none'
      }]]
    };
    var gridMdUp = [{
      left: '7%',
      top: '10%',
      width: '38%',
      height: '38%'
    }, {
      right: '7%',
      top: '10%',
      width: '38%',
      height: '38%'
    }, {
      left: '7%',
      bottom: '7%',
      width: '38%',
      height: '38%'
    }, {
      right: '7%',
      bottom: '7%',
      width: '38%',
      height: '38%'
    }];
    var gridMdDown = [{
      left: 6,
      right: 7,
      top: '4%',
      height: '20%'
    }, {
      left: 6,
      right: 7,
      top: '29%',
      height: '20%'
    }, {
      left: 6,
      right: 7,
      bottom: '26%',
      height: '20%'
    }, {
      left: 6,
      right: 7,
      bottom: 25,
      height: '20%'
    }];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('primary'), utils.getColor('success'), utils.getColor('warning'), utils.getColor('danger')],
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'none'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: 'Group {a}: ({c})'
        },
        title: {
          text: "Anscombe's quartet",
          left: 'center',
          top: 0,
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        grid: window.innerWidth < 768 ? gridMdDown : gridMdUp,
        xAxis: [_objectSpread({
          gridIndex: 0,
          min: 0,
          max: 20
        }, xAxis()), _objectSpread({
          gridIndex: 1,
          min: 0,
          max: 20
        }, xAxis()), _objectSpread({
          gridIndex: 2,
          min: 0,
          max: 20
        }, xAxis()), _objectSpread({
          gridIndex: 3,
          min: 0,
          max: 20
        }, xAxis())],
        yAxis: [_objectSpread({
          gridIndex: 0,
          min: 0,
          max: 15
        }, yAxis()), _objectSpread({
          gridIndex: 1,
          min: 0,
          max: 15
        }, yAxis()), _objectSpread({
          gridIndex: 2,
          min: 0,
          max: 15
        }, yAxis()), _objectSpread({
          gridIndex: 3,
          min: 0,
          max: 15
        }, yAxis())],
        series: [{
          name: 'I',
          type: 'scatter',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: dataAll[0],
          markLine: markLineOpt
        }, {
          name: 'II',
          type: 'scatter',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: dataAll[1],
          markLine: markLineOpt
        }, {
          name: 'III',
          type: 'scatter',
          xAxisIndex: 2,
          yAxisIndex: 2,
          data: dataAll[2],
          markLine: markLineOpt
        }, {
          name: 'IV',
          type: 'scatter',
          xAxisIndex: 3,
          yAxisIndex: 3,
          data: dataAll[3],
          markLine: markLineOpt
        }]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
    utils.resize(function () {
      if (window.innerWidth < 768) {
        chart.setOption({
          grid: gridMdDown
        });
      } else {
        chart.setOption({
          grid: gridMdUp
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                   Echarts Scatter singlr Axis Chart                        */

/* -------------------------------------------------------------------------- */


var echartsScatterSingleAxisChartInit = function echartsScatterSingleAxisChartInit() {
  var $scatterSingleAxisChartEl = document.querySelector('.echart-scatter-single-axis-chart-example');

  if ($scatterSingleAxisChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($scatterSingleAxisChartEl, 'options');
    var chart = window.echarts.init($scatterSingleAxisChartEl);
    var hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
    var days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
    var data = [];

    for (var i = 0; i < 7; i += 1) {
      for (var j = 0; j < 24; j += 1) {
        data.push([j, i, utils.getRandomNumber(0, 10)]);
      }
    }

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'none'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: 'top',
          formatter: function formatter(params) {
            return "\n            ".concat(days[params.value[1]], " <br/>\n            ").concat(hours[params.value[0]], " : ").concat(params.value[2], "\n          ");
          }
        },
        xAxis: {
          type: 'category',
          data: hours,
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            lineStyle: {
              color: utils.getGrays()['600']
            }
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          axisLine: {
            show: false
          },
          axisTick: {
            lineStyle: {
              color: utils.getGrays()['600']
            }
          },
          axisLabel: {
            margin: 15
          }
        },
        series: [{
          name: 'Punch Card',
          type: 'scatter',
          symbolSize: function symbolSize(val) {
            return val[2] * 2;
          },
          data: data,
          animationDelay: function animationDelay(idx) {
            return idx * 5;
          },
          itemStyle: {
            color: utils.getColor('primary')
          }
        }],
        grid: {
          right: 12,
          left: 5,
          bottom: 5,
          top: 5,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                    Echarts Stacked Area  Chart                             */

/* -------------------------------------------------------------------------- */


var echartsStackedAreaChartInit = function echartsStackedAreaChartInit() {
  var $stackedAreaChartEl = document.querySelector('.echart-stacked-area-chart-example');

  if ($stackedAreaChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($stackedAreaChartEl, 'options');
    var chart = window.echarts.init($stackedAreaChartEl);
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: days,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            margin: 15,
            formatter: function formatter(value) {
              return value.substring(0, 3);
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'Matcha Latte',
          type: 'line',
          symbolSize: 10,
          stack: 'product',
          data: [120, 132, 101, 134, 90, 230, 210],
          areaStyle: {
            color: utils.rgbaColor(utils.getColor('info'), 0.3)
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle'
        }, {
          name: 'Milk Tea',
          type: 'line',
          symbolSize: 10,
          stack: 'product',
          data: [220, 182, 191, 234, 290, 330, 310],
          areaStyle: {
            color: utils.rgbaColor(utils.getColor('success'), 0.3)
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('success'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('success')
          },
          symbol: 'circle'
        }, {
          name: 'Cheese Cocoa',
          type: 'line',
          symbolSize: 10,
          stack: 'product',
          data: [150, 232, 201, 154, 190, 330, 410],
          areaStyle: {
            color: utils.rgbaColor(utils.getColor('danger'), 0.3)
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle'
        }, {
          name: 'Cheese Brownie',
          type: 'line',
          symbolSize: 10,
          stack: 'product',
          data: [320, 332, 301, 334, 390, 330, 320],
          areaStyle: {
            color: utils.rgbaColor(utils.getColor('warning'), 0.3)
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('warning')
          },
          symbol: 'circle'
        }, {
          name: 'Matcha Cocoa',
          type: 'line',
          symbolSize: 10,
          stack: 'product',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          areaStyle: {
            color: utils.rgbaColor(utils.getColor('primary'), 0.3)
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle'
        }],
        grid: {
          right: 10,
          left: 5,
          bottom: 5,
          top: 8,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Bar Chart                             */

/* -------------------------------------------------------------------------- */


var echartsHorizontalStackedChartInit = function echartsHorizontalStackedChartInit() {
  var $horizontalStackChartEl = document.querySelector('.echart-horizontal-stacked-chart-example');

  if ($horizontalStackChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalStackChartEl, 'options');
    var chart = window.echarts.init($horizontalStackChartEl);
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('info'), utils.getColor('danger'), utils.getColor('warning'), utils.getColor('success'), utils.getColor('primary')],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            }
          },
          right: 0
        },
        legend: {
          data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'],
          textStyle: {
            color: utils.getGrays()['600']
          },
          left: 0
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          splitLine: {
            lineStyle: {
              show: true,
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          axisLine: {
            lineStyle: {
              show: true,
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['500'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            }
          }
        },
        series: [{
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        }, {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 188, 301, 250, 190, 230, 210]
        }, {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        }, {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }],
        grid: {
          right: 15,
          left: 5,
          bottom: 5,
          top: '15%',
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                     Echarts Stacked Line Chart                             */

/* -------------------------------------------------------------------------- */


var echartsStackedLineChartInit = function echartsStackedLineChartInit() {
  var $stackedLineChartEl = document.querySelector('.echart-stacked-line-chart-example');

  if ($stackedLineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($stackedLineChartEl, 'options');
    var chart = window.echarts.init($stackedLineChartEl);
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: days,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            margin: 15,
            formatter: function formatter(value) {
              return value.substring(0, 3);
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'dashed'
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'Matcha Latte',
          type: 'line',
          symbolSize: 6,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle',
          stack: 'product',
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: 'Milk Tea',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('success'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('success')
          },
          symbol: 'circle',
          stack: 'product',
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: 'Cheese Cocoa',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle',
          stack: 'product',
          data: [150, 232, 201, 154, 190, 330, 410]
        }, {
          name: 'Cheese Brownie',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('warning')
          },
          symbol: 'circle',
          stack: 'product',
          data: [320, 332, 301, 334, 390, 330, 320]
        }, {
          name: 'Matcha Cocoa',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle',
          stack: 'product',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }],
        grid: {
          right: 10,
          left: 5,
          bottom: 5,
          top: 8,
          containLabel: true
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                             Echarts Step Line Chart                        */

/* -------------------------------------------------------------------------- */


var echartsStepLineChartInit = function echartsStepLineChartInit() {
  var $stepLineChartEl = document.querySelector('.echart-step-line-chart-example');

  if ($stepLineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($stepLineChartEl, 'options');
    var chart = window.echarts.init($stepLineChartEl);
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('danger'), utils.getColor('warning'), utils.getColor('primary')],
        legend: {
          data: [{
            name: 'Max',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }, {
            name: 'Min',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }]
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: 'category',
          data: days,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: false
          },
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'Step Start',
          type: 'line',
          step: 'start',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle',
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: 'Step Middle',
          type: 'line',
          step: 'middle',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('warning')
          },
          symbol: 'circle',
          data: [220, 282, 201, 234, 290, 430, 410]
        }, {
          name: 'Step End',
          type: 'line',
          step: 'end',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle',
          data: [450, 432, 401, 454, 590, 530, 510]
        }],
        grid: {
          right: '3%',
          left: '8%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/*                            Theme Initialization                            */

/* -------------------------------------------------------------------------- */


docReady(echartsLineChartInit);
docReady(echartsLineAreaChartInit);
docReady(echartsPieChartInit);
docReady(echartsBasicBarChartInit);
docReady(echartsDoughnutChartInit);
docReady(echartsStackedLineChartInit);
docReady(echartsStackedAreaChartInit);
docReady(echartsLineMarkerChartInit);
docReady(echartsAreaPiecesChartInit);
docReady(echartsLineRaceChartInit);
docReady(echartsStepLineChartInit);
docReady(echartsLineGradientChartInit);
docReady(echartsDynamicLineChartInit);
docReady(echartsHorizontalBarChartInit);
docReady(echartsBarNegativeChartInit);
docReady(echartsBarSeriesChartInit);
docReady(echartsWaterFallChartInit);
docReady(echartsHorizontalStackedChartInit);
docReady(echartsBarRaceChartInit);
docReady(echartsGradientBarChartInit);
docReady(echartsBarLineChartInit);
docReady(echartsBasicCandlestickChartInit);
docReady(echartsCandlestickMixedChartInit);
docReady(echartsUsaMapInit);
docReady(echartsScatterBasicChartInit);
docReady(echartsBubbleChartInit);
docReady(echartsScatterQuartetChartInit);
docReady(echartsScatterSingleAxisChartInit);
docReady(echartsBasicGaugeChartInit);
docReady(echartsGaugeProgressChartInit);
docReady(echartsGaugeRingChartInit);
docReady(echartsGaugeMultiRingChartInit);
docReady(echartsGaugeMultiTitleChartInit);
docReady(echartsGaugeGradeChartInit);
docReady(echartsLineLogChartInit);
docReady(echartsLineShareDatasetChartInit);
docReady(echartsBarTimelineChartInit);
docReady(echartsDoughnutRoundedChartInit);
docReady(echartsPieLabelAlignChartInit);
docReady(echartsRadarChartInit);
docReady(echartsRadarCustomizedChartInit);
docReady(echartsRadarMultipleChartInit);
docReady(echartsPieMultipleChartInit);
docReady(echartsHeatMapChartInit);
docReady(echartsHeatMapSingleSeriesChartInit);
docReady(echartsBarStackedChartInit);
docReady(echartsPieEdgeAlignChartInit);
//# sourceMappingURL=echarts-example.js.map
