import { ObjectiveItem } from '../../../app/models/StrategyItem/objective-item.model';

export interface PerspectiveItem {
  PerspectiveItemId: string,
  NameEn: string,
  NameAr: string,
  DescriptionEn: string,
  DescriptionAr: string,
  ImageUrl: string,
  OrganizationUnitID: number
}
export interface PerspectiveObjectivesItem {
    Perspective: PerspectiveItem,
    ObjectivesList: ObjectiveItem[]
}
export interface PerspectiveCardOptions {
    showOrganizationUnit: boolean;
    showIcon: boolean;
}