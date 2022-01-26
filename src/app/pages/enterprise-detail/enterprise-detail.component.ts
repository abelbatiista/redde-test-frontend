import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../models/enterprise.model';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

  public enterprise: Enterprise | undefined;

  public constructor(
    private _enterpriseService: EnterpriseService,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.findById();
  }

  private findById(): void {
    this._activatedRoute.params.subscribe(({id}: any): any => {
      this._enterpriseService.findById(id).subscribe((data: any): any => {
        this.enterprise = data;
      })
    })
  }

}
