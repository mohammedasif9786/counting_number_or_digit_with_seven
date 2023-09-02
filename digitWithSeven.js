function countSeven(input){
    let message;
     if(Array.isArray(input)){
        outer: for(index of input){
            numToString =String(index)
             for(strItem of numToString){
                  numToStr = Number(strItem)
                   if(numToStr == 7 ){
                       message = "BOOOooooooMMMMmmmmmmm"
                       break outer
                   }
                   else{
                        message ="Oooopsss!!! can't find any number or digit with seven "
                       
                   }
                }
                }
     }
     else{
        console.log("Ooopsss!!! the Input given by you isnt in the form of Array")
     }
     console.log(message)
      }
  countSeven([1,2,97])
