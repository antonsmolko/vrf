import Base from '@/components/descriptors/base';

export default {
  name: 'rf-resource',
  extends: Base,
  render: function() {
    var props, ref, ref1;
    props = {
      $resource: this.$resource,
      $sources: this.$sources,
      $errors: this.$errors,
      $rootResource: this.$rootResource,
      $disabled: this.$formDisabled,
      $actionResults: this.$actionResults,
      $actionPendings: this.$actionPendings,
      // deprecated section
      resource: this.$resource,
      resources: this.$sources,
      rootResource: this.$rootResource,
      rootResources: this.$rootResources,
      disabled: this.$formDisabled,
      tScope: this.tScope,
      t: this.t,
      errors: this.$errors,
      actionResults: this.$actionResults
    };
    return (ref = this.$scopedSlots) != null ? typeof ref.default === "function" ? (ref1 = ref.default(props)) != null ? ref1[0] : void 0 : void 0 : void 0;
  }
};
