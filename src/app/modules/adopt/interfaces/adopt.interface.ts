import { AnimalTypeEnum } from '../../shared/enums/index';

// TODO: Revert this!
export interface IAdopt {
	id?: string;
	impoundNum: string;
	animalID: string;
	dataSource?: string;
	recordType?: string;
	currentLocation?: string;
	animalName?: string;
	animalType?: AnimalTypeEnum;
	age?: string;
	ageGroup?: string;
	animalGender: string;
	animalBreed?: string;
	date?: Date;
	dateType?: string;
	obfuscatedAddress?: string;
	city?: string;
	state?: string;
	zip?: string;
	jurisdiction?: string;
	image?: string;
}
