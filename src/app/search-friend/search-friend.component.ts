import { Component } from '@angular/core';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css']
})
export class SearchFriendComponent {
  Name=""

readValues=()=>
{
  let data: any = {
    Name:this.Name
  }
  console.log(data)
}

}
