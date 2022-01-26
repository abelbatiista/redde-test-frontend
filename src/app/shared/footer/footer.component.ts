import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public name: string = 'ABel Batista Rodríguez';
  public github: string = 'https://github.com/abelbatiista';
  public date: Date = new Date();

  public constructor() { }

  public ngOnInit(): void {
  }

}
