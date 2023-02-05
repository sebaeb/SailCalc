import { Component, Input, SimpleChanges } from '@angular/core';
import { BeschickungResult } from '../beschickung-result';

@Component({
  selector: 'app-beschickung',
  templateUrl: './beschickung.component.svg',
  styleUrls: ['./beschickung.component.css']
})
export class BeschickungComponent {

  _xOrigin = 0;
  _yOrigin = 0;
  _height= 400;

  _viewBox = "-50 -50 100 100";

  @Input() besResult: BeschickungResult | undefined;


  ngOnChanges(changes: SimpleChanges) {

    if (this.besResult?.schnittPunkt && this.besResult?.stromPunkt) {

      this._xOrigin = Math.min(this.besResult.schnittPunkt.x, this.besResult.stromPunkt.x, 0) - 0.2;

      this.besResult.stromPunkt.y = this.besResult.stromPunkt.y * -1;
      this.besResult.schnittPunkt.y = this.besResult.schnittPunkt.y * -1;

      this._yOrigin = Math.min(this.besResult.schnittPunkt.y, this.besResult.stromPunkt.y, 0) - 0.2;

      let width = Math.abs(Math.max(this._xOrigin, this.besResult.schnittPunkt.x, this.besResult.stromPunkt.x)) + Math.abs(Math.min(this._xOrigin, this.besResult.schnittPunkt.x, this.besResult.stromPunkt.x)) ;
      this._height = Math.abs(Math.max(this._yOrigin, this.besResult.schnittPunkt.y, this.besResult.stromPunkt.y)) + Math.abs(Math.min(this._yOrigin, this.besResult.schnittPunkt.y, this.besResult.stromPunkt.y));

      //scale
      let factor = 400 / Math.max(width, this._height);
      
      console.info(factor);

      this.besResult.stromPunkt.x = this.besResult.stromPunkt.x * factor;
      this.besResult.schnittPunkt.x = this.besResult.schnittPunkt.x * factor;
      this.besResult.stromPunkt.y = this.besResult.stromPunkt.y * factor;
      this.besResult.schnittPunkt.y = this.besResult.schnittPunkt.y * factor;

      this._xOrigin = this._xOrigin * factor;
      this._yOrigin = this._yOrigin * factor;

      width = width * factor+20;
      this._height = this._height * factor+20;

      this._viewBox = `${this._xOrigin} ${this._yOrigin} ${width} ${this._height}`

    }



  }


}
