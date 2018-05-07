import { Component } from '@angular/core';
import { SimpleFormComponent, ButtonGroup, ComponentType, ButtonType, ButtonSize } from './models/form-models';
import { Validators } from '@angular/forms';
import { EmailValidator } from './utils/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private form: SimpleFormComponent[];
  private mode: string;
  private buttonGroup: ButtonGroup;
  private formValueData: string[] = [];
  private showFormValue = false;
  ngOnInit() {
    this.form = [
      {
        type: ComponentType.Text,
        label: 'Name',
        controlName: 'name',
        labelSpan: 7,
        controlSpan: 12,
        placeholder: 'Please enter your name',
        validators: Validators.required,
        errorMessage: {
          required: 'Name can not be empty!',
        }
      },
      {
        type: ComponentType.Text,
        label: 'Email',
        controlName: 'email',
        placeholder: 'Please enter your email!',
        validators: EmailValidator,
        errorMessage: {
          email: 'Email fomat is incorrect!',
        }
      },
      {
        type: ComponentType.Number,
        label: 'age',
        controlName: 'age',
      },
      {
        type: ComponentType.RadioGroup,
        label: 'sex',
        controlName: 'sex',
        options: [
          {
            value: 'male',
            label: 'male'
          },
          {
            value: 'female',
            label: 'female'
          },
        ]
      },
      {
        type: ComponentType.Rate,
        label: 'Rating',
        controlName: 'rating',
        allowHalf: true
      },
      {
        type: ComponentType.Select,
        label: 'Hobbies',
        controlName: 'hobbies',
        placeholder: 'Please choose your hobbies',
        options: [
          {
            value: 'Cooking',
            label: 'Cooking'
          },
          {
            value: 'Drawing',
            label: 'Drawing'
          },
          {
            value: 'Reading',
            label: 'Reading'
          },
          {
            value: 'Hiking',
            label: 'Hiking'
          },
          {
            value: 'Playing Music',
            label: 'Playing Music'
          }
        ],
        multiple: true
      },
      {
        type: ComponentType.Slider,
        label: 'Temprature',
        controlName: 'temprature',
        min: 0,
        max: 100,
        step: 1,
        marks:{
          0: '0°C',
          26: '26°C',
          37: '37°C',
          100: {
            style: {
              color: '#f50',
            },
            label: '<strong>100°C</strong>',
          }
        }
      },
      {
        type: ComponentType.Switch,
        label: 'Switch',
        controlName: 'switch',
      },
      {
        type: ComponentType.TimePicker,
        label: 'Alarm',
        controlName: 'Alarm',
        placeholder: 'Please set the alarm',
        format: 'HH:mm'
      },
      {
        type: ComponentType.Upload,
        label: 'file',
        controlName: 'file',
        placeholder: 'Click to upload',
        multiple: true
      },
      {
        type: ComponentType.TextArea,
        label: 'comments',
        controlName: 'comments',
        rows: 6
      },
    ];
    this.buttonGroup = {
      span: 20,
      offset: 10,
      buttons: [
        {
          text: 'Submit',
          type: ButtonType.Primary,
          size: ButtonSize.Large,
          handler: (formValue: any) => {
            this.showFormValue = false;
            this.formValueData = [];
            for (let key in formValue) {
              this.formValueData.push(key + ': '+ formValue[key]);
            }
            this.showFormValue = true;
          }
        },
        {
          text: 'cancel',
          size: ButtonSize.Large,
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    }
  }
  onClick(){
    this.showFormValue = false;
  }

}
