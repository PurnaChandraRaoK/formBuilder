import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowComponent } from './workflow/workflow.component';

import { MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatIconModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from "ng2-dragula";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeDialogComponent } from './type-dialog/type-dialog.component';
import { ResultantWorkflowComponent } from './resultant-workflow/resultant-workflow.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    TypeDialogComponent,
    ResultantWorkflowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    DragulaModule,
    DragulaModule.forRoot()
  ],
  entryComponents: [TypeDialogComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
