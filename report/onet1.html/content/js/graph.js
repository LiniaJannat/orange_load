/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 555.0, "minX": 0.0, "maxY": 50565.0, "series": [{"data": [[0.0, 555.0], [0.1, 555.0], [0.2, 555.0], [0.3, 555.0], [0.4, 555.0], [0.5, 556.0], [0.6, 556.0], [0.7, 556.0], [0.8, 556.0], [0.9, 556.0], [1.0, 556.0], [1.1, 556.0], [1.2, 556.0], [1.3, 556.0], [1.4, 556.0], [1.5, 556.0], [1.6, 556.0], [1.7, 556.0], [1.8, 556.0], [1.9, 556.0], [2.0, 556.0], [2.1, 556.0], [2.2, 557.0], [2.3, 557.0], [2.4, 557.0], [2.5, 557.0], [2.6, 557.0], [2.7, 557.0], [2.8, 557.0], [2.9, 557.0], [3.0, 557.0], [3.1, 557.0], [3.2, 557.0], [3.3, 557.0], [3.4, 557.0], [3.5, 557.0], [3.6, 557.0], [3.7, 557.0], [3.8, 557.0], [3.9, 557.0], [4.0, 557.0], [4.1, 557.0], [4.2, 557.0], [4.3, 557.0], [4.4, 557.0], [4.5, 557.0], [4.6, 557.0], [4.7, 557.0], [4.8, 557.0], [4.9, 557.0], [5.0, 557.0], [5.1, 557.0], [5.2, 557.0], [5.3, 557.0], [5.4, 558.0], [5.5, 558.0], [5.6, 558.0], [5.7, 558.0], [5.8, 558.0], [5.9, 558.0], [6.0, 558.0], [6.1, 558.0], [6.2, 558.0], [6.3, 558.0], [6.4, 558.0], [6.5, 558.0], [6.6, 558.0], [6.7, 558.0], [6.8, 558.0], [6.9, 558.0], [7.0, 558.0], [7.1, 558.0], [7.2, 558.0], [7.3, 558.0], [7.4, 558.0], [7.5, 558.0], [7.6, 558.0], [7.7, 558.0], [7.8, 558.0], [7.9, 558.0], [8.0, 558.0], [8.1, 558.0], [8.2, 558.0], [8.3, 558.0], [8.4, 558.0], [8.5, 558.0], [8.6, 558.0], [8.7, 558.0], [8.8, 558.0], [8.9, 558.0], [9.0, 558.0], [9.1, 558.0], [9.2, 558.0], [9.3, 558.0], [9.4, 558.0], [9.5, 558.0], [9.6, 558.0], [9.7, 558.0], [9.8, 558.0], [9.9, 558.0], [10.0, 558.0], [10.1, 558.0], [10.2, 558.0], [10.3, 558.0], [10.4, 558.0], [10.5, 558.0], [10.6, 558.0], [10.7, 558.0], [10.8, 558.0], [10.9, 558.0], [11.0, 558.0], [11.1, 558.0], [11.2, 558.0], [11.3, 558.0], [11.4, 558.0], [11.5, 558.0], [11.6, 558.0], [11.7, 558.0], [11.8, 559.0], [11.9, 559.0], [12.0, 559.0], [12.1, 559.0], [12.2, 559.0], [12.3, 559.0], [12.4, 559.0], [12.5, 559.0], [12.6, 559.0], [12.7, 559.0], [12.8, 559.0], [12.9, 559.0], [13.0, 559.0], [13.1, 559.0], [13.2, 559.0], [13.3, 559.0], [13.4, 559.0], [13.5, 559.0], [13.6, 559.0], [13.7, 559.0], [13.8, 559.0], [13.9, 559.0], [14.0, 559.0], [14.1, 559.0], [14.2, 559.0], [14.3, 559.0], [14.4, 559.0], [14.5, 559.0], [14.6, 559.0], [14.7, 559.0], [14.8, 559.0], [14.9, 559.0], [15.0, 559.0], [15.1, 559.0], [15.2, 559.0], [15.3, 559.0], [15.4, 559.0], [15.5, 559.0], [15.6, 559.0], [15.7, 559.0], [15.8, 559.0], [15.9, 559.0], [16.0, 559.0], [16.1, 559.0], [16.2, 559.0], [16.3, 559.0], [16.4, 559.0], [16.5, 559.0], [16.6, 559.0], [16.7, 559.0], [16.8, 559.0], [16.9, 559.0], [17.0, 559.0], [17.1, 559.0], [17.2, 559.0], [17.3, 559.0], [17.4, 559.0], [17.5, 559.0], [17.6, 559.0], [17.7, 559.0], [17.8, 559.0], [17.9, 559.0], [18.0, 559.0], [18.1, 559.0], [18.2, 559.0], [18.3, 559.0], [18.4, 559.0], [18.5, 559.0], [18.6, 559.0], [18.7, 559.0], [18.8, 559.0], [18.9, 559.0], [19.0, 559.0], [19.1, 559.0], [19.2, 559.0], [19.3, 559.0], [19.4, 559.0], [19.5, 559.0], [19.6, 559.0], [19.7, 559.0], [19.8, 559.0], [19.9, 559.0], [20.0, 559.0], [20.1, 559.0], [20.2, 559.0], [20.3, 559.0], [20.4, 559.0], [20.5, 559.0], [20.6, 559.0], [20.7, 559.0], [20.8, 559.0], [20.9, 560.0], [21.0, 560.0], [21.1, 560.0], [21.2, 560.0], [21.3, 560.0], [21.4, 560.0], [21.5, 560.0], [21.6, 560.0], [21.7, 560.0], [21.8, 560.0], [21.9, 560.0], [22.0, 560.0], [22.1, 560.0], [22.2, 560.0], [22.3, 560.0], [22.4, 560.0], [22.5, 560.0], [22.6, 560.0], [22.7, 560.0], [22.8, 560.0], [22.9, 560.0], [23.0, 560.0], [23.1, 560.0], [23.2, 560.0], [23.3, 560.0], [23.4, 560.0], [23.5, 560.0], [23.6, 560.0], [23.7, 560.0], [23.8, 560.0], [23.9, 560.0], [24.0, 560.0], [24.1, 560.0], [24.2, 560.0], [24.3, 560.0], [24.4, 560.0], [24.5, 560.0], [24.6, 560.0], [24.7, 560.0], [24.8, 560.0], [24.9, 560.0], [25.0, 560.0], [25.1, 560.0], [25.2, 560.0], [25.3, 560.0], [25.4, 560.0], [25.5, 560.0], [25.6, 560.0], [25.7, 560.0], [25.8, 560.0], [25.9, 560.0], [26.0, 560.0], [26.1, 560.0], [26.2, 560.0], [26.3, 560.0], [26.4, 560.0], [26.5, 560.0], [26.6, 560.0], [26.7, 560.0], [26.8, 560.0], [26.9, 560.0], [27.0, 560.0], [27.1, 560.0], [27.2, 560.0], [27.3, 560.0], [27.4, 560.0], [27.5, 560.0], [27.6, 560.0], [27.7, 560.0], [27.8, 560.0], [27.9, 560.0], [28.0, 560.0], [28.1, 560.0], [28.2, 560.0], [28.3, 560.0], [28.4, 560.0], [28.5, 560.0], [28.6, 560.0], [28.7, 560.0], [28.8, 560.0], [28.9, 560.0], [29.0, 560.0], [29.1, 560.0], [29.2, 560.0], [29.3, 560.0], [29.4, 560.0], [29.5, 560.0], [29.6, 560.0], [29.7, 560.0], [29.8, 560.0], [29.9, 560.0], [30.0, 560.0], [30.1, 560.0], [30.2, 560.0], [30.3, 560.0], [30.4, 560.0], [30.5, 560.0], [30.6, 560.0], [30.7, 561.0], [30.8, 561.0], [30.9, 561.0], [31.0, 561.0], [31.1, 561.0], [31.2, 561.0], [31.3, 561.0], [31.4, 561.0], [31.5, 561.0], [31.6, 561.0], [31.7, 561.0], [31.8, 561.0], [31.9, 561.0], [32.0, 561.0], [32.1, 561.0], [32.2, 561.0], [32.3, 561.0], [32.4, 561.0], [32.5, 561.0], [32.6, 561.0], [32.7, 561.0], [32.8, 561.0], [32.9, 561.0], [33.0, 561.0], [33.1, 561.0], [33.2, 561.0], [33.3, 561.0], [33.4, 561.0], [33.5, 561.0], [33.6, 561.0], [33.7, 561.0], [33.8, 561.0], [33.9, 561.0], [34.0, 561.0], [34.1, 561.0], [34.2, 561.0], [34.3, 561.0], [34.4, 561.0], [34.5, 561.0], [34.6, 561.0], [34.7, 561.0], [34.8, 561.0], [34.9, 561.0], [35.0, 561.0], [35.1, 561.0], [35.2, 561.0], [35.3, 561.0], [35.4, 561.0], [35.5, 561.0], [35.6, 561.0], [35.7, 561.0], [35.8, 561.0], [35.9, 561.0], [36.0, 561.0], [36.1, 561.0], [36.2, 561.0], [36.3, 561.0], [36.4, 561.0], [36.5, 561.0], [36.6, 561.0], [36.7, 561.0], [36.8, 561.0], [36.9, 561.0], [37.0, 561.0], [37.1, 561.0], [37.2, 561.0], [37.3, 561.0], [37.4, 561.0], [37.5, 561.0], [37.6, 561.0], [37.7, 561.0], [37.8, 561.0], [37.9, 561.0], [38.0, 561.0], [38.1, 561.0], [38.2, 561.0], [38.3, 561.0], [38.4, 561.0], [38.5, 561.0], [38.6, 561.0], [38.7, 561.0], [38.8, 561.0], [38.9, 561.0], [39.0, 561.0], [39.1, 561.0], [39.2, 561.0], [39.3, 561.0], [39.4, 561.0], [39.5, 561.0], [39.6, 561.0], [39.7, 561.0], [39.8, 561.0], [39.9, 561.0], [40.0, 561.0], [40.1, 561.0], [40.2, 561.0], [40.3, 561.0], [40.4, 561.0], [40.5, 561.0], [40.6, 561.0], [40.7, 561.0], [40.8, 561.0], [40.9, 561.0], [41.0, 561.0], [41.1, 561.0], [41.2, 561.0], [41.3, 561.0], [41.4, 561.0], [41.5, 562.0], [41.6, 562.0], [41.7, 562.0], [41.8, 562.0], [41.9, 562.0], [42.0, 562.0], [42.1, 562.0], [42.2, 562.0], [42.3, 562.0], [42.4, 562.0], [42.5, 562.0], [42.6, 562.0], [42.7, 562.0], [42.8, 562.0], [42.9, 562.0], [43.0, 562.0], [43.1, 562.0], [43.2, 562.0], [43.3, 562.0], [43.4, 562.0], [43.5, 562.0], [43.6, 562.0], [43.7, 562.0], [43.8, 562.0], [43.9, 562.0], [44.0, 562.0], [44.1, 562.0], [44.2, 562.0], [44.3, 562.0], [44.4, 562.0], [44.5, 562.0], [44.6, 562.0], [44.7, 562.0], [44.8, 562.0], [44.9, 562.0], [45.0, 562.0], [45.1, 562.0], [45.2, 562.0], [45.3, 562.0], [45.4, 562.0], [45.5, 562.0], [45.6, 562.0], [45.7, 562.0], [45.8, 562.0], [45.9, 562.0], [46.0, 562.0], [46.1, 562.0], [46.2, 562.0], [46.3, 562.0], [46.4, 562.0], [46.5, 562.0], [46.6, 562.0], [46.7, 562.0], [46.8, 562.0], [46.9, 562.0], [47.0, 562.0], [47.1, 562.0], [47.2, 562.0], [47.3, 562.0], [47.4, 562.0], [47.5, 562.0], [47.6, 562.0], [47.7, 562.0], [47.8, 562.0], [47.9, 562.0], [48.0, 562.0], [48.1, 562.0], [48.2, 562.0], [48.3, 562.0], [48.4, 562.0], [48.5, 562.0], [48.6, 562.0], [48.7, 562.0], [48.8, 562.0], [48.9, 562.0], [49.0, 562.0], [49.1, 562.0], [49.2, 562.0], [49.3, 562.0], [49.4, 562.0], [49.5, 562.0], [49.6, 562.0], [49.7, 562.0], [49.8, 562.0], [49.9, 562.0], [50.0, 562.0], [50.1, 562.0], [50.2, 562.0], [50.3, 562.0], [50.4, 562.0], [50.5, 562.0], [50.6, 562.0], [50.7, 562.0], [50.8, 562.0], [50.9, 562.0], [51.0, 562.0], [51.1, 563.0], [51.2, 563.0], [51.3, 563.0], [51.4, 563.0], [51.5, 563.0], [51.6, 563.0], [51.7, 563.0], [51.8, 563.0], [51.9, 563.0], [52.0, 563.0], [52.1, 563.0], [52.2, 563.0], [52.3, 563.0], [52.4, 563.0], [52.5, 563.0], [52.6, 563.0], [52.7, 563.0], [52.8, 563.0], [52.9, 563.0], [53.0, 563.0], [53.1, 563.0], [53.2, 563.0], [53.3, 563.0], [53.4, 563.0], [53.5, 563.0], [53.6, 563.0], [53.7, 563.0], [53.8, 563.0], [53.9, 563.0], [54.0, 563.0], [54.1, 563.0], [54.2, 563.0], [54.3, 563.0], [54.4, 563.0], [54.5, 563.0], [54.6, 563.0], [54.7, 563.0], [54.8, 563.0], [54.9, 563.0], [55.0, 563.0], [55.1, 563.0], [55.2, 563.0], [55.3, 563.0], [55.4, 563.0], [55.5, 563.0], [55.6, 563.0], [55.7, 563.0], [55.8, 563.0], [55.9, 563.0], [56.0, 563.0], [56.1, 563.0], [56.2, 563.0], [56.3, 563.0], [56.4, 563.0], [56.5, 563.0], [56.6, 563.0], [56.7, 563.0], [56.8, 563.0], [56.9, 563.0], [57.0, 563.0], [57.1, 563.0], [57.2, 563.0], [57.3, 563.0], [57.4, 563.0], [57.5, 563.0], [57.6, 563.0], [57.7, 563.0], [57.8, 563.0], [57.9, 563.0], [58.0, 563.0], [58.1, 563.0], [58.2, 563.0], [58.3, 563.0], [58.4, 563.0], [58.5, 563.0], [58.6, 563.0], [58.7, 563.0], [58.8, 563.0], [58.9, 563.0], [59.0, 563.0], [59.1, 563.0], [59.2, 563.0], [59.3, 563.0], [59.4, 563.0], [59.5, 563.0], [59.6, 563.0], [59.7, 563.0], [59.8, 563.0], [59.9, 563.0], [60.0, 564.0], [60.1, 564.0], [60.2, 564.0], [60.3, 564.0], [60.4, 564.0], [60.5, 564.0], [60.6, 564.0], [60.7, 564.0], [60.8, 564.0], [60.9, 564.0], [61.0, 564.0], [61.1, 564.0], [61.2, 564.0], [61.3, 564.0], [61.4, 564.0], [61.5, 564.0], [61.6, 564.0], [61.7, 564.0], [61.8, 564.0], [61.9, 564.0], [62.0, 564.0], [62.1, 564.0], [62.2, 564.0], [62.3, 564.0], [62.4, 564.0], [62.5, 564.0], [62.6, 564.0], [62.7, 564.0], [62.8, 564.0], [62.9, 564.0], [63.0, 564.0], [63.1, 564.0], [63.2, 564.0], [63.3, 564.0], [63.4, 564.0], [63.5, 564.0], [63.6, 564.0], [63.7, 564.0], [63.8, 564.0], [63.9, 564.0], [64.0, 564.0], [64.1, 564.0], [64.2, 564.0], [64.3, 564.0], [64.4, 564.0], [64.5, 564.0], [64.6, 564.0], [64.7, 564.0], [64.8, 564.0], [64.9, 564.0], [65.0, 564.0], [65.1, 564.0], [65.2, 564.0], [65.3, 564.0], [65.4, 564.0], [65.5, 564.0], [65.6, 564.0], [65.7, 564.0], [65.8, 564.0], [65.9, 564.0], [66.0, 564.0], [66.1, 564.0], [66.2, 564.0], [66.3, 564.0], [66.4, 564.0], [66.5, 564.0], [66.6, 564.0], [66.7, 564.0], [66.8, 564.0], [66.9, 564.0], [67.0, 564.0], [67.1, 564.0], [67.2, 564.0], [67.3, 564.0], [67.4, 564.0], [67.5, 564.0], [67.6, 564.0], [67.7, 564.0], [67.8, 564.0], [67.9, 564.0], [68.0, 564.0], [68.1, 564.0], [68.2, 564.0], [68.3, 564.0], [68.4, 564.0], [68.5, 565.0], [68.6, 565.0], [68.7, 565.0], [68.8, 565.0], [68.9, 565.0], [69.0, 565.0], [69.1, 565.0], [69.2, 565.0], [69.3, 565.0], [69.4, 565.0], [69.5, 565.0], [69.6, 565.0], [69.7, 565.0], [69.8, 565.0], [69.9, 565.0], [70.0, 565.0], [70.1, 565.0], [70.2, 565.0], [70.3, 565.0], [70.4, 565.0], [70.5, 565.0], [70.6, 565.0], [70.7, 565.0], [70.8, 565.0], [70.9, 565.0], [71.0, 565.0], [71.1, 565.0], [71.2, 565.0], [71.3, 565.0], [71.4, 565.0], [71.5, 565.0], [71.6, 565.0], [71.7, 565.0], [71.8, 565.0], [71.9, 565.0], [72.0, 565.0], [72.1, 565.0], [72.2, 565.0], [72.3, 565.0], [72.4, 565.0], [72.5, 565.0], [72.6, 565.0], [72.7, 565.0], [72.8, 565.0], [72.9, 565.0], [73.0, 565.0], [73.1, 565.0], [73.2, 565.0], [73.3, 565.0], [73.4, 565.0], [73.5, 565.0], [73.6, 565.0], [73.7, 565.0], [73.8, 565.0], [73.9, 565.0], [74.0, 565.0], [74.1, 565.0], [74.2, 565.0], [74.3, 565.0], [74.4, 565.0], [74.5, 565.0], [74.6, 565.0], [74.7, 565.0], [74.8, 565.0], [74.9, 566.0], [75.0, 566.0], [75.1, 566.0], [75.2, 566.0], [75.3, 566.0], [75.4, 566.0], [75.5, 566.0], [75.6, 566.0], [75.7, 566.0], [75.8, 566.0], [75.9, 566.0], [76.0, 566.0], [76.1, 566.0], [76.2, 566.0], [76.3, 566.0], [76.4, 566.0], [76.5, 566.0], [76.6, 566.0], [76.7, 566.0], [76.8, 566.0], [76.9, 566.0], [77.0, 566.0], [77.1, 566.0], [77.2, 566.0], [77.3, 566.0], [77.4, 566.0], [77.5, 566.0], [77.6, 566.0], [77.7, 566.0], [77.8, 566.0], [77.9, 566.0], [78.0, 566.0], [78.1, 566.0], [78.2, 566.0], [78.3, 566.0], [78.4, 566.0], [78.5, 566.0], [78.6, 566.0], [78.7, 566.0], [78.8, 566.0], [78.9, 567.0], [79.0, 567.0], [79.1, 567.0], [79.2, 567.0], [79.3, 567.0], [79.4, 567.0], [79.5, 567.0], [79.6, 567.0], [79.7, 567.0], [79.8, 567.0], [79.9, 567.0], [80.0, 567.0], [80.1, 567.0], [80.2, 567.0], [80.3, 567.0], [80.4, 567.0], [80.5, 567.0], [80.6, 567.0], [80.7, 567.0], [80.8, 567.0], [80.9, 567.0], [81.0, 568.0], [81.1, 568.0], [81.2, 568.0], [81.3, 568.0], [81.4, 568.0], [81.5, 568.0], [81.6, 568.0], [81.7, 568.0], [81.8, 568.0], [81.9, 568.0], [82.0, 568.0], [82.1, 568.0], [82.2, 568.0], [82.3, 568.0], [82.4, 568.0], [82.5, 568.0], [82.6, 568.0], [82.7, 568.0], [82.8, 569.0], [82.9, 569.0], [83.0, 569.0], [83.1, 569.0], [83.2, 569.0], [83.3, 569.0], [83.4, 569.0], [83.5, 569.0], [83.6, 569.0], [83.7, 569.0], [83.8, 569.0], [83.9, 569.0], [84.0, 569.0], [84.1, 569.0], [84.2, 569.0], [84.3, 569.0], [84.4, 569.0], [84.5, 570.0], [84.6, 570.0], [84.7, 570.0], [84.8, 570.0], [84.9, 570.0], [85.0, 570.0], [85.1, 570.0], [85.2, 570.0], [85.3, 570.0], [85.4, 570.0], [85.5, 571.0], [85.6, 571.0], [85.7, 571.0], [85.8, 571.0], [85.9, 571.0], [86.0, 571.0], [86.1, 571.0], [86.2, 571.0], [86.3, 572.0], [86.4, 572.0], [86.5, 572.0], [86.6, 572.0], [86.7, 572.0], [86.8, 572.0], [86.9, 572.0], [87.0, 573.0], [87.1, 573.0], [87.2, 573.0], [87.3, 573.0], [87.4, 573.0], [87.5, 573.0], [87.6, 573.0], [87.7, 573.0], [87.8, 573.0], [87.9, 573.0], [88.0, 574.0], [88.1, 574.0], [88.2, 574.0], [88.3, 574.0], [88.4, 574.0], [88.5, 574.0], [88.6, 574.0], [88.7, 574.0], [88.8, 575.0], [88.9, 575.0], [89.0, 575.0], [89.1, 575.0], [89.2, 575.0], [89.3, 575.0], [89.4, 576.0], [89.5, 576.0], [89.6, 576.0], [89.7, 576.0], [89.8, 576.0], [89.9, 577.0], [90.0, 579.0], [90.1, 579.0], [90.2, 579.0], [90.3, 580.0], [90.4, 580.0], [90.5, 581.0], [90.6, 581.0], [90.7, 582.0], [90.8, 582.0], [90.9, 582.0], [91.0, 582.0], [91.1, 582.0], [91.2, 582.0], [91.3, 583.0], [91.4, 583.0], [91.5, 583.0], [91.6, 584.0], [91.7, 584.0], [91.8, 584.0], [91.9, 584.0], [92.0, 584.0], [92.1, 584.0], [92.2, 584.0], [92.3, 584.0], [92.4, 586.0], [92.5, 586.0], [92.6, 587.0], [92.7, 587.0], [92.8, 587.0], [92.9, 588.0], [93.0, 588.0], [93.1, 588.0], [93.2, 588.0], [93.3, 590.0], [93.4, 590.0], [93.5, 591.0], [93.6, 591.0], [93.7, 591.0], [93.8, 591.0], [93.9, 591.0], [94.0, 592.0], [94.1, 595.0], [94.2, 595.0], [94.3, 596.0], [94.4, 597.0], [94.5, 597.0], [94.6, 597.0], [94.7, 597.0], [94.8, 598.0], [94.9, 598.0], [95.0, 598.0], [95.1, 599.0], [95.2, 600.0], [95.3, 601.0], [95.4, 604.0], [95.5, 604.0], [95.6, 605.0], [95.7, 607.0], [95.8, 607.0], [95.9, 612.0], [96.0, 695.0], [96.1, 701.0], [96.2, 706.0], [96.3, 706.0], [96.4, 706.0], [96.5, 707.0], [96.6, 708.0], [96.7, 710.0], [96.8, 711.0], [96.9, 711.0], [97.0, 712.0], [97.1, 714.0], [97.2, 715.0], [97.3, 715.0], [97.4, 734.0], [97.5, 734.0], [97.6, 741.0], [97.7, 899.0], [97.8, 21018.0], [97.9, 21018.0], [98.0, 21021.0], [98.1, 21022.0], [98.2, 21023.0], [98.3, 21023.0], [98.4, 21024.0], [98.5, 21027.0], [98.6, 21027.0], [98.7, 21027.0], [98.8, 21028.0], [98.9, 21029.0], [99.0, 21030.0], [99.1, 21031.0], [99.2, 21031.0], [99.3, 21031.0], [99.4, 21032.0], [99.5, 21035.0], [99.6, 21037.0], [99.7, 21038.0], [99.8, 21050.0], [99.9, 50565.0]], "isOverall": false, "label": "Log in", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 952.0, "series": [{"data": [[600.0, 9.0], [21000.0, 21.0], [700.0, 16.0], [50500.0, 1.0], [800.0, 1.0], [500.0, 952.0]], "isOverall": false, "label": "Log in", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 50500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 978.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 978.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 22.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.749240121580549, "minX": 1.68439212E12, "maxY": 28.432748538011705, "series": [{"data": [[1.68439218E12, 28.432748538011705], [1.68439212E12, 10.749240121580549]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68439218E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 556.0, "minX": 1.0, "maxY": 50565.0, "series": [{"data": [[32.0, 565.2566037735847], [33.0, 597.4545454545454], [2.0, 21037.0], [3.0, 21050.0], [4.0, 21018.0], [5.0, 21031.0], [6.0, 21032.0], [7.0, 21030.0], [8.0, 21027.0], [9.0, 21027.0], [10.0, 671.3147208121834], [11.0, 609.038461538461], [12.0, 1276.2666666666664], [13.0, 10797.0], [14.0, 21031.0], [15.0, 21029.0], [16.0, 50565.0], [1.0, 21038.0], [17.0, 21028.0], [18.0, 21027.0], [19.0, 21023.0], [20.0, 21023.0], [21.0, 21022.0], [22.0, 21035.0], [23.0, 559.0], [24.0, 708.0], [25.0, 560.0], [26.0, 561.0], [27.0, 563.0], [28.0, 556.0], [29.0, 559.0], [30.0, 562.0], [31.0, 561.0]], "isOverall": false, "label": "Log in", "isController": false}, {"data": [[16.79699999999999, 1046.788000000001]], "isOverall": false, "label": "Log in-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 33.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1198.4, "minX": 1.68439212E12, "maxY": 85294.43333333333, "series": [{"data": [[1.68439218E12, 42433.38333333333], [1.68439212E12, 85294.43333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68439218E12, 1198.4], [1.68439212E12, 2456.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68439218E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 567.4620060790282, "minX": 1.68439212E12, "maxY": 1969.0, "series": [{"data": [[1.68439218E12, 1969.0], [1.68439212E12, 567.4620060790282]], "isOverall": false, "label": "Log in", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68439218E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 567.3814589665653, "minX": 1.68439212E12, "maxY": 677.728070175439, "series": [{"data": [[1.68439218E12, 677.728070175439], [1.68439212E12, 567.3814589665653]], "isOverall": false, "label": "Log in", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68439218E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 271.5775075987846, "minX": 1.68439212E12, "maxY": 1546.1725146198835, "series": [{"data": [[1.68439218E12, 1546.1725146198835], [1.68439212E12, 271.5775075987846]], "isOverall": false, "label": "Log in", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68439218E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 555.0, "minX": 1.68439212E12, "maxY": 899.0, "series": [{"data": [[1.68439218E12, 741.0], [1.68439212E12, 899.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68439218E12, 575.0], [1.68439212E12, 573.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68439218E12, 710.3700000000001], [1.68439212E12, 711.41]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68439218E12, 590.8499999999999], [1.68439212E12, 584.0999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68439218E12, 555.0], [1.68439212E12, 555.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68439218E12, 562.0], [1.68439212E12, 562.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68439218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 560.5, "minX": 2.0, "maxY": 21030.5, "series": [{"data": [[16.0, 562.0], [2.0, 561.0], [8.0, 560.5], [17.0, 562.0], [9.0, 569.0], [18.0, 564.0], [10.0, 561.5], [15.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 21027.5], [14.0, 21030.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 569.0, "series": [{"data": [[16.0, 562.0], [2.0, 560.5], [8.0, 560.0], [17.0, 562.0], [9.0, 569.0], [18.0, 564.0], [10.0, 561.5], [15.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 0.0], [14.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.533333333333333, "minX": 1.68439212E12, "maxY": 11.133333333333333, "series": [{"data": [[1.68439218E12, 5.533333333333333], [1.68439212E12, 11.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68439218E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.68439212E12, "maxY": 10.966666666666667, "series": [{"data": [[1.68439218E12, 5.333333333333333], [1.68439212E12, 10.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68439218E12, 0.35]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.68439218E12, 0.016666666666666666]], "isOverall": false, "label": "408", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68439218E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.68439212E12, "maxY": 10.966666666666667, "series": [{"data": [[1.68439218E12, 0.36666666666666664]], "isOverall": false, "label": "Log in-failure", "isController": false}, {"data": [[1.68439218E12, 5.333333333333333], [1.68439212E12, 10.966666666666667]], "isOverall": false, "label": "Log in-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68439218E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.68439212E12, "maxY": 10.966666666666667, "series": [{"data": [[1.68439218E12, 5.333333333333333], [1.68439212E12, 10.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68439218E12, 0.36666666666666664]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68439218E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

