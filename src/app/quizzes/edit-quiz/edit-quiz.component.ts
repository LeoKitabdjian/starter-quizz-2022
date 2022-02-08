import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})

export class EditQuizComponent implements OnInit {

  quiz: Quiz | undefined;

  constructor(public quizService: QuizService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.quizService.getQuiz(id).subscribe(q => this.quiz = q);
  }
}
