import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  @Input() quote: Quote | any;
  @Output() isRead = new EventEmitter<boolean>();


  quoteDelete(read: boolean) {
    this.isRead.emit(read);
  }
  upvote() {
    this.quote.likes += 1;
  }
  downvote() {
    this.quote.dislikes += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}