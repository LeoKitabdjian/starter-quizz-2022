import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../models/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {

  @Input()
  question: Question | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  @Output()
  questionToDelete: EventEmitter<Question> = new EventEmitter<Question>();

  deleteQuestion() {
    this.questionToDelete.emit(this.question);
  }

}
