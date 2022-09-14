
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// --------------------------------------- //
import { SearchPipe, SortPipe } from './pipes';
import { SearchComponent, NoRecordsComponent, PaginationComponent } from './components';
import { SortDirective } from './directives';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        SearchPipe,
        SortPipe,
        ShortenPipe,
        SortDirective,
        FilterPipe,
        SearchComponent,
        NoRecordsComponent,
        PaginationComponent,
        HighlightDirective,
    ],
    exports: [
        SearchPipe,
        SortPipe,
        SortDirective,
        ShortenPipe,
        HighlightDirective,
        FilterPipe,
        SearchComponent,
        NoRecordsComponent,
        PaginationComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
