import { Major } from 'src/models/Major';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../../../services/school/school.service';
import { UniversityService } from '../../../services/university/university.service';
import { Mail } from '../../../models/Mail';
import { Observable } from 'rxjs';
import { FormValidators } from './form.validators';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.4s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.2s', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class ContactFormComponent implements OnInit {

  public contactForm: FormGroup;
  public majors$: Observable<Major[]>;
  public messageLen = 0;
  public categoryList = ['- - -', 'Technique', 'Echange', 'autres'];
  public categorySwitch: string;
  public techniqueList = ['Lien brisé', 'Affichage', 'autres'];
  public echangeList = ['Université', 'Bourse', 'Santé', 'Mobilité', 'autres'];
  public active = false;

  constructor(public formBuilder: FormBuilder,
    public schoolService: SchoolService,
    public universityService: UniversityService) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(FormValidators.emailRx)]],
      emailConfirmation: ['', [Validators.required, Validators.pattern(FormValidators.emailRx)]],
      category: ['', [Validators.required]],
      major: ['', [Validators.required]],
      object: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    }, { validators: FormValidators.emailVerification });
    this.categorySwitch = this.categoryList[0];
  }

  ngOnInit() {
    this.majors$ = this.universityService.getMajors();
    this.message.valueChanges.subscribe(v => this.messageLen = v.length);
  }

  switchCat() {
    this.categorySwitch = this.category.value;
    this.object.setValue('');
  }

  sendMail() {
    let category = this.category.value;
    if (category === 'Echange') {
      category = category + '-' + this.major.value;
    }
    const mailToSend = <Mail>{
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      emailSender: '',
      emailReceiver: [],
      object: this.object.value,
      message: this.message.value
    };
    console.log(category);
    this.schoolService.getSupervisorEmailByCategory(category)
      .subscribe(ss => {
        mailToSend.emailReceiver = ss;
        mailToSend.emailSender = this.email.value;
        this.schoolService.sendEmail(mailToSend).subscribe( () => {
          this.active = true;
          setTimeout(() => {
            this.active = false;
          },600);
          });
      });
  }

  get category() { return this.contactForm.get('category'); }
  get major() { return this.contactForm.get('major'); }
  get email() { return this.contactForm.get('email'); }
  get emailConfirmation() { return this.contactForm.get('emailConfirmation'); }
  get firstName() { return this.contactForm.get('firstName'); }
  get lastName() { return this.contactForm.get('lastName'); }
  get object() { return this.contactForm.get('object'); }
  get message() { return this.contactForm.get('message'); }

}
