import { Component, InputSignal, Signal, computed, effect, input } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { PageConfiguration, PageConfigurationContent } from '../pages.model';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    NzButtonModule,
    NzGridModule,
    NzIconModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

  pageConfig: InputSignal<PageConfiguration> = input.required();

  pageHeaderImage = computed(() => this.pageConfig().headerImage);
  pageTitle = computed(() => this.pageConfig().title);
  pageSubtitle = computed(() => this.pageConfig().subtitle);
  pageSubSubtitle = computed(() => this.pageConfig().subSubtitle);
  pageContent = computed(() => this.pageConfig().content);

  constructor() {
    effect(() => {
      const _ = this.pageConfig();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });
    })
  }

  getImageSpanSize(content: PageConfigurationContent, currentPath: string): number {
    const imagePaths = content.content;
    const totalImages = imagePaths.length;
    const isSingleImage = totalImages === 1;
    if (isSingleImage) {
      return 24;
    }
    const evenImagesNumber = totalImages % 2 === 0;
    if (evenImagesNumber) {
      return 12;
    }
    const currentImageIndex = imagePaths.indexOf(currentPath);
    return (currentImageIndex + 1) % 3 === 0 ? 24 : 12;
  }

}
