import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Question} from "../models/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private questions: Question[] = [];

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject([] as Question[]);

  constructor() {
  }

  addQuestion(question: Question) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-
    this.questions.push(question);
    this.questions$.next(this.questions);
    console.log(this.questions);
  }

  deleteQuestion(question: Question) {
    this.questions.splice(this.questions.indexOf(question),1);
    this.questions$.next(this.questions);
  }
}
