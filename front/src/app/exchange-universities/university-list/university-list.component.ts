import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';
import { University } from '../../../models/University';
import { UniversityService } from '../../../services/university/university.service';

const OFFSET_FOOTER = 300;
const SCROLL_TIME = 500;

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityListComponent implements OnInit, OnDestroy {
  public universityList: University[] = [];
  public display: boolean;

  private scrollSub: Subscription = new Subscription();
  private search: string;
  private destination = null;
  private language = null;
  private department = null;
  private pageNumber = 0;

  constructor(private universityService: UniversityService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subToQueryEvent();
  }

  ngOnDestroy(): void {
    this.unsubScrollEvent();
  }


  private subToQueryEvent() {
    this.route.queryParams.subscribe(params => {
      this.unsubScrollEvent();
      this.pageNumber = 0;
      this.destination = params.destination;
      this.language = params.language;
      this.department = params.department;
      this.search = params.search;
      this.scrollToTop();
      this.universityService.getUniversities(this.pageNumber++, this.destination, this.language, this.department, this.search)
        .subscribe((list: University[]) => {
          this.universityList = list;
          this.display = true;
          this.isNoMoreElements(this.universityList);
        });
    });
  }

  updateUrlSearchTerms(writtenTerm: string) {
    if (writtenTerm.length > 0) {
      this.router.navigate(['/exchange-universities'], {
        queryParams: { search: writtenTerm },
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['/exchange-universities'], {
        queryParams: { search: null },
        queryParamsHandling: 'merge'
      });
    }
  }

  private updateScrollPosition(): void {
    if (document.body.offsetHeight + window.scrollY >= document.body.scrollHeight - OFFSET_FOOTER) {
      this.onBottomOfpage();
    }
  }

  private onBottomOfpage() {
    this.unsubScrollEvent();
    this.universityService.getUniversities(this.pageNumber++, this.destination, this.language, this.department, this.search)
      .subscribe((l) => {
        this.universityList = [...this.universityList, ...l];
        this.isNoMoreElements(l);
      });
  }

  private isNoMoreElements(l: University[]) {
    if (l.length < 15) {
      this.display = false;
    } else {
      this.subToScrollEvent();
    }
  }

  private subToScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(SCROLL_TIME))
      .subscribe(() => this.updateScrollPosition());
  }

  private unsubScrollEvent() {
    if (!this.scrollSub.closed) {
      this.scrollSub.unsubscribe();
    }
  }

  private scrollToTop() { window.scrollTo(0, 0); }

}
