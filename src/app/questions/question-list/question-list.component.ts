import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {Question} from "../../../models/question.model";
import {QuestionService} from "../../../services/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {

  public questionList: Question[] = [];

  constructor(public questionService: QuestionService) {
    this.questionService.questions$.subscribe((questionList) => {
      this.questionList = questionList;
    });
  }

  ngOnInit() {
  }
}
