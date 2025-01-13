export default {
    template: 
    `
    <div class="modal fade" id="confirmationModal" aria-hidden="true" aria-labelledby="confirmationModalLabel" tabindex="-1">

        <div class="modal-dialog modal-dialog-centered">
        
            <div class="modal-content">

                <div class="modal-header">
                
                    <h1 class="modal-title fs-5" id="confirmationModalLabel">
                    Are you sure you want to do this heinous act?
                    </h1>

                    <button type="button" class="btn-close" :data-bs-target="target" aria-label="Close">
                    </button>

                </div>

                <div class="modal-body">
                
                    Please confirm that this is your desired action.

                </div>

                <div class="modal-footer">

                    <button class="btn btn-success" @click="$emit{'confirmed'}" data-bs-dismiss="modal">
                    YES
                    </button>

                    <button type="button" class="btn btn-secondary" :data-bs-target="target" data-bs-toggle="modal">
                    NO
                    </button>

                </div>

            </div>

        </div>

    </div>
    `,
    props: {target: ""},
    emits: ['confirmed']
}