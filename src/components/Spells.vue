<template>
    <div style="display: flex; flex-wrap: wrap;">
        <div v-for="spell in spells" class="card">
            <p>{{ spell.name }}</p>
            <p>{{ spell.desciption }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { spell } from "../domain/spell";
import { Ref, ref } from "vue";
import { localSpellRepository } from "../domain/localSpellsRepository";

const spells: Ref<spell[]> = ref([])

function loadSpells(spelsToLoad: spell[]) {
    spelsToLoad.forEach(element => {
        console.log(element.name)
    });
    spells.value = spelsToLoad;
}

let repository = new localSpellRepository()

repository.getSpells()
    .then((x) => loadSpells(x))
    .catch((err) => console.log("error:" + err));

</script>

<style>
.card {
    min-width: 10em;
    width: 10em;
    height: 15em;
    border-radius: 5px;
    background-color: red;
    margin: 1em;
}
</style>