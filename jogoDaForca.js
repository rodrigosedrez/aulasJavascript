


    
    var words=["AVEIA","LEITE","CARNE","CARRO","CASA","PRATELEIRA","NOTEBOOK","CELULAR","QUARTO","LIVRO","COMPUTADOR","HEROI"]
    var numbWords = words.length-1
    
    
    // funnction for random word
    function rand(words){
        return(words[~~(words.length * Math.random())])
    }
    // function to use ramdom 
    function palavraSele(){
        const resspp1= rand(words)
        return resspp1
    }
    function spell(){
        const separa= palavraSele()
       const arrayWords= [...separa]
        return arrayWords
        }
    function btn(){
        const arrl=spell()
       var butt=document.getElementById("textinpu").value.toUpperCase();
           document.getElementById("word").textContent = butt
            return butt
           
    } 
    function palavraInicial(){
        const respp=soletra()
        var botta=btn()
        
        document.getElementById("line").textContent = "_".repeat(respp.length)
        //const letrer=document.getElementById("letra").textContent = respp.join("")
    }
    
    /*
    function jogo(){
        const letras1um=palavraInicial()
        const resspp11=soletra()
        const bottt= btn()
        var mLetra = document.getElementById("letra").value
        mLetra.replace(bottt,'<span style="color: yellow;">'+bottt+'</span>') 
    }*/

    function start(){
        palavraInicial()
        
        
        
    }
    
    window.addEventListener("load",start)


        //for(var i = 0; i<soletra.length; i++){
    //only change the one you want to

    
             
        //}
   
   
       // 
    //}
    
    
    /*
if(resspp11.indexOf(bottt)  != -1 ){

if(resspp11.indexOf(bottt) != -1){
        mLetra.element.innerHTML = element.innerHTML.replace(resspp11, '<span style="color: yellow;">'+resspp11[i]+'</span>');
    }

for(var i = 0; i<soletra.length; i++){
    //only change the one you want to
    if(resspp11.indexOf(bottt) == 4){
        element.innerHTML = element.innerHTML.replace(presspp11, '<span style="color: yellow;">'+bottt[i]+'</span>');
    }
}



    function forca(){
        //     
       palavraInicial()
        var respp= document.getElementById("word").textContent = 
    }
        O ARRAY LETRAS1 DEVE RECEBER A CONCATENAÇÃO DE CADA UMA DOS ARRAYS DE ARRAYLETRAS
    function entrada(){
        var lletra=
        var letr1=document.getElementById("text").innerText
        letr1.
        var result=txto.search(/aula/i)
        var result2=txto.replace(/curso/,"Rodrigo")

    }
*/
