import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TypeDialogComponent } from '../type-dialog/type-dialog.component';
import { Router } from '@angular/router';
import { WorkflowService } from '../services/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html'
})

export class WorkflowComponent implements OnInit, OnDestroy {
  subs = new Subscription();

  selectFilter: string;

  components = [];

  controls = [
    {
      name: 'input',
      value: 'Input Box'
    },
    {
      name: 'select',
      value: 'Select Box'
    },
    {
      name: 'checkbox',
      value: 'Checkbox'
    },
    {
      name: 'radio',
      value: 'Radio Button'
    },
    {
      name: 'button',
      value: 'Button'
    }
  ];

  controls1 = [];

  constructor(private dragulaService: DragulaService, public dialog: MatDialog, private router: Router, private workFlowService: WorkflowService) {
    dragulaService.createGroup("formControls", {
      // accepts: this.acceptDragulaCallback,
      revertOnSpill: true,
      removeOnSpill: true
    });

    this.subs.add(dragulaService.dropModel("formControls")
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        let value = target.attributes["data-position"].nodeValue;
        if (value != 'original') {
          let controlType = el.attributes["data-controltype"].nodeValue;
          let index = this.controls.findIndex(x => x.name == controlType);
          let data = this.controls[index];
          this.controls.splice(index, 1);
          if (controlType != 'select') {
            const dialogRef = this.dialog.open(TypeDialogComponent, {
              maxHeight: '35%',
              width: '20%',
              hasBackdrop: true,
              direction: 'ltr',
              data: { controlType: controlType },
              disableClose: true,
              panelClass: 'custom-modal-container'
            });
            dialogRef.afterClosed().subscribe((response: any) => {
              if (!response.success) {
                this.controls.push(data);
              }
              else {
                if (response.controlType != 'checkbox' && response.controlType != 'radio') {
                  this.components.push({
                    Name: response.controlType,
                    Type: response.inputFilter,
                    Value: response.inputValueFilter
                  });
                }
                else {
                  this.components.push({
                    Name: response.controlType,
                    Label: response.inputValueFilter,
                    Value: ''
                  });
                }
              }
            })
          }
          else {
            this.components.push({
              Name: controlType,
              Value: ''
            });
          }
        }
      })
    );

    this.subs.add(dragulaService.removeModel("formControls")
      .subscribe(({ el, source, item, sourceModel }) => {
      })
    );
  }

  ngOnInit() {
  }

  buttonClick(type) {
    if (type == 'reset') {
      this.components.forEach(x => {
        x.Value = '';
      });
    }
  }

  goToPublish() {
    this.workFlowService.components = this.components;
    this.router.navigateByUrl('/publish');
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
    this.dragulaService.destroy("formControls");
  }
}
