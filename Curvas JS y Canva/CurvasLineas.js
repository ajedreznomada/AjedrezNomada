var d = document.getElementById("dibujito"); 
var lienzo = d.getContext("2d");
console.log(lienzo);

const randomColor = () => {
   let color = '#';
   for (let i = 0; i < 6; i++){
      const random = Math.random();
      const bit = (random * 16) | 0;
      color += (bit).toString(16);
   };
   return color;
};

var l=0;
var yi=0;
var xf=1;

for(l=0; l<300; l++)
{


    colorcito= randomColor();


    dibujando(colorcito,0,yi,xf,300);
    yi=yi+1;
    xf=xf+1;
}











function dibujando(colortrazo,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colortrazo;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
