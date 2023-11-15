// import style from '../style/utils.module.less'
export default {
    /**
     * 
     * @param msg 
     * @param state 
     * @param duration 
     * @param container 
     */
    showMsg(msg, state, duration, container: Element){

        const wrapper = document.createElement('div');
        wrapper.classList.add("toast-wrapper");
        const template = `
            <Icon name="icon-${state}"/>
            <span>${msg}</span>
        `
        wrapper.innerHTML = template;
        container.appendChild(wrapper);
    }
}