import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(private _updateservice: UpdateService) {}

  ngOnInit() {}

  LoadData() {
    this._updateservice.getData().subscribe((res) => {
      console.log(res);
    });
  }
}
