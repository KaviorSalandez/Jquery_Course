$(function() {
  // link truy cập các loại event: https://api.jquery.com/category/events/
    $("#btn-click").click(function(){
        alert("Button was clicked.");
    });

    $("#btn-click").click(function(event){
        console.log(event);
        alert("Button was clicked.");
    });

    // nhấp chuột vào hộp màu đỏ trên trang nó sẽ mờ dần xuống 50%
    $(".red-box").click(function(){
        $(this).fadeTo(1000,0.5);
    })
   $(".red-box").click();



    // 2.Adding Hover Handlers: thêm sự kiện di chuột
    $("#btn-hover").hover(function(){
        alert("Button was hovered!");
    });

    bài tập: Khi hover vào hop xanh lá cây thì đổi text là I am CDK
    $(".green-box").hover(function(){
        $(this).text("I am CDK");
    });

    hover ko hiệu quả lắm khi muốn thay đổi khi chạm vào và trả về khi không chạm vào
    nên sẽ có những trình xử lí sự kiện hiệu quả hơn


    // bài tập: Hộp xanh lam sẽ giảm xuống 50% độ mờ khi di chuột vào và trả lại khi nhấp chuột ra
    // có thể dùng thêm hàm stop(). bạn luôn có thể dừng bất kì animation nào đang chạy để 
    //có thể thực hiện một số anima khác mà bạn muốn bắt đầu

    var blueBox = $(".blue-box");
    blueBox.mouseenter(function(){
        $(this).stop().fadeTo(400,0.5);
    });
     blueBox.mouseleave(function(){
        $(this).stop().fadeTo(400,1);
    });

     $(".green-box").mouseenter(function(){
        $(this).text("I am CDK");
     });
     $(".green-box").mouseleave(function(){
        $(this).text("Green");
     });

     // tuy nhiên cũng có thể dùng hover với biến thể khác để đạt được chức năng nhưu này
     // hover(handlerIn, handlerOut);
     var redBox = $(".red-box");
     redBox.hover(function(){
        $(this).stop().fadeTo(400,0.5);
     },function(){
        $(this).stop().fadeTo(400,1);
     });


    // 3.Adding the same handlers for multiple events: đính kèm cùng một trình xử lý cho nhiều sự kiện khác nhau
    // sử dụng hàm ủy quyền delegate
    // .on("click",function(){...});    
    // đây cũng là một cách khác để đạt được hiệu quả như trực tiếp gọi hàm click trực tiếp    
    $("html").on("click keydown",function(){
        console.log("Mouse was clicked or key was pressed");    
    });

      var galleryImage = $(".gallery").find("img").first();  
  var images = [
      "images/laptop-mobile_small.jpg",
      "images/laptop-on-table_small.jpg",
      "images/people-office-group-team_small.jpg",
  ];
    var i=0;
      $("html").on("click keydown",function(){
        i = (i+1)%images.length;
        galleryImage.fadeOut(function(){
            $(this).attr("src",images[i]).fadeIn();
        });
    });


   // cắt hàm ra để thành những hàm đinh nghĩa riêng biệt sử dụng cho những bài toán phức tạp
   // thói quen viết mã modun
   function logEvent(){
       console.log("Mouse was clicked or key was pressed");   
   }
   $("html").on("click keydown",logEvent);   
    var i=0;
    var galleryImage = $(".gallery").find("img").first();  
    var images = [
          "images/laptop-mobile_small.jpg",
          "images/laptop-on-table_small.jpg",
          "images/people-office-group-team_small.jpg",
      ];


    galleryImage.on("click",switchToNextImage);

    function switchToNextImage(e){
            i=(i+1) % images.length;
            galleryImage.fadeOut(function(){
                galleryImage.attr("src",images[i]).fadeIn();
            });
      }



    //Delegate Events
    // Issue: Bây giờ nếu gọi các hàm như click or on ,enter thì 
    // các trình xử lí sự kiện đó sẽ chỉ được gắn vào các phần tử đã có trên trang
    // vì vậy nếu ta thêm động các phần tử mới vào trang thông qua prepend or append, after, before....
    // thì những chức năng đó không có bất kì trình xử lí sự kiện nào


        $("p").click(function(){
            $(this).slideUp();
        });
        $("#content").append("<p>This is a dynamically added paragraph</p>");

        // kết quả là phần tử <p> mới thêm vào ko có sự kiện click mặc dù gắn cho mọi thẻ p
        // Bây giờ cách để giải quyết điều này là sử dụng cái gọi là sự kiện được ủy quyền, sự kiện được ủy quyền
        // Delegate Events
        // Bây giờ điều này có nghĩa là về cơ bản bạn xác định trình xử lí sự kiện của mình trên một phần tử cha
        // Phần tử này sẽ luôn ở trên trang
        // Và sau phần tử cha đó, một khi sự kiện đó được xảy ra
        // Sau đó sẽ ủy quyền sự kiện đó cho con hoặc cháu của nó

        $("#content").on("click","p",function(){
            $(this).slideUp();
        });
        $("#content").append("<p>This is a dynamically added paragraph</p>");


        $("body").on("mouseenter","li",function(){
                $(this).css("color","red")
        }); 
         $("body").on("mouseleave","li",function(){
                $(this).css("color","black")
        });     



    //Thêm thông tin bổ sung hoặc dữ liệu bổ sung vào một sự kiện
    // Bây giờ thay vì chỉ truyền vào được 1 tham số
    // chúng ta đã có thể truyền 1 đối tượng với bất kì thông tin bổ sung nào bạn muốn  
    // Và tham số thứ 2 ta có thể xác định trình xử lí sự kiện thực tế của mình
    $("#btn-click").click({
        user: "Kavior",
        age: "18",
        address: "Hà Nội"
    },function(event){
        console.log(event);
        greetUser(event.data);
    });


    function greetUser(userdata){
        console.log(userdata);
        username = userdata.user; //Anonymous
        address = userdata.address;
        alert("Welcome "+ username + " from "+address);
    }





    //Coding Activity: Creating an Image Gallery with LightBox Preview
    // tạo một thư viện hình ảnh với bản xem trước lightbox


    var galleryItems = $(".gallery").find("img");
    galleryItems.css("width","33%").css("opacity","0.7");
    galleryItems.mouseenter(function(){
        $(this).stop().fadeTo(500,1);
    });

    galleryItems.mouseleave(function(){
        $(this).stop().fadeTo(500,0.7);
    });
    galleryItems.click(function(){
        // lấy giá trị của thuộc tính src
        var source = $(this).attr("src");
        var imageShow = $("<img>").attr("src",source).css("width","100%");
        $(".lightbox").empty().append(imageShow).fadeIn(1000);
    });
    //khi click vào lightbox 1 lần nữa thì sẽ tắt
    $(".lightbox").click(function(){
        $(this).fadeOut();
    })



    // Keyup && Keydown: Xử lý các sự kiện bàn phím
    $("html").keydown(function(event){
        console.log(event);
        //cho biết phím nào được nhấn
        console.log(event.which);
    })

    var arrow_right = 39;
    var arrow_left  = 37;
    $("html").keydown(function(event){
        if(event.which === arrow_right){
            $(".blue-box").stop().animate({
            "margin-left":"+=200px" 
        },500);
        }
    })

    $("html").keydown(function(event){
        if(event.which === arrow_left){
            $(".blue-box").stop().animate({
                "margin-left" : "-=200px"
            },500);
        }
    });
});