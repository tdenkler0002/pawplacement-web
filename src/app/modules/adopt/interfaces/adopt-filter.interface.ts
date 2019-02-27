import { AnimalOptionsEnum } from '../enums';
import { AnimalTypeEnum } from '../../shared/enums';

export interface IAdoptFilter {
	filterType: AnimalOptionsEnum;
	filterOptions: Array<string | AnimalTypeEnum>;
}
