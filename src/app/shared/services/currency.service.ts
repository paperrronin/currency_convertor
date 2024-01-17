import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { largeTile, mobileTile } from 'src/app/core/models/tile.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(public http: HttpClient) { }

  public getHeaderCourse(): any {
    const $curUSD = this.http.get<any>(`${environment.apiUrlCurrency}latest?currencies=UAH`);
    const $curEUR = this.http.get<any>(`${environment.apiUrlCurrency}latest?base=EUR&currencies=UAH`);

    forkJoin([$curUSD, $curEUR]).subscribe(([usd, eur]) => {
      mobileTile[3].data = usd.rates['UAH'].toFixed(3)
      mobileTile[5].data = eur.rates['UAH'].toFixed(3)

      largeTile[3].data = usd.rates['UAH'].toFixed(3)
      largeTile[5].data = eur.rates['UAH'].toFixed(3)
    });
  }

  public getCurrencyCourse(c1:string, c2:string, amount:number):Observable<any>{
    let URL:string = `${environment.apiUrlCurrency}convert?from=` + c1 +'&to=' + c2 + '&amount=' + amount.toString()
    console.log(URL)
    return this.http
      .get<any>(URL)
      .pipe(map(res => {
        return res.result
      }))
  }
}
