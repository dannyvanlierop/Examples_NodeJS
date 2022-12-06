/**
 * @author Danny van Lierop
 * @description Timer.js
 * @license MIT
 */

'use strict';                                                                                       /** strict: Using a variable, without declaring it, is not allowed **/
var Timer = {
    Interval : 500,                                                                                 /** milliseconds interval between running function **/
    timeMillisEpoch : new Date().getTime(),                                                         /** milliseconds elapsed since the UNIX epoch **/
    timeMillisNext : 0,                                                                             /** milliseconds starting next run **/
    timeMillisLast : 0,                                                                             /** milliseconds starting last run, for debug only**/
    TimeMillisOnline: function(){return new Date().getTime() - Timer.timeMillisEpoch;},             /** milliseconds elapsed since start script **/
    Check: async function () {                                                                      /** Function that loops endless and checks when to run task **/
        if (Timer.TimeMillisOnline() > Timer.timeMillisNext) {                                      /** Run when interval reached **/
            Timer.timeMillisNext = Timer.TimeMillisOnline()+Timer.Interval;                         /** save current time plus interval for next run **/
            process.stdout.write(`\n last[ms:${Timer.TimeMillisOnline()-Timer.timeMillisLast}]`);   /** Save timeMillisLast to debug milliseconds since last run **/
            await new Promise((resolve) => { setTimeout(resolve, 100); });                          /** Function call here, fake function call that takes 100ms(aka sleep) to finish **/
            Timer.timeMillisLast = Timer.TimeMillisOnline();                                        /** Debug milliseconds since last run **/
            await new Promise(resolve => setTimeout(Timer.Check, 0));                               /** reset timer for next run, check again every new 1 ms **/
        } else {
            await new Promise(resolve => setTimeout(Timer.Check, Timer.Interval));                  /** reset timer for next run check **/
        };
        return;
    }
};
Timer.Check();                                                                                      /** Start timer once **/
