$(function() {
    //Ajax
    // .load(): với chức năng này bạn có thể dễ dàng lấy bất kì loại tệp nào từ máy chủ của riêng mình chẳng hạn js, html

    //JSON
    // {
    //  key:value,
    //  key2:value
    // }
    // $.getJSON()

    // var flickerAPIUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // $.getJSON(flickerAPIUrl, {
    //     //option...
    //     tags : "sun,beach",
    //     tagmode: "any",
    //     format: "json"
    // }).done(function(data){
    //     //success
    //     console.log(data);
    //     $.each(data.items,function(index, item){
    //         console.log(item);
    //         $("<img>").attr("src",item.media.m).appendTo("#flickr")
    //         if(index ==4 ){
    //             return false;
    //         }
    //     })
    // }).fail(function(){
    //    alert("Ajax call failed.");
    // });




    //Coding activity: Truy xuất dữ lieuej Pokemon từ ThePOKE API(Or Star war)
    var pokeAPIUrl = "https://pokeapi.co/api/v2/generation/1";
    var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
    $.getJSON(pokeAPIUrl).done(function(data){
        console.log(data);
        $.each(data.pokemon_species,function(index, pokemon){
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            var link = $("<a>").attr("id",pokemon.name).attr("href","#").append($("<strong>").text(name));
            var par = $("<p>").html("pokemon_species no. "+(index+1)+ " is ").append(link);


            link.click(function(event){
                $.getJSON(pokemonByName + pokemon.name).done(function(details){
                    console.log(details);   
                     var pokemonDiv = $("#pokemon-details");
                     pokemonDiv.empty();
                     pokemonDiv.append("<h2>"+ name +"</h2>");
                     pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
                     pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
                     pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
                     pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");

                });
                event.preventDefault();
            });
            par.appendTo("#pokemon_species")
        });
    }).fail(function(){
        console.log("Request to Pokemon API Failed")
    }).always(function(){
        console.log("Pokemon is awesome.")
    });
 });


