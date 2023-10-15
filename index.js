// bol saache darbaar ki jay 
function player(name){
  let player1chance = true;
  
  const row = 3;
    const col = 3;  

    let matrix = [];
  
    
      for(let i = 0; i < row; i++) {
          matrix[i] = [];
      for(let j = 0; j < col; j++) {
           matrix[i][j] = 0; 
      }
    }     
    return {name,matrix,player1chance};
  
  
}
function gameBoard(matrix){         
  let row =3;
  let col = 3;
  
 
  let chkwin = function(){          
    for(let i=0;i<row;i++){

      if(matrix[i][0]==1 && matrix[i][1]==1 && matrix[i][2]==1){
        return true;
      } 
    }
    for(let i=0;i<col;i++){

      if(matrix[0][i]==1 && matrix[1][i]==1 && matrix[2][i]==1){
        return true;
      } 
    }
    if(matrix[0][2]===1 && matrix[1][1]===1 && matrix[2][0]===1){
      return true;
    }
    if(matrix[0][0]===1 && matrix[1][1]===1 && matrix[2][2]===1){
      return true;
    }
    return false;
  }
  let isFull = function(){
    for(let i=0;i<row;i++){
      for(let j=0;j<col;j++){
        if(matrix[i][j]===0){
          return 0;
        }
      }
    }
    return 1;
  }
  return {chkwin,isFull}
}   
let board = gameBoard()

let player1 = player("Arihant");

let player2 = player("Anuj"); 
let player3  = player("inspect");   // khatarnak          
player2.player1chance = false;      // okay it is done so that its           
let play_1 = document.getElementById("play1")
let play_2 = document.getElementById("play2")
let wonwho = document.getElementById("won")
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const element = document.getElementById(`${i}${j}`);
    element.addEventListener("click",function(){
     
      if(gameBoard(player1.matrix).chkwin()===true){
        

    }
    else if(gameBoard(player2.matrix).chkwin()===true){
      
  }
  else if(gameBoard(player3.matrix).isFull()===1 && gameBoard(player1.matrix).chkwin()===false && gameBoard(player2.matrix).chkwin()===false){
    wonwho.innerHTML = "ITS A TIE";
  }
  else{
    if(player3.matrix[i][j]===0){
      console.log(i);
      console.log(j);
      displayBoard(element,i,j)  
    }
  
  }
      
    })
  }
} 
play_1.style.color = "yellow"
play_2.style.color = "white"  
function displayBoard(element,i,j){

      player3.matrix[i][j]=1;
      if(player1.player1chance){
          play_1.style.color = "white";
          play_2.style.color = "yellow";  
        element.innerHTML = 'X';
       player1.matrix[i][j]=1;
        
       if(gameBoard(player1.matrix).chkwin()===true){
        wonwho.innerHTML = "PLAYER 1 WON";

    }
      
        console.log( player1.player1chance);
        player1.player1chance = false;
        player2.player1chance = true;
        console.log( player1.player1chance);
        console.log( player2.player1chance);
        
      }
      else if(player2.player1chance){
        play_2.style.color = "white";
        play_1.style.color = "yellow";
        element.innerHTML = 'O';
        player2.matrix[i][j]=1;
        if(gameBoard(player2.matrix).chkwin()===true){
          wonwho.innerHTML = "PLAYER 2 WON";
      }
      
        player2.player1chance = false;
        player1.player1chance = true;
        
      }  
    if(gameBoard(player3.matrix).isFull()===1 && gameBoard(player1.matrix).chkwin()===false && gameBoard(player2.matrix).chkwin()===false){
        wonwho.innerHTML = "ITS A TIE";
      }
      


}


