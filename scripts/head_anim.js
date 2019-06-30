function start()
{
    var w=window.innerWidth;
    var h=window.innerHeight;
    console.log(w);
    console.log(h);
    document.getElementById("head-div1").style.width=w+"px";
    document.getElementById("head-div1").style.height=0.7*h+"px";

    document.getElementById("img-floater-1").style.top="0px";
    document.getElementById("img-floater-1").style.left="0px";
    document.getElementById("img-floater-2").style.top=0.3*h+"px";
    document.getElementById("img-floater-2").style.left=0.5*w+"px";
    document.getElementById("img-floater-3").style.top=0.5*h+"px";
    document.getElementById("img-floater-3").style.left=0.5*w+"px";

    startAnimation(document.getElementById("img-floater-1"),"d","r");                              //These function call start the translational and vertical animation.
    startAnimation(document.getElementById("img-floater-2"),"u","r");                              //Rotation is obtained using CSS elements.
    startAnimation(document.getElementById("img-floater-3"),"u","l");

    function startAnimation(elem, flag1,flag2){
      var int =setInterval(animate_img,5);

        function animate_img(){
        
        var w=window.innerWidth;
        var h=window.innerHeight;

        if(w<600)
          document.getElementById("img-floater-3").style.display="none";
        else
          document.getElementById("img-floater-3").style.display="block";

        style = window.getComputedStyle(elem);
        var pos_top = style.getPropertyValue('top');
        var pos_left= style.getPropertyValue('left');
        var wid=style.getPropertyValue('width');
        var hei=style.getPropertyValue('height');

        pos_top=pos_top.substring(0,pos_top.length-2);
        pos_left=pos_left.substring(0,pos_left.length-2);
        wid=wid.substring(0,wid.length-2);
        hei=hei.substring(0,wid.length-2);

        pos_top=Number(pos_top);
        pos_left=Number(pos_left);
        wid=Number(wid);
        hei=Number(hei);

          if(flag1=='d'){
              if(pos_top+1<(h*0.4-hei))
                pos_top=pos_top+1;
              else{
                flag1='u';
                return;
                }
              }

          if(flag1=='u'){
              if(pos_top-1>=0)
                pos_top=pos_top-1;
                else{
                  flag1='d';
                  return;
                }
          }

          if(flag2=='r'){
              if(pos_left+1<w-wid)
                pos_left=pos_left+1;
              else{
                flag2='l';
                return;
              }
            }
          if(flag2=='l'){
            if(pos_left-1>=0)
               pos_left=pos_left-1;
            else{
              flag2='r';
              return ;
            }
          }

        elem.style.top = pos_top + "px"; 
        elem.style.left = pos_left + "px"; 
        }
    }
}
window.onload=start;