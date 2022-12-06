<template>
  <div class="contact" id="contact">
    <div class="menus">
      <div class="menu">
        <h2 @mouseover="btn = 1" @click="btn = 1" :class="{ active: btn == 1 }">
          Kontakt
        </h2>
        <div class="line" v-if="btn == 1"></div>
        <h2 @mouseover="btn = 2" @click="btn = 2" :class="{ active: btn == 2 }">
          Öffnungszeiten
        </h2>
        <div class="line" v-if="btn == 2"></div>
        <h2 @mouseover="btn = 3" @click="btn = 3" :class="{ active: btn == 3 }">
          Anreise
        </h2>
        <div class="line" v-if="btn == 3"></div>
      </div>
    </div>
    <div class="variable">
      <TransitionGroup name="list">
        <div class="contactInfoContainer" v-show="btn == 1" key="1">
          <div class="contactInfo">
            <p class="contactTitle">{{ contact.contactTitle }}</p>
            <div class="address">
              <img class="homeIcon" src="../assets/home.svg" alt="address" />
              <SanityContent :blocks="contact.address" />
            </div>
            <div class="phone">
              <img
                class="phoneIcon"
                src="../assets/phone.svg"
                alt="phone number"
              />
              <p>{{ contact.phoneNumber }}</p>
            </div>
            <div class="email">
              <img
                class="mailIcon"
                src="../assets/mail.svg"
                alt="email address"
              />
              <p>
                <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
              </p>
            </div>
            <div class="emergency">
              <SanityContent
                :blocks="contact.body"
                :serializers="serializers"
              />
            </div>
          </div>
        </div>
        <div class="openingHoursContainer" v-show="btn == 2" key="2">
          <div class="openingHours">
            <p class="openingHoursTitle">Öffnungszeiten Praxis</p>
            <div
              class="opening"
              v-for="(opening, index) in contact.openingHours"
              :key="index"
            >
              <p class="days">{{ opening.days }}</p>
              <div class="hours">
                <SanityContent :blocks="opening.hours" />
              </div>
            </div>
          </div>
        </div>
        <div class="mapContainer" v-show="btn == 3" key="3">
          <div
            v-if="contact.googleMapsLink"
            class="map"
            v-html="contact.googleMapsLink"
          ></div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import Links from "./LinkComp.vue";

const query = groq`*[_type == "contact"][0]`;
const { data: contact, refresh } = useSanityQuery(query);

const btn = ref(1);

const serializers = {
  types: {},
  marks: {
    link: Links,
  },
};
</script>

<style>
.opening p {
  margin: 0;
}
</style>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: relative;
}

.contact {
  text-align: left;
  color: black;
  display: inline-flex;
  width: 100%;
  height: 43.3rem;
  margin-top: 5%;
}
.contactInfo {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 5% 15% 8% 13%;
}

.contactTitle {
  font-size: 1.4rem;
  line-height: 1.8rem;
  width: 90%;
  margin-bottom: 5%;
}

.address {
  font-size: 1.1rem;
  line-height: 0.3rem;
  margin-left: 2.5rem;
}

.homeIcon {
  width: 1rem;
  margin: auto auto -1.8rem -2.5rem;
}

.phone {
  width: 30%;
  font-size: 1.1rem;
  line-height: 0.3rem;
  margin-left: 8rem;
}

.phoneIcon {
  width: 1.1rem;
  margin: auto auto -1.7rem -2.5rem;
}

.email {
  width: 50%;
  font-size: 1.1rem;
  line-height: 0.3rem;
  margin-left: 2.5rem;
  margin-top: 2%;
}
.email a {
  text-decoration: none;
  color: black;
}

.mailIcon {
  width: 1.1rem;
  margin: auto auto -1.6rem -2.5rem;
}
.emergency {
  margin-top: 5%;
  font-size: 1.1rem;
  line-height: 1.8rem;
}

.openingHoursContainer {
  position: relative;
  height: 43.3rem;
}

.openingHoursTitle {
  font-size: 1.4rem;
}

.openingHours {
  position: absolute;
  top: 50%;
  margin: auto 23% auto 13%;
  transform: translateY(-50%);
}

.opening {
  display: inline-flex;
  width: 90%;
  justify-content: space-between;
  margin-top: 2.1rem;
  font-size: 1.1rem;
}
.hours {
  width: 70%;
}
.menus {
  background-color: #006780;
  color: #66a4b3;
  width: 38.5rem;
}
.menu {
  width: fit-content;
  margin: 35% auto auto auto;
}

h2 {
  font-size: 2.7rem;
  letter-spacing: 0.1rem;
  font-weight: 350;
  margin: 20% 0 10% 0;
  cursor: pointer;
}

.line {
  position: relative;
  background: white;
  height: 0.3rem;
  width: 20%;
}

.active {
  color: white;
  margin-bottom: 18%;
  white-space: nowrap;
}

.variable {
  overflow: hidden;
  width: 57.8rem;
  background: rgb(209, 227, 227);
  background: linear-gradient(
    90deg,
    rgba(209, 227, 227, 1) 50%,
    rgba(186, 214, 214, 1) 100%
  );
}

.mapContainer {
  position: relative;
}

.map {
  position: absolute;
  height: 43.3rem;
  width: 100%;
  transform: translateY(0);
}
</style>
