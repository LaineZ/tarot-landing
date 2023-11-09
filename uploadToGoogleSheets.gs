function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([
    e.parameter.name, // name
    e.parameter.email, // email
    e.parameter.phone, // phone
    e.parameter.question, // question
    new Date()
  ]);
  return ContentService.createTextOutput().append(JSON.stringify({result: 'complete', parameters: e.parameter}))
}
