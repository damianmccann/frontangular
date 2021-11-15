import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontangular';

  public searchText: string = '';
  public entries: string[] = [];

  constructor(private hpptClient: HttpClient) {}

  public handleList(): void {
    this.hpptClient.get<any[]>('http://localhost:4000')
    .subscribe( data => {
      this.entries = data.map(x => Object.values(x).join(' - '))
    })
  }

  public handleSearch(): void {
    this.hpptClient.post<any[]>('http://localhost:4000/search', {
      text: this.searchText
    })
    .subscribe( data => {
      this.entries = data.map(x => Object.values(x).join(' - '))
    })
  }


}
