/**
 * @author ziwen zhao
 */
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { SimpleFormComponent, ComponentType, ButtonGroup } from '../../models/form-models';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleForm {

    private formGroup = this.fb.group({});
    private show = false;
    private submitted = false;
    private ComponentType = ComponentType;
    @Input() private form : SimpleFormComponent[] = [];
    @Input() private buttonGroup: ButtonGroup;
    @Output() private action = new EventEmitter();

    constructor(
        private fb: FormBuilder
    ) { 

    }

    ngOnChanges(changes){
        if(changes.form || changes.mode){
            this.show = false;
            this.form.forEach(component => {
                this.formGroup.addControl(component.controlName, new FormControl(component.value ? component.value : null, component.validators ? component.validators : []));
            });
            this.show = true;
        }
    }

}
