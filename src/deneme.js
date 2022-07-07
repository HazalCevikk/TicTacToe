import React, { useState,} from 'react'

function Deneme() {
  // kutucuklara dinamik olarak değer atayabilmek için oluşturulan 9'lu boş bir array taşıyan state tanımı.
  const [cells, setCells] = useState(Array(9).fill(''));
  //kazananı belirlemek için oluşturulan state tanımı. 
  const [winner, setWinner] = useState('')

  //dinamik olarak li elemanı döndüren fonksiyon oluşturur.
  const Li = ({ num }) => {
    return <li onClick={() => handleClick(num)}>{cells[num]}</li>
  }

  const handleClick = (num) => {
    let squares = [...cells];
    if (cells[num] === '') {
      squares[num] = 'x';
    } else if (cells[num] === 'x') {
      squares[num] = 'o';
    } else {
      squares[num] = '';
    }

    checkForWinner(squares);
    setCells(squares);
    //eğer bir winner varsa oyunu herhangi bir kutucuğa tıklandığında sıfırlar.
    if(winner === 'x' || winner === 'o'){
      setWinner(null);
      setCells(Array(9).fill(''));
    }else{
      //do nothing
    }
  };

  // karşıdan karşıya, yukarıdan aşağıya ve çapraz olarak her bir kutucuğun eşitliğini kontol edip kazananı belirler.
  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((item) => {
         if (
          squares[item[0]] === '' ||
          squares[item[1]] === '' ||
          squares[item[2]] === ''
        ) {
          // do nothing
        } else if (
          squares[item[0]] === squares[item[1]] &&
          squares[item[1]] === squares[item[2]]
        ) {
          setWinner(squares[item[0]]);
        }
      });
    }
  };
 

  return (
    <div className='body-1'>
      <p>GAME TİME</p>
      <div className='container'>
        <Li num={0} />
        <Li num={1} />
        <Li num={2} />
        <Li num={3} />
        <Li num={4} />
        <Li num={5} />
        <Li num={6} />
        <Li num={7} />
        <Li num={8} />
      </div>        
    </div>
  )
}


export default Deneme;
