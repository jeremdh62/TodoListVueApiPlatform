<template>
    <Modal :id="id">
        <ModalDialog>
            <ModalContent>
                <form @submit="saveTask">
                    <ModalHeader>
                        <h5 class="modal-title">{{ title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </ModalHeader>
                    <ModalBody>
                        <FormInput 
                            type="text" 
                            placeholder="Title" 
                            class="mb-4" 
                            v-model="taskData.title" 
                            required
                        />

                        <FormTextarea 
                            placeholder="Description" 
                            class="mb-4" 
                            v-model="taskData.description" 
                            required
                        /> 

                        <FormInput
                            type="date"
                            placeholder="Date Due"
                            class="mb-4"
                            v-model="taskData.deadline"
                            required
                        />

                        <ChoiceSelect placeholder="Status" :cross="false" :value="taskData.status" @change="(e) => taskData.status = e.target.value">
                            <ChoiceSelectOption v-for="status in statusList" :key="status.value" :value="status.value"> {{ status.text }} </ChoiceSelectOption>
                        </ChoiceSelect>

                        <ChoiceSelect placeholder="Priority" :cross="false" :value="taskData.priority" @change="(e) => taskData.priority = e.target.value">
                            <ChoiceSelectOption v-for="priority in priorityList" :key="priority.value" :value="priority.value"> {{ priority.text }} </ChoiceSelectOption>
                        </ChoiceSelect>

                        <ChoiceSelect placeholder="Assignee" :cross="false" v-if="userList.length > 0" :value="taskData.attachedTo" @change="(e) => taskData.attachedTo = e.target.value">
                            <ChoiceSelectOption :value="null"> None </ChoiceSelectOption>
                            <ChoiceSelectOption v-for="user in userList" :key="user.id" :value="user.id"> {{ user.username }} </ChoiceSelectOption>
                        </ChoiceSelect>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" @click="deleteTask" variant="danger">Delete</Button>
                        <Button type="button" variant="secondary" data-bs-dismiss="modal">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </ModalDialog>
    </Modal>
</template>
<script>
    import Modal from '../components/template/uielements/modal/ModalContainer.vue';
    import ModalDialog from '../components/template/uielements/modal/ModalDialog.vue';
    import ModalContent from '../components/template/uielements/modal/ModalContent.vue';
    import ModalFooter from '../components/template/uielements/modal/ModalFooter.vue';
    import ModalBody from '../components/template/uielements/modal/ModalBody.vue';
    import ModalHeader from '../components/template/uielements/modal/ModalHeader.vue';
    import FormInput from '../components/template/forms/input/FormInput.vue';
    import FormTextarea from '../components/template/forms/textarea/FormTextarea.vue';
    import ChoiceSelect from '../components/template/choices/ChoiceSelect.vue';
    import ChoiceSelectOption from '../components/template/choices/ChoiceSelectOption.vue';
    import DatePicker from '../components/template/forms/date-picker/DatePicker.vue';
    import Button from '@/components/template/uielements/button/Button.vue';
    
    export default {
        name: 'ModalTask',
        props: {
            id: {
                type: String,
                default: 'modalTask'
            },
            title: {
                type: String,
                default: 'Modal Task'
            },
            task: {
                type: Object,
                default: null
            }
        },
        components: {
            Modal,
            ModalBody,
            ModalHeader,
            ModalFooter,
            ModalContent,
            ModalDialog,
            FormInput,
            FormTextarea,
            ChoiceSelect,
            ChoiceSelectOption,
            DatePicker,
            Button
        },
        data() {
            return {
                taskData: {
                    title: '',
                    description: '',
                    deadline: new Date(),
                    status: '',
                    priority: '',
                    attachedTo: null
                },
                isEdit: false,
                statusList: [
                    { value: 'TODO', text: 'Todo' },
                    { value: 'DOING', text: 'Doing' },
                    { value: 'DONE', text: 'Done' }
                ],
                priorityList: [
                    { value: 'LOW', text: 'Low' },
                    { value: 'MEDIUM', text: 'Medium' },
                    { value: 'HIGH', text: 'High' }
                ],
                userList: [],
                idDatepicker: 'date-picker'
            }
        },
        async mounted() {
            if (this.task) {
                this.taskData = this.task
                    
                if(typeof this.taskData.deadline === 'string')  {
                    this.taskData.deadline = new Date(this.taskData.deadline)
                } else {
                    this.taskData.deadline = this.taskData.deadline
                }
                
                this.idDatepicker = this.idDatepicker + '-' + this.task.id

                this.isEdit = true
            } else {
                this.idDatepicker = this.idDatepicker + '-add'
                this.taskData.status = this.statusList[0].value
                this.taskData.priority = this.priorityList[0].value
            }

            await this.$store.dispatch('userStore/fetchUsers');    
            this.userList = this.$store.getters['userStore/getUsers'];
       },
        methods : {
            saveTask(e){
                e.preventDefault()

                if (this.isEdit) {
                    this.$store.dispatch('taskStore/updateTask', this.taskData)
                } else {
                    this.$store.dispatch('taskStore/addTask', this.taskData)
                }
                this.$el.querySelector('.btn-close').click()
                this.$emit('saveTask')
            },
            deleteTask(){
                this.$store.dispatch('taskStore/deleteTask', this.taskData.id)
                this.$el.querySelector('.btn-close').click()
                this.$emit('saveTask')
            }
        },
        emits: ['saveTask']
    }
</script>