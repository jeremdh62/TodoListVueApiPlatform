<template>
    <input :type="type" class="btn-check" :id="id" autocomplete="off">
</template>

<script>
export default {
    name: 'ButtonCheck',
    props: {
        id: String,
        type: String
    }
}
</script>
