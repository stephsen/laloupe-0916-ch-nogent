class contactController {

    constructor(contactService) {
        this.contactService = contactService;
        this.load();
        $(document).ready(function() {
            $('.collapsible').collapsible({
                accordion: false
            });
            $(document).ready(function() {
                $('select').material_select();
            });

        });
    }
    load() {
        this.contactService.getAll().then((res) => {
            this.contacts = res.data;
        });
    }

    create2() {
        this.contactService.create(this.contact).then(() => {

            this.contact = {};
            this.load();
        });
    }

    update(contact) {
        this.contactService.update(contact._id, contact).then(() => {
            this.load();
        });
    }

    delete(contact) {
        this.contactService.delete(contact._id).then(() => {
            this.load();
        });
    }

}
