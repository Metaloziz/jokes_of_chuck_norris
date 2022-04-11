export {}
// import React, {useState} from 'react';
// import './App.css';
//
//
// type Card = {
//   id: number
//   name: string,
//   order: number,
// }
//
// let cards: Card[] = [
//   {id: 1, order: 1, name: 'card 1'},
//   {id: 2, order: 2, name: 'card 2'},
//   {id: 3, order: 3, name: 'card 3'},
//   {id: 4, order: 4, name: 'card 4'},
// ]
//
//
// function App() {
//
//   const [arrCards, setArrCards] = useState<Card[]>(cards)
//   const [currentCard, setCurrentCard] = useState<Card>(cards[0])
//
//   const dragStartHandler = (event: React.DragEvent<HTMLDivElement>, card: Card) => {
//     console.log('drag start', card.name, event.currentTarget.id)
//     setCurrentCard(card)
//   };
//
//   function dragEndHandler(event: React.DragEvent<HTMLDivElement>) {
//     event.currentTarget.style.background = 'seagreen'
//   }
//
//   function dragOverHandler(event: React.DragEvent<HTMLDivElement>, card: Card) {
//     event.preventDefault()
//     event.currentTarget.style.background = 'gray'
//   }
//
//   function dropHandler(event: React.DragEvent<HTMLDivElement>, card: Card) {
//     event.preventDefault()
//     event.currentTarget.style.background = 'seagreen'
//     console.log('drag dropHandler', card.name)
//
//     setArrCards(arrCards.map((value) => {
//       if (value.id === card.id) {
//         return {...value, order: currentCard.order}
//       }
//       if (value.id === currentCard.id) {
//         return {...value, order: card.order}
//       }
//       return value
//     }))
//   }
//
//   const mySort = (a: Card, b: Card) => {
//     if (a.order > b.order) {
//       return 1
//     } else {
//       return -1
//     }
//
//   }
//
//
//   return (
//     <div className="App">
//       {arrCards.sort(mySort).map((card) => {
//         return <div
//           id={card.id.toString()}
//           key={card.id}
//           className={'card'}
//           draggable={true}
//           onDragStart={event => dragStartHandler(event, card)} // когда взяли
//           onDragLeave={event => dragEndHandler(event)} // вышли за пределы другой карточки
//           onDragEnd={event => dragEndHandler(event)} // отпустили перемещение
//           onDragOver={event => dragOverHandler(event, card)} // находимся над другим объектом
//           onDrop={event => dropHandler(event, card)} // отпустили карту и ждём действия
//         >
//           {card.name}
//         </div>
//       })}
//     </div>
//   );
// }
//
// export default App;
