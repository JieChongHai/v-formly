<template>
  <v-wrapper :id="id" :meta="meta">
    <!-- TODO: 绑定到ui的时候过滤掉所有非AntDv的字段，所有的内置组件都要顾虑 -->
    <a-input
      v-bind="ui"
      :defaultValue="meta.defaultValue"
      :disabled="meta.readOnly"
      :maxLength="meta.maxLength"
      v-model="value"
      @change="change"
    >
      <!-- prefix & suffix -->
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffix" v-slot:suffix>
        <slot :name="ui.slotNameOfSuffix"></slot>
      </template>

      <!-- addonBefore & addonAfter -->
      <template v-if="ui.slotNameOfAddonBefore" v-slot:addonBefore>
        <slot :name="ui.slotNameOfAddonBefore"></slot>
      </template>
      <template v-if="ui.slotNameOfAddonAfter" v-slot:addonAfter>
        <slot :name="ui.slotNameOfAddonAfter"></slot>
      </template>
    </a-input>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-string",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || undefined;
      },
    },
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
