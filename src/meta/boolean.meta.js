import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
class BooleanMeta {
    constructor(state, id) {
        this.id = id;
        this.state = state;
        console.log('Boolean meta');
        state.context.addContext(id, this);

        this._value = undefined;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        if (this._value === val) return;

        this._value = val || false;
        Vue.bus.emit(FORM_VALUE_CHANGE, {
            id: this.id,
            value: val,
        });

        this.state.updateObjProp(this.state.formData, this.id, val);
        this.state.validate.runValidation(this);
    }
}

export { BooleanMeta };