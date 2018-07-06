var i1 = require('./images-1');
var i2 = require('./images-2');
var i3 = require('./images-3');
//var i4 = require('./images-4');
var i5 = require('./images-5');
var i6 = require('./images-6');
var i7 = require('./images-7');
var i8 = require('./images-8');

var mod = {};


var imageMatches = {};


mod.runBatch = function(ref){


    imageMatches.elements = [];

    var iRr = [i1,i2,i3,i5,i6,i7,i8];

    for(var d = 0; d < iRr.length; d++){

        console.log("RUNNING BATCH " + (d + 1));

        this.runMatches(ref,iRr[d]);

    }


    console.log("Total Images Checked: " + count);

    return imageMatches;



};


var count = 0;



mod.runMatches = function(ref, arr){






    for(var i = 0; i < arr.length; i++){

        count++;
        for(var k = 0; k < ref.length; k++){




            if(arr[i][0].toLowerCase() == ref[k].toLowerCase()){

               console.log("Matches: " + ref[k]);

                imageMatches.elements.push({source: arr[i][0], replacement: arr[i][1]});
            }


        }

    }





};






module.exports = mod;