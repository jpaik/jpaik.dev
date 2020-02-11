<template>
    <footer>
        &copy; {{year}} James Paik
    </footer>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
}
</script>