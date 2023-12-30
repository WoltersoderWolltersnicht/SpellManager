import { spell } from "./spell";
import {spellsRepository} from "./spellsRepository"

export class apiSpellRepository implements spellsRepository{
    
    async getSpells(): Promise<spell[]> {

        const url = 'https://www.dnd5eapi.co/graphql'; // Replace with your API endpoint

        const query = `
                query {
  
                    spells {
                      
                      name
                      desc
                      
                      level
                      attack_type
                      casting_time
                      concentration
                      duration
                      higher_level
                      range
                      ritual
                    }
                  }
            
            `;

            const headers = {
                'Content-Type': 'application/json',
                // Add any other headers you might need, such as authentication tokens.
              };
        
            const request = {
                method: 'POST',
                headers,
                body: JSON.stringify({ query: query }),
              };

        let result = await fetch( url, request);
        let jsonResult = await result.json();
        
        let spells : spell[] = [];

        jsonResult["data"]["spells"].forEach((element: {
            desc: string[]; name: string; 
}) => {
            spells.push(new spell(element.name, element.desc[1]))
        });

        return new Promise<spell[]>((resolve) => {
            resolve(spells)
        });
    }

}