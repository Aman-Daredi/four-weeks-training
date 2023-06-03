import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"),
        ],
      ],
      hobbies: new FormArray([new FormControl("", Validators.required)]),
    });
  }

  createHobbyField(): FormControl {
    return new FormControl("", Validators.required);
  }

  addHobbyField() {
    const hobbies = this.myForm.get("hobbies") as FormArray;
    hobbies.push(this.createHobbyField());
  }

  removeHobbyField(index: number) {
    const hobbies = this.myForm.get("hobbies") as FormArray;
    hobbies.removeAt(index);
  }

  get hobbyFields(): FormArray {
    return this.myForm.get("hobbies") as FormArray;
  }

  onSubmit() {
    this.myForm.reset();
    console.log(this.myForm);
  }
}
