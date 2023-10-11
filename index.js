let input=null;
let prevPlayer=null;

function addSymbol(e){
   
   const target=e.currentTarget;
   input=target.querySelector('p').innerText;
   console.log(input);
   if(input==='')
   {
   
     if(prevPlayer===null)
     {
        target.querySelector('p').innerText='X';
        prevPlayer='X';
     }
     else if(prevPlayer==='X')
     {
        target.querySelector('p').innerText='O';
        checkForWinner('O');
        checkDraw()
        prevPlayer='O';
     }
     else if(prevPlayer==='O')
     {
        target.querySelector('p').innerText='X';
        checkForWinner('X');
        checkDraw()
        prevPlayer='X';
     }
   }

}
function checkForWinner(player)
{
  const combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (const combination of combinations) {
    const [a, b, c] = combination;
    const valA = document.querySelector(`.box${a} p`).innerText;
    const valB = document.querySelector(`.box${b} p`).innerText;
    const valC = document.querySelector(`.box${c} p`).innerText;

    if (valA === player && valB === player && valC === player) {
        alert(`Team ${player} is a winner`);
        window.location.reload();
    }
  }

}

function checkDraw() {
  const boxes = document.querySelectorAll('.box p');
  for (const box of boxes) {
    if (box.innerText === '') {
      return false;
    }
  }
  return true;
  
}