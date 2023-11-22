<template>
    <div class="carouse-container">
        <Icon name="icon-show_less" v-if="currentIndex > 1" :size="50" @click="handelClick(currentIndex - 1)" class="preOne"></Icon>
        <Icon name="icon-show_more" v-if="currentIndex < bannersData.length - 1" @click="handelClick(currentIndex + 1)" :size="50" class="nextOne"></Icon>
        <div class="carouse-list" ref="carouseListRef">
            <div class="carouse-item" ref="carouseItemRef" v-for="(banners, i) of bannersData" :key="i">
                <div class="carouse-image" :style="{backgroundImage: `url(${banners.url})`}"></div>
                <!-- <img class="carouse-image" :src="banners.url" alt="banners.title"> -->
                <h1 class="carouse-title">{{ banners.title }}</h1>
                <h4 class="carouse-desc">{{ banners.desc }}</h4>
            </div>
        </div>
        

        <ul class="dots">
            <li class="dot" v-for="(banners, i) of bannersData" :key="i" @click="handelClick(i + 1 )"></li>
        </ul>
    </div>
</template>

<script lang="ts">
export interface Ibanners {
    url: string,
    title: string,
    desc: string
}
import Icon from '../../components/Common/Icon/index.vue'
    export default {
        data() {
            return {
                currentIndex: 1,

            }
        },
        components: {
            Icon,
        },
        
        props: {
            bannersData:{
                type: Array
                
            }
        },
        methods: {
            handelClick(newIndex) {

                console.log("newIndex")
                if(newIndex == this.currentIndex) return;
                this.currentIndex = newIndex;
                let itemHeight = this.$refs.carouseItemRef[0].clientHeight;
                this.$refs.carouseListRef.style.marginTop = -(this.currentIndex - 1) * itemHeight + "px"

                // this.$emit("xxxx", e)
            },
            sayHi(e){
                console.log('hhhhh' + e)
            }
        },
    }
</script>

<style lang="less" scoped>
@import url(../../style/mixin.less);

@dot-size: 10px;
.carouse-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .icon-container{
        .slef-center();
        z-index: 999;
        cursor: pointer;
    }
    .preOne{
        top: 0px;
        transform: translateY(40px) translateX(-50%);
        animation: jumpUp 2s ease-in-out infinite;
    }
    .nextOne{
        top:auto;
        bottom: 0px;
        transform: translateY(-40px)  translateX(-50%);
        animation: jumpDown 2s ease-in-out infinite;

    }
    .carouse-list{
        transition: 1s;
        width: 100%;
        height: 100%;
        .carouse-item{
            width: 100%;
            height: 100%;
            position: relative;

            .carouse-image{
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }
            .carouse-title{
                position: absolute;
                top: calc(50% - 40px);   
                left: 40px;      
                .text-shadow();   
            }
            .carouse-desc{
                position: absolute;
                max-width: 400px;
                text-indent: 20px;
                top: calc(50% + 20px);
                left: 40px; 
                .text-shadow();   
            }
        }

    }
    
    @keyframes jumpUp {
        0% {transform:  translateY(40px)  translateX(-50%);}
        50% {transform:  translateY(20px)  translateX(-50%);}
        100%{transform:  translateY(40px)  translateX(-50%);}
    }

    @keyframes jumpDown {
        0% {transform:  translateY(-40px)  translateX(-50%);}
        50% {transform:  translateY(-20px)  translateX(-50%);}
        100%{transform:  translateY(-40px)  translateX(-50%);}
    }
    .dots{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        cursor: pointer;

        .dot{
            width: @dot-size;
            height: @dot-size;
            background: rgba(0, 0, 0, .2);
            border: 1px solid white;
            margin: 5px;
            border-radius: 50%;
        }
    }
}
</style>