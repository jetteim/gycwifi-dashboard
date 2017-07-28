class TutorialService {

  /* @ngInject */
  constructor($storage) {
    this.$storage = $storage;
  }

  switchSave(state) {
    this.$storage.set('tutorial-switch', state)
  }

  switchLoad() {
    return this.$storage.get('tutorial-switch')
  }

  isActive() {
    return this.switchLoad()
  }

}

export default TutorialService