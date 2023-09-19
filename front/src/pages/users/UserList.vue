<template>
    <Layout>
      <Block>
        <BlockHead>
        <BlockHeadBetween class="flex-wrap gap g-2">
            <BlockHeadContent>
                <BlockTitle tag="h2">User List</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
                <ul class="d-flex">
                    <li>
                      <Button as="RouterLink" variant="success" class="mb-2" to="/users/add" >Ajouter</Button>
                    </li>
                </ul>
            </BlockHeadContent>
        </BlockHeadBetween>
    </BlockHead>
        <Card>
          <CardBody>
            <div class="table-responsive">
             <DataTable v-if="isCalled" id="table-users" class="table-border" @selectrow="selectRow" ref="userDataTable">
              <TableHead>
                  <tr>
                    <th><OverlineTitle tag="span">Username</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Email</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Roles</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Is verified</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Actions</OverlineTitle></th>
                  </tr>
              </TableHead>
              <TableBody v-if="userList.length > 0 && userListLoaded">
                <tr v-for="user in userList" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ getRoleName(user.roles) }}</td>
                    <td><span v-if="user.isVerify" style="color:green;"><Icon icon="circle-fill"></Icon></span> <span style="color:red;" v-else><Icon icon="circle-fill"></Icon></span></td>
                    <td> <router-link :to="'/users/'+user.id" class="text-secondary"><Icon size="md" icon="edit-fill"/></router-link><a href="#" :data-id="user.id" class="text-danger delete-user"><Icon size="md" icon="trash-fill"></Icon></a></td>
                </tr>
              </TableBody>
              <TableBody v-else-if="!userListLoaded">
                <tr>
                  <td colspan="10" class="text-center"> <Spinner /> {{ $t('global.loading') }} </td>
                </tr>
              </TableBody>
              <TableBody v-else>
                <tr>
                  <td colspan="10" class="text-center no-data-found">{{ $t('global.noDataFound') }}</td>
                </tr>
              </TableBody>
            </DataTable>
            <div class="text-center" v-else>
              <Spinner />
            </div>
            </div>
          </CardBody>
        </Card>
      </Block>
  
    </Layout>
  </template>
  
  <script>
    import Swal from 'sweetalert2/src/sweetalert2.js';
    
    import Layout from '@/layout/Index.vue'
    import { Block, BlockHead, BlockHeadContent, BlockHeadBetween, BlockTitle } from '@/components/template/block/Block.vue';
    import Icon from "@/components/template/icon/Icon.vue";
    import Card from '@/components/template/uielements/card/Card.vue';
    import CardBody from '@/components/template/uielements/card/CardBody.vue';
    import DataTable from '@/components/template/data-tables/SimpleDataTable.vue';
    import TableHead from '@/components/template/utilities/table/TableHead.vue';
    import TableBody from '@/components/template/utilities/table/TableBody.vue';
    import OverlineTitle from '@/components/template/misc/OverlineTitle.vue';
    import Button from '@/components/template/uielements/button/Button.vue';
    import Breadcrumb from '@/components/template/uielements/breadcrumb/Breadcrumb.vue';
    import BreadcrumbItem from '@/components/template/uielements/breadcrumb/BreadcrumbItem.vue';
    import Spinner from '@/components/template/uielements/spinner/Spinner.vue';
  
    export default {
        name: 'UserList',
        components: {
            Layout,
            Block,
            BlockHead,
            BlockHeadContent,
            BlockHeadBetween,
            BlockTitle,
            Breadcrumb,
            BreadcrumbItem,
            Card,
            CardBody,
            DataTable,
            TableHead,
            TableBody,
            OverlineTitle,
            Button,
            Spinner,
            Icon
        },
        data(){
          return {
            userList: [],
            isCalled: false,
            userListLoaded: false,
          }
        },
        async mounted(){
          await this.$store.dispatch('userStore/fetchUsers');
          this.isCalled = true;

          this.userList = this.$store.getters['userStore/getUsers'];
          this.userListLoaded = true;    
        },
        methods: {
          getDateString(date) {
            const defaultDate = new Date(date);

            const year = defaultDate.getFullYear();
            const month = (defaultDate.getMonth() + 1).toString().padStart(2, '0');
            const day = defaultDate.getDate().toString().padStart(2, '0');
            const hour = defaultDate.getHours().toString().padStart(2, '0');
            const minute = defaultDate.getMinutes().toString().padStart(2, '0');

            return `${year}-${month}-${day} ${hour}:${minute}`;

          },
          deleteConfirm(userId, rowIndex) {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if(result.value) {
                  this.$store.dispatch('usersStore/deleteUser', userId).then((res) => {
                    if (res.status == 204 ) {
                      this.userList = this.userList.filter((user) => user.id != userId);
                      Swal.fire('Deleted', 'You successfully deleted this file', 'success')
                      this.$refs.userDataTable.jsDataTableDeleteRow(rowIndex);
                    } else {
                      Swal.fire('Cancelled', 'An error has occurred', 'error')
                    }
                  })
                } else {
                  Swal.fire('Cancelled', 'Your file is still intact', 'info')
                }
            })
          },
          selectRow(rowIndex, event) {
            const target = event.target;
            const parent = target.parentElement;

            if (target.classList.contains('delete-user') || parent.classList.contains('delete-user')) {
              const userId = target.dataset.id || parent.dataset.id;
              this.deleteConfirm(userId, rowIndex);
            }

          },
          getRoleName(roles) {
            let roleName = '';

            roles.forEach((role) => {
              if (role == 'ROLE_ADMIN') {
                roleName = 'Admin';
              } else if (role == 'ROLE_USER' && roleName != 'Admin') {
                roleName = 'User';
              } else if (role == 'ROLE_OBSERVATOR' && roleName != 'Admin' && roleName != 'User'){
                roleName = 'Observer';
              }
            })

            return roleName;
          }
        }
    }
  </script>
  