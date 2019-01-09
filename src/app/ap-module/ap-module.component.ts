import { Component, OnInit } from '@angular/core';
import { ModuleService } from '.././module.service'

@Component({
  selector: 'ap-module',
  templateUrl: './ap-module.component.html',
  styleUrls: ['./ap-module.component.css']
})
export class ApModuleComponent implements OnInit {

  service = new ModuleService()
  data = {}
  currentModuleId = 1
  currentModule = {}
  currentTaskId = 4
  currentTask = {}
  MODULE = 'Module'
  TASK = 'Task'
  QUESTION = 'Question'
  ANSWER = 'Answer'
  ARTICLES_DESC = 'Click and read the following articles and answer the question below'


  constructor() {
    this.service.getData().then(result => {
      this.data = result
      this.currentModule = result.testModules[this.currentModuleId]
      this.currentTask = result.testModules[this.currentModuleId].tasks[this.currentTaskId]
    })
  }

  ngOnInit() {
  }

}
