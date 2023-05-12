<template>
    <a-card style="display: block">
        <div v-if="data">
        <h1 class="title1">Resultados {{data.stage.description}} ||
                <calendar-outlined /> {{ formatDate(data.stage.scheduled) }} to <calendar-outlined /> {{ formatDate(data.stage.scheduled_end) }}
        </h1>
        <h1>Etapas</h1>
        <a-collapse :default-active-key="[]">
            <a-collapse-panel key="1" header="Mostrar etapas"> 
                <template v-for="item in data.stage.stages" 
                    :key="item.id" 
                    style="margin-bottom: 16px"
                >
                        <a-card>
                        <p>{{ item.description }}</p>
                        <p>Scheduled: {{ formatDate(item.scheduled) }}</p>
                        <p>Scheduled End: {{ formatDate(item.scheduled_end) }}</p>
                        <p>Type: {{ item.type }}</p>
                        <p>Status: {{ item.status }}</p>
                        <a-collapse :default-active-key="[]">
                            <a-collapse-panel header="Venue" key="venue">
                            <p>Venue: {{ item.venue.name }}</p>
                            <p>City: {{ item.venue.city }}</p>
                            <p>Country: {{ item.venue.country }}</p>
                            <p>Coordinates: {{ item.venue.coordinates }}</p>
                            <p>Country Code: {{ item.venue.country_code }}</p>
                            <p>Length: {{ item.venue.length }}</p>
                            <p>Official URL: {{ item.venue.url_official }}</p>
                            <p>Curves Left: {{ item.venue.curves_left }}</p>
                            <p>Curves Right: {{ item.venue.curves_right }}</p>
                            <p>Laps: {{ item.venue.laps }}</p>
                            <p>Debut: {{ item.venue.debut }}</p>
                            <p>Timezone: {{ item.venue.timezone }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                        </a-card>
                </template>
            </a-collapse-panel>
        </a-collapse>
        <h1>Competidores</h1>
        <a-collapse :default-active-key="[]">
            <a-collapse-panel key="1" header="Mostrar competidores"> 
                <template v-for="item in data.stage.competitors" 
                    :key="item.id" 
                    style="margin-bottom: 16px"
                >
                        <a-card>
                            <p>{{ item.name }}</p>
                            <p>Gender: {{ item.gender }}</p>
                            <p>Nationality: {{ item.nationality }}</p>
                            <p>Country Code: {{ item.country_code }}</p>
                            <a-collapse :default-active-key="[]">
                                <a-collapse-panel header="Team" key="team">
                                <p>Team: {{ item.team.name }}</p>
                                <p>Team Gender: {{ item.team.gender }}</p>
                                <p>Team Nationality: {{ item.team.nationality }}</p>
                                <p>Team Country Code: {{ item.team.country_code }}</p>
                                </a-collapse-panel>
                            </a-collapse>
                            <a-collapse :default-active-key="[]">
                                <a-collapse-panel header="Result" key="result">
                                <p>Points: {{ item.result.points }}</p>
                                <p>Bike Number: {{ item.result.bike_number }}</p>
                                <p>Position: {{ item.result.position }}</p>
                                <p>Victories: {{ item.result.victories }}</p>
                                <p>Races: {{ item.result.races }}</p>
                                <p>Races with Points: {{ item.result.races_with_points }}</p>
                                <p>Pole Positions: {{ item.result.pole_positions }}</p>
                                <p>Podiums: {{ item.result.podiums }}</p>
                                <p>Fastest Laps: {{ item.result.fastest_laps }}</p>
                                </a-collapse-panel> 
                            </a-collapse>
                        </a-card>
                </template>
            </a-collapse-panel>
        </a-collapse>
        <h1>Equipos</h1>
        <a-collapse :default-active-key="[]">
            <a-collapse-panel key="1" header="Mostrar equipos"> 
                <template v-for="team in data.stage.teams" 
                    :key="team.id" 
                    style="margin-bottom: 16px"
                >
                        <a-card>
                            <p>{{ team.name }}</p>
                            <p>Gender: {{ team.gender }}</p>
                            <p>Nationality: {{ team.nationality }}</p>
                            <p>Country Code: {{ team.country_code }}</p>
                            <a-collapse :default-active-key="[]">
                                <a-collapse-panel header="Result" key="result">
                                <p>Points: {{ team.result.points }}</p>
                                <p>Position: {{ team.result.position }}</p>
                                <p>Victories: {{ team.result.victories }}</p>
                                <p>Races: {{ team.result.races }}</p>
                                <p>Races with Points: {{ team.result.races_with_points }}</p>
                                <p>Podiums: {{ team.result.podiums }}</p>
                                <p>Fastest Laps: {{ team.result.fastest_laps }}</p>
                                </a-collapse-panel>
                            </a-collapse>
                            <a-collapse :default-active-key="[]">
                                <a-collapse-panel header="Competitors" key="competitors">
                                <a-card v-for="competitor in team.competitors" :key="competitor.id" style="margin-bottom: 8px">
                                    <p>{{ competitor.name }}</p>
                                    <p>Gender: {{ competitor.gender }}</p>
                                    <p>Nationality: {{ competitor.nationality }}</p>
                                    <p>Country Code: {{ competitor.country_code }}</p>
                                    <a-collapse :default-active-key="[]">
                                    <a-collapse-panel header="Result" key="result">
                                        <p>Points: {{ competitor.result.points }}</p>
                                        <p>Bike Number: {{ competitor.result.bike_number }}</p>
                                        <p>Position: {{ competitor.result.position }}</p>
                                        <p>Races: {{ competitor.result.races }}</p>
                                        <p>Races with Points: {{ competitor.result.races_with_points }}</p>
                                        <p>Podiums: {{ competitor.result.podiums }}</p>
                                    </a-collapse-panel>
                                    </a-collapse>
                                </a-card>
                                </a-collapse-panel>
                            </a-collapse>
                        </a-card>
                </template>
            </a-collapse-panel>
        </a-collapse>
        </div>
    </a-card>
</template>
<script setup>
import "../assets/styles.scss";
import { CalendarOutlined } from '@ant-design/icons-vue';
import data from "../mockups/motoGP-2023.json";
    console.log(data.stage.competitors);
const formatDate = (fecha) => {
    const dateObj = new Date(fecha);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();
    return `${day}/${month}/${year}`;
};
</script>

<style lang="scss" scoped>
a-card {
width: 400px;
padding: 16px;
}
</style>
