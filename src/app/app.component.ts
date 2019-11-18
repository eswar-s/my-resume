import { Component, ChangeDetectionStrategy, OnInit, HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@Component({
  selector: 'myr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  /* @ViewChild('topProfilePicture', {static: false}) topProfilePicture: ElementRef;
  @ViewChild('bottomProfilePicture', {static: false}) bottomProfilePicture: ElementRef; */

  theme = 'dark';

  bottomPosition: number = -150;

  private readonly formatKey = (val: string, padding) => val.padEnd(padding, ' ').replace(/\s/g, '&nbsp;').concat(':&nbsp;');
  
  experience = this.getExperience(new Date(1340582400000));
  
  currentSkills = [
    { key: this.formatKey('ServerSide', 11), value: 'Java, Spring Boot, Apache Camel' },
    { key: this.formatKey('FrontEnd', 12), value: 'Angular, TypeScript, SCSS, NgRx' },
    { key: this.formatKey('Database', 11), value: 'ElasticSearch, MySQL' },
    { key: this.formatKey('Others', 14), value: 'AWS, Jenkins, ActiveMQ' },
  ];

  contactInfo = [
    { key: this.formatKey('Email', 12), value: 'href2eswar@gmail.com' },
    { key: this.formatKey('Mobile', 11), value: '+1 (737) 708 - 7688' },
    { key: this.formatKey('Location', 10), value: 'Los Angeles, USA' }
  ];

  /* externalLinks = [
    { key: 'LinkedIn', value: 'http://linkedin.com/in/eswar-s', icon: 'linkedin' },
    { key: 'Stack Overflow', value: 'https://stackexchange.com/users/6147710/eswar', icon: 'stackoverflow' },
    { key: 'GitHub', value: 'https://github.com/eswar-s', icon: 'github' },
  ]; */

  personalInfo = [
    { key: this.formatKey('Date of Birth', 18), value: '15 July 1991' },
    { key: this.formatKey('Gender', 20), value: 'Male' },
    { key: this.formatKey('Marital Status', 17), value: 'Married' },
    { key: this.formatKey('Nationality', 19), value: 'Indian' }
  ];

  /* @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.topProfilePicture) {
      const y = this.topProfilePicture.nativeElement.getBoundingClientRect().y;
      if (y < 0) {
        const computed = - (150 + y);
        this.bottomPosition = computed <= 0 ? computed : 0;
        console.log(this.bottomPosition);
        //this.bottomProfilePicture.nativeElement.style.bottom = computed <= 0 ? computed : 0;
      } else {
        this.bottomPosition = -150;
      }
      this.ref.markForCheck();
    }
  } */

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
    
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark': 'light';
  }

  private getExperience(joiningDate) {
    const now = new Date();
    let months = (now.getFullYear() - joiningDate.getFullYear()) * 12;
    months -= joiningDate.getMonth() + 1;
    months += now.getMonth();
    const years = (months / 12).toFixed(0);
    months = months % 12;
    if (months) {
      return `${years} years and ${months} months`;
    } else {
      return `${years} years`;
    }
  }

}
