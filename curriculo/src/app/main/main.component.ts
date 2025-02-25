import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  items: {title: string; content: string; active?: boolean}[] = [
    {
      title: 'Item 1',
      content: 'Content 1',
    },
    {
      title: 'Item 2',
      content: 'Content 2',
    },
    {
      title: 'Item 3',
      content: 'Content 3',
    },
    {
      title: 'Item 4',
      content: 'Content 4',
    },
  ];

  ngOnInit(): void {}
  constructor(){}

  itemClicked(i: number){
    this.items = this.items.map((item) => {
      item.active = false;

      return item;
    });

    this.items[i].active = true;
  }
}
