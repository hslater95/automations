const { google } = require('googleapis');
const clientEmail = "placeholder";
const privateKey = "placeholder";
const googleSheetId = "placeholder";
const googleSheetPage  "placeholder";
const googleAuth = new google.auth.JWT(
    clientEmail,
    null,
    privateKey.replace(/\\n/g, '\n'),
    'https://www.googleapis.com/auth/spreadsheets'
);
const sheets = google.sheets({ version: 'v4', auth: googleAuth });



function appendData(data = 'testing') {
    sheets.spreadsheets.values.append({
        spreadsheetId: googleSheetId,
        range: googleSheetPage,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [['Hasan Slater', "hasan.slater1995@gmail.com", "1995-02-09", "software developer", "my test bio", "28", "10x Dev"]]
        }
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        console.log(res);
        console.log('Data appended to spreadsheet');
    });
}

