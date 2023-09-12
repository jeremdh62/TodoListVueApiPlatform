<template>
    <div v-if="!dataTableUpdate">
        <div :id="id" class="d-none">
            <slot></slot>
        </div>

        <Table :id="id+'-datatable'" class="table" :class="class">
        </Table>
    </div>
    <div class="text-center" v-else>
        <Spinner />
    </div>
</template>

<script>
import {DataTable} from "simple-datatables";
import Table from '@/components/template/utilities/table/Table.vue';
import Spinner from '@/components/template/uielements/spinner/Spinner.vue';

export default {
    name: 'DataTable',
    props: {
        id: {
            type: String
        },
        class: {
            type: String,
            default: ''
        }
    },
    components: {
        Table,
        Spinner
    },
    data() {
        return {
            dataTables: null,
            dataTableUpdate: false
        }
    },
    methods: {
        jsDataTable () {
            let tbody = document.getElementById(this.id).getElementsByTagName('tbody')[0];
            let thead = document.getElementById(this.id).getElementsByTagName('thead')[0];

            let elem = document.getElementById(this.id+'-datatable');

            elem.innerHTML = '';

            if (thead) {
                elem.appendChild(thead.cloneNode(true));
            }

            if (tbody) {
                elem.appendChild(tbody.cloneNode(true));
            }

            if (!elem.querySelector('.no-data-found')) {
                this.dataTables = new DataTable(elem, {
                    labels: {
                        perPage: 'Per Page',
                        placeholder: 'Search' + ' ...',
                        noRows: 'No data',
                        searchTitle: 'Search in' + ' {columns} ' + ' columns',
                        noResults: 'No data',
                        info: 'Showing {start} simpleDatatable.to {end} of {rows} entries',
                    },
                    perPage: 10,
                });

                this.dataTables.on('datatable.selectrow', (rowIndex, event) => {
                    this.$emit('selectrow', rowIndex, event);
                })

                this.dataTables;
            }
        },
        async jsDataTableDeleteRow(rowIndex) {
            this.dataTables.data.data.splice(rowIndex, 1);

            if (this.dataTables.data.data.length == 0) {
               
                this.dataTables = null;
                this.dataTableUpdate = true;
                await this.timeout(100);

                this.dataTableUpdate = false;
                await this.timeout(100);

                this.jsDataTable();
                  
            } else {
                this.dataTables.update();
            }
        },
        async timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    mounted(){
       this.jsDataTable();
    },
    watch: {
        '$i18n.locale': {
            handler: function (val, oldVal) {
                setTimeout(() => {
                    if (this.dataTables) {
                        this.dataTables.destroy();
                    }
                    this.jsDataTable();                   
                }, 100);
            },
            deep: true
        }
    },
    emits: ['selectrow']
}
</script>
