import { spell } from "./spell";
import {spellsRepository} from "./spellsRepository"

export class localSpellRepository implements spellsRepository{
    
    getSpells(): Promise<spell[]> {
        return new Promise<spell[]>((resolve) => {
            resolve([
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription"),
                new spell("SpellName", "SpellDescription")
                ])
        })
    }

}