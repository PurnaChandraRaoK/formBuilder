import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { ResultantWorkflowComponent } from './resultant-workflow/resultant-workflow.component';

const routes: Routes = [
  {
    path: "",
    component: WorkflowComponent,
    data: { title: 'Workflow' }
  },
  {
    path: "publish",
    component: ResultantWorkflowComponent,
    data: { title: 'Publish' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
