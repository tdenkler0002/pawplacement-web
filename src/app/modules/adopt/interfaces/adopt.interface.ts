import { AnimalTypeEnum } from '../../../enums/index';

export interface IAdopt {
	id?: string;
	impoundNum: string;
	animalID: string;
	dataSource?: string;
	recordType?: string;
	currentLocation?: string;
	animalName?: string;
	animalType: AnimalTypeEnum;
	age?: string;
	animalGender: string;
	animalBreed?: string;
	date: Date;
	dateType: string;
	obfuscatedAddress?: string;
	city: string;
	state: string;
	zip: string;
	jurisdiction?: string;
	image?: string;
}
