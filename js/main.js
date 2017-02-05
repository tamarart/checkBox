    var cheap = document.querySelector("#cheap");
    var good = document.querySelector("#good");
    var fast = document.querySelector("#fast");

    good.addEventListener("change", function(){
      if (fast.checked) cheap.checked =false;
      }
    );

    fast.addEventListener("change", function(){
      if (cheap.checked) good.checked =false;
      }
    );

    cheap.addEventListener("change", function(){
      if (good.checked) fast.checked =false;
      }
    );

