import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


quotes= [
  new Quote( 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.','Nelson Mandela', 'Claire', 0, 0, 0, new Date(2019,11,14)),
  new Quote( 'Everything you’ve ever wanted is on the other side of fear','George Addair', 'Pauline', 0, 0, 0, new Date(8,12,2018)),
  new Quote( 'All our dreams can come true, if we have the courage to pursue them','Walt Disney', 'Alice',  0, 0, 0, new Date(2018,11,11)),
  new Quote('Definiteness of purpose is the starting point of all achievement','W. Clement Stone', 'Alexiane',  0, 0, 0, new Date(12,2,1992)),
  new Quote('Too many of us are not living our dreams because we are living our fears','Les Brown','Claude',  0, 0, 0, new Date(2019,2,2)),
]

completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }
    
toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.postDate = new Date(quote.postDate)
  this.quotes.push(quote)

}
  constructor() { }

  ngOnInit() {
  }

}
