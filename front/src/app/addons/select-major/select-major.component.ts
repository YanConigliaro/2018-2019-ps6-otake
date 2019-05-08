import { Major } from './../../../models/Major';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UniversityService } from 'src/services/university/university.service';

@Component({
  selector: 'app-select-major',
  templateUrl: './select-major.component.html',
  styleUrls: ['./select-major.component.scss']
})
export class SelectMajorComponent implements OnInit {

  public major$: Observable<Major[]>;
  public selectedMajor: Major = { id: -1, title: '', };

  constructor(private router: Router,
    private universityService: UniversityService) { }

  ngOnInit() {
    this.major$ = this.universityService.getMajors();
  }

  select(m: Major) {
    this.selectedMajor = m;
  }

  go() {
    this.closePopup().then(() => this.router.navigate(['/school', this.selectedMajor.shorthand]));
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    return this.router.navigate([{ outlets: { addon: null } }]);
  }

}
