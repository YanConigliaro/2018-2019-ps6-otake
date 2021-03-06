import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { enumSelector } from 'src/app/utility/utilitary-functions';
import { Section } from 'src/models/Section';
import { UniversityDetails } from 'src/models/UniversityDetails';
import { UNIVERSITY_SECTIONS, UNIVERSITY_SECTION_ICONS } from './UniversitySections.enum';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  public university: UniversityDetails;
  public universitySections: Section[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.university = this.route.snapshot.data.university;
    this.fillSectionContent();
  }

  fillSectionContent() {
    enumSelector(UNIVERSITY_SECTIONS).forEach(obj => {
      this.universitySections.push(<Section>{ id: obj.title, name: obj.value, icon: UNIVERSITY_SECTION_ICONS[obj.title] });
    });
  }

}
