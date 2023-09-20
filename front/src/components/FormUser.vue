<template>
    <Row utils="g-gs" v-if="dataLoaded">
        <Col lg="12">
            <div class="form-group">
                <FormLabel for="user-username">Username</FormLabel>
                <FormInputWrap>
                    <FormInput id="user-username" type="text" placeholder="Username" v-model="username" required/>
                </FormInputWrap>
            </div>
        </Col>
        <Col lg="6">
            <div class="form-group">
                <FormLabel for="user-email">Email</FormLabel>
                <FormInputWrap>
                    <FormInput id="user-email" type="email" placeholder="Email" v-model="email" required/>
                </FormInputWrap>
            </div>
        </Col>
        <Col lg="6">
            <div class="form-group">
                <FormLabel for="user-password">Password</FormLabel>
                <FormInputWrap>
                    <FormInput id="user-password" type="password" placeholder="Password" v-model="password"/>
                </FormInputWrap>
            </div>
        </Col>
        <Col lg="6">
            <div class="form-group">
                <FormLabel for="user-role">Role</FormLabel>
                <FormInputWrap>
                    <ChoiceSelect placeholder="Role" :cross="false" :value="role" @change="(e) => role = e.target.value">
                        <ChoiceSelectOption v-for="role in roleList" :key="role.value" :value="role.value"> {{ role.text }} </ChoiceSelectOption>
                    </ChoiceSelect>
                </FormInputWrap>
            </div>
        </Col>
        <Col lg="12" v-if="isEditPage">
            <FormCheck> 
                <FormCheckInput type="checkbox" id="flexCheckDefault" :checked="isVerify"/> 
                    <FormCheckLabel for="flexCheckDefault"> Is verified  </FormCheckLabel> 
                </FormCheck> 
            
        </Col>
    </Row>
    <div class="text-center" v-else>
        <Spinner></Spinner>
    </div> 
</template>

<script>
    import Row from '@/components/template/layout/Row.vue';
    import Col from '@/components/template/layout/Col.vue';
    import FormLabel from '@/components/template/forms/form-label/FormLabel.vue';
    import FormInput from '@/components/template/forms/input/FormInput.vue';
    import FormInputWrap from '@/components/template/forms/input/FormInputWrap.vue';
    import Spinner from '@/components/template/uielements/spinner/Spinner.vue';
    import FormCheck from '@/components/template/forms/form-check/FormCheck.vue';
    import FormCheckInput from '@/components/template/forms/form-check/FormCheckInput.vue';
    import FormCheckLabel from '@/components/template/forms/form-check/FormCheckLabel.vue';
    import ChoiceSelect from '../components/template/choices/ChoiceSelect.vue';
    import ChoiceSelectOption from '../components/template/choices/ChoiceSelectOption.vue';
  
    export default {
        name: 'PdfAdd',
        components: {
            Row,
            Col,
            FormLabel,
            FormInput,
            FormInputWrap,
            Spinner,
            FormCheck,
            FormCheckInput,
            FormCheckLabel,
            ChoiceSelect,
            ChoiceSelectOption
        },
        props: {
            user: {
                type: Object,
                default: () => {
                    return null
                }
            },
            isEditPage: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                dataLoaded: false,
                username: '',
                email: '',
                password: '',
                role: 'ROLE_OBSERVATOR',
                isVerify: false,
                roleList: [
                    {value: 'ROLE_ADMIN', text: 'Admin'},
                    {value: 'ROLE_USER', text: 'User'},
                    {value: 'ROLE_OBSERVATOR', text: 'Observer'},
                ]
           }
        },
        async mounted(){
            if(this.user){
                this.username = this.user.username;
                this.email = this.user.email;
                this.password = this.user.password;
                this.isVerify = this.user.isVerify;
                this.role = this.getRole(this.user.roles);
            }

            this.dataLoaded = true;
        },
        methods: {
            getRole(roles) {
                let roleValue = '';

                roles.forEach((aRole) => {
                if (aRole == 'ROLE_ADMIN') {
                    roleValue = aRole;
                } else if (aRole == 'ROLE_USER' && roleValue != 'ROLE_ADMIN') {
                    roleValue = 'ROLE_USER';
                } else if (aRole == 'ROLE_OBSERVATOR' && roleValue != 'ROLE_ADMIN' && roleValue != 'ROLE_USER'){
                    roleValue = 'ROLE_OBSERVATOR';
                }
                })

                return roleValue;
          },
          setRole (role) {
            const setRoles = [];

            if (role == 'ROLE_ADMIN') {
                setRoles.push('ROLE_ADMIN');
                setRoles.push('ROLE_USER');
                setRoles.push('ROLE_OBSERVATOR');
            } else if (role == 'ROLE_USER') {
                setRoles.push('ROLE_USER');
                setRoles.push('ROLE_OBSERVATOR');
            } else if (role == 'ROLE_OBSERVATOR') {
                setRoles.push('ROLE_OBSERVATOR');
            }

            return setRoles;
          }
        }
    }
</script>