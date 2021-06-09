<template>
    <div class="header px-36 py-16">
        <div class="logo">
            <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="menu">
            <ul>
                <li><a @click="goto('about')">About</a></li>
                <li><a @click="goto('services')">Services</a></li>
                <li><a @click="goto('skills')">Skills</a></li>
                <li><a @click="goto('experience')">Experience</a></li>
                <li><a @click="goto('contact')">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        goto(name) {
            window.scrollTo({top: this.$refs[name].offsetTop, behavior: 'smooth'});
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    background: #f8f8f8;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
        height: 48px;
        img {
            height: 100%;
        }
    }
    .menu {
        ul {
            li {
                display: inline-block;
                padding: 16px;
            }
        }
    }
}
</style>