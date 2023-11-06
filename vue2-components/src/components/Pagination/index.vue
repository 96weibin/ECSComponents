<template>
    <div class="pagination-container">
        <div class="page-item" @click="preOne" :class="{disable: currentCount <= 1}">&lt;</div>
        <div class="page-item " 
            :class="{active: item.val == currentCount}" 
            v-for="(item, i) of currentArray" 
            @click="handelClick(item.val)"
            >{{item.val}}</div>
        <div class="page-item" @click="subOne" :class="{disable: currentCount >= totalCount}">&gt;</div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                pageStart: 1,
                pageEnd: this.totalCount,
                currentPage: this.currentCount
            }
        },
        methods: {
            handelClick(item: string | number){
                this.$emit('currentPageChanged', item)
            },
            preOne(){
                if(this.currentCount <= 1 )
                    return;
                this.currentPage -= 1;
                this.$emit('currentPageChanged', this.currentPage)
            },
            subOne(){
                if(this.pageEnd >= this.totalCount)
                    return;
                this.currentPage += 1;    
                this.$emit('currentPageChanged', this.currentPage)
            }
        },
        computed: {
            oneSideNum() {
                return (this.pageSize - 4) / 2
            },
            currentArray(){
                let arr = [];
                this.pageStart = this.currentCount - this.oneSideNum;
                if(this.pageStart < 1)
                    this.pageStart = 1;
                this.pageEnd = this.currentCount + this.oneSideNum;
                if(this.pageEnd > this.totalCount)
                    this.pageEnd = this.totalCount;

                for(var i = this.pageStart; i < this.pageEnd; i++) {
                    arr.push({val: i, type: "num"})
                }
                
                if(this.pageStart > this.oneSideNum) {
                    arr.unshift({val: '...', type: 'dot'})
                    arr.unshift({val: 1, type: 'num'})
                }

                if(this.totalCount - this.pageStart > this.oneSideNum) {
                    arr.push({val:"...", type: 'dot'})
                    arr.push({val: this.totalCount})
                }
                return arr;
            }
        },
        props: {
            totalCount: {
                type: Number,
                default: 0,
                require: true
            },
            currentCount: {
                type: Number,
                default: 1,
            },
            pageSize: {
                type: Number,
                default: 10
            },
            showSizeChange: {
                type: Boolean,
                default: false
            },
            showQuickJumper: {
                type: Boolean,
                default: false
            }

        },
    }
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.pagination-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .page-item{
        width: @font-size-base;
        height: @font-size-base;
        line-height: @font-size-base;
        border-radius: 5px;
        box-sizing: content-box;
        margin: 0 10px;
        padding: 5px;
        border: 1px solid transparent;
        user-select: none;
        &:hover {
            border-color: @link-hover-color;
            background-color: @link-area-hover;
            cursor: pointer;
        }
        &.active {
            border-color: @link-area-hover;
        }
        &.disable{
            cursor: not-allowed;
        }
    }
}
</style>