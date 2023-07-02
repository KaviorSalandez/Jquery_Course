$(function() {
  // lession 1
    $(".red-box").fadeOut(2000);
    $(".green-box").fadeOut(2000);
    $(".red-box").fadeIn(1000);
    $(".red-box").fadeTo(1000,0.5);
    // muốn làm hộp màu đỏ mờ dần hiện lên với 50% thì 0.5 là độ mờ thì dùng fadeTo(số ml s, độ mờ)

  //lession 2 : fadeToggle là thay đổi giá trị ẩn với hiện của phần tử
   $(".red-box").fadeTo(3000,0.2);
   $(".green-box").fadeTo(2000,0.5);
   $(".blue-box").fadeTo(1000,0.8);
   $(".green-box").fadeToggle();
   $(".green-box").fadeToggle(); 


 //lession 3
  // fadeOut là làm mở dần phần tử rồi biến mất -> display: none
  // fadeTo(1000,0) là làm cho độ mờ của phần từ về 0 nma ko biến mất

  $(".green-box").fadeOut(1000); 
  $(".green-box").fadeTo(1000,0.5);
  // nếu dùng fadeOut xong r dùng fadeTo -> phần tử sẽ ko hiện là vì "display:none; opacity:0.5"

//lession 4: Showing and Hiding Elements : "display: none" and display:"block"
  $(".green-box").hide();
  $(".green-box").show();


  $(".blue-box").toggle();
  $(".blue-box").hide(1000);
  $(".blue-box").show(1000);

  //lession 5: Sliding Elements Up and Down: slideUp là làm cho phần tử trượt lên r biến mất-> display:none; 
  //slideDown thì ngược lại và thay đổi thuộc tính display:none sẵn có của 1 phần tử về display: block

   $(".blue-box").slideUp(1000);
   $(".blue-box").slideDown(3000);

  //slideToggle: thanh trượt chuyển đổi : vd ở đây hộp blue đầu tiên sẽ slideUp(biến mất) và blue2 thì slideDown(xuất hiện)
    $(".blue-box").slideToggle(2000);

  $("p").hide();
  $("p").slideDown(1000);

  //lession 6: Moving element: Di chuyển xung quanh các phần tử trên trang
  // làm nó bằng cách thay đổi lề của các phần tử để nó nổi xung quanh
  // bên trong animate là 1 object
  // tham số thứ 2 là thời gian thực hiện
  // tham số thứ 3 là {Kiểu easing: Đây là kiểu tương tác giữa các khung hình của hiệu ứng chuyển động. jQuery cung cấp một số kiểu easing như "linear", "swing", "easeIn", "easeOut", và nhiều hơn nữa}
  // {Callback: Đây là một hàm được gọi sau khi hiệu ứng hoàn thành. Bạn có thể sử dụng callback để thực hiện các hành động bổ sung sau khi hiệu ứng kết thúc.}
  // kiểu easing "linear", hiệu ứng chuyển động sẽ diễn ra một cách đồng đều và không có sự thay đổi đáng kể về tốc độ trong quá trình di chuyển.
  // kiểu easing "swing", hiệu ứng chuyển động sẽ bắt đầu chậm, tăng tốc dần trong quá trình di chuyển và giảm tốc khi gần kết thúc. Điều này tạo ra một hiệu ứng chuyển động tự nhiên hơn và có cảm giác "nhuệch dụa" như một con lắc.
  // Với kiểu easing "easeIn", hiệu ứng chuyển động sẽ bắt đầu chậm, tăng tốc dần theo thời gian. Điều này tạo ra một hiệu ứng chuyển động từ chậm đến nhanh, thường được sử dụng để tạo cảm giác mượt mà và tăng tính tương tác của các hiệu ứng chuyển động.
  
  $(".blue-box").animate({
      "margin-left":"+=400px"
  },1000,"linear"); 
  $(".blue-box").animate({
        "margin-left":"-=400px"
    },1000,"linear"); 

//lession 7: Get Creative: Custome Animations !

  $(".blue-box").animate({
    "margin-left" :"200px",
    "opacity": "0",
    "height": "20px",
    "width": "20px",
    "margin-top":"40px"

  },1000);

// chỉnh sửa kích cỡ chữ trong thời gian 1s

  $("p").animate({
    "font-size":"20px",
      "font-weight": "bold",
      "font-style": "italic",
      "line-height": "1.5"
  },1000);

//lession 8: Delaying and Chaining Animations
// làm mờ dần red trước sau mới đến green r mới đến blue

  $(".red-box").fadeTo(1000,0.2);
  $(".green-box").delay(1000).fadeTo(1000,0.5);
  $(".blue-box").delay(2000).fadeTo(1000,0.7).fadeOut().delay(1000).fadeIn();

  //Lession 9: Timing Animations using callback function: sử dụng chức năng gọi lại
  // ví dụ làm mờ xuống 0
  // khi bạn truyền một hàm vào đây nó sẽ thực hiện ngay sau khi hoạt ảnh kết thúc
  // callback là tham số thực sự quan trọng và cũng là khái niệm rất quan trọng trong JavaScript-Jquery
 
  $(".red-box").fadeTo(1000,0,function(){
    $(".green-box").fadeTo(1000,0,function(){
      $(".blue-box").fadeTo(1000,0,function(){
           $(".red-box").fadeTo(1000,1,function(){
             $(".green-box").fadeTo(1000,1,function(){
               $(".blue-box").fadeTo(1000,1);
             });
           })
         })
      });
    })


  $(".red-box").slideUp(1000,function(){
    $(".green-box").slideUp(1000,function(){
      $(".blue-box").slideUp(1000,function(){
         $(".red-box").delay(2000).slideDown(2000,function(){
             $(".green-box").slideDown(1000,function(){
               $(".blue-box").slideDown(1000);
             });
           })
         })
      });
    })

  //Lession 10: Coding activity: Creating a Signup LightBox !
  $(".lightbox").delay(500).fadeIn(1000);


}); 