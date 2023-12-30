import { spell } from "./spell"

export interface spellsRepository {
    getSpells() : Promise<spell[]>
}