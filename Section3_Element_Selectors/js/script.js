$(function() {
  // jQuery goes here...
  // Section 1: Using CSS selector in Jquery
  $("p").css("background-color","rgba(180,180,30,0.8)");
  $(".red-box").css("background-color","rgba(180,180,30,0.8)");
  $("#list").css("background-color","rgba(180,180,30,0.8)");
  $("input[type=text]").css("background-color","rgba(180,180,30,0.8)");
  $("input[type=email]").css("background-color","rgba(200,150,30,0.8)");

  $("h2,p,input").css("background-color","rgba(180,180,30,0.8)");
  $("p:first").css("background-color","rgba(180,180,30,0.8)");
  $("p:eq(1)").css("background-color","rgba(180,180,30,0.8)");
  $("p:last").css("background-color","rgba(180,180,30,0.8)");
  $("li:last").css("background-color","rgba(180,180,30,0.8)");
  $("ul:last").css("background-color","rgba(180,180,30,0.8)");
  $("li:even").css("background-color","rgba(180,180,30,0.8)");
  $("li:odd").css("background-color","rgba(180,180,30,0.8)");

  $("input:text").css("background-color","rgba(180,180,30,0.8)");
  $("input:password").css("background-color","rgba(180,180,30,0.8)");


  // Section2: Jquey Method Traversal: Truyền tải phương thức Jquery
  //chọn ra tất cả những thẻ li ở bên trong id = list
  $("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
  //chọn ra tất cả những phần tử con đầu tiên (thẻ li) ở bên trong id = list
  $("#list").children("li").css("background-color","rgba(180,180,30,0.8)");

  $("#list").parent().css("background-color","rgba(180,180,30,0.8)");
  $("#list").siblings().css("background-color","rgba(180,180,30,0.8)");

  $("#list").siblings("p").css("background-color","rgba(180,180,30,0.8)");

  $("#list").prev().prev().css("background-color","rgba(180,180,30,0.8)");

  $("#list").next().css("background-color","rgba(180,180,30,0.8)");



  //Section3: JQuery method for Filtering
  // lọc các phần tử bằng jquey theo các tiêu chí
  // lọc ra tất cả các thẻ li có index là chẵn ở trong thẻ có id là #list
  $("#list").find("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");
  
  // lọc ra tất cả các thẻ con li đầu tiên có index là chẵn thôi
  
  $("#list").children("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");
 
  //Có thể bên trong bộ lọc, ta có thể chuyển lại một function và function này sẽ tự động lấy chỉ mục của phần tử bạn đang làm việc dưới dạng tham số
  
  $("li").filter(function(index){
     return index % 3 === 1;
  }).css("background-color","rgba(180,180,30,0.8)");


  $("li").first().css("background-color","rgba(180,180,30,0.8)");
  $("li").last().css("background-color","rgba(180,180,30,0.8)");
  //nếu chọn eq(4) tức là lấy ra phần tử li thứ 5 trong tất cả các phần tử li
  $("li").eq(4).css("background-color","rgba(180,180,30,0.8)");
  //nếu chọn eq(-2) tức là lấy ra phần từ li thứ 2 từ cuối lên trong tất cả các phần từ li
  $("li").eq(-2).css("background-color","rgba(180,180,30,0.8)");
  //có thể chọn tất cả ngoại trừ cái đầu tiên ra 
  $("li").not(":first").css("background-color","rgba(180,180,30,0.8)");
  $("li").not("#list ul li").css("background-color","rgba(180,180,30,0.8)");
  $("li").not(function(index){
      return index % 2 ===1;
  }).css("background-color","rgba(180,180,30,0.8)");
});