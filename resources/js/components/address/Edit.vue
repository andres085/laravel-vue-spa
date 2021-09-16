<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Editar Dirección</h4></div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="editAddress">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="address">Dirección</label>
                                    <input type="text" name="direccion" id="direccion" class="form-control" v-model="address.direccion">
                                </div><br>
                                 <div class="form-group">
                                    <label for="latitud">Latitud</label>
                                    <input type="text" name="latitud" id="latitud" class="form-control" v-model="address.lat">
                                </div><br>
                                 <div class="form-group">
                                    <label for="longitud">Longitud</label>
                                    <input type="text" name="longitud" id="longitud" class="form-control" v-model="address.lng">
                                </div><br>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name:"Editar",
        data() {
            return {
                address:{
                    direccion: "",
                    lat: "",
                    lng: ""
                }
            }
        },
        created() {
            this.getAddresses()
        },
        methods: {
            async getAddresses(){
                await this.axios.get(`/api/address/${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data)
                    const {direccion, lat, lng} = response.data
                    this.address.direccion = direccion,
                    this.address.lat = lat,
                    this.address.lng = lng
                })
                .catch(error => {
                    console.log(error)
                })
            },
            async editAddress(){
                await this.axios.put(`/api/address/${this.$route.params.id}`, this.address)
                .then(response => {
                    this.$router.push({name:"showAddresses"})
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
    }
</script>
