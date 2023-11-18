import {createComponetAndGetDom} from '@/utils/index'
import Icon from '@/components/Common/Icon/index.vue'
import styles from './toast-utils.module.less'

export default {
    /**
     * 
     * @param msg 
     * @param state 
     * @param duration 
     * @param container 
     */
    showMsg(msg, state: MessageState = MessageState.Success, duration = 2000, container: HTMLElement){  

        const wrapper = document.createElement('div');
        const IconDom = createComponetAndGetDom(Icon, {props: {name: `icon-${state}`}});
        wrapper.innerHTML = `<div class="${styles.icon}">${IconDom.outerHTML}</div><span> ${msg}</span>`
        wrapper.classList.add(styles[`toast-wrapper`],styles[`toast-wrapper-${state}`])
        if(getComputedStyle(container).position == 'static') container.style.position = 'relative';
        container.appendChild(wrapper);
        //opcity 0 -> 1
        // 要实现这个动画 两种方法， 
        //1 出发强行渲染。调用。clientHeight 等属性
        //2 利用任务队列， 代码块执行完毕 dom渲染了， 微任务队列 进行两次。动画
        setTimeout(() => {
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'translate(-50%, -50%)'
        }, 0);
        setTimeout(() => {
            wrapper.style.opacity = "0";
            wrapper.style.transform = 'translate(-50%, -50%) translateY(-30px)';
            wrapper.addEventListener('transitionend', function(){this.remove()} )   //删除 创建的dom
        }, duration);
    }
}

export enum MessageState{
    Success = 'success',
    Error = 'danger',
    Warning = 'waring',
    Inof = 'info'
}