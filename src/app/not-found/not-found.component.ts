import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  @Input() visible:boolean=false;
  @Input() notFoundMessage:string="nothing found!";
  @Input() resetLinkText:String="rest";
  @Input() resetLinkRoute:string="/";
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
