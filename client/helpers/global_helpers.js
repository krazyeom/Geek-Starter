//3자리마다 comma 찍어줌 
UI.registerHelper('comma', function(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
});

// 프로젝트가 1개일 때와 2개일 때.'s'를 붙여주냐 차이
// 1 project.
// 2 projects.
UI.registerHelper('pluralize', function(n, thing) {
  if (n === 1) {
    return '1 ' + thing; 
  } else {
    return n + ' ' + thing + 's'; 
  }
});
