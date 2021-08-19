import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { QuestionMaster } from '../model/questionmaster';

@Component({
  selector: 'app-questionmasteradd',
  templateUrl: './questionmasteradd.component.html',
  styleUrls: ['./questionmasteradd.component.css']
})
export class QuestionmasteraddComponent implements OnInit {
  formgroup!: FormGroup;
  question: QuestionMaster = new QuestionMaster();
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(249 125 125)";
  name: any;
  statuses: any;
  save: any;
  savedata: boolean = true;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  sub!: any;
  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);
    });
    this.question.name = this.name;
    this.question.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      name: [this.question.name, [Validators.required]],
      status: [this.question.status, [Validators.required]]
    })
    debugger;
    console.log(this.formgroup.value)
    this.ontoggledefault();
    setTimeout(() => {
      this.nameElement.nativeElement.focus();
    }, 0);
  }
  onToggle(event: MatSlideToggleChange) {
    if (event.checked) {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else {
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }

  }
  ontoggledefault() {
    debugger;
    if (this.formgroup.value.status === "Active") {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else if (this.formgroup.value.status === "InActive") {
      this.formgroup.patchValue({
        status: false
      })
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }
  }
  saveform() {

  }

  update() {

  }
}
