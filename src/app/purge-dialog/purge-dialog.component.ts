import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purge-dialog',
  standalone: true,
  templateUrl: './purge-dialog.component.html',
  styleUrls: ['./purge-dialog.component.scss'],
})
export class PurgeDialogComponent {
  constructor(private dialogRef: MatDialogRef<PurgeDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}