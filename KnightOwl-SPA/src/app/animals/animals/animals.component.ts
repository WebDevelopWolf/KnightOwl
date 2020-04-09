import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/_services/animal.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Animal } from 'src/app/_models/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animalsFur: Animal[];

  constructor(private animalService: AnimalService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadAnimalList('fur');
  }

  loadAnimalList(classification: string) {
    this.animalService.getAnimals(classification).subscribe((animals: Animal[]) => {
      this.animalsFur = animals;
    }, error => {
      this.alertify.error(error, 'Failed to Load Animals...');
    });
  }

}
