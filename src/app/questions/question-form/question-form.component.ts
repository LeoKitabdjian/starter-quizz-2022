import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Question} from "../../../models/question.model";
import {QuestionService} from "../../../services/question.service";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent implements OnInit {

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public questionService: QuestionService) {
    // Form creation
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  ngOnInit() {
  }

  addAnswer() {
    this.answers.push(this.createAnswer());
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false
    });
  }

  addQuestion() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;

    // Do you need to log your object here in your class? Uncomment the code below
    // and open your console in your browser by pressing F12 and choose the tab "Console".
    // You will see your quiz object when you click on the create button.
    console.log('Add question: ', questionToCreate);
    this.questionService.addQuestion(questionToCreate);
    // Now, add your quiz in the list!
  }
}
