import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _CategoryService: CategoryService) { }
  categoryList: any[] = []
  subCategoryList: any[] =[]
  filteredList:any[]=[]
  name:string=''
  subFlag:boolean =false
  ngOnInit(): void {
    this.getcategories()
  }
  getcategories() {
    this._CategoryService.getAllCategories().subscribe({
      next: (res: any) => {
        this.categoryList = res.data
        console.log(res.data);    
      }
    })
  }
  getSubcategory(){
    this._CategoryService.getSpecificSubCategory().subscribe({
      next:(res:any)=>{
        this.subCategoryList=res.data
        console.log(this.subCategoryList);
      }
    })
  }
  getSubcategory1(id:string,name:string){
    this.name=name;
    this._CategoryService.getSpecificCategory1(id).subscribe({
      next:(res:any)=>{
        this.subCategoryList=res.data
        console.log(this.subCategoryList);
      }
    })
  }
  filterSubCategory(id:string){
    // this.subFlag=true;
    this.filteredList= this.subCategoryList.filter((i)=>i.category==id)
  }
}
