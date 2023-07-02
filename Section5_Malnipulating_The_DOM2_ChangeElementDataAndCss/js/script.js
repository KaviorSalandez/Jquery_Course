$(function() {
    //26. Changing the css properties of Elements : thao tác với mô hình đối tượng tài liệu của mình
    //cụ thể là ta sẽ tìm cách thay đổi giao diện, nội dung cũng như dữ liệu được liên kết với phần tử
    $(".gallery").css("display","none");  //hide

    var redBox = $(".red-box");
    console.log(redBox.css("width"));
    console.log(redBox.width());
    redBox.css("background-color","#AA7700");
    $("p").css("font-size","20px");
    redBox.css("width","+=4 0px");

    var properties = $("p").css(["font-size","line-height","color"]);
    console.log(properties);

    có thể truy cập đến từng phần tử trong mảng
    console.log(properties["font-size"]);

    redBox.css("user-select",function(){
      return "none";
    });


    // 27.Adding or Removing Css classes
  $("a").addClass("fancy-link");  // class = '...'
  $("p:first").addClass("large-empharize");


  $("li li").addClass(function(index){
      $(this).addClass("item- "+index);
  });


  $("div").addClass(function(index,currentClass){
    if(currentClass === "dummy"){
      return "red-box";
    }
  });

  //removeClass

  $(".blue-box").removeClass("blue-box").addClass("green-box");
  $(".dummy").removeClass(".red-box").addClass("green-box");


  // 28 Changing the data of an element

  var gallery =   $(".gallery");
  var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];
  // cách bạn liên kết với phần tử được gọi là hàm dữ liệu data()
  // tham số đầu tiên được hiểu như là 1 key, images là 1 mảng dữ liệu truyền vào
  gallery.data("availableImage",images);
  console.log(gallery.data("availableImage"));
  // có thể tùy ý gán dữ liệu thông qua key 
  // kết quả sẽ trả về tất cả các kiểu dữ liệu được liên kết với đối tượng gallery trong trường hợp này
  gallery.data("name","The aweSome gallery");
  console.log(gallery.data());
  // chúng ta cũng có thể loại bỏ dữ liệu mà chúng ta đã gán
  gallery.removeData("name");
   console.log(gallery.data("name"));



   var firstParagraph = $("p:first");
   console.log(firstParagraph.data("mydata"));


  // 29 Retrieving and Changing the Content of Element :text(), html()

  // text() : là hàm sẽ bỏ qua bất kì mã HTML nào trên trang
  // html() : là hàm sẽ xử lí các thẻ html trong trang

  var secondPara = $("p:eq(1)");
  console.log(secondPara.text());
  console.log(secondPara.html());


  secondPara.text("<strong>Hello</strong> World !"); // nó sẽ in ra <strong>Hello</strong> World !
  secondPara.html("<strong>Hello</strong> World !");

  var firstPara = $("p:first");
  // firstPara.append(" <strong>Cấn Duy Khánh</strong>");
  // firstPara.html(firstPara.html() + "This was just apppend");
  firstPara.append("<strong>This was just append</strong>");


});