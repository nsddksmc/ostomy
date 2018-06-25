function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wyRe6FpO9L":
        Script1();
        break;
      case "5VN6cDQhU1Z":
        Script2();
        break;
      case "639yCH4MdyC":
        Script3();
        break;
      case "6jenSHL938S":
        Script4();
        break;
      case "601Q0JcT6dK":
        Script5();
        break;
      case "6Exa14alykT":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

