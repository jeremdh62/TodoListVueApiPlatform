<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
            <BlockHeadContent class="d-flex justify-content-between">
                <BlockTitle tag="h1">Kanban Board</BlockTitle>

                <ul v-if="currentUserRole.includes('ROLE_USER') || currentUserRole.includes('ROLE_ADMIN')">
                    <li>
                        <Button variant="success" class="mb-2" data-bs-toggle="modal" data-bs-target="#addTask" >Add</Button>
                        <ModalTask id="addTask" title="Add Task" @save-task="updateKanban" />
                    </li>
                </ul>
            </BlockHeadContent>
    </BlockHead>

    <Block>
        <div class="kanban-custom-board" v-if="taskLoading">
            <div class="kanban-container">
                <KanbanBoardCustom title="Todo" variant="kanban-light" :count="tasks.todo.length">
                    <draggable class="kanban-drag" :list="tasks.todo" @drop="(e) => {updateTask(e, 'TODO')}" item-key="id" group="tasks">
                     <template #item="{element}">
                            <div :data-task="element.id" class="kanban-item" data-bs-toggle="modal" :data-bs-target="'#editTask'+element.id">
                                <div :data-task="element.id" class="kanban-item-title">
                                    <h6 :data-task="element.id" class="title">{{element.title}}</h6>
                                </div>
                                <div :data-task="element.id" class="kanban-item-text">
                                    <p :data-task="element.id">{{element.description}}</p>
                                </div>
                                <ModalTask isPageEdit v-if="currentUserRole.includes('ROLE_USER') || currentUserRole.includes('ROLE_ADMIN')" :id="'editTask'+element.id" title="Edit Task" @save-task="updateKanban" :task="element" />
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
                
                <KanbanBoardCustom title="In Process" variant="kanban-primary" :count="tasks.doing.length">
                    <draggable class="kanban-drag" :list="tasks.doing" @drop="(e) => {updateTask(e, 'DOING')}" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div :data-task="element.id" class="kanban-item" data-bs-toggle="modal" :data-bs-target="'#editTask'+element.id">
                                <div :data-task="element.id" class="kanban-item-title">
                                    <h6 :data-task="element.id" class="title">{{element.title}}</h6>
                                </div>
                                <div :data-task="element.id" class="kanban-item-text">
                                    <p :data-task="element.id">{{element.description}}</p>
                                </div>
                                <ModalTask v-if="currentUserRole.includes('ROLE_USER') || currentUserRole.includes('ROLE_ADMIN')" :id="'editTask'+element.id" title="Edit Task" @save-task="updateKanban" :task="element" isPageEdit />
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>

                <KanbanBoardCustom title="Completed" variant="kanban-success" :count="tasks.done.length">
                    <draggable class="kanban-drag" :list="tasks.done"  @drop="(e) => {updateTask(e, 'DONE')}" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div :data-task="element.id" class="kanban-item" data-bs-toggle="modal" :data-bs-target="'#editTask'+element.id">
                                <div :data-task="element.id" class="kanban-item-title">
                                    <h6 :data-task="element.id" class="title">{{element.title}}</h6>
                                </div>
                                <div :data-task="element.id" class="kanban-item-text">
                                    <p :data-task="element.id">{{element.description}}</p>
                                </div>
                                <ModalTask isPageEdit v-if="currentUserRole.includes('ROLE_USER') || currentUserRole.includes('ROLE_ADMIN')" :id="'editTask'+element.id" title="Edit Task" @save-task="updateKanban" :task="element" />
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
            </div>
        </div>
        <div v-else>
            <div class="nk-block-head-content">
                <Spinner />
            </div>
        </div>
    </Block>
  </Layout>
</template>

<script>

import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/template/block/Block.vue';
import KanbanBoardCustom from '@/components/template/kanban/KanbanBoardCustom.vue';
import Button from '@/components/template/uielements/button/Button.vue';
import draggable from "vuedraggable";
import ModalTask from '../components/ModalTask.vue';
import Spinner from '@/components/template/uielements/spinner/Spinner.vue';


export default {
    name: 'KanbanBoardCustomPage', 
    components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    KanbanBoardCustom,
    draggable,
    Button,
    ModalTask,
    Spinner
},
    data() {
      return {
            tasks: {
                todo: [],
                doing: [],
                done: [],
            },
            taskLoading: false,
            currentUserRole: this.$store.getters['authStore/getRoles']
      };
    },
    async mounted() {
        await this.$store.dispatch('taskStore/fetchTasks');

        let tasksList = this.$store.getters['taskStore/getTasks'];

        this.tasks.todo = tasksList.filter(task => task.status === 'TODO');
        this.tasks.doing = tasksList.filter(task => task.status === 'DOING');
        this.tasks.done = tasksList.filter(task => task.status === 'DONE');

        this.taskLoading = true;
    },
    methods: {
        updateKanban() {
            this.taskLoading = false;
            this.$store.dispatch('taskStore/fetchTasks').then(() => {
                let tasksList = this.$store.getters['taskStore/getTasks'];

                this.tasks.todo = tasksList.filter(task => task.status === 'TODO');
                this.tasks.doing = tasksList.filter(task => task.status === 'DOING');
                this.tasks.done = tasksList.filter(task => task.status === 'DONE');

                this.taskLoading = true;
            });
        },
        updateTask(e, value) {
            const task = {
                id: Number(e.srcElement.dataset.task),
                status: value,
            }

            setTimeout(() => {
                this.$store.dispatch('taskStore/updateTaskStatus', task).then(() => {
                    //this.updateKanban();
                });
            }, 50);
        }
    }

}
</script>