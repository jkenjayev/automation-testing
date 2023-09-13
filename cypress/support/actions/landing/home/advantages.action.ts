import {AdvantagesRepo} from "../../../repositories";
const advantages = new AdvantagesRepo();
export class AdvantagesAction {
    showMoreAdv = () => advantages.showMore().click({force: true});
}