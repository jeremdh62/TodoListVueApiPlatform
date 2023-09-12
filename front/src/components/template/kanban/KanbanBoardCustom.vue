<template>
     <div class="kanban-board">
        <header class="kanban-board-header" :class="variant">
            <div class="kanban-title-board d-flex align-items-center justify-content-between">
                <div class="kanban-title-content">
                    <h6 class="title">{{title}}</h6>
                    <span class="count">{{count}}</span>
                </div>
                <slot name="header"></slot>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'KanbanBoardCustom',
    props: {
        title: String,
        variant: String,
        count: Number
    },
}
</script>
