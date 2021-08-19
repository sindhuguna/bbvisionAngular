import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { ProductMasterView } from '../model/productmaster';
import { ProductmasterService } from '../service/productmaster.service';

@Component({
  selector: 'app-productmasteradd',
  templateUrl: './productmasteradd.component.html',
  styleUrls: ['./productmasteradd.component.css']
})
export class ProductmasteraddComponent implements OnInit {
  formgroup!: FormGroup;
  product: ProductMasterView = new ProductMasterView();
  name: any;
  statuses: any;
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(153 153 153)";
  save: any;
  savedata: boolean = true;

  constructor(private router: Router, private fb: FormBuilder, private service: ProductmasterService, private commonservice: CommonService) { }

  ngOnInit(): void {
    this.product = history.state[0];

    if (this.product.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      name: [this.product.name, [Validators.required]],
      status: [this.product.status, [Validators.required]]
    })
    this.ontoggledefault();
    setTimeout(() => {
      this.nameElement.nativeElement.focus();
    }, 0);
  }
  ontoggledefault() {
    debugger;
    if (this.formgroup.value.status === "true") {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else if (this.formgroup.value.status === "false") {
      this.formgroup.patchValue({
        status: false
      })
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }
  }
  onToggle(event: MatSlideToggleChange) {
    debugger;
    if (event.checked) {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else {
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }

  }
  saveform() {
    if (this.formgroup) {
      this.product.name = this.formgroup.value.name;
      this.product.status = this.formgroup.value.status;
      debugger;
      const save = JSON.stringify(this.product);
      this.service.save(save).then(data => {
        debugger;
        if (data.result[0].status === true) {
          this.commonservice.message("Designation Master Insert", data.result[0].message, "info");
          this.router.navigate(['../productmaster']);
        } else {
          this.commonservice.message("Designation Master Insert", data.result[0].message, "error");
        }
      }, err => {
        this.commonservice.message("Error", err, "error");
      });
    } else {
      this.commonservice.message("Warning", "Form Invalid", "warn");
    }
  }

  update() {
    if (this.formgroup) {
      this.product.name = this.formgroup.value.name;
      this.product.status = this.formgroup.value.status;
      debugger;
      const save = JSON.stringify(this.product);
      this.service.update(save).then(data => {
        debugger;
        if (data.result[0].status === true) {
          this.commonservice.message("Designation Master Update", data.result[0].message, "info");
          this.router.navigate(['../productmaster']);
        } else {
          this.commonservice.message("Designation Master Update", data.result[0].message, "error");
        }
      }, err => {
        this.commonservice.message("Error", err, "error");
      });
    } else {
      this.commonservice.message("Warning", "Form Invalid", "warn");
    }
  }

}
