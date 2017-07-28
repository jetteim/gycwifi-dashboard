export default class UploadService {
    /* @ngInject */
    constructor($api) {
        this.$api = $api;
    }

    uploadImg(objImg) {
        return this.$api.create('upload', objImg)
        .then((data) => {
            return data
        });
    }

}