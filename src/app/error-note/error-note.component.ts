import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResetErrorAction, SetErrorAction } from '../reducers/errors/errors.actions';
import { ErrorsState } from '../reducers/errors/errors.reducer';
import { selectError } from '../reducers/errors/errors.selectors';

@Component({
  selector: 'app-error-note',
  templateUrl: './error-note.component.html',
  styleUrls: ['./error-note.component.scss']
})
export class ErrorNoteComponent implements OnInit {

  public message$: Observable<string> = this.store$.pipe(select(selectError));

  constructor(private store$: Store<ErrorsState>) { }

  ngOnInit(): void {
  }

  resetError() {
    this.store$.dispatch(new ResetErrorAction());
  }

}
