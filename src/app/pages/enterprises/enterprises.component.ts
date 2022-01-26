import { Component, OnInit } from '@angular/core';
import { Enterprise } from 'src/app/models/enterprise.model';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {

  public enterprise$: Enterprise[] = [];

  public constructor(
    private _enterpriseService: EnterpriseService
  ) { }

  public ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this._enterpriseService.getAll().subscribe((data: any): any => {
      this.enterprise$ = data;
    });
  }

  public delete(id: number): void {
    Swal.fire({
      title: 'Are you sure to delete this?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this._enterpriseService.delete(id).subscribe((): any => {
          Swal.fire(
            'Deleted!',
            'Your enterprise has been deleted.',
            'success'
          )
        });
      } else {
        Swal.fire(
          'Good choice!',
          'Your enterprise has not been deleted.',
          'info'
        )
      }
    })
  }

}
