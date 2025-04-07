// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {NgForOf, NgIf} from "@angular/common";
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NgIf, NgForOf],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'tic-tac-toe';
//   player:string = ''
//   choice:boolean = true;
//   gameStarted: any;
//   board: any;
//   winning_pattern :any[] = []
//   x_chosen() {
//     this.player = 'X'
//     this.choice = false;
//     this.gameStarted = true ;
//     console.log("hello")
//   }
//   o_chosen() {
//     this.player = 'O'
//     this.choice = false;
//     this.gameStarted = true;
//     console.log("hello")
//   }
//
//
//   restart() {
//
//   }
//
//   handleMove(row: number, col: number) {
//
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentPlayer: string = 'O';
  array = Array(9).fill('');
  theWinner: string | null = '';
  draw : number = 0;
   combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  setPosition(pos:number) {
    if(!this.array[pos]) {
      this.array[pos] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer == 'O' ? 'X' : 'O';
      this.theWinner = this.checkWinner()
    }
  }

  checkWinner() {
    this.draw = 0
    console.log(this.array);
    for (const comb of this.combs) {
      let winnerO = 0
      let winnerX = 0
      for (const e of comb) {
        if (this.array[e] == 'O') {
          winnerO++
        }else if(this.array[e] == 'X') {
          winnerX++
        }
      }
      if (winnerO== 3 || winnerX == 3){
         return winnerO>winnerX ?  'winner is O' :  'winner is X'
      }
    }
    for (let i = 0; i < this.array.length; i++) {
      if(this.array[i] == 'O' || this.array[i] == 'X') {
        this.draw++
      }
    }
    if(this.draw == 9){
      this.theWinner = 'this is a draw'
      return this.theWinner
    }
    return null
  }

  reset() {
    this.array = Array(9).fill('');
    this.theWinner = null;
  }
}
