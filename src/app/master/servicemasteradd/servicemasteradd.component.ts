import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { ServiceMaster } from '../model/servicemaster';
import { ServicemasterComponent } from '../servicemaster/servicemaster.component';


@Component({
  selector: 'app-servicemasteradd',
  templateUrl: './servicemasteradd.component.html',
  styleUrls: ['./servicemasteradd.component.css']
})
export class ServicemasteraddComponent implements OnInit {
  @ViewChild(ServicemasterComponent) childReference: any;
  formgroup!: FormGroup;
  service: ServiceMaster = new ServiceMaster();
  name: any;
  statuses: any;
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(249 125 125)";
  save: any;
  savedata: boolean = true;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  sub!: any;
  ngOnInit(): void {
    debugger;
    this.sub = this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);
    });
    debugger;
    this.service.name = this.name;
    this.service.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      name: [this.service.name, [Validators.required]],
      status: [this.service.status, [Validators.required]]
    })
    debugger;
    console.log(this.formgroup.value)
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
  saveform(){

  }

  update(){
    
  }
}
