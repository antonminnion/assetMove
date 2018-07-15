var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var emails = require('../classes/emails');
var programs = require('../classes/programs');
var filters = require('../classes/filters');
var writeCSV = require('write-csv');
var images = require('../classes/images');
var fields = require('../classes/fields');
var folders = require('../classes/folders');

var segments = require('../classes/segments');
var segments2 = require('../classes/segments2');

var emailGroups = require('../classes/emailGroups');

var emailSwaps = require('../classes/emailSwaps');

var fs = require('fs');

var csv = require('fast-csv');

var writeFile = require('write');

var jsonFS = require('jsonfile');

var _ = require('lodash');

var validEntityArray = [];

var running = false;


/* GET home page. */
router.get('/', function (req, res, next) {


    buildTable(res);



});


function buildTable(res) {

    var json = {};

    json.list = [];


    var count = 0;

    fs.createReadStream("./csv/emails.csv")
        .pipe(csv())
        .on("data", function (data) {

            json.list.push(data);


        })
        .on("end", function () {


            res.render('index', {title: 'BP Asset Move', data: json.list});
        });

}

//http://s1103.t.eloqua.com/e/f2?elqFormName=EMT_EMK_XXXX_All_All_All_All_All_All_ClickTrack&elqSiteID=1103&Link=A&SBU=IND%20TLA&Content=VEH-Maintenance-WPP-NTR1&URL=https://www.mt.com/global/en/home/library/white-papers/transport-logistics/VEH_Maintenance_WP.html?cmp=em-glf_GLO_eMail_TRANS_NRT_VEH-Maintenance-WPP-NTR1_20180411&emailAddress=~~eloqua..type--emailfield..syntax--EmailAddress..innerText--EmailAddress..encodeFor--url~~&elqTrackId=06cf7213bc714f8f94dbdb40cad96c10&elqTrack=true



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

router.get('/folders/list', function (req, res, next) {


    var count = 0;

    run(folders.elements);


    console.log("CREATE FOLDERS--");
    function run(elements){



        var options = {
            method: 'POST',
            uri: 'https://secure.p06.eloqua.com/api/REST/2.0/assets/email/folder',

            headers: {
                'Authorization': 'Basic TWV0dGxlclRvbGVkb0ludGVybmF0aW9uYWxJbmNcYW50b25taW5uaW9uOlQwdHRlbmhAbTE5NjE=',
                'Content-Type': 'application/json'
            },
            body: {
                "folderId": "1484",
                "name": elements[count][1],
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)

            .then(function (repos) {



                console.log('"' + repos.name + '","' + repos.id+ '","' + elements[count][0]+ '","' +elements[count][1]+ '","' + elements[count][2] + '"');

                count++;
                if(count < elements.length){

                    run(elements);

                }


            }).catch(function(err){

                console.log(err);
        });
    }


});


router.get('/emails/report/:id', function (req, res, next) {


    if (!running) {
        runReport(req.params.id, res);
    }


});


router.get('/emails/report/update/:id/:result', function (req, res, next) {


    if(req.params.result == "Approve") {

        console.log("APPROVED - " + req.params.id);

        approveEmail(req.params.id,res);

    }else{

        console.log("FOR REVIEW - " + req.params.id);

        reviewEmail(req.params.id,res);

    }





});


router.get('/fields/report/', function (req, res, next) {

    var arr = fields.elements;

    console.log(arr);

    runFieldSet(arr, 0, res)


});



function reviewEmail(id,res){


    var file = 'email_reports/all/' + id + '.json';

    var wfile = 'email_reports/for_review/' + id + '.json';

    jsonFS.readFile(file, function(err, obj) {


        jsonFS.writeFile(wfile, obj, function (err) {
            console.error(err)
        });

    });




    var csvWriteStream = csv.format({headers: true}),
        writableStream = fs.createWriteStream("./csv/emails-temp.csv");

    writableStream.on("finish", function(){
        console.log("DONE!");
    });

    csvWriteStream.pipe(writableStream);

    fs.createReadStream("./csv/emails.csv")
        .pipe(csv())
        .on("data", function (data) {

            if(data[1] == id){

                data[3] = 2;
                csvWriteStream.write([data[0],data[1],data[2],data[3]]);
            }else{

                csvWriteStream.write([data[0],data[1],data[2],data[3]]);
            }


        })
        .on("end", function () {


            csvWriteStream.end();

            fs.unlink('./csv/emails.csv', function(err) {
                if (err) throw err;
                console.log('successfully deleted /csv/emails.csv');
            });

            fs.rename('./csv/emails-temp.csv', './csv/emails.csv', function (err) {
                if (err) throw err;
                console.log('successfully renamed /csv/emails.csv');
            });



            res.send(200);

        });

}


function approveEmail(ref,res){



    var file = 'email_reports/all/' + ref + '.json';

    var wfile = 'email_reports/approved/' + ref + '.json';

    console.log("FINDING REPORT");
    jsonFS.readFile(file, function(err, obj) {



        var checkId = obj.folderId;
        var headId  = obj.emailHeaderId;
        var footId  = obj.emailFooterId;
        var eGroup  = obj.emailGroupId;

        console.log("CHECKID: " + checkId);

       var jString = JSON.stringify(obj);



        console.log('emailHeaderId":"' + headId + '"');
       // set default header ID
        jString = jString.replace('emailHeaderId":"' + headId + '"','emailHeaderId":"8"');

        // set default footer ID
        jString = jString.replace('emailFooterId":"' + footId + '"','emailFooterId":"10"');



        //TODO Dynamic Content swap

        //TODO Blind form submits

        //TODO Link exchange

        //TODO Footer links

        /*


        // GETS FINAL REDIRECT URL

        var request = require('request');
        var r = request.get('http://google.com?q=foo', function (err, res, body) {
            console.log(r.uri.href);
            console.log(res.request.uri.href);

            // Mikael doesn't mention getting the uri using 'this' so maybe it's best to avoid it
            // please add a comment if you know why this might be bad
            console.log(this.uri.href);
        });


        */





        //swap emailGroups
       for(var c = 0; c < emailGroups.elements.length; c++){


           if( emailGroups.elements[c][0] == eGroup) {


               console.log('"emailGroupId":"' + emailGroups.elements[c][1] + '"');


               jString = jString.replace('"emailGroupId":"' + emailGroups.elements[c][0] + '"', '"emailGroupId":"' + emailGroups.elements[c][2] + '"');


               //incomment for debug

               console.log(jString);
               console.log(emailGroups.elements[c][0],eGroup);

           }

       }


        //swap folderIDs
        for(var i = 0; i < emailSwaps.elements.length; i++){


            if( emailSwaps.elements[i][1] == checkId) {


                console.log('"emailGroupId":"' + emailSwaps.elements[i][1] + '"');


                jString = jString.replace('"folderId":"' + emailSwaps.elements[i][1] + '"', '"folderId":"' + emailSwaps.elements[i][0] + '"');


                //incomment for debug
                //console.log(jString);

            }

        }



        var options = {
            method: 'POST',
            uri: 'https://secure.p06.eloqua.com/api/REST/2.0/assets/email',

            headers: {
                'Authorization': 'Basic TWV0dGxlclRvbGVkb0ludGVybmF0aW9uYWxJbmNcYW50b25taW5uaW9uOlQwdHRlbmhAbTE5NjE=',
                'Content-Type':'application/json; charset=UTF-8'
            },
            body: jString
            //json: true // Automatically parses the JSON string in the response
        };

        rp(options)

            .then(function (repos) {

                console.log("EMAIL CREATED");



                jsonFS.writeFile(wfile, jString, function (err) {
                    console.error(err)
                });


                var csvWriteStream = csv.format({headers: true}),
                    writableStream = fs.createWriteStream("./csv/emails-temp.csv");

                writableStream.on("finish", function(){
                    console.log("DONE!");
                });

                csvWriteStream.pipe(writableStream);

                fs.createReadStream("./csv/emails.csv")
                    .pipe(csv())
                    .on("data", function (data) {

                        if(data[1] == ref){

                            data[3] = 1;
                            csvWriteStream.write([data[0],data[1],data[2],data[3]]);
                        }else{

                            csvWriteStream.write([data[0],data[1],data[2],data[3]]);
                        }


                    })
                    .on("end", function () {


                        csvWriteStream.end();

                        fs.unlink('./csv/emails.csv', function(err) {
                            if (err) throw err;
                            console.log('successfully deleted /csv/emails.csv');
                        });

                        fs.rename('./csv/emails-temp.csv', './csv/emails.csv', function (err) {
                            if (err) throw err;
                            console.log('successfully renamed /csv/emails.csv');
                        });



                        res.send(200);

                    });




            }).catch(function(err){

                console.log(err);

        });




    });






}




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

    options.simple = false;

    rp(options)

        .then(function (repos) {



            if(repos) {


                var html = "";


                if (repos.htmlContent.html) {

                    html = repos.htmlContent.html;

                } else {

                    html = repos.htmlContent.htmlBody;
                }


                console.log(" - FIND MATCHES");


                var regex = /src\s*=\s*"(.+?)"/g;





                html = html.replace(regex, function (match) {

                    //console.log("- - - MATCH", match);

                    match = match.replace('{', '%7b');
                    match = match.replace('}', '%7d');

                    console.log(match);

                    return match.toLowerCase();

                });

                var mat = html.match(regex);


                console.log("--CHECKS");

                for (var i = 0; i < mat.length; i++) {

                    console.log("- " + i);

                    mat[i] = mat[i].replace('src=', '');
                    mat[i] = mat[i].substring(1, mat[i].length - 1);
                    mat[i] = mat[i].toLowerCase();


                }


                mat = _.uniq(mat);


                console.log("ATTEMPT MATCHES", mat);

                var matches = images.runBatch(mat);


                var fieldMerges = false;

                if (html.search('<span class=eloquaemail') > 0) {

                    fieldMerges = true;

                }



                //TODO Dynamic Content swap

                //TODO Blind form submits

                //TODO Link exchange

                //TODO Footer links

                var lRegex = /href\s*=\s*"(.+?)"/g;

                var arr = html.match(lRegex);

                for(var t = 0; t < arr.length; t++){

                    arr[t] = arr[t].replace('href=', '');

                    arr[t] = arr[t].replace(/"/g, '');
                    console.log(arr[t]);



                }



                var count = 0;

                recursiveLinkGet(arr,count);

                var links = [];

                var contains = [];

                function recursiveLinkGet(arr,count){


                    var options = {
                        method: 'GET',
                        uri: arr[count],
                        resolveWithFullResponse: true
                    };


                    rp(options).then(function (resp) {

                        console.log("FIND: " + arr[count] + "  REPLACE: " + JSON.stringify(resp.request.href));


                        if(!_.includes(contains,resp.request.href)) {
                            contains.push(resp.request.href);
                            links.push([arr[count],resp.request.href]);
                        }



                        count ++;
                        if(count < arr.length ) {

                            recursiveLinkGet(arr, count);

                        }else{

                            finish(links);
                        }

                    }).catch(function(err){console.log(err)});



                }

               function finish(arr) {

                   var html2 = html;


                   for (var b = 0; b < arr.length; b++) {

                       console.log(arr[b]);

                      // var rg = new RegExp(arr[b][0], "g");
                       html2 = html2.replace(arr[b][0], arr[b][1]);

                   }

                   //arr = _.uniq(arr);

                   for (var m = 0; m < matches.elements.length; m++) {


                       // console.log();
                       html2 = html2.replace(matches.elements[m].source.toLowerCase(), matches.elements[m].replacement);
                       //  console.log("REPLACE\n", matches.elements[m].source.toLowerCase(), matches.elements[m].replacement);


                   }


                   html2 = html2.replace("<span class=eloquaemail >Department1</span>", "<span class=eloquaemail >Division1</span>");


                   console.log("GENERATE TEMPORARY REPORT");

                   var file = 'email_reports/all/' + repos.id + '.json';


                   if (repos.htmlContent.html) {

                       console.log("HTMLREPLACE");

                       repos.htmlContent.html = html2;

                   } else {

                       console.log("HTMLREPLACE");

                       repos.htmlContent.htmlBody = html2;
                   }

                   console.log('REPORT READY');

                   jsonFS.writeFile(file, repos, function (err) {
                       console.error(err)
                   });

                   console.log('--' + file + " written.");

                   res.render('emailReport', {
                       links: matches,
                       links2: arr,
                       html: html,
                       html2: html2,
                       fm: fieldMerges,
                       id: repos.id,
                       name: repos.name,
                       reply_to: repos.reply_to,
                       subject: repos.subject,
                       folderId: repos.folderId
                   });


                   running = false;


                   matches = {};
                   html = "";

               }


            }else{


                res.send("<p>NOT FOUND</p>");

                this.cancel();

            }


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
