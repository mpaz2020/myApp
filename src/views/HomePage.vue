<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lista de usuarios</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <div v-for="item in data" :key="item.id">
          <ion-item>
            <ion-avatar>
              <ion-icon
                :icon="personCircleOutline"
                size="large"
                color="primary"
              />
            </ion-avatar>
            <ion-label>
              <h2>{{ item.name }}</h2>
              <h3>{{ item.email }}</h3>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { User } from "@/interfaces/user";
import { getUsers } from "@/services/UserService";

import { personCircleOutline } from "ionicons/icons";
// import {
//   IonList,
//   IonIcon,
//   IonLabel,
//   IonAvatar,
//   IonItem,
//   IonHeader,
//   IonPage,
//   IonToolbar,
//   IonContent,
//   IonTitle,
// } from "@ionic/vue";
import { onMounted, ref } from "vue";

const data = ref<User[]>([]);
const getData = async () => {
  try {
    data.value = await getUsers();
  } catch (error) {
    console.error(error);
  }
};

onMounted(getData);
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
