
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Costsheet, Costsheetadd, Totaladd } from '../crmmodel/costsheet';

@Component({
  selector: 'app-costsheetadd',
  templateUrl: './costsheetadd.component.html',
  styleUrls: ['./costsheetadd.component.css']
})
export class CostsheetaddComponent implements OnInit {

  @ViewChild('name') nameElement!: ElementRef;

  formgroup!: FormGroup;

  costsheet: Costsheet = new Costsheet();


  name!: string;
  namesecondtable!: string;
  namethirddtable!: string;
  config = {
    uiColor: '#ffffff',
    toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    { name: 'links' }, { name: 'insert' },
    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
    { name: 'styles' },
    { name: 'colors' }],
    skin: 'kama',
    resize_enabled: false,
    removePlugins: 'elementspath,save,magicline',
    extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
    colorButton_foreStyle: {
      element: 'font',
      attributes: { 'color': '#(color)' }
    },
    height: 50,

    removeDialogTabs: 'image:advanced;link:advanced',
    removeButtons: 'Subscript,Superscript,Anchor,Source,Table',
    format_tags: 'p;h1;h2;h3;pre;div'
  }
  save: any;
  savedata: any;
  selectedRow!: number;
  checkboxes!: boolean[];

  id: number = 100;

  selection = new SelectionModel<Costsheetadd>(true, []);
  displayedColumns: string[] = ['check', 'phase', 'specification', 'manhours', 'amount', 'total']
  displayedColumns1: string[] = ['totaladd']

  costsheetadd: Costsheetadd[] = [
    { check: '', phase: 'good', specification: 'good', manhours: 'good', amount: 'good', total: '' }]
  data = Object.assign(this.costsheetadd);
  dataSource = new MatTableDataSource<Costsheetadd>(this.data);
  total: Totaladd[] = [
    { totaladd: '' }]
  data1 = Object.assign(this.total);
  dataSource1 = new MatTableDataSource<Totaladd>(this.data1);


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }

  ngOnInit(): void {
    this.costsheet = history.state[0];

    this.name;
    this.namesecondtable;
    this.namethirddtable;

    debugger;
    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }

    this.formgroup = this.fb.group({
      proposedfor: [this.costsheet.proposedfor],
      client: [this.costsheet.client],
      proposaldate: [this.costsheet.proposeddate],
      version: [this.costsheet.version],
      empname: [this.costsheet.empname],
      empemail: [this.costsheet.empemailid],
      emptele: [this.costsheet.emptele],
      scopestatement: [],
      bluebasesoftware: [],
      terms: [],

    })

    this.checkboxes = new Array(this.costsheetadd.length);
    this.checkboxes.fill(false);

  }
  add(): void {
    debugger;
    this.costsheetadd.push({ check: '', phase: '', specification: '', manhours: '', amount: '', total: '' });
    this.dataSource.data = this.costsheetadd;
  }
  phaseadd() {
    debugger;
    this.total.push({ totaladd:'' });
  //  this.dataSource1.data1 = this.total;

  }
  saveform() {

  }
  setClickedRow(index: number) {
    this.selectedRow = index;
  }
  toggleSelection(event: any, i: any) {
    debugger;
    this.checkboxes[i] = event.target.checked;

  }
  delete() {
    debugger;

    for (let i = this.checkboxes.length - 1; i >= 0; i--) {
      // If selected, then delete that row.
      if (this.checkboxes[i]) {
        this.costsheetadd.splice(i, 1);
      }
      this.checkboxes = this.checkboxes.filter(checkbox => checkbox === false);
    }
  }
  isAllSelected() {
    debugger;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    debugger;
    this.selection.selected.forEach(item => {
      debugger;
      let index: number = this.data.findIndex((d: Costsheetadd) => d === item);
      if (index === 0) {
        return;
      }
      console.log(this.data.findIndex((d: Costsheetadd) => d === item));
      this.dataSource.data.splice(index, 1);

      this.dataSource = new MatTableDataSource<Costsheetadd>(this.dataSource.data);
    });
    this.selection = new SelectionModel<Costsheetadd>(true, []);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    debugger;
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


}
