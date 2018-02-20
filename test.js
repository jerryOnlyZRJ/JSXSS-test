var xss = require("xss");
var options = {
  whiteList: {
    a: ["href", "title", "target"]
  }
};
var myxss = new xss.FilterXSS(options);
var html = myxss.process('<a href="http://www.<script>alert(1)</script>.com" title="<script>alert(1)</script>" onclick="hello()"><i>大家好</i></a>');
console.log(html);