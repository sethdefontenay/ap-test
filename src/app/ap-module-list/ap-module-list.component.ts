import { Component, OnInit } from '@angular/core';
import { ModuleService } from '.././module.service'

@Component({
  selector: 'ap-module-list',
  templateUrl: './ap-module-list.component.html',
  styleUrls: ['./ap-module-list.component.css']
})
export class ApModuleListComponent implements OnInit {

  service = new ModuleService()
  data = {}
  currentModuleId = 1
  currentModule = {}
  currentTaskId = 4
  currentTask = {}
  allTasks = []
  MODULE = 'Module'
  TASK = 'Task'

  constructor() {
    this.service.getData().then(result => {
      this.data = result
      this.currentModule = result.testModules[this.currentModuleId]
      this.allTasks = Object.keys(result.testModules[this.currentModuleId].tasks)
      this.currentTask = result.testModules[this.currentModuleId].tasks[this.currentTaskId]
    })
  }

  ngOnInit() {
  }

}
