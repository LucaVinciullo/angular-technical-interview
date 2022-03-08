import { Component } from '@angular/core';

@Component({
  selector: 'app-primo-task',
  templateUrl: './primo-task.component.html'
})
export class PrimoTaskComponent {
task = `Implementare un'esempio del gioco Fizz Buzz

Mostrare nel template html i numeri da 1 a 100. Se il numero è divisibile per 3 sostituirlo con la parola "Fizz". Se il numero è divisibile per 5 sostituirlo con la parola "Buzz". I numeri divisibili sia per 3 che per 5 devono essere sostituiti dalle parole "Fizz Buzz".`
}
