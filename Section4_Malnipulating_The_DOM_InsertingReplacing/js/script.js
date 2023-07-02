$(function() {
   // append
  $("ul ul:eq(1)").append("<li>I am going to learn Jquery</li>");


  $("ul ul:first").append("<li>I am going to learn Jquery");
  // Nó tìm tất cả các phần tử <ul> (danh sách không thứ tự) trong trang web, sau đó lấy phần tử <ul> đầu tiên trong danh sách các phần tử tìm thấy. Điều này đại diện cho danh sách không thứ tự con đầu tiên trên trang web.
  // Phương thức append() được gọi trên phần tử <ul> đã chọn. Nó được sử dụng để thêm một phần tử con mới vào cuối phần tử đã chọn
  // để đạt hiệu quả như cách trên ta có thể dùng cách sau với appendTo : nối thêm
  $("<li>I am going to learn Jquery ver 2</li>").appendTo($("ul ul:first"));

  // còn để chèn nó lên trước 1 danh sách ul li trong ul đầu tiên thì css("background-color","rgba(180,180,30,0.8)"); prepend("<li>I'm gonna be the last sub-item</li>");
 $("ul ul:last").prepend("<li>I'm gonna be the first sub-item</li>");

  //chọn tất 
  $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>");

  $("<li>I'm gonna be the first sub-item</li>").prependTo("ul ul:first");

 $("<h3>Hiện lên trước thẻ div với id là content</h3>").prependTo("#content");
  $("<h3>Hiện lên sau thẻ div với id là content</h3>").appendTo("#content");

  //Bây giờ đã có 4 hàm để thêm 1 phần tử mới làm phần tử con của 1 phần tử khác đó là append, appendTo, prepend, prependTo : children
  //2 hàm tiếp theo ko thêm với tư cách là phần tử con mà với tư cách là anh chị em của phần tử đó-cùng cấp-siblings

  $(".red-box").after("<div class='red-box'>Another Red</div>"); 
  $(".blue-box").before("<div class='blue-box'>Another before blue</div>"); 
  chúng ta cũng có thể truyền vào một hàm hàm này sẽ trả về phần tử mới sẽ được truyền vào

  $(".blue-box").before(function(){
    return "<div class='blue-box'>Blue 2</div>";
  }); 

// di chuyển hộp màu xanh lên trước hộp màu đỏ

    $(".blue-box").before(function(){
    return $(".red-box");
  }); 



// Replacing Elements and Content
// Thay thế các phần tử hiện có trên trang bằng một phần tử đã có trên trang

$("li").replaceWith("<li>Replace</li>");
$("li ul li").replaceWith("<li>Replace</li>")


 // chúng ta có thể truyền vào một hàm hoặc 1 phần tử đã có trên trang
 
 $("li").replaceWith(function(){
    return "<li>Replace with function</li>"
 }); 

  //Ngoài ra chúng ta có thể sử dụng trực tiếp một phần tử(một phần tử hiện có từ trang)
  // vậy nên, lưu trữ nó trong một biến 
 // thẻ p đầu tiên sẽ được thay thể bằng firstListItem và firstListItem ở vị trí đầu sẽ biến mât
  
  var firstListItem = $("li:first");
  $("p:first").replaceWith(firstListItem);

  //Practice : thay thế tất cả các hộp màu đỏ và xanh lam trên trang bằng xanh lá cây 
  $(".red-box, .blue-box").replaceWith("<div class='green-box'>Another greenbox</div>");
  // một cách viết khác
  $("<div class='green-box'>Another green box !</div>").replaceAll(".red-box, .blue-box");


   // Removing Elements and Content: Xóa bỏ các phần tử hiện có
   // ví dụ loại bỏ tất cả những thẻ li trên trang
    $("li").remove();
   // ví dụ loại bỏ những phần tử trong form ko phải là input text textarea br
   $("form").children().not("input:text, textarea, br").remove();

  // còn một cách khác hoạt động tương tự như remove đó là detach()
  // về cơ bản detach() hoạt động như remove() nhưng nó cung cấp khả năng giữ lại dữ liệu và sự kiện của phần tử sau khi nó bị loại bỏ
  var detachedListItem = $("li  ").detach();
  $("#content").append(detachedListItem);

  //còn 1 chức năng nữa là empty - loại bỏ tất cả các phần tử con và tất cả các văn bản bên trong phần tử
  // nghĩa là làm trống một phần tử mà ko xóa chính phần tử đó
  $("p:first").empty();

  // practice: làm trống tất cả các hộp trên trang (xóa màu, và văn bản bên trong chúng)
  $(".green-box, .blue-box, .red-box").empty();


  // Manipulating Attributes and Properties: Thao tác với các thuộc tính
  // attr(), prop(), val()
  var specialLink = $("#special-link");
  console.log(specialLink.attr("href"));
  specialLink.attr("href","https://webshoppingonline.com.vn");


// Phương thức .attr() được sử dụng để lấy giá trị của thuộc tính HTML 
// hoặc thiết lập giá trị của nó. Nó hoạt động với tất cả các thuộc tính HTML và thuộc tính tùy chỉnh.
//  Phương thức .attr() trả về giá trị thuộc tính là kiểu dữ liệu chuỗi (string).


 // Phương thức .prop() được sử dụng để lấy giá trị của thuộc tính thuộc tính (property attribute) 
 // của một phần tử hoặc thiết lập giá trị của nó.
 //  Nó thường được sử dụng cho các thuộc tính như checked, selected, disabled, readonly 
 //  và các thuộc tính kiểu boolean khác. Phương thức .prop() trả về giá trị thuộc tính là kiểu dữ liệu native,
 //   chẳng hạn true hoặc false cho thuộc tính kiểu boolean.

  var checkBox = $("input:checkbox");
  console.log(checkBox.prop("checked"));
  console.log(checkBox.attr("checked"));

  // val() để đọc các giá trị hiện tại của các phần tử đầu vào của chúng ta  

  var textInput = $("input:text");
  textInput.val("Cấn Duy Khánh");
  console.log(textInput.val());
  var rangeInput = $("input[type='range']");
  console.log(rangeInput.val());

  //Coding Activity: Creating a Image SlideShow
  // Tạo một trình chiếu hình ảnh đẹp mắt chuyển đổi giữa các hình ảnh khác nhau 

  var galleryImage = $(".gallery").find("img").first();  
  var images = [
      "images/laptop-mobile_small.jpg",
      "images/laptop-on-table_small.jpg",
      "images/people-office-group-team_small.jpg",
  ];
  // bây giờ tôi muốn chuyển hình ảnh 2s một lần 
  var i=0;
  setInterval(function() {
      i = (i+1) % images.length;  // 1 2 0 1 2 0 1 2..
      galleryImage.fadeOut(function() {
          $(this).attr("src",images[i]);
          $(this).fadeIn();
          console.log($(this).attr("src"));
      });
  }, 4000);


});