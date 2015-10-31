define(function (require) {

    'use strict';

    var SeriesModel = require('../../model/Series');

    var createGraphNodeLinks = require('../helper/createGraphFromNodeLinks');

    return SeriesModel.extend({

        type: 'series.graph',

        getInitialData: function (option, ecModel) {
            if (option.data && option.links) {
                var graph = createGraphNodeLinks(
                    option.data, option.links, this, true
                );
                return graph.data;
            }
        },

        defaultOption: {
            zlevel: 0,
            z: 2,
            
            coordinateSystem: 'view',

            layout: null,

            x: 'center',
            y: 'center',
            x2: null,
            y2: null,
            width: '80%',
            height: '80%',

            symbol: 'circle',
            symbolSize: 10,

            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },

            itemStyle: {
                normal: {
                },
                emphasis: {
                }
            },

            linkStyle: {
                normal: {
                    color: '#5182ab',
                    curveness: 0
                },
                emphasis: {

                }
            }
        }
   });

});