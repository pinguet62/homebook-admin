import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

import {ConfirmDialogModule, ImagePreviewModule} from '../shared';
import {MediaInputUploadComponent} from './media-input-upload.component';
import {MediaService} from './media.service';

@NgModule({
  imports: [
    CommonModule,
    // lib
    MatButtonModule, MatIconModule, MatProgressSpinnerModule,
    // app
    ConfirmDialogModule,
    ImagePreviewModule,
  ],
  declarations: [
    MediaInputUploadComponent,
  ],
  providers: [
    MediaService,
  ],
  exports: [
    MediaInputUploadComponent,
  ],
})
export class MediaModule {
}
