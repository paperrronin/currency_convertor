import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser"
import { currency, Currency } from 'src/app/core/models/currency.interface';
import { CurrencyService } from 'src/app/shared/services/currency.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
  public leftForm!: FormGroup;
  public rightForm!: FormGroup;
  public currencyList?:Currency[]
  public rightSelectedValue:Currency = {
    name:"USD",
    icon:"USDsvg",
    path:"../../../assets/images/flags/usd.svg",
  }
  public leftSelectedValue:Currency = {
  name:"UAH",
  icon:"UAHsvg",
  path:"../../../assets/images/flags/uah.svg",
  }

  customIcons: Array<[string, string]> = [
    ["UAHsvg", "../../../assets/images/flags/uah.svg"],
    ["USDsvg", "../../../assets/images/flags/usd.svg"],
    ["EURsvg", "../../../assets/images/flags/eur.svg"],
    ["CADsvg", "../../../assets/images/flags/cad.svg"],
    ["CHFsvg", "../../../assets/images/flags/chf.svg"],
    ["CZKsvg", "../../../assets/images/flags/czk.svg"],
    ["GBPsvg", "../../../assets/images/flags/gbp.svg"],
    ["JPYsvg", "../../../assets/images/flags/jpy.svg"],
    ["PLNsvg", "../../../assets/images/flags/pln.svg"]];

  constructor(private formBuilder: FormBuilder,
    private curService:CurrencyService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.customIcons.forEach(([iconName, iconPath]) => {
        matIconRegistry.addSvgIcon(
          iconName,
          domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
        )
      });
    }

  ngOnInit() {
    this.currencyList = currency
    this.leftForm = this.formBuilder.group({
      inputLeft: [],
      selectLeft:[this.leftSelectedValue]
    });

    this.rightForm = this.formBuilder.group({
      inputRight: [],
      selectRight:[this.rightSelectedValue]
    });

    this.leftForm.controls['selectLeft'].patchValue(this.currencyList.find(el => el.name == "UAH"))
    this.rightForm.controls['selectRight'].patchValue(this.currencyList.find(el => el.name == "USD"))

  }

  public compareFn(c1: Currency, c2: Currency): boolean {
    return c1 && c2? c1.name === c2.name : c1 === c2;
  }

  public swapCurrency(c1Name:Currency, c2Name:Currency, c1Amount:any, c2Amount:any){
    this.leftSelectedValue = c2Name
    this.rightSelectedValue = c1Name
    this.rightForm.controls['inputRight'].setValue(c1Amount)
    this.leftForm.controls['inputLeft'].setValue(c2Amount)
  }

  public changeLeftCur(data:Currency){
    this.curService.getCurrencyCourse(this.leftSelectedValue.name, this.rightSelectedValue.name, this.leftForm.controls['inputLeft'].getRawValue())
    .subscribe(res=>{
      this.rightForm.controls['inputRight'].setValue(res)
    })
  }

  public changeRightCur(data:Currency){
    this.curService.getCurrencyCourse(this.rightSelectedValue.name, this.leftSelectedValue.name,this.rightForm.controls['inputRight'].getRawValue())
    .subscribe(res=>{
      this.leftForm.controls['inputLeft'].setValue(res)
    })
  }

  public changeLeftInputValue(){
    this.curService.getCurrencyCourse(this.leftSelectedValue.name, this.rightSelectedValue.name, this.leftForm.controls['inputLeft'].getRawValue())
    .subscribe(res=>{
      this.rightForm.controls['inputRight'].setValue(res)
    })
  }

  public changeRightInputValue(){
    this.curService.getCurrencyCourse(this.rightSelectedValue.name, this.leftSelectedValue.name, this.rightForm.controls['inputRight'].getRawValue())
    .subscribe(res=>{
      this.leftForm.controls['inputLeft'].setValue(res)
    })
  }
}
