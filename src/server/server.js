const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const passbook = require('passbook');
const request = require('request');
const { body, validationResult, sanitizeBody } = require('express-validator');
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, './index.html');

app.use(
  express.static(DIST_DIR),
);

app.use(bodyParser.json())
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }));

let template = passbook('generic', {
    formatVersion : 1,
    passTypeIdentifier: 'pass.com.heyhoney.callsheet',
    teamIdentifier: 'XF23477D9L',
    webServiceURL : "https://heyhoney.nl",
    authenticationToken : "vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc",
    organizationName: 'hey honey',
    description: 'callsheet'
  });
template.loadImagesFrom('./images');
template.fields.barcode = {
  'format': 'PKBarcodeFormatPDF417',
  'message': '123456789',
  'messageEncoding':'iso-8859-1'
};

template.keys('./keys', 'Brae18-hello');

app.post("/callsheet", function(request, response) {
  let form = request.body;
  let primaryValue = form.primaryValue;
  let num = 1;
  let clientLogo = form.clientLogo;
  let location1 = form.location1;
  let location2 = form.location2;
  let location3 = form.location3;
  let location4 = form.location4;
  let time1 = form.time1;
  let time2 = form.time2;
  let time3 = form.time3;
  let time4 = form.time4;
  let crewName1 = form.crewName1;
  let crewName2 = form.crewName2;
  let crewName3 = form.crewName3;
  let crewName4 = form.crewName4;
  let crewName5 = form.crewName5;
  let crewName6 = form.crewName6;
  let crewName7 = form.crewName7;
  let crewName8 = form.crewName8;
  let crewName9 = form.crewName9;
  let crewName10 = form.crewName10;
  let crewTitle1 = form.crewTitle1;
  let crewTitle2 = form.crewTitle2;
  let crewTitle3 = form.crewTitle3;
  let crewTitle4 = form.crewTitle4;
  let crewTitle5 = form.crewTitle5;
  let crewTitle6 = form.crewTitle6;
  let crewTitle7 = form.crewTitle7;
  let crewTitle8 = form.crewTitle8;
  let crewTitle9 = form.crewTitle9;
  let crewTitle10 = form.crewTitle10;

  let crewNumber1 = form.crewNumber1;

  let crewNumber2 = form.crewNumber2;
  let crewNumber3 = form.crewNumber3;
  let crewNumber4 = form.crewNumber4;
  let crewNumber5 = form.crewNumber5;
  let crewNumber6 = form.crewNumber6;
  let crewNumber7 = form.crewNumber7;
  let crewNumber8 = form.crewNumber8;
  let crewNumber9 = form.crewNumber9;
  let crewNumber10 = form.crewNumber10;

  let comments = form.comments;
  let insurance = form.insurance;
  let serialNumber = form.serialNumber;
  let crewNumber = request.body.name;

  template.fields.serialNumber = serialNumber;
  let pass = template.createPass({
    // serialNumber: serialNumber,
    generic: {}
  });
  pass.fields.logoText = " Client: " + clientLogo;

  pass.primaryFields.add({
    key: "callsheet",
    label: "Project",
    value: primaryValue
  });

  pass.secondaryFields.add({
    key: "location 1",
    label: location1,
    value: time1
  });

  pass.secondaryFields.add({
    key: "location 2",
    label: location2,
    value: time2
  });

  pass.auxiliaryFields.add({
    key: "location 3",
    label: location3,
    value: time3
  });

  pass.auxiliaryFields.add({
    key: "location 4",
    label: location4,
    value: time4
  });

  if (crewName1 != "" && crewName1 != undefined){
    pass.backFields.add({
      key: "crew1",
      label: crewTitle1,
      value: crewName1 + " " + crewNumber1
    });
  }
  if (crewName2 != "" && crewName2 != undefined){
    pass.backFields.add({
      key: "crew2",
      label: crewTitle2,
      value: crewName2 + " " + crewNumber2
    });
  }
  if (crewName3 != "" && crewName3 != undefined){
    pass.backFields.add({
      key: "crew3",
      label: crewTitle3,
      value: crewName3 + " " + crewNumber3
    });
  }

  if (crewName4 != "" && crewName4 != undefined){
    pass.backFields.add({
      key: "crew4",
      label: crewTitle4,
      value: crewName4 + " " + crewNumber4
    });
  }

  if (crewName5 != "" && crewName5 != undefined){
    pass.backFields.add({
      key: "crew5",
      label: crewTitle5,
      value: crewName5 + " " + crewNumber5
    });
  }

  if (crewName6 != "" && crewName6 != undefined){
    pass.backFields.add({
      key: "crew6",
      label: crewTitle6,
      value: crewName6 + " " + crewNumber6
    });
  }

  if (crewName7 != "" && crewName7 != undefined){
    pass.backFields.add({
      key: "crew7",
      label: crewTitle7,
      value: crewName7 + " " + crewNumber7
    });
  }
  if (crewName8 != "" && crewName8 != undefined){
    pass.backFields.add({
      key: "crew8",
      label: crewTitle8,
      value: crewName8 + " " + crewNumber8
    });
  }
  if (crewName9 != "" && crewName9 != undefined){
    pass.backFields.add({
      key: "crew9",
      label: crewTitle9,
      value: crewName9 + " " + crewNumber9
    });
  }
  if (crewName10 != "" && crewName10 != undefined){
    pass.backFields.add({
      key: "crew10",
      label: crewTitle10,
      value: crewName10 + " " + crewNumber10
    });
  }

  if (comments != ""){
    pass.backFields.add({
      key: "comments",
      label: "Comments",
      value: comments
    });
  }
  if (insurance != ""){
    pass.backFields.add({
      key: "insurance",
      label: "Insurance Company & Policy Number",
      value: insurance
    });
  }
  console.log("crew: " + crewTitle3);

  var file = fs.createWriteStream("callsheet.pkpass");
  pass.on("error", function(error) {
    console.error(error);
    process.exit(1);
  });
  pass.pipe(file);
  pass.render(response, function(error) {
    if (error){
     console.error(error);
    };
  });

});

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')

});
