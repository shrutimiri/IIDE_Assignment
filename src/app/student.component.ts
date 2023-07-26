import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentArr:any[] = [];
  student:any ={
    studentId : 0,
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  };
  isSelectAll:boolean = false;

constructor() {}

ngOnInit():void{
  
  const localData = localStorage.getItem('studentList');
  if(localData != null){
    this.studentArr = JSON.parse(localData);
  }
}

  onAddStudent(){
    const notNull = document.getElementById('studentModel');
    if(notNull != null){
      notNull.style.display = 'block';
    }
    this.student ={
      studentId : 0,
      fullName: '',
      mobile: '',
      email: '',
      address: ''
    };
  }

  onCheckAll(){
    for(let i=0; i<this.studentArr.length; i++){
      this.studentArr[i].isChecked = this.isSelectAll;
    }
  }

  onCloseModel(){
    const notNull = document.getElementById('studentModel');
    if(notNull != null){
      notNull.style.display = 'none';
    }
  }

  onDelete(id:number){
    for(let i=0; i< this.studentArr.length;i++){
      if(this.studentArr[i].studentId ==id){
        this.studentArr.splice(i,1);
      }
      
    }
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
  }

  onEdit(stud:any){
    this.student= stud;
  }

  onUpdate(){
    const record = this.studentArr.find(m => m.studentId == this.student.studentId);
    record.fullName = this.student.fullName;
    this.onCloseModel();
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    alert(" Record Updated!!")
  }

  saveStudent(data:any){
    this.student.studentId = this.studentArr.length +1 ;
    this.studentArr.push(this.student);
    this.onCloseModel();
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    this.student ={
      studentId : 0,
      fullName: '',
      mobile: '',
      email: '',
      address: ''
    };
  
  }

}
