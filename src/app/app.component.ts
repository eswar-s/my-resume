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
  
  experience = this.getExperience(new Date(1340582400000));
  
  currentSkills = [
    { key: 'ServerSide', value: 'Java, Spring Boot, Apache Camel' },
    { key: 'FrontEnd', value: 'Angular, TypeScript, SCSS, NgRx' },
    { key: 'Database', value: 'ElasticSearch, MySQL' },
    { key: 'Others', value: 'AWS, Jenkins, ActiveMQ' },
  ];

  contactInfo = [
    { key: 'Email', value: 'href2eswar@gmail.com' },
    { key: 'Mobile', value: '+1 (737) 708 - 7688' },
    { key: 'Location', value: 'Los Angeles, USA' }
  ];

  /* externalLinks = [
    { key: 'LinkedIn', value: 'http://linkedin.com/in/eswar-s', icon: 'linkedin' },
    { key: 'Stack Overflow', value: 'https://stackexchange.com/users/6147710/eswar', icon: 'stackoverflow' },
    { key: 'GitHub', value: 'https://github.com/eswar-s', icon: 'github' },
  ]; */

  personalInfo = [
    { key: 'Date of Birth', value: '15 July 1991' },
    { key: 'Gender', value: 'Male' },
    { key: 'Marital Status', value: 'Married' },
    { key: 'Nationality', value: 'Indian' }
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
