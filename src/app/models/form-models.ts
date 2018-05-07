/**
 * @author Ziwen Zhao
 */
import { ValidatorFn } from "@angular/forms";

export class SimpleFormComponent {
    type: ComponentType;
    label: string;
    controlName: string;
    labelSpan?: number;
    controlSpan?: number;
    placeholder?: string;
    value?: any;
    validators?: ValidatorFn | ValidatorFn[];
    options?: Option[];
    rows?: number;
    multiple?: boolean;
    allowHalf?: boolean;
    min?: number;
    max?: number;
    step?: number;
    marks?: any;
    format?: string;
    errorMessage?: ErrorMessage;
}

export class Option {
    value: string | number;
    label: string;
}

export class ButtonGroup {
    span?: number;
    offset?: number;
    buttons: Button[];
}
export class Button {
    text: string;
    type?: ButtonType;
    size?: ButtonSize;
    handler?: FormButtonHandler;
}

export class ErrorMessage {
    required?: string;
    mobilephone?: string;
    email?: string;
}

export enum ComponentType {
    Text,
    TextArea,
    Number,
    RadioGroup,
    Rate,
    Select,
    Slider,
    Switch,
    DatePicker,
    TimePicker,
    Upload
}

export enum ButtonType {
    Default = 'default',
    Primary = 'primary',
    Danger = 'danger'
}

export enum ButtonSize {
    Default = 'default',
    Small = 'small',
    Large = 'large'
}

export type FormButtonHandler = (formValue: any) => any
