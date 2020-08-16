import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-type-dialog',
  templateUrl: './type-dialog.component.html'
})

export class TypeDialogComponent {
  controlType: string;
  inputFilter: string;
  inputValueFilter: string;

  constructor(public dialogRef: MatDialogRef<TypeDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any, public dialog: MatDialog) {
    this.controlType = this.data.controlType;
  }

  changeValue() {
    this.inputValueFilter = null;
  }

  saveControl() {
    this.dialogRef.close({ success: true, controlType: this.controlType, inputFilter: this.inputFilter, inputValueFilter: this.inputValueFilter });
  }

  closeDialog() {
    this.dialogRef.close({ success: false });
  }
}
