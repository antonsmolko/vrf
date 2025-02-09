import BaseInput from '@/components/descriptors/base-input';

import pick from '@/utils/pick';

import debounce from 'lodash.debounce';

export default {
  name: 'rf-autocomplete',
  extends: BaseInput,
  props: {
    type: String,
    entity: String,
    limit: [Number, String],
    disabled: [Boolean, String],
    text: String,
    autofocus: Boolean,
    active: {
      type: Boolean,
      default: true
    },
    stateless: Boolean,
    rfParams: Object
  },
  data: function() {
    return {
      query: '',
      loading: false,
      items: [],
      menu: false
    };
  },
  watch: {
    $value: function() {
      return this.providerInstance.onValueChanged();
    }
  },
  mounted: function() {
    return this.providerInstance.mounted();
  },
  methods: {
    reset: function() {
      this.query = '';
      return this.$value = null;
    },
    onSelect: function(item) {
      this.providerInstance.onSelect(item);
      return this.$emit('select', item);
    },
    onInput: function(val) {
      this.$emit('update:text', val);
      this.load();
      this.providerInstance.onInput();
      return this.$emit('input', val);
    },
    focus: function() {
      return this.$refs.autocomplete.focus();
    },
    onClick: function() {
      this.providerInstance.onInputClick();
      return this.$emit('click');
    },
    onClear: function() {
      return this.$emit('clear');
    },
    load: debounce(function() {
      if ((this.query != null) && this.query.length > 0) {
        return this.instantLoad();
      }
    }, 400)
  },
  asyncMethods: {
    instantLoad: function() {
      if (!this.entity) {
        throw `[vrf] Entity for autocomplete ${this.name} must be defined`;
      }
      if (this.active) {
        this.loading = true;
        return this.providerInstance.load(pick(this, ['query', 'limit', 'entity'])).then((items) => {
          this.items = items;
          this.loading = false;
          return this.menu = this.items.length > 0;
        });
      }
    }
  },
  computed: {
    providerInstance: function() {
      var provider, vue;
      vue = Object.getPrototypeOf(this.$root).constructor;
      provider = vue.prototype.VueResourceForm.autocompletes[this.type];
      if (!provider) {
        throw `[vrf] Autocomplete provider for ${this.type} not found`;
      }
      return new provider(this.entity, this.$resource, this);
    },
    itemsComponent: function() {
      return this.providerInstance.getItemsComponent();
    }
  }
};
