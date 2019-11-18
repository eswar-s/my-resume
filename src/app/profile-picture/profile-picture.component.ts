import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myr-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}
