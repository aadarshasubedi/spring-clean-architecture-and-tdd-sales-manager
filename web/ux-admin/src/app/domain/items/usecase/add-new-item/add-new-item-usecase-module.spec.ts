import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AddNewItemUseCaseModule} from './add-new-item-usecase-module';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {ReactiveFormsModule} from '@angular/forms';

describe(`[AddNewItemUseCaseModule] Unit Tests`, () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let useCase: AddNewItemUseCaseModule.HttpUseCase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [AddNewItemUseCaseModule.providers()]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
      useCase = TestBed.get(AddNewItemUseCaseModule.HttpUseCase);
    });
  }));

  it(`should invoke async http request on uri "${AddNewItemUseCaseModule.HttpUseCase.API_PATH}"`, async(() => {
    const request = new AddNewItemUseCaseModule.PayloadBuilder()
      .name('Bhuwan P. Upadhyay')
      .code('')
      .description('')
      .build();
    useCase.execute(request).subscribe();
    backend.expectOne({
      url: AddNewItemUseCaseModule.HttpUseCase.API_PATH, method: 'POST'
    });
  }));

  it(`should generate error when code does not contains prefix ${AddNewItemUseCaseModule.UseCaseFormValidators.CODE_PREFIX_REGEX}`,
    async(() => {
      const itemForm = AddNewItemUseCaseModule.UseCaseForm.create();
      itemForm.markAsDirty();
      itemForm.setValue(new AddNewItemUseCaseModule.PayloadBuilder()
        .name('hello')
        .code('code')
        .description('description')
        .build());
      const codeControl = itemForm.controls['code'];
      expect(codeControl.valid).toEqual(false);
      expect(codeControl.errors['pattern']['requiredPattern']).toEqual(AddNewItemUseCaseModule.UseCaseFormValidators.CODE_PREFIX_REGEX);
    }));

  it(`should valid when code does contains prefix ${AddNewItemUseCaseModule.UseCaseFormValidators.CODE_PREFIX_REGEX}`, async(() => {
    const itemForm = AddNewItemUseCaseModule.UseCaseForm.create();
    itemForm.markAsDirty();
    itemForm.setValue(new AddNewItemUseCaseModule.PayloadBuilder()
      .name('hello')
      .code('CODE-code')
      .description('description')
      .build());
    const codeControl = itemForm.controls['code'];
    expect(codeControl.valid).toEqual(true);
  }));

});
