<template>
    <div class="container">
        <div class="bloc-user">
            <img src="@/assets/images/avatar.jpg" alt="avatar">
            <div class="second-container">
                <div class="name-user">
                    <strong>Sylvain REMENANT</strong>
                </div>
                <div class="role-user">
                    Administrateur
                </div>
            </div>
        </div>
        <div class="bloc-path">
            Chemin accès
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.container {
    height: 2.5rem;
    display: flex;

    >.bloc-user {
        min-width: 240px;
        border: 0.5px solid var(--bleu-pastel);
        display: flex;
        align-items: center;
        padding-left: 2rem;

        >img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }

        >.second-container {

            margin-left: 0.8rem;
            >.name-user {
                font-size: 0.8rem;
            }
            >.role-user {
                font-size: 0.6rem;
            }
        }
    }

    >.bloc-path {
        width: 100%;
        border: 0.5px solid var(--bleu-pastel);
        border-left-width: 0px;
    }
}
</style>