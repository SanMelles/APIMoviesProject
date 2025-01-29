import confirmationModal from "./ConfirmationModal.js";
import movieForm from "./MovieForm.js";
import movieDetails from "./movie/MovieDetails.js";
export default {
    template: `
        <div id="movieInfoModal" class="modal" tabindex="-1">

            <div class="modal-dialog">

                <div class="modal-content">

                    <div class="modal-header">

                        <h1 class="modal-title">Movie Info</h1>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>

                    </div>

                    <div class="modal-body">

                        <movie-form 
                        v-if="isEditing" 
                        v-model:id="modifiedMovie.id" 
                        v-model:MovieName="modifiedMovie.MovieName" 
                        v-model:ReleaseEU="modifiedMovie.ReleaseYear" 
                        v-model:Genre="modifiedMovie.Genre" 
                        v-model:DurationHours="modifiedMovie.DurationHours"
                        v-model:DurationMinutes="modifiedMovie.DurationMinutes">
                        </movie-form>

                        <movie-details v-else :movieInModal="movieInModal">
                        </movie-details>

                    </div>

                    <div class="modal-footer">

                        <div class="container">

                            <div class="row">

                                <template v-if="isEditing">

                                    <div class="col me-auto">

                                        <button type="button" 
                                        class="btn btn-danger" 
                                        data-bs-target="#confirmationModal" 
                                        data-bs-toggle="modal">
                                        Delete
                                        </button>

                                    </div>

                                    <div class="col-auto">

                                        <button type="button" 
                                        class="btn btn-success mx-2"
                                        @click="saveModifiedGame"
                                        >Save
                                        </button>

                                        <button type="button" 
                                        class="btn btn-success mx-2"
                                        @click="cancelEditing"
                                        >Cancel
                                        </button>

                                    </div>

                                </template>

                                <template v-else>

                                    <div class="col me-auto"></div>

                                    <div class="col-auto">

                                        <button type="button" 
                                        class="btn btn-warning mx-2"
                                        @click="startEditing"
                                        >Save
                                        </button>

                                        <button type="button" 
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        >Close ❌
                                        </button>

                                    </div>

                                </template>

                            </div>

                        </div>

                    </div>    

                </div>

            </div>

        </div>
        <confirmation-modal :target="'#movieInfoModal'" @confirmed="deleteMovie"></confirmation-modal>
    `,
    components: {
        confirmationModal,
        movieForm,
        movieDetails
    },
    emits: ["movieUpdated"],
    props: {
        movieInModal: {}
    },
    data () {
        return {
            isEditing: false,
            modifiedMovie: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedMovie = { ...this.movieInModal}
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifieMovie() {
            console.log("currently saving: ", this.modifiedMovie)
            const rawResponse = await fetch(this.API_URL + "/Movie/" + this.modifiedMovie.MovieID, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'   
                },
                body: JSON.stringify(this.modifiedMovie)
            });
            console.log(rawResponse);
            this.$emit("movieUpdated", this.modifiedMovie);
            this.isEditing = false
        },
        deleteMovie() {
            console.log("DELETE confirmed");
        }
    }
}