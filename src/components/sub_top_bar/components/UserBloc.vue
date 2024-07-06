<template>
    <div class="bloc-user">
        <img src="@/assets/images/avatar.jpg" alt="avatar">
        <div class="container">
            <div class="name-user">
                <strong>Sylvain REMENANT</strong>
            </div>
            <div class="role-user">
                <em>Administrateur</em>
            </div>
        </div>
        <i class="pi pi-chevron-down"></i>
    </div>
</template>

<script>
</script>

<style scoped>
.bloc-user {
    min-width: 270px;
    border: 0.5px solid var(--bleu-pastel);
    display: flex;
    align-items: center;
    padding-left: 2rem;


    >img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    >.container {
        margin-left: 0.8rem;

        >.name-user {
            font-size: 0.8rem;
        }

        >.role-user {
            font-size: 0.6rem;
        }
    }

    i {
        margin-left: auto;
        padding-right: 0.5rem;
    }
}
</style>