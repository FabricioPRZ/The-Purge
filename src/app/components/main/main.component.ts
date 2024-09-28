import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../../models/student';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PurgeDialogComponent } from '../../purge-dialog/purge-dialog.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatDialogModule, PurgeDialogComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  studentsA: Student[] = [
    { name: 'Abarca' },
    { name: 'Melissa' },
    { name: 'Sujey' },
    { name: 'Bryan' },
    { name: 'Milton' },
    { name: 'Fabricio' },
    { name: 'Ameth' },
    { name: 'Manuel de Jesús' },
    { name: 'Héctor' },
    { name: 'Gael' },
    { name: 'Lyz' },
    { name: 'Luis' },
    { name: 'Sayuri' },
  ];

  studentsB: Student[] = [
    { name: 'Jose' },
    { name: 'Christopher' },
    { name: 'Angel' },
    { name: 'Maximiliano' },
    { name: 'Eduardo' },
    { name: 'Fredy' },
    { name: 'Yara' },
    { name: 'Bruno' },
    { name: 'Joaquin' },
    { name: 'Antonio' },
    { name: 'Osvaldo' },
    { name: 'Marcos' },
    { name: 'Ulises' },
    { name: 'Hannia' },
  ];

  purgedStudents: Student[] = [];
  selectedStudentA: Student | null = null;
  selectedStudentB: Student | null = null;

  constructor(private dialog: MatDialog) {}

  // Seleccion de un estudiante al azar
  selectStudents() {
    if (this.studentsA.length > 0) {
      const randomIndexA = Math.floor(Math.random() * this.studentsA.length);
      this.selectedStudentA = this.studentsA[randomIndexA];
    } else {
      this.selectedStudentA = null;
    }

    if (this.studentsB.length > 0) {
      const randomIndexB = Math.floor(Math.random() * this.studentsB.length);
      this.selectedStudentB = this.studentsB[randomIndexB];
    } else {
      this.selectedStudentB = null;
    }

    if (!this.selectedStudentA && !this.selectedStudentB) {
      this.openPurgeDialog();
    }
  }

  // Purgar un estudiante de la lista A
  purgeStudentA() {
    if (this.selectedStudentA) {
      this.purgedStudents.push(this.selectedStudentA);
      this.studentsA = this.studentsA.filter(
        (student) => student.name !== this.selectedStudentA!.name
      );
      this.selectedStudentA = null;
    }

    if (this.studentsA.length === 0 && this.studentsB.length === 0) {
      this.openPurgeDialog();
    }
  }

  // Purgar un estudiante de la lista B
  purgeStudentB() {
    if (this.selectedStudentB) {
      this.purgedStudents.push(this.selectedStudentB);
      this.studentsB = this.studentsB.filter(
        (student) => student.name !== this.selectedStudentB!.name
      );
      this.selectedStudentB = null;
    }

    if (this.studentsA.length === 0 && this.studentsB.length === 0) {
      this.openPurgeDialog();
    }
  }

  // Metodo para abrir el dialog
  openPurgeDialog() {
    this.dialog.open(PurgeDialogComponent, {
      width: '500px',
    });
  }
}
