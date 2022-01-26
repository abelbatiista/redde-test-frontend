import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise.model';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  public formSubmitted: boolean = false;
  public form: any | FormBuilder;
  public id: any | undefined;
  public enterprise: Enterprise | undefined;

  public constructor(
    private _enterpriseService: EnterpriseService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.getId();
    this.findById();
    this.initializeForm();
    this.fillForm();
  }

  private getId(): void {
    this._activatedRoute.params.subscribe(({id}: any): any => {
      this.id = id;
      this.findById();
    });
  }

  private findById(): void {
    if(this.id != 'new') {
      this._enterpriseService.findById(this.id).subscribe((data: any): any => {
        this.enterprise = data;
        this.fillForm();
      });
    }
  }

  private initializeForm(): void {
    this.form = this._formBuilder.group({
      id: ['', [  ]],
      rnc: ['', [ Validators.required ]],
      name: ['', [ Validators.required ]],
      comercial: ['', [ Validators.required ]],
      category: ['', [  ]],
      payment: ['', [ Validators.required ]],
      status: ['', [ Validators.required ]],
      activity: ['', [ Validators.required ]],
      branch: ['', [ Validators.required ]],
    });
  }

  private fillForm(): void {
    if(this.id != 'new') {
      this.form.get('id').setValue(this.id!);
      this.form.get('rnc').setValue(this.enterprise?.rnc);
      this.form.get('name').setValue(this.enterprise?.name);
      this.form.get('comercial').setValue(this.enterprise?.comercial);
      this.form.get('category').setValue(this.enterprise?.category);
      this.form.get('payment').setValue(this.enterprise?.payment);
      this.form.get('status').setValue(this.enterprise?.status);
      this.form.get('activity').setValue(this.enterprise?.activity);
      this.form.get('branch').setValue(this.enterprise?.branch);
    }
  }

  public invalidField(field: string): boolean {
    if(this.form.get(field).invalid && this.formSubmitted) {
      return true;
    }
    else {
      return false;
    }
  }

  private callSwal(icon: any, title: string, text: string): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    })
  }

  private insert(enterprise: Enterprise): void {
    this._enterpriseService.insert(enterprise).subscribe((data: any): any => {
      this.callSwal('success', 'Succesfully', 'Enterprise inserted!');
      this._router.navigate(['/pages', 'enterprises']);
    }, (error): any => {
      this.callSwal('error', 'Error!', error.error.message);
    });
  }

  private update(enterprise: Enterprise): void {
    this._enterpriseService.update(enterprise).subscribe((data: any): any => {
      this.callSwal('success', 'Succesfully', 'Enterprise updated!');
      this._router.navigate(['/pages', 'enterprises']);
    }, (error): any => {
      this.callSwal('error', 'Error!', error.error.message);
    });
  }

  public save(): void {
    this.formSubmitted = true;

    if(this.form.invalid) {
      return;
    }

    const {rnc, name, comercial, category, payment, status, activity, branch} = this.form.value;
    var enterprise: Enterprise = {rnc, name, comercial, category, payment, status, activity, branch};

    if(this.id === 'new') {
      this.insert(enterprise);
    } else {
      enterprise = {...enterprise, id: this.id}
      this.update(enterprise);
    }

  }

}
