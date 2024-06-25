import { Component, Signal, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { map } from 'rxjs';

import { PageComponent } from './page/page.component';
import { PageConfiguration } from './pages.model';
import { PagesConfigurations } from './pages.config';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    PageComponent,
    NzButtonModule,
    NzGridModule,
    NzIconModule
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  pageConfig: Signal<PageConfiguration> = computed(() => PagesConfigurations[this.pageNumber() - 1]);

  pageNumber = toSignal(
    this.activatedRoute.paramMap.pipe(map(params => Number(params.get('pageNumber')))),
    { initialValue: 1 }
  );

  isFirstPage = computed(() => this.pageNumber() === 1);
  isLastPage = computed(() => this.pageNumber() === this.totalPagesLength);

  totalPagesLength = PagesConfigurations.length;

  onPreviousPageClick(): void {
    this.router.navigate([`../${this.pageNumber() - 1}`], { relativeTo: this.activatedRoute });
  }

  onNextPageClick(): void {
    this.router.navigate([`../${this.pageNumber() + 1}`], { relativeTo: this.activatedRoute });
  }

}
