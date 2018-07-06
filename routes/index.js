var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var emails = require('../classes/emails');
var programs = require('../classes/programs');
var filters = require('../classes/filters');
var writeCSV = require('write-csv');
var images = require('../classes/images');
var fields = require('../classes/fields');

var segments = require('../classes/segments');
var segments2 = require('../classes/segments2');
var writeFile = require('write');

var Regex = require('regex');


var validEntityArray = [];


var running = false;


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'BP Asset Move'});
});



router.get('/segments/list', function (req, res, next) {

    if (!running) {
        pageList(1, 'segments', res, req.params.writefile);
    }

});


router.get('/programs/list/:writefile', function (req, res, next) {

    if (!running) {
        pageList(1, 'programs', res, req.params.writefile);
    }

});


router.get('/sharedfilters/list/:writefile', function (req, res, next) {

    if (!running) {
        pageList(1, 'contact/filters', res, req.params.writefile);
    }

});


router.get('/segments/createfiles', function (req, res, next) {




    for(var t = 0; t < filters.elements.length; t++){



        var options = {
            uri: 'https://secure.p01.eloqua.com/api/REST/2.0/assets/contact/segment/' + segments2.elements[t] + '?depth=complete',

            headers: {
                'Authorization': 'Basic TWV0dGxlclRvbGVkb0VNRUFcQW50b24uTWlubmlvbjpCcmlkcG9ydDc4',
                'Content-Type': 'application/json'
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then(function (repos) {


                var glfID = repos.id;





                delete repos['id'];
                delete repos['createdAt'];
                delete repos['createdBy'];
                repos['folderId'] = "1463";




                repos = fields.swapFields(repos);


                writeFile.sync('seg-' + glfID + '.json', JSON.stringify(repos));


                console.log("WRITTEN");


            }).catch(function (err) {

            console.log(err);
        })

    }

});


router.get('/sharedfilters/createfiles', function (req, res, next) {




    for(var t = 0; t < filters.elements.length; t++){



        var options = {
            uri: 'https://secure.p01.eloqua.com/api/REST/2.0/assets/contact/filter/' + filters.elements[t] + '?depth=complete',

            headers: {
                'Authorization': 'Basic TWV0dGxlclRvbGVkb0VNRUFcQW50b24uTWlubmlvbjpCcmlkcG9ydDc4',
                'Content-Type': 'application/json'
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then(function (repos) {


                var glfID = repos.id;

                // repos.criteria;
                //
                // var inverted = [];
                //
                // for (var h = 0; h < repos.criteria.length; h++) {
                //     inverted[h] = [repos.criteria[h].id, (repos.criteria[h].id * -1).toString()];
                //
                //     repos.criteria[h].id = inverted[h][1];
                //
                //
                // }


                var exludeArray = [

                    '102518',
                    '102519',
                    '102520',
                    '102521',
                    '102522',
                    '102523',
                    '102524',
                    '102525',
                    '102526',
                    '102527',
                    '102528',
                    '102529',
                    '102530',
                    '102531',
                    '102532',
                    '102533',
                    '102534',
                    '102535',
                    '102536',
                    '102537',
                    '102538',
                    '102539',
                    '102540',
                    '102541',
                    '102542',
                    '102543',
                    '102544',
                    '102545',
                    '102546',
                    '102547',
                    '102548',
                    '102549',
                    '102550',
                    '102551',
                    '102552',
                    '102553',
                    '102554',
                    '102555',
                    '102556',
                    '102557',
                    '102558',
                    '102559',
                    '102560',
                    '102561',
                    '102562',
                    '102563',
                    '102564',
                    '102565',
                    '102566',
                    '102567',
                    '102568',
                    '102569',
                    '102570',
                    '102571',
                    '102572',
                    '102573',
                    '102574',
                    '102575',
                    '102576',
                    '102577',
                    '102578',
                    '102579',
                    '102580',
                    '102581',
                    '102582',
                    '102583',
                    '102584',
                    '102585',
                    '102586',
                    '102587',
                    '102588',
                    '102589',
                    '102590',
                    '102591',
                    '102592',
                    '102593',
                    '102594',
                    '102595',
                    '102596',
                    '102597',
                    '102598',
                    '102599',
                    '102600',
                    '102601',
                    '102602',
                    '102603',
                    '102604',
                    '102605',
                    '102606',
                    '102607',
                    '102608',
                    '102609',
                    '102610',
                    '102611',
                    '102612',
                    '102613',
                    '102614',
                    '102615',
                    '102616',
                    '102617',
                    '102618',
                    '102619',
                    '102620',
                    '102621',
                    '102622',
                    '102623',
                    '102624',
                    '102625',
                    '102626',
                    '102627',
                    '102628',
                    '102629',
                    '102630',
                    '102631',
                    '102632',
                    '102633',
                    '102634',
                    '102635',
                    '102636',
                    '102637',
                    '102638',
                    '102639',
                    '102640',
                    '102641',
                    '102642',
                    '102643',
                    '102644',
                    '102645',
                    '102646',
                    '102647',
                    '102648',
                    '102649',
                    '102650',
                    '102651',
                    '102652'
                ];





                delete repos['id'];
                delete repos['createdAt'];
                delete repos['createdBy'];
                delete repos['elements'];
                delete repos['statement'];
                repos['folderId'] = "1469";




                if(!exludeArray.includes(glfID)){

                    var options1 = {
                        uri: 'https://secure.p06.eloqua.com/api/REST/2.0/assets/contact/filter',

                        headers: {
                            'Authorization': 'Basic TWV0dGxlclRvbGVkb0ludGVybmF0aW9uYWxJbmNcYW50b25taW5uaW9uOlQwdHRlbmhAbTE5NjE=',
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: repos,
                        json: true // Automatically parses the JSON string in the response
                    };

                    rp(options1).then(function(r){
                        console.log('DONE');


                    }).catch(function(err){

                        console.log(err);
                    })


                }

                writeFile.sync('seg-' + glfID + '.json', JSON.stringify(repos));




            }).catch(function (err) {

            console.log(err);
        })


    }


});


router.get('/emails/list/:writefile', function (req, res, next) {


    if (!running) {
        pageList(1, 'emails', res, req.params.writefile);
    }


});


router.get('/emails/report/:id', function (req, res, next) {


    if (!running) {
        runReport(req.params.id, res);
    }


});


router.get('/fields/report/', function (req, res, next) {

    var arr = fields.elements;

    console.log(arr);

    runFieldSet(arr, 0, res)


});

var fieldHTML = "<html><body><table><tr><th>GLF ID</th><th>GLF NAME</th><th>GLF DATATYPE</th><th>CAP ID</th><th>CAP NAME</th><th>CAP DATATYPE</th></tr>";


function runFieldSet(arr, count, res) {


    var comp1 = {};
    var comp2 = {};


    console.log(arr[count][0], arr[count][1]);


    var options = {
        uri: 'https://secure.p01.eloqua.com/api/REST/2.0/assets/contact/field/' + arr[count][0],

        headers: {
            'Authorization': 'Basic TWV0dGxlclRvbGVkb0VNRUFcQW50b24uTWlubmlvbjpCcmlkcG9ydDc4',
            'Content-Type': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };


    // GLF
    rp(options)
        .then(function (repos) {


            console.log("RUN ITERATION : " + count);
            comp1.id = repos.id;
            comp1.name = repos.name;
            comp1.dataType = repos.dataType;


            var options2 = {
                uri: 'https://secure.p06.eloqua.com/api/REST/2.0/assets/contact/field/' + arr[count][1],

                headers: {
                    'Authorization': 'Basic TWV0dGxlclRvbGVkb0ludGVybmF0aW9uYWxJbmNcYW50b25taW5uaW9uOlQwdHRlbmhAbTE5NjE=',
                    'Content-Type': 'application/json'
                },
                json: true // Automatically parses the JSON string in the response
            };


            rp(options2)
                .then(function (repos2) {


                    console.log(repos2);
                    comp2.id = repos2.id;
                    comp2.name = repos2.name;
                    comp2.dataType = repos2.dataType;

                    var warn1 = "#cccccc";
                    var warn2 = "#cccccc";

                    if (comp1.name != comp2.name) {

                        warn1 = "#ff4444";
                    }

                    if (comp1.dataType != comp2.dataType) {

                        warn2 = "#cc8844";
                    }


                    fieldHTML += "<tr>";
                    fieldHTML += "<td> <p style='color:" + warn1 + ";'>" + comp1.id + "</td><td> <p style='color:'" + warn1 + "'>" + comp1.name + "</td>";
                    fieldHTML += "<td> <p style='color:" + warn2 + "'>" + comp1.dataType + "</td>";

                    fieldHTML += "<td> <p style='color:" + warn1 + ";'>" + comp2.id + "</td><td> <p style='color:'" + warn1 + "'>" + comp2.name + "</td>";
                    fieldHTML += "<td> <p style='color:" + warn2 + ";'>" + comp2.dataType + "</td>";

                    count++;

                    if (count >= arr.length) {

                        fieldHTML += "</tr></table></body></html>"

                        res.send(fieldHTML);
                    } else {

                        runFieldSet(arr, count, res);

                    }


                }).catch(function (err) {

                console.log(err);
            });


        }).catch(function (err) {
        console.log(err);

    });


};


function runReport(id, res) {


    running = true;

    console.log("RUNNING REPORT ");

    var options = {
        uri: 'https://secure.p01.eloqua.com/api/REST/2.0/assets/email/' + id + '?depth=complete',

        headers: {
            'Authorization': 'Basic TWV0dGxlclRvbGVkb0VNRUFcQW50b24uTWlubmlvbjpCcmlkcG9ydDc4',
            'Content-Type': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)

        .then(function (repos) {

            console.log("-RP CALL SUCCESS");





            var html = "";


            if (repos.htmlContent.html) {

                html = repos.htmlContent.html;
            } else {

                html = repos.htmlContent.htmlBody;
            }



            console.log(" - FIND MATCHES");


            var regex = /src\s*=\s*"(.+?)"/g;


            console.log(regex);
            console.log(regex.test('src="gsdhhdsgdsgh"'));


            html = html.replace(regex, function (match) {

                //console.log("- - - MATCH", match);

                match = match.replace('{','%7b');
                match = match.replace('}','%7d');

                console.log(match);

                return match.toLowerCase();

        });

            var mat = html.match(regex);


            console.log("--CHECKS");

            for (var i = 0; i < mat.length; i++) {

                console.log("- "+ i);

                mat[i] = mat[i].replace('src=', '');
                mat[i] = mat[i].substring(1, mat[i].length - 1);
                mat[i] = mat[i].toLowerCase();


            }

            console.log("ATTEMPT MATCHES", mat);

            var matches = images.runBatch(mat);


            var fieldMerges = false;

            if (html.search('<span class=eloquaemail') > 0) {

                fieldMerges = true;

            }


            res.render('emailReport', {links: matches, html: html, fm: fieldMerges});


            running = false;


            matches = {};
            html = "";


        }).catch(function (err) {


    });

};


function pageList(page, type, res, wf) {


    running = true;

    console.log("RUNNING PAGE " + page);

    var options = {
        uri: 'https://secure.p01.eloqua.com/api/REST/2.0/assets/contact/' + type + '?page=' + page,

        headers: {
            'Authorization': 'Basic TWV0dGxlclRvbGVkb0VNRUFcQW50b24uTWlubmlvbjpCcmlkcG9ydDc4',
            'Content-Type': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (repos) {

            console.log(repos.elements);


            if (repos.elements.length > 0) {

                for (var i = 0; i < repos.elements.length; i++) {

                    if (type == 'emails') {

                        if (emails.checkExists(repos.elements[i].name)) {

                            validEntityArray.push({
                                name: repos.elements[i].name,
                                id: repos.elements[i].id,
                                folderId: repos.elements[i].folderId
                            });

                        }
                    }
                    if (type == 'programs') {

                        if (programs.checkExists(repos.elements[i].name)) {

                            validEntityArray.push({
                                name: repos.elements[i].name,
                                id: repos.elements[i].id,
                                folderId: repos.elements[i].folderId
                            });

                        }

                    }

                    if (type == 'segments') {


                        console.log(repos.elements[i]);

                        if (segments.checkExists(repos.elements[i].name)) {

                            validEntityArray.push({
                                name: repos.elements[i].name,
                                id: repos.elements[i].id,
                                folderId: repos.elements[i].folderId
                            });

                        }

                    }

                    else {

                        if (segments.checkExists(repos.elements[i].name)) {

                            validEntityArray.push({
                                name: repos.elements[i].name,
                                id: repos.elements[i].id,
                                folderId: repos.elements[i].folderId
                            });

                        }


                    }
                }


                page++;
                pageList(page, type, res, wf);

            } else {


                writeCSV('./csv/segments.csv', validEntityArray);


                var html = "<html><head></head><h1>" + type + "</h1><body><table>";


                for (var k = 0; k < validEntityArray.length; k++) {

                    html += "<tr><td>" + validEntityArray[k].name + "</td></tr>"

                }

                html += "</table></body></html>";

                res.send(html);


                validEntityArray = [];

                running = false;

            }


        }).catch(function (err) {


        console.log(err);
    });


}


module.exports = router;
