import Vue from 'vue'

export function createComponetAndGetDom(component, props) {
    const vm = new Vue({
        render: h => h(component, props)
    }).$mount()
    return vm.$el;
};
export function sayHi(){
    console.log("hello ")
}

