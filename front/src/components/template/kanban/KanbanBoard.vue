<template>
     <div class="kanban-board">
        <header class="kanban-board-header" :class="variant">
            <div class="kanban-title-board">
                {{title}}
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'KanbanBoard',
    props: {
        title: String,
        variant: String
    },
}
</script>
