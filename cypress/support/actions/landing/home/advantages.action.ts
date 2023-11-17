import { ourAdvantagesRepo } from "../../../repositories";

export class AdvantagesAction {
  showMoreAdv = () => ourAdvantagesRepo.showMore().click({ force: true });
}

export const ourAdvantagesAction: AdvantagesAction = new AdvantagesAction();