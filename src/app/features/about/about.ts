import { Component } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';

@Component({
  selector: 'app-about',
  imports: [PageBanner],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
