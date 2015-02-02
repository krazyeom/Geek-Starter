//file:/server/init.js
Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/.uploads/',
    checkCreateDirectories: true,
    maxFileSize: 2000000,
    getFileName: function(fileInfo, formData) { 
      console.log(fileInfo);
      console.log(formData);
      return 'Saved-' + fileInfo; 
    },
    finished: function() {
      console.log('finished');
    }
  })
});