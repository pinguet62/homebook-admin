import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {ArticleService, IArticle} from './article.service';

@Component({
  template: `
    <mat-table [dataSource]="articles">
      <ng-container matColumnDef="_id">
        <mat-header-cell *matHeaderCellDef>Id</mat-header-cell>
        <mat-cell *matCellDef="let article">{{article._id}}</mat-cell>
      </ng-container>

      <ng-container matColumnDef="title">
        <mat-header-cell *matHeaderCellDef>Id</mat-header-cell>
        <mat-cell *matCellDef="let article">{{article.title}}</mat-cell>
      </ng-container>

      <ng-container matColumnDef="actions">
        <mat-header-cell *matHeaderCellDef></mat-header-cell>
        <mat-cell *matCellDef="let article">
          <button [routerLink]="['show', article._id]" mat-icon-button>
            <mat-icon>visibility</mat-icon>
          </button>
          <button [routerLink]="['edit', article._id]" mat-icon-button>
            <mat-icon>edit</mat-icon>
          </button>
          <button (click)="deleteArticle(article)" mat-icon-button>
            <mat-icon>delete</mat-icon>
          </button>
        </mat-cell>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let article; columns: displayedColumns;">
      </mat-row>
    </mat-table>

    <button mat-fab color="warn" class="floating" routerLink="./create">
      <mat-icon>add</mat-icon>
    </button>
  `,
  styles: [`
    .floating {
      position: fixed;
      right: 40px;
      bottom: 40px;
    }
  `]
})
export class ArticleListComponent {

  readonly displayedColumns = ['_id', 'title', 'actions'];

  articles: IArticle[] = [];

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) {
    this.refresh();
  }

  private refresh() {
    this.articleService.list().subscribe((x) =>
      this.articles = x
    );
  }

  // TODO confirm dialog
  deleteArticle(article: IArticle) {
    this.articleService.delete(article).subscribe(() =>
      this.refresh()
    );
  }

}
