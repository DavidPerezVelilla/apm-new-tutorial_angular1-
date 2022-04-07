import { Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";


@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class starComponent implements OnChanges{
   
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();
    
    ngOnChanges(): void {
       this.cropWidth = this.rating * 75/5;
    }
    @Input() name: string = "";
    onClick(): void{
       this.ratingClicked.emit(this.name+' tiene un rating de '+ this.rating +' estrellas')
    }
}