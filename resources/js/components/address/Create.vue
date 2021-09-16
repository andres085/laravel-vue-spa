<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Crear Dirección</h4></div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createAddress">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div>
                                    <gmap-map
                                    :center="{lat:10, lng:10}"
                                    :zoom = "7"
                                    style="width:100%; height:320px;"></gmap-map>
                                </div>
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
        name:"Create",
        data() {
            return {
                address:{
                    direccion: "",
                    latitud: "",
                    longitud: ""
                }
            }
        },
        methods: {
            async createAddress(){
                await this.axios.post('/api/address', this.address)
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
