<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-2">
                <router-link :to='{name: "createAddresses"}' class="btn btn-success"> <i class="fas fa-plus-circle"></i> Nuevo</router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <th>ID</th>
                            <th>Dirección</th>
                            <th>Latitud</th>
                            <th>Longitud</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            <tr v-for="address in addresses" :key="address.id">
                                <td>{{address.id}}</td>
                                <td>{{address.direccion}}</td>
                                <td>{{address.lat}}</td>
                                <td>{{address.lng}}</td>
                                <td>
                                    <router-link  :to='{name:"editAddresses", params:{id:address.id}}' class="btn btn-info"><i class="far fa-edit"></i>Editar</router-link>
                                    <a type="button" class="btn btn-danger" @click="deleteAddress(address.id)"><i class="far fa-trash-alt">Borrar</i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name:"Addresses",
        data() {
            return {
                addresses:[],
                errors:[]
            }
        },
        created() {
            this.getAddresses()
        },
        methods: {
           async getAddresses() {
                await this.axios.get('/api/address')
                .then(response => {
                    this.addresses = response.data
                })
                .catch(error => {
                    this.errors = error;
                    console.log(error);
                });
            },
            deleteAddress(id){
                if(confirm('¿Confirma que desea borrar el elemento?')){
                    this.axios.delete(`/api/address/${id}`)
                    .then(response => {
                        this.getAddresses();
                    })
                    .catch(error => {
                        this.errors = error
                        console.log(error);
                    })
                }
            }
        },
    }
</script>
