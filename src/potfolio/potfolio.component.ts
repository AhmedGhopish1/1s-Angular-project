import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface IItem{
  itemSrc:string;
}

@Component({
  selector: 'app-potfolio',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './potfolio.component.html',
  styleUrl: './potfolio.component.css'
})
export class PotfolioComponent {

  items:IItem[]=[
    {itemSrc:'../assets/images/portfolio/poert1.png'},
  ]

}
