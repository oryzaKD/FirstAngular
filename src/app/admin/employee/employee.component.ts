import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: any;
  //koleksi data
  datas:any[];

  constructor(
    public dialog:MatDialog
  ) {

   }

  ngOnInit(): void {
    this.title='Data Employee';
    this.getDatas();
    
  }
  //Fungsi
  getDatas(){
    this.datas=[{
      name:'Andi',
      position:'HRD'
    },
    {
      name:'Budi',
      position:'Admin'
    },
    {
      name:'Cici',
      position:'Staff'
    }
  ];
  }

  employeeDetail(data,idx)
  {
    let dialog=this.dialog.open(EmployeeDetailComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if(idx==-1)this.datas.push(res);
        //jika tidak maka perbarui data
        else this.datas[idx]=res;
      }
    })
  }

  deleteEmployee(idx)
  {
    var conf=confirm('Delete item?');
    if(conf)
    this.datas.splice(idx,1);
  }

}
