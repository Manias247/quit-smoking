<template>
    <button class="main-button back" @click="$router.back()">Powrót</button>
    <div class="container">
    <div class="welcome-container about">
        <h1>{{ welcome }}</h1>
        <p class="about-info">Przed Tobą przygoda rzucania palenia <br>
        Możesz tę prostą w obsłudze aplikację potraktować jako dziennik, aby zacząć od przejęcia kontroli nad ilością wypalonych papierosów/heetsów w pojedynkę lub zaprosić do zabawy innych palących znajomych, aby trzymać się razem w postanowieniu nikotynowej abstynencji!<br>
    Pamiętaj, że żadne narzędzie nie nastąpi prawdziwej chęci rzucenia &#128521; </p>
</div>
    </div>
</template>

<script>

export default {
    name: "AboutView",
    data() {
        return {
            welcome: 'Witaj!',
        };
    },
    methods: {
      
    }
};
</script>

<style lang="css">
.about {
    background-color: rgb(18, 89, 66);
    padding: 20px;
    text-align: justify;
    border-radius: 5px;
    box-shadow: rgb(15, 161, 115) 1px 0 10px;
    
}

.about:hover {
    box-shadow: rgb(26, 243, 174) 1px 0 10px;
    transition:  0.5s ease;
}


</style>