/** 
* @description MeshCentral Sample Plugin
* @author Ryan Blenis
* @copyright 
* @license Apache-2.0
* @version v0.0.1
*/

"use strict";

module.exports.sample = function (parent) {
    var obj = {};
    obj.parent = parent; // keep a reference to the parent
    obj.exports = [
      "onDesktopDisconnect",
       "onWebUIStartupEnd"// export this function to the web UI
    ];
    
    obj.onDesktopDisconnect = function() {  // this is called when the desktop disconnect button is clicked
        writeDeviceEvent(encodeURIComponent(currentNode._id));  // mimic what the button does on the device main page to pull up a log
        Q('d2devEvent').value = Date().toLocaleString()+': '; // pre-fill the date for a timestamp
        focusTextBox('d2devEvent');
    };
    
    obj.onWebUIStartupEnd = function() {
        var ld = document.querySelectorAll('#p2AccountActions > p.mL')[0];
        var as = Q('plugin_testcristianSettings');
        if (as) as.parentNode.removeChild(as);
        var x = '<span id="plugin_testcristianSettings" style="display: block;"><a onclick="pluginHandler.routeplus.openSettings();">aver</a></span>';
        ld.innerHTML += x;
    };
    
    return obj;
}
